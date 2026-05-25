/**
 * generate-article-ctas.mjs
 *
 * For each article, asks Claude to write a custom CTA headline + body copy
 * that connects the article's specific topic to the Fix Your Period quiz.
 * Articles that are too generic or cultural get null → the page falls back
 * to a universal default CTA.
 *
 * Output: src/content/articles/ctas.ts
 *
 * Run: node --env-file=.env.local scripts/generate-article-ctas.mjs
 * Re-run one: node --env-file=.env.local scripts/generate-article-ctas.mjs --slug=endometriosis
 * Force re-run all: node --env-file=.env.local scripts/generate-article-ctas.mjs --force
 */

import Anthropic from "@anthropic-ai/sdk"
import { writeFileSync, existsSync, readFileSync } from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")
const OUTPUT_FILE = path.join(ROOT, "src/content/articles/ctas.ts")
const PROGRESS_FILE = path.join(__dirname, ".ctas-progress.json")

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

// ─── All 74 articles (slug + context for Claude) ─────────────────────────────
const articles = [
  // Cycle Basics & Education
  { slug: "periods-in-perimenopause", title: "Periods in Perimenopause", description: "How and why periods change during the perimenopause transition — flow, timing, and the hormonal shifts behind every symptom.", category: "Perimenopause", section: "Conditions & Symptoms" },
  { slug: "periods-101-instagram-series", title: "Periods 101", description: "A foundational overview of menstruation covering what your period is, what's normal, and what warning signs to watch for.", category: "Cycle Basics", section: "Cycle Basics & Education" },
  { slug: "what-is-normal-menstrual-cycle-period", title: "What Is a Normal Menstrual Cycle?", description: "Learn what a truly healthy menstrual cycle looks like — cycle length, flow, timing, and the signs that something may be off.", category: "Cycle Basics", section: "Cycle Basics & Education" },
  { slug: "how-long-should-your-period-be", title: "How Long Should Your Period Be?", description: "Understand what a normal period duration looks like and when a period that's too short or too long signals a hormonal issue.", category: "Cycle Basics", section: "Cycle Basics & Education" },
  { slug: "four-phases-of-your-menstrual-cycle", title: "The Four Phases of Your Menstrual Cycle", description: "A deep dive into the menstrual, follicular, ovulatory, and luteal phases — what happens hormonally in each and how to work with them.", category: "Cycle Basics", section: "Cycle Basics & Education" },
  { slug: "how-ovulation-works-and-why-its-so-important", title: "How Ovulation Works and Why It's So Important", description: "Ovulation is much more than a fertility event — discover the hormonal cascade behind it and why it matters for your overall health.", category: "Cycle Basics", section: "Cycle Basics & Education" },
  { slug: "the-menstrual-life-cycle", title: "The Menstrual Life Cycle: Puberty to Menopause", description: "Explore how your menstrual cycle changes across every stage of life — from the first period through perimenopause and beyond.", category: "Cycle Basics", section: "Cycle Basics & Education" },
  { slug: "10-period-facts", title: "10 Period Facts Every Woman Needs to Know", description: "Ten essential period facts that most women were never taught — covering clots, color, pain, and what your period reveals about your hormones.", category: "Cycle Basics", section: "Cycle Basics & Education" },
  { slug: "period-shame", title: "Period Shame: How Cultural Stigma Hurts Your Health", description: "How the taboo around menstruation keeps women from seeking help — and why reclaiming your period is an act of health advocacy.", category: "Menstrual Health", section: "Cycle Basics & Education" },

  // Conditions & Symptoms
  { slug: "endometriosis", title: "Endometriosis: Root Causes and Natural Support", description: "An in-depth look at endometriosis — its root causes, how it's diagnosed, and evidence-informed natural strategies to reduce pain and inflammation.", category: "Condition", section: "Conditions & Symptoms" },
  { slug: "adenomyosis", title: "Adenomyosis: The Overlooked Cause of Heavy Periods", description: "Adenomyosis is chronically underdiagnosed — learn what it is, why it causes heavy, painful periods, and how to get proper support.", category: "Condition", section: "Conditions & Symptoms" },
  { slug: "heavy-periods", title: "Heavy Periods: Root Causes and Natural Solutions", description: "Heavy bleeding is common but never normal — discover the hormonal and nutritional root causes and effective natural approaches to bring balance back.", category: "Condition", section: "Conditions & Symptoms" },
  { slug: "cause-of-painful-periods", title: "Causes of Painful Periods and Natural Relief", description: "Period pain beyond mild cramping signals an underlying issue — explore the root causes of dysmenorrhea and natural ways to find lasting relief.", category: "Period Pain", section: "Conditions & Symptoms" },
  { slug: "menstrual-migraines", title: "Menstrual Migraines: The Hormone Connection", description: "Menstrual migraines are triggered by estrogen fluctuations — learn why they happen and what you can do to prevent them naturally.", category: "Symptoms", section: "Conditions & Symptoms" },
  { slug: "pcos-high-prolactin-levels-primary-ovarian-insufficiency-common", title: "PCOS, High Prolactin & Ovarian Insufficiency", description: "Three commonly missed hormonal conditions explained — what they share, how they differ, and the key steps to getting an accurate diagnosis.", category: "Condition", section: "Conditions & Symptoms" },
  { slug: "how-to-prevent-ovarian-cysts", title: "How to Prevent Ovarian Cysts", description: "Functional cysts are a sign of hormonal imbalance — find out what drives them and the lifestyle and nutritional steps that support prevention.", category: "Condition", section: "Conditions & Symptoms" },
  { slug: "histamine-intolerance-and-your-period", title: "Histamine Intolerance and Your Period", description: "Histamine and estrogen have a bidirectional relationship that can worsen PMS, allergies, and cycle pain — here's how to break the cycle.", category: "Condition", section: "Conditions & Symptoms" },
  { slug: "post-menstrual-syndrome-pms-after-period", title: "Post-Menstrual Syndrome: PMS After Your Period", description: "If you feel anxious or depleted in the days after your period ends, post-menstrual syndrome may be why — and estrogen is often the culprit.", category: "Symptoms", section: "Conditions & Symptoms" },
  { slug: "how-to-take-your-life-back-from-pmdd", title: "How to Take Your Life Back from PMDD", description: "PMDD is a severe luteal-phase mood disorder that disrupts relationships and work — explore root causes, nutritional support, and evidence-based strategies.", category: "Condition", section: "Conditions & Symptoms" },
  { slug: "mthfr-what-is-it-and-why-you-should-know-for-the-sake-of-your-fertility", title: "MTHFR: What It Is and Why It Matters for Fertility", description: "The MTHFR gene variant affects methylation, hormone processing, and fertility — learn what it means and how to support your body if you have it.", category: "Condition", section: "Conditions & Symptoms" },
  { slug: "how-hyperthyroidism-affects-your-period", title: "How Hyperthyroidism Affects Your Period", description: "An overactive thyroid can cause irregular, light, or absent periods — understand the connection and what to ask your doctor about thyroid testing.", category: "Thyroid", section: "Conditions & Symptoms" },
  { slug: "how-your-thyroid-can-cause-period-and-fertility-problems", title: "How Your Thyroid Affects Your Period & Fertility", description: "Thyroid dysfunction is one of the most overlooked drivers of period problems and infertility — here's what to test and how to optimize thyroid health.", category: "Thyroid", section: "Conditions & Symptoms" },
  { slug: "help-why-am-i-spotting", title: "Help, Why Am I Spotting?", description: "Mid-cycle or pre-period spotting is your body sending a signal — explore the most common hormonal causes and what each type of spotting means.", category: "Symptoms", section: "Conditions & Symptoms" },
  { slug: "period-start-stop-start-again", title: "Why Your Period Starts, Stops, and Starts Again", description: "A stop-start period pattern is frustrating and telling — learn the hormonal reasons behind it and what you can do to restore a smooth, consistent flow.", category: "Symptoms", section: "Conditions & Symptoms" },

  // Hormones & Imbalances
  { slug: "low-progesterone-why-it-happens-and-what-you-can-do-about-it", title: "Low Progesterone: Why It Happens and What to Do", description: "Low progesterone is behind many PMS, luteal phase, and fertility issues — find out the root causes and the most effective ways to support healthy levels.", category: "Hormones", section: "Hormones & Imbalances" },
  { slug: "lengthen-your-luteal-phase", title: "How to Lengthen Your Luteal Phase", description: "A short luteal phase impairs progesterone production and can affect fertility — here are evidence-informed strategies to extend and strengthen this phase.", category: "Hormones", section: "Hormones & Imbalances" },
  { slug: "when-to-test-progesterone-levels", title: "When to Test Your Progesterone Levels", description: "Testing progesterone at the wrong time in your cycle gives meaningless results — learn exactly when and how to test for an accurate picture of your levels.", category: "Hormones", section: "Hormones & Imbalances" },
  { slug: "progesterone-vs-progestin", title: "Progesterone vs. Progestin: Why the Difference Matters", description: "Progesterone and progestin are not interchangeable — understand how they differ at the molecular level and why that distinction has major health implications.", category: "Hormones", section: "Hormones & Imbalances" },
  { slug: "the-real-reason-your-breasts-are-sore-before-your-period", title: "The Real Reason Your Breasts Are Sore Before Your Period", description: "Breast tenderness before your period is often a sign of estrogen dominance or low progesterone — here's what's driving it and how to get relief.", category: "Hormones", section: "Hormones & Imbalances" },
  { slug: "dim-sgs-i3c", title: "DIM, SGS & I3C: Estrogen Metabolism Supplements", description: "DIM, sulforaphane, and I3C support healthy estrogen metabolism via the liver — learn which form works best and how to use them safely.", category: "Hormones", section: "Hormones & Imbalances" },
  { slug: "hormones-and-weight", title: "Hormones and Weight: The Bidirectional Connection", description: "Hormonal imbalances and excess body fat reinforce each other — understand the key hormonal drivers of weight gain and how to interrupt the cycle.", category: "Hormones", section: "Hormones & Imbalances" },
  { slug: "how-stress-affects-your-menstrual-cycle", title: "How Stress Affects Your Menstrual Cycle", description: "Chronic stress directly disrupts the hormonal axis that governs your cycle — learn the mechanisms and practical steps to protect your period from stress.", category: "Stress & Hormones", section: "Hormones & Imbalances" },
  { slug: "the-cortisol-connection", title: "The Cortisol Connection", description: "Cortisol is your primary stress hormone, and chronically high levels wreak havoc on estrogen, progesterone, and thyroid function — here's how to reset it.", category: "Stress & Hormones", section: "Hormones & Imbalances" },
  { slug: "why-modern-women-need-to-rethink-stress", title: "Why Modern Women Need to Rethink Stress", description: "Modern life creates a unique hormonal burden for women — discover why our approach to stress management must go deeper than breathing exercises.", category: "Stress & Hormones", section: "Hormones & Imbalances" },
  { slug: "overlooked-sources-of-stress", title: "10 Overlooked Sources of Stress Disrupting Your Hormones", description: "Many stressors that harm your hormones fly under the radar — from blood sugar swings to digital overload, here are ten often-missed culprits.", category: "Stress & Hormones", section: "Hormones & Imbalances" },
  { slug: "how-the-menstrual-cycle-affects-blood-sugar-and-insulin-regulation-in-the-body", title: "Blood Sugar, Insulin & Your Menstrual Cycle", description: "Blood sugar dysregulation and hormonal imbalance amplify each other — understand how insulin resistance shows up in your cycle and how to stabilize it.", category: "Blood Sugar", section: "Hormones & Imbalances" },
  { slug: "5-things-that-can-stop-ovulation-impair-fertility", title: "5 Things That Stop Ovulation and Impair Fertility", description: "Ovulation can be silently suppressed by five common lifestyle and hormonal factors — identify what may be blocking yours and what to do about it.", category: "Fertility", section: "Hormones & Imbalances" },
  { slug: "is-your-period-playing", title: "Is Your Period Playing Tricks on You?", description: "Irregular, confusing cycle symptoms can make it hard to know what's really going on hormonally — here's how to decode the signals your body is sending.", category: "Cycle", section: "Hormones & Imbalances" },

  // Birth Control
  { slug: "5-things-must-know-hormonal-birth-control", title: "5 Things You Must Know About Hormonal Birth Control", description: "Before starting or continuing hormonal contraception, these five facts about nutrient depletion, mood, and long-term effects can change your decision.", category: "Birth Control", section: "Birth Control" },
  { slug: "birthcontrolsideeffects", title: "Birth Control Side Effects: The Complete Guide", description: "A comprehensive breakdown of the physical and emotional side effects associated with hormonal birth control methods — and what you can do to mitigate them.", category: "Birth Control", section: "Birth Control" },
  { slug: "come-birth-control-pill-right-way", title: "How to Come Off the Birth Control Pill Correctly", description: "Coming off the pill without a plan can lead to months of hormonal chaos — follow this step-by-step approach to support your body through the transition.", category: "Birth Control", section: "Birth Control" },
  { slug: "birth-control-pill-weight-gain", title: "Does the Birth Control Pill Cause Weight Gain?", description: "The relationship between the pill and weight gain is more nuanced than a yes or no — explore the hormonal and metabolic mechanisms that may be at play.", category: "Birth Control", section: "Birth Control" },
  { slug: "the-pill-your-sex-drive-how-to-start-reclaiming-your-va-va-voom", title: "The Pill and Your Sex Drive", description: "Hormonal contraception suppresses testosterone and raises SHBG, which can tank your libido — learn why this happens and how to reclaim your desire.", category: "Birth Control", section: "Birth Control" },
  { slug: "how-to-start-using-natural-birth-control", title: "How to Start Using Natural Birth Control (FAM)", description: "The Fertility Awareness Method is highly effective when practiced correctly — get a clear introduction to charting your cycle as a form of natural contraception.", category: "Birth Control", section: "Birth Control" },
  { slug: "how-does-the-mirena-iud-work-is-it-right-for-me", title: "How the Mirena IUD Works — Is It Right for You?", description: "The Mirena IUD releases localized progestin and is often recommended for heavy periods — here's an honest look at how it works, who it helps, and potential downsides.", category: "Birth Control", section: "Birth Control" },
  { slug: "copperiud", title: "The Copper IUD: What You Need to Know", description: "The copper IUD is hormone-free contraception, but it's not without side effects — learn about heavier periods, copper toxicity risk, and whether it's right for you.", category: "Birth Control", section: "Birth Control" },

  // Nutrition, Supplements & Gut Health
  { slug: "vitamin-d-the-period-vitamin", title: "Vitamin D: The Period Vitamin", description: "Vitamin D deficiency is widespread and directly linked to painful periods, PCOS, and endometriosis — learn how to optimize your levels for hormonal health.", category: "Supplements", section: "Nutrition, Supplements & Gut Health" },
  { slug: "how-to-test-your-vitamin-d-levels", title: "How to Test Your Vitamin D Levels", description: "Testing vitamin D correctly requires knowing which marker to check and how to interpret your results — here's a practical guide to understanding your levels.", category: "Testing", section: "Nutrition, Supplements & Gut Health" },
  { slug: "the-many-benefits-of-magnesium-for-your-health-cycle", title: "The Many Benefits of Magnesium for Your Cycle", description: "Magnesium is one of the most impactful minerals for hormonal health, reducing cramps, PMS, sleep issues, and anxiety — learn how to use it effectively.", category: "Supplements", section: "Nutrition, Supplements & Gut Health" },
  { slug: "vitamin-c-for-your-cycle", title: "Vitamin C for Your Menstrual Cycle", description: "Vitamin C supports progesterone production, adrenal health, and iron absorption — making it a powerful but often overlooked tool for cycle balance.", category: "Supplements", section: "Nutrition, Supplements & Gut Health" },
  { slug: "vitex-hormones-fertility", title: "Vitex for Hormones and Fertility", description: "Vitex (chaste tree berry) supports the pituitary-ovarian axis to raise progesterone and improve luteal phase health — learn the evidence and how to use it safely.", category: "Supplements", section: "Nutrition, Supplements & Gut Health" },
  { slug: "cholesterol-great-hormones", title: "Why Cholesterol Is Great for Your Hormones", description: "All steroid hormones — estrogen, progesterone, testosterone, cortisol — are made from cholesterol, so eating enough dietary fat is essential for hormonal health.", category: "Nutrition", section: "Nutrition, Supplements & Gut Health" },
  { slug: "does-being-vegan-affect-your-period", title: "Does Being Vegan Affect Your Period?", description: "A vegan diet can be rich and supportive, but common nutrient gaps like B12, iron, and zinc can disrupt your cycle — here's how to thrive hormonally as a vegan.", category: "Nutrition", section: "Nutrition, Supplements & Gut Health" },
  { slug: "is-gluten-bad", title: "Is Gluten Bad for Your Hormones?", description: "For women with autoimmune conditions, PCOS, or endometriosis, gluten can drive inflammation that worsens hormonal symptoms — here's what the research says.", category: "Nutrition", section: "Nutrition, Supplements & Gut Health" },
  { slug: "the-effect-of-coffee-on-your-hormones-and-menstrual-cycle", title: "Coffee and Your Hormones", description: "Coffee affects cortisol, estrogen, and iron absorption — learn how much is too much and how timing your coffee intake can protect your hormonal balance.", category: "Nutrition", section: "Nutrition, Supplements & Gut Health" },
  { slug: "dry-january-alcohol-free-resources", title: "What Dry January Does to Your Hormones", description: "Cutting out alcohol even for a month has measurable hormonal benefits — find out what changes in your cycle, liver, and estrogen levels when you go alcohol-free.", category: "Lifestyle", section: "Nutrition, Supplements & Gut Health" },
  { slug: "howyourperiodaffectsdigestivetract", title: "How Your Period Affects Your Digestive Tract", description: "Bloating, diarrhea, and constipation around your period are driven by prostaglandins and hormonal shifts — understand the gut-hormone connection and how to ease symptoms.", category: "Gut Health", section: "Nutrition, Supplements & Gut Health" },
  { slug: "antibiotics-effect-period", title: "How Antibiotics Affect Your Period", description: "Antibiotics disrupt the gut microbiome, which in turn affects estrogen metabolism and can throw your cycle off — here's what to do before, during, and after a course.", category: "Gut Health", section: "Nutrition, Supplements & Gut Health" },
  { slug: "livercleansehormones", title: "Liver Cleanses and Your Hormones", description: "The liver is central to estrogen detoxification — learn what actually supports liver function for hormone balance versus trendy cleanses that don't deliver.", category: "Gut Health", section: "Nutrition, Supplements & Gut Health" },
  { slug: "vaginal-microbiome-testing", title: "Vaginal Microbiome Testing: What You Need to Know", description: "Your vaginal microbiome plays a key role in fertility and hormonal health — find out what testing reveals, how to interpret results, and what to do with them.", category: "Gut Health", section: "Nutrition, Supplements & Gut Health" },
  { slug: "chronic-utis-killing-sex-life", title: "Chronic UTIs and Your Sex Life", description: "Recurrent UTIs are linked to microbiome imbalance and low estrogen — learn the root causes and long-term strategies to break the cycle once and for all.", category: "Gut Health", section: "Nutrition, Supplements & Gut Health" },
  { slug: "seed-cycling", title: "Seed Cycling for Hormone Balance", description: "Seed cycling uses lignans and essential fatty acids from flax, pumpkin, sesame, and sunflower seeds to support estrogen and progesterone throughout your cycle.", category: "Protocols", section: "Nutrition, Supplements & Gut Health" },

  // Lifestyle, Tools & Health
  { slug: "my-favorite-tips-products-for-sleep-support", title: "Tips and Supplements for Better Sleep", description: "Poor sleep disrupts every hormone in your body — get Nicole's top evidence-backed sleep strategies and supplement recommendations for women with hormonal issues.", category: "Lifestyle", section: "Lifestyle, Tools & Health" },
  { slug: "emfs-effect-on-your-menstrual-cycle-and-fertility", title: "How EMFs Affect Your Cycle and Fertility", description: "Emerging research links electromagnetic field exposure to disrupted melatonin and reproductive hormones — learn practical steps to reduce your daily EMF load.", category: "Environmental Health", section: "Lifestyle, Tools & Health" },
  { slug: "connection-dental-health-hormones", title: "The Connection Between Dental Health and Hormones", description: "Periodontal disease and oral dysbiosis create systemic inflammation that disrupts hormone balance and is linked to preterm birth and PCOS — here's what you need to know.", category: "Hormonal Health", section: "Lifestyle, Tools & Health" },
  { slug: "period-underwear", title: "Period Underwear: What to Look For", description: "Not all period underwear is created equal — learn what materials to seek out, which chemicals to avoid, and what to consider when choosing a safer option.", category: "Cycle Products", section: "Lifestyle, Tools & Health" },
  { slug: "use-drugstore-feminine-wipes", title: "Should You Use Drugstore Feminine Wipes?", description: "Most drugstore feminine wipes contain fragrances and chemicals that disrupt your vaginal pH and microbiome — here's what to use instead.", category: "Women's Health", section: "Lifestyle, Tools & Health" },
  { slug: "steam-vagina", title: "Should You Steam Your Vagina?", description: "Vaginal steaming is trending, but does the evidence support the claims? Get an honest, science-informed look at the potential benefits and real risks.", category: "Women's Health", section: "Lifestyle, Tools & Health" },
  { slug: "mayan-abdominal-massage", title: "Mayan Abdominal Massage for Hormonal Health", description: "Rooted in traditional Mayan medicine, abdominal massage is used to improve pelvic circulation, support uterine position, and ease period pain and fertility challenges.", category: "Protocols", section: "Lifestyle, Tools & Health" },
  { slug: "castor-oil", title: "Castor Oil for Hormonal Health", description: "Castor oil packs are a time-honored home therapy believed to support liver detoxification, reduce pelvic inflammation, and ease conditions like endometriosis and fibroids.", category: "Protocols", section: "Lifestyle, Tools & Health" },
  { slug: "period-cycle-tracking-apps", title: "The Best Period and Cycle Tracking Apps", description: "A thorough review of the most popular period tracking apps — what data they collect, how accurate their predictions are, and which are best for fertility awareness.", category: "Cycle Tracking", section: "Lifestyle, Tools & Health" },
  { slug: "my-favorite-fertility-tracking-devices", title: "Fertility Tracking Devices: A Guide", description: "From basal body thermometers to hormone monitors, this guide covers the best fertility tracking devices, how each works, and who they are best suited for.", category: "Cycle Tracking", section: "Lifestyle, Tools & Health" },
  { slug: "7-surprising-reasons-women-lose-their-hair", title: "7 Surprising Reasons Women Lose Their Hair", description: "Hair loss in women is almost always hormonal or nutritional — discover seven common but overlooked root causes and the testing that helps you find answers.", category: "Hormonal Health", section: "Lifestyle, Tools & Health" },
  { slug: "period-late", title: "Why Is My Period Late? 9 Reasons", description: "A late period can mean many things beyond pregnancy — explore nine hormonal, nutritional, and lifestyle reasons your cycle may be delayed and what each one signals.", category: "Menstrual Health", section: "Lifestyle, Tools & Health" },
]

// ─── Prompt ───────────────────────────────────────────────────────────────────

function buildPrompt(article) {
  return `You are writing CTA copy for a women's hormonal health website (nicolejardim.com). At the bottom of each article is a call-to-action block that points readers to a free quiz called the "Hormone Health Assessment" at fixyourperiod.app/quiz. The quiz generates a personalized hormonal health protocol.

ARTICLE:
Title: ${article.title}
Description: ${article.description}
Category: ${article.category}
Section: ${article.section}

TASK: Write custom CTA copy that feels specific and relevant to someone who just finished reading this article.

Guidelines:
- headline: One short sentence (under 12 words). Should name the specific condition/symptom/topic. Avoid the word "Perimenopause" unless the article is explicitly about perimenopause. Avoid generic phrases like "doesn't have to be this way" — be concrete.
- body: 1–2 sentences that connect the article topic to the quiz. Mention what the quiz produces (personalized protocol) and hint at the relevant symptoms/issues. Keep it under 40 words total.
- If this article is purely educational/cultural with no actionable symptom connection (e.g. period shame, period facts, how ovulation works) return null for both fields.

Return ONLY valid JSON, no markdown:
{"headline": "string or null", "body": "string or null"}`
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("Missing ANTHROPIC_API_KEY")
    process.exit(1)
  }

  const args = process.argv.slice(2)
  const force = args.includes("--force")
  const specificSlug = args.find(a => a.startsWith("--slug="))?.split("=")[1]

  // Load existing progress
  const progress = existsSync(PROGRESS_FILE)
    ? JSON.parse(readFileSync(PROGRESS_FILE, "utf8"))
    : {}

  const toProcess = specificSlug
    ? articles.filter(a => a.slug === specificSlug)
    : force
    ? articles
    : articles.filter(a => !progress[a.slug])

  console.log(`\n✨  CTA Generator`)
  console.log(`   Processing: ${toProcess.length} article(s)\n`)

  let generated = 0, skipped = 0, nulled = 0

  for (let i = 0; i < toProcess.length; i++) {
    const article = toProcess[i]
    const idx = `[${String(i + 1).padStart(2, "0")}/${toProcess.length}]`
    console.log(`${idx} ${article.slug}`)

    try {
      const message = await client.messages.create({
        model: "claude-opus-4-5",
        max_tokens: 256,
        messages: [{ role: "user", content: buildPrompt(article) }],
      })

      const text = message.content[0].text.trim()
      const jsonMatch = text.match(/\{[\s\S]*\}/)
      if (!jsonMatch) throw new Error(`No JSON in response: ${text.slice(0, 100)}`)
      const result = JSON.parse(jsonMatch[0])

      progress[article.slug] = result
      if (result.headline && result.body) {
        console.log(`  ✅ "${result.headline.slice(0, 60)}"`)
        generated++
      } else {
        console.log(`  — null (generic fallback)`)
        nulled++
      }

      // Save progress after each article
      writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2))

      if (i < toProcess.length - 1) await sleep(600)
    } catch (err) {
      console.error(`  ❌ ${err.message}`)
      skipped++
      await sleep(1500)
    }
  }

  console.log(`\nResults — generated: ${generated}, null/generic: ${nulled}, failed: ${skipped}`)

  // ─── Write the TypeScript output file ────────────────────────────────────
  writeCtasFile(progress)
  console.log(`\n✅  Written to src/content/articles/ctas.ts\n`)
}

function writeCtasFile(progress) {
  const lines = [
    `/**`,
    ` * Article CTA copy — generated by scripts/generate-article-ctas.mjs`,
    ` * Each entry maps a slug to {headline, body} for the quiz CTA at the bottom`,
    ` * of the article page. null means use the generic fallback.`,
    ` */`,
    ``,
    `export interface ArticleCta {`,
    `  headline: string`,
    `  body: string`,
    `}`,
    ``,
    `export const articleCtas: Record<string, ArticleCta | null> = {`,
  ]

  for (const [slug, cta] of Object.entries(progress)) {
    if (cta.headline && cta.body) {
      // Escape backticks and template literal chars in the strings
      const h = cta.headline.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\${/g, "\\${")
      const b = cta.body.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\${/g, "\\${")
      lines.push(`  "${slug}": {`)
      lines.push(`    headline: "${cta.headline.replace(/"/g, '\\"')}",`)
      lines.push(`    body: "${cta.body.replace(/"/g, '\\"')}",`)
      lines.push(`  },`)
    } else {
      lines.push(`  "${slug}": null,`)
    }
  }

  lines.push(`}`)
  lines.push(``)
  writeFileSync(OUTPUT_FILE, lines.join("\n"), "utf8")
}

main().catch(err => { console.error("Fatal:", err); process.exit(1) })
