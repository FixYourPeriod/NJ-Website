import type { ArticleMeta } from "./index"

export const meta: ArticleMeta = {
  slug: "heavy-periods",
  title: "Heavy Periods: Root Causes and Natural Solutions",
  description: "Heavy periods (menorrhagia) are not normal — they're a signal. Learn the root causes, health consequences, and a step-by-step natural protocol to lighten your flow for good.",
  category: "Condition",
  publishedAt: "2024-01-01",
  readingTime: 11,
  section: "Conditions & Symptoms",
}

export const faqs = [
  { q: "How do I know if my period is clinically \"heavy\" or just feels heavy?", a: "The clinical threshold is losing more than 80 ml of blood per cycle, soaking a pad or tampon every hour for two or more consecutive hours, or passing clots larger than a quarter. But practically speaking: if you are doubling up on protection, waking at night to change pads, missing activities because of your flow, or feeling exhausted and foggy during and after your period, that is a heavy period worth investigating — regardless of what any benchmark says. Your lived experience matters." },
  { q: "Can heavy periods cause anemia?", a: "Yes — and this is one of the most commonly overlooked consequences. Month after month of excessive blood loss depletes your iron stores faster than diet can replenish them. The result is iron deficiency anemia, which produces fatigue, brain fog, hair loss, shortness of breath, heart palpitations, and cold hands and feet. Ask your doctor to test ferritin (your iron storage protein) — not just hemoglobin, which only falls once anemia is already established. A ferritin below 30 ng/mL signals depleted stores even when hemoglobin looks normal; optimal ferritin is 70–100 ng/mL." },
  { q: "Is estrogen dominance really that common, and how do I know if I have it?", a: "It is extremely common — and it is not a single state but a range of scenarios: high estrogen with normal progesterone, high estrogen with low progesterone, normal estrogen with low progesterone, or even normal levels of both but excessive exposure to xenoestrogens (environmental estrogen-mimickers). Symptoms of estrogen dominance include heavy or long periods, clotty blood, breast tenderness before your period, PMS, spotting mid-cycle, bloating, and worsening of fibroids or endometriosis. A DUTCH hormone test provides the most comprehensive picture of your estrogen metabolism pathways." },
  { q: "Can fibroids cause heavy bleeding even if they are small?", a: "Size matters less than location. A small submucosal fibroid — one that protrudes into the uterine cavity — can cause significantly heavier bleeding than a large intramural fibroid sitting deep within the uterine wall. A transvaginal ultrasound will identify fibroids and describe their location, which is more clinically meaningful than size alone. Fibroids tend to grow in an estrogen-dominant environment, so addressing hormonal balance is foundational even when fibroids are present." },
  { q: "I am in perimenopause and my periods have suddenly gotten much heavier. What is happening?", a: "This is one of the most common and distressing changes women report in perimenopause. As ovarian function declines, ovulation becomes less consistent. Without regular ovulation, progesterone production drops. Meanwhile, estrogen tends to fluctuate wildly — often surging to higher levels than in your younger years before eventually declining. The result is a classic estrogen-dominant state: unpredictably heavy, sometimes prolonged bleeding. Supporting progesterone production, addressing liver detoxification, and managing the hormonal fluctuations with targeted nutrition and supplementation can make a real difference. An ultrasound is also important in this stage of life to rule out structural changes." },
  { q: "What is the difference between adenomyosis and fibroids?", a: "Fibroids are benign muscle tumors that grow within or on the uterine wall as distinct masses. Adenomyosis is a condition in which tissue similar to the uterine lining grows into the uterine muscle itself, causing the uterine walls to thicken diffusely — like a sponge becoming saturated with endometrial tissue. Adenomyosis causes heavier bleeding, more severe cramping, and a characteristically enlarged, boggy uterus. The two conditions can coexist, and both occur more often in an estrogen-dominant hormonal environment. Adenomyosis is typically diagnosed via MRI or, increasingly, by an experienced sonographer on transvaginal ultrasound." },
  { q: "How long will it take to see improvement with natural approaches?", a: "A general guideline I use with my clients: give yourself one to two months of consistent implementation for every year you have had symptoms. So if you have had heavy periods for three years, expect meaningful improvement over three to six cycles of committed effort — with initial improvements often visible in the first one to two cycles. This is not a quick fix, but it is a real fix. Factors that affect timeline include the underlying cause (hormonal vs. structural), whether iron has been adequately replenished, and how consistently the foundational diet and lifestyle practices are in place." },
  { q: "My doctor keeps recommending the hormonal IUD for heavy bleeding. Is it the only option?", a: "The hormonal IUD (Mirena) is a common conventional recommendation because the progestin it releases locally thins the uterine lining, which does reduce bleeding — often dramatically. For some women, it is a reasonable short-term bridge. But it is not treating the root cause of heavy bleeding, and for many women, hormonal IUDs come with side effects (mood changes, libido shifts, acne, persistent spotting) that affect quality of life. Natural approaches — addressing estrogen dominance, supporting progesterone production, optimizing liver function, and targeted supplementation — genuinely work when implemented consistently. You have options beyond what is typically offered in a 15-minute appointment." },
]

const html = `
<p>Women come to me constantly with the same story: soaking through a pad every hour, passing clots the size of quarters, flooding through their clothes in public, waking up at 3 a.m. to change their protection, and dragging themselves through the first two days of their period utterly depleted. Their doctors have told them this is just how it is. "Some women bleed heavily." Take the pill. Get the hormonal IUD. Here are some iron tablets.</p>
<p>I want to tell you something different: <strong>heavy bleeding is not the problem — it is the symptom.</strong> It is your body's response to underlying imbalances and conditions that, when addressed properly, allow the bleeding to normalize. Chasing the symptom with hormonal contraception or medication suppresses the signal without fixing what is generating it. Once you treat the cause, periods genuinely get lighter. I have seen it happen with thousands of women.</p>
<p>This article covers exactly what "heavy" means clinically, the eight most common root causes, the health consequences of chronic heavy bleeding, and a full step-by-step protocol drawn from my evidence-informed practice. Let's dig in.</p>
<h2>What Actually Counts as a Heavy Period?</h2>


<p>The clinical term for heavy menstrual bleeding is <strong>menorrhagia</strong>. Clinically, it is defined as blood loss of more than 80 ml per cycle. For reference, a normal period involves roughly 35–60 ml of blood. One fully soaked regular pad or tampon holds approximately 5 ml, so a normal cycle uses roughly six to ten pads or tampons total.</p>
<p>You have a heavy period if you experience any of the following:</p>
<ul>
<li><strong>Soaking a pad or tampon every hour for two or more consecutive hours</strong> — this is the classic clinical marker</li>
<li>Passing <strong>blood clots larger than a quarter</strong> (approximately 2.5 cm or bigger)</li>
<li>Your period <strong>lasts eight days or longer</strong> consistently</li>
<li>You need to use <strong>double protection</strong> (a tampon plus a pad, or a pad plus period underwear) to prevent leaking</li>
<li>You are <strong>emptying a 30 ml <a href="https://amzn.to/2fL3EyI" target="_blank" rel="noopener noreferrer" class="article-link">menstrual cup</a> more than twice a day</strong></li>
<li>You have to get up during the night to change your protection</li>
<li>You experience <strong>profound fatigue, brain fog, or shortness of breath</strong> during or after your period — signs your bleeding is affecting your iron stores</li>
</ul>
<p>If several of these apply to you, take them seriously. The fact that your mother or sister also bleeds this way does not make it biologically normal — it may just mean the same root cause runs in your family.</p>
<h2>Why Heavy Periods Happen: The 8 Root Causes</h2>


<p>Heavy periods are not a single condition with a single cause. They are a shared symptom of multiple distinct underlying issues. Identifying your specific root cause is essential, because it determines your path forward. Here are the eight most common drivers:</p>
<h3>1. Estrogen Dominance and Relative Progesterone Deficiency</h3>
<p>This is the most common hormonal driver of heavy bleeding, and it is worth understanding clearly. <a href="/articles/the-real-reason-your-breasts-are-sore-before-your-period">Estrogen dominance</a> simply means estrogen is too high <em>relative to progesterone</em>. This can happen when estrogen is genuinely elevated, or when progesterone is low — or both simultaneously.</p>
<p>Here is the mechanism: estrogen is your "builder" hormone. In the first half of your cycle, it builds up the uterine lining in preparation for a potential pregnancy. Progesterone is your "balancer" — it comes in after ovulation, stabilizes the lining, and helps it shed cleanly and efficiently. When progesterone is low relative to estrogen, the uterine lining becomes excessively thick. When it sheds, you bleed more, for longer, with more clots.</p>
<p>Progesterone deficiency is typically caused by one of three things: no ovulation, irregular ovulation, or ovulation that occurs but where the corpus luteum (the temporary structure that produces progesterone after ovulation) is under-functioning. This is why tracking ovulation is such a critical diagnostic step.</p>
<h3>2. Uterine Fibroids</h3>
<p>Fibroids are benign (non-cancerous) tumors of the uterine muscle, and they are the most common pelvic tumors in women. They are present in up to 80% of women by age 50, though many cause no symptoms at all. The two types most likely to cause heavy bleeding are <strong>submucosal fibroids</strong> (which grow inside the uterine cavity) and <strong>intramural fibroids</strong> (which grow within the uterine wall).</p>
<p>Fibroids grow in an estrogen-dominant, progesterone-deficient environment — which means addressing the hormonal imbalance is foundational whether fibroids are present or not. An ultrasound is required to confirm their presence and size.</p>
<h3>3. Endometriosis and Adenomyosis</h3>
<p><a href="/articles/endometriosis">Endometriosis</a> is an inflammatory disease in which tissue similar to the uterine lining grows outside the uterus — on the fallopian tubes, ovaries, bladder, bowel, and even the lungs in rare cases. Heavy, painful periods are one of its cardinal symptoms.</p>
<p><a href="/articles/adenomyosis">Adenomyosis</a> is a related condition in which this same type of tissue grows into the muscular wall of the uterus itself, causing the uterine walls to thicken and become enlarged — like a dense, blood-soaked sponge. Adenomyosis causes some of the heaviest, most painful periods I encounter in my practice. It occurs in approximately 20% of women who also have endometriosis.</p>
<h3>4. Thyroid Dysfunction (Particularly Hypothyroidism)</h3>
<p>Thyroid hormones and progesterone are deeply interconnected. Adequate thyroid hormone is required for healthy ovarian function and proper progesterone production. When the thyroid is underactive — or when thyroid hormone is not being efficiently converted or utilized by cells — ovarian function suffers, progesterone drops, and heavy periods follow.</p>
<p>Many women with heavy periods have an undiagnosed subclinical thyroid condition. A full thyroid panel should include TSH, free T3, free T4, total T3, total T4, reverse T3, TPO antibodies, and thyroglobulin antibodies — not just TSH alone, which misses a great deal.</p>
<h3>5. Clotting Disorders (Especially von Willebrand Disease)</h3>
<p>Von Willebrand disease is the most common inherited bleeding disorder, and it is dramatically underdiagnosed in women with heavy periods. It impairs the blood's ability to clot properly. Studies suggest that 10–20% of women with heavy menstrual bleeding test positive for a clotting disorder — yet most are never tested.</p>
<p>Ask your doctor to screen you for von Willebrand disease or other clotting factors if: you have had heavy periods for as long as you can remember, you bruise easily, you experience prolonged bleeding from cuts, or you have had heavy postoperative or postpartum bleeding.</p>
<h3>6. Copper IUD</h3>
<p>The copper IUD (Paragard) is a non-hormonal contraceptive that works by creating a copper-toxic environment in the uterus. Approximately 70% of users experience heavier periods and more cramping, particularly in the first three to six months after insertion — and for many women, this persists for the entire time the device is in place. If your heavy periods began or worsened after getting a copper IUD, the device is likely a direct contributor.</p>
<h3>7. Perimenopause and Anovulatory Cycles</h3>
<p>Perimenopause — the hormonal transition that can begin in a woman's late 30s or 40s — is characterized by declining and increasingly erratic ovarian function. As the ovaries age, they are less reliably completing the ovulation process. Without consistent ovulation, progesterone production becomes sporadic, and estrogen levels tend to surge unpredictably. The combination of high, fluctuating estrogen and low progesterone is a recipe for very heavy, often prolonged periods.</p>
<p>Teenagers experience a similar dynamic at the other end of the reproductive lifespan: their immature hypothalamic-pituitary-ovarian axis means ovulation is irregular during the first few years of cycling, leading to the same estrogen-dominant, progesterone-deficient state that causes heavy bleeding.</p>
<h3>8. Nutritional Deficiencies</h3>
<p>Several key nutrients are essential for healthy menstrual blood volume and uterine lining function:</p>
<ul>
<li><strong>Iron:</strong> Ironically, heavy periods both cause and worsen iron deficiency. Low iron impairs the body's ability to regulate blood volume and maintain uterine tissue health.</li>
<li><strong>Vitamin A:</strong> Vitamin A supports the regulation of the uterine lining and is crucial for healthy epithelial tissue. It also plays a role in progesterone production. Deficiency is associated with menorrhagia.</li>
<li><strong>Vitamin K:</strong> Vitamin K2 is required for proper blood coagulation. Without adequate K2, blood does not clot efficiently, contributing to heavier flow and a longer bleeding duration.</li>
<li><strong>Magnesium:</strong> Low magnesium impairs liver detoxification of estrogen and is associated with increased prostaglandin production — the inflammatory compounds that drive heavy bleeding and cramping.</li>
</ul>
<h2>The Health Consequences of Heavy Periods: Why This Matters Beyond Inconvenience</h2>
<p>Heavy periods are not just disruptive — over time, they have real physiological consequences. The most significant is <strong>iron deficiency anemia</strong>.</p>
<p>Iron is required to make hemoglobin, the protein in red blood cells that carries oxygen throughout the body. When you lose large amounts of blood month after month, your iron stores become depleted faster than they can be replenished through diet alone. Iron deficiency anemia produces a cascade of symptoms that can profoundly affect quality of life:</p>
<ul>
<li>Persistent fatigue and low energy, even after adequate sleep</li>
<li>Brain fog, difficulty concentrating, and poor memory</li>
<li>Hair thinning and excessive hair loss</li>
<li>Shortness of breath with minimal exertion</li>
<li>Heart palpitations</li>
<li>Cold hands and feet, pallor</li>
<li>Restless legs, especially at night</li>
<li>Brittle nails, dry skin</li>
</ul>
<p>Many women live with these symptoms for years, attributing them to stress or being "just tired," when in fact they are running on chronically depleted iron. If you have any of these symptoms, ask your doctor to test your ferritin level (your iron storage protein) — not just hemoglobin, which only becomes abnormal once anemia is established. Ferritin below 30 ng/mL (and ideally you want it above 70) is a sign of depleted stores even when hemoglobin looks normal.</p>
<h2>The Full Heavy &amp; Long Periods Protocol</h2>
<p>Once you understand what is driving your heavy bleeding, you can address it systematically. Here is the complete protocol I use with my clients and in my programs.</p>
<div class="step-box">
<div class="step-box-header">
<span class="step-number">Step 1</span>
</div>
<h3>Rule Out Structural Causes</h3>
<p>Before implementing natural strategies, you need to know whether a structural issue — a fibroid, polyp, or thickened uterine lining — is contributing to your bleeding. At minimum, ask your doctor for:</p>
<ul>
<li>A <strong>transvaginal ultrasound</strong> to look for fibroids, polyps, and adenomyosis</li>
<li>A <strong>full thyroid panel</strong> (not just TSH — request free T3, free T4, reverse T3, TPO antibodies, and thyroglobulin antibodies)</li>
<li>A <strong>ferritin level</strong> to assess iron stores</li>
<li>Screening for a <strong>clotting disorder</strong> if you have a lifelong history of very heavy bleeding, frequent nosebleeds, or easy bruising</li>
</ul>
<p>Come to your appointment with a written log: how many pads, tampons, or cup empties per day; how many days you bleed; the size of any clots; and any associated symptoms. This documentation matters.</p>
</div>
<div class="step-box">
<div class="step-box-header">
<span class="step-number">Step 2</span>
</div>
<h3>Replenish Iron (Correctly)</h3>
<p>If your ferritin is low — or if you have been bleeding heavily for a long time — iron repletion is a priority. How you replenish matters as much as whether you replenish:</p>
<ul>
<li><strong>Food sources first:</strong> Liver (the most bioavailable source of heme iron), grass-fed red meat, dark leafy greens (spinach, Swiss chard), lentils, and pumpkin seeds. Eat these regularly, not just when you are on your period.</li>
<li><strong>If supplementing, use iron bisglycinate</strong> rather than ferrous sulfate. Ferrous sulfate is the most commonly prescribed form, but it causes significant constipation and GI distress, and is poorly absorbed. Iron bisglycinate (also called ferrous bisglycinate or iron glycinate) is gentle on the digestive tract and well-absorbed.</li>
<li><strong>Always take iron with vitamin C</strong> — it dramatically enhances absorption. A glass of orange juice, some bell pepper, or a vitamin C supplement taken simultaneously.</li>
<li><strong>Never take iron with calcium or coffee/tea</strong> — these block absorption. Take iron supplements away from dairy, antacids, and caffeinated beverages.</li>
</ul>
</div>
<div class="step-box">
<div class="step-box-header">
<span class="step-number">Step 3</span>
</div>
<h3>Support Progesterone Production</h3>
<p>Because estrogen dominance and low progesterone are the most common hormonal drivers of heavy bleeding, supporting healthy ovulation — and therefore natural progesterone production — is foundational. Without consistent ovulation, there is no corpus luteum, and without a corpus luteum, there is no progesterone.</p>
<ul>
<li>Track your cycle to confirm you are actually ovulating (look for basal body temperature rise after ovulation, LH surge on ovulation test strips, and fertile cervical mucus mid-cycle)</li>
<li>Prioritize blood sugar stability — blood sugar dysregulation directly disrupts the hormonal signaling required for ovulation</li>
<li>Reduce chronic stress, which suppresses the hypothalamic-pituitary axis and impairs ovulation</li>
<li>Consider Vitex (chaste tree berry) under the guidance of a trained herbalist or practitioner — it supports the pituitary's production of LH, which stimulates progesterone after ovulation</li>
</ul>
</div>
<div class="step-box">
<div class="step-box-header">
<span class="step-number">Step 4</span>
</div>
<h3>Address Estrogen Dominance Through Liver and Gut Support</h3>
<p>The liver is the primary organ responsible for breaking down and clearing used estrogen from the body. If liver detoxification is sluggish — which is extremely common given modern toxic exposures, processed food diets, and chronic stress — estrogen recirculates in the bloodstream instead of being eliminated. This worsens the estrogen/progesterone imbalance driving heavy bleeding.</p>
<p><strong>Dietary strategies:</strong></p>
<ul>
<li>Eat cruciferous vegetables (broccoli, cabbage, Brussels sprouts, cauliflower) daily — they support the 2-OH estrogen detoxification pathway</li>
<li>Add ground flaxseed (1 tablespoon daily) — its lignans support healthy estrogen metabolism</li>
<li>Increase fiber to support daily bowel movements, which are essential for excreting processed estrogen</li>
<li>Limit alcohol, which significantly burdens liver detoxification pathways</li>
</ul>
<p><strong>Liver-supportive supplements:</strong></p>
<ul>
<li>Look for a comprehensive liver support formula containing some or all of: milk thistle, N-Acetyl Cysteine (NAC), alpha lipoic acid, turmeric/curcumin, artichoke extract, broccoli sprout concentrate (sulforaphane), and methionine. Use for 30–90 days depending on symptom severity.</li>
<li><strong>DIM (diindolylmethane)</strong>: derived from cruciferous vegetables, DIM supports phase 1 of liver estrogen detoxification and helps lower active estradiol levels. It is appropriate if you have heavy and long periods regularly or confirmed high estrogen on testing. Note: if your estrogen levels are normal or low, DIM can make them too low — this is why hormone testing (a DUTCH test is ideal) before using DIM is wise. Use for 3–4 cycles to assess benefit.</li>
<li><strong>Magnesium glycinate or malate</strong>: supports phase 2 liver detoxification and is required for hundreds of enzymatic reactions in the body. Start at 200–300 mg daily; adjust based on tolerance and bowel response.</li>
<li><strong>Curcumin</strong>: the active compound in turmeric, curcumin supports phase 1 and 2 liver detoxification and reduces inflammation. Take 200–500 mg twice daily with black pepper (piperine) for best absorption.</li>
</ul>
</div>
<div class="step-box">
<div class="step-box-header">
<span class="step-number">Step 5</span>
</div>
<h3>Vitamin A: Cod Liver Oil for Uterine Lining Health</h3>
<p>Vitamin A is one of the most underused tools for heavy periods. It regulates the growth and shedding of the uterine lining, supports progesterone receptor sensitivity, and plays a direct role in ovarian function. Research suggests that women with menorrhagia often have lower serum vitamin A levels, and that supplementing with vitamin A can meaningfully reduce blood loss.</p>
<p>The best whole-food source of preformed vitamin A (retinol) is <strong>cod liver oil</strong>, which also provides vitamin D and anti-inflammatory omega-3 fatty acids. Look for a high-quality, traditionally fermented or minimally processed cod liver oil (brands like Rosita or Green Pasture). Start with the label-suggested dose and assess your response over 2–3 cycles.</p>
<p>Liver (chicken, beef, lamb) is also an outstanding source of retinol and B vitamins simultaneously — eating it 1–2 times per week is a powerful nutritional strategy. If the taste is a barrier, mix minced liver into ground beef for burgers or bolognese, or use desiccated liver capsules.</p>
<p><em>Note: Avoid high-dose vitamin A supplementation during pregnancy or if you are trying to conceive without guidance from a practitioner.</em></p>
</div>
<div class="step-box">
<div class="step-box-header">
<span class="step-number">Step 6</span>
</div>
<h3>Vitamin K2 and Calcium/Magnesium for Blood Coagulation Support</h3>
<p>Vitamin K2 is essential for proper blood coagulation. It activates the proteins that help blood clot efficiently — and when K2 is deficient, blood does not clot properly, contributing to heavier and longer flow. K2 also plays an important role in directing calcium appropriately (into bones, not soft tissues).</p>
<ul>
<li><strong>Vitamin K2 (MK-7 form):</strong> 100–200 mcg daily is a common starting point. Food sources include natto (fermented soybeans), hard and soft cheeses, egg yolks, and grass-fed butter.</li>
<li><strong>Calcium and magnesium:</strong> These two minerals work together for muscle function (including the uterine muscle), blood clotting, and overall hormonal balance. A magnesium-to-calcium ratio of roughly 1:1 to 1:2 is generally well-tolerated. Prioritize magnesium glycinate, which is better absorbed and gentler on the digestive tract than magnesium oxide.</li>
</ul>
</div>
<div class="step-box">
<div class="step-box-header">
<span class="step-number">Step 7</span>
</div>
<h3>NAC and Anti-Fibrinolytic Support</h3>
<p><strong>N-Acetyl Cysteine (NAC)</strong> is one of the most versatile supplements for women with heavy periods. It is a precursor to glutathione (the body's master antioxidant), supports liver detoxification, reduces inflammation, and has demonstrated benefit for conditions that commonly underlie heavy bleeding, including PCOS, fibroids, and endometriosis. Typical dosing ranges from 600–1,800 mg daily in divided doses.</p>
<p>For those with heavy bleeding driven by poor blood coagulation or fibroid-related bleeding, certain natural anti-fibrinolytic approaches are worth discussing with a practitioner:</p>
<ul>
<li><strong>Vitamin C</strong>: reduces capillary fragility and supports collagen integrity in the uterine lining. 1,000–2,000 mg daily is commonly used.</li>
<li><strong>Borage oil or evening primrose oil</strong>: reduces levels of inflammatory prostaglandins (PGE2 and PGF2a) that drive heavier flow and cramping.</li>
<li><strong>Fish oil / omega-3 fatty acids</strong>: work similarly to reduce inflammatory prostaglandin production. Aim for at least 2 g of EPA+DHA daily.</li>
</ul>
</div>
<div class="step-box">
<div class="step-box-header">
<span class="step-number">Step 8</span>
</div>
<h3>Castor Oil Packs</h3>
<p><a href="/articles/castor-oil">Castor oil packs</a> are one of the most effective and accessible tools I recommend for heavy periods. Castor oil's active compound, ricinoleic acid, stimulates lymphatic circulation, improves blood flow to the pelvic organs, and reduces inflammation. Applied over the lower abdomen, it helps break up pelvic congestion, supports liver detoxification, and can noticeably reduce clotting and cramping over time.</p>
<p>Use a castor oil pack over your lower abdomen 3–4 times per week during the weeks you are not bleeding. You can also apply it over the liver (right side, under the ribcage) 2–3 times per week to support estrogen detoxification. Do not use during active menstrual bleeding. See my detailed guide for full instructions on how to make and use a castor oil pack safely and effectively.</p>
</div>
<div class="step-box">
<div class="step-box-header">
<span class="step-number">Step 9</span>
</div>
<h3>Herbal Support: Shepherd's Purse, Yarrow, and Red Raspberry Leaf</h3>
<p>Several herbs have a long traditional and clinical record for reducing heavy menstrual bleeding. These are best used under the guidance of a trained herbalist, as the appropriate herb depends on the underlying cause:</p>
<ul>
<li><strong>Shepherd's purse (<em>Capsella bursa-pastoris</em>):</strong> one of the most well-known uterine hemostatic (bleeding-reducing) herbs in Western herbalism. Traditionally used to reduce heavy flow and postpartum bleeding.</li>
<li><strong>Yarrow (<em>Achillea millefolium</em>):</strong> a classic astringent and hemostatic herb that helps tone the uterine lining and reduce excessive bleeding. Rich in flavonoids with anti-inflammatory properties.</li>
<li><strong>Red raspberry leaf (<em>Rubus idaeus</em>):</strong> acts as a uterine tonic, toning the smooth muscle of the uterus and supporting more efficient, less excessive shedding of the lining. Rich in iron, calcium, magnesium, and B vitamins. Drink one cup of tea daily for 30–60 days to assess benefit.</li>
<li><strong>Lady's mantle (<em>Alchemilla vulgaris</em>):</strong> another traditional astringent herb used to support heavy periods, often combined with shepherd's purse or yarrow.</li>
</ul>
</div>
<div class="article-cta-box">
<h3>Ready for a Deeper Approach to Fixing Your Period?</h3>
<p>My Fix Your Period program takes you through the full foundational protocol — nutrition, blood sugar balance, stress resilience, liver detoxification, and cycle tracking — that creates the underlying hormonal conditions for a lighter, more manageable flow. It is where real, lasting change happens.</p>
<a class="btn-primary" href="/articles/fix-your-period">Explore Fix Your Period</a>
</div>
<h2>When to See a Doctor: When Natural Approaches Aren't Enough Alone</h2>
<p>Natural and lifestyle interventions are powerful — but they are not always sufficient on their own, and they are not a substitute for medical evaluation. See a doctor promptly if:</p>
<ul>
<li>You are soaking a pad or tampon every 30–60 minutes for more than two hours (this can constitute an acute medical situation)</li>
<li>You have symptoms of severe anemia: extreme fatigue, heart palpitations, shortness of breath at rest, or near-fainting</li>
<li>You suspect a clotting disorder based on lifelong heavy bleeding, frequent nosebleeds, or easy bruising</li>
<li>An ultrasound has revealed large fibroids or significant adenomyosis that may require medical or surgical management</li>
<li>You have been implementing these strategies for three to four cycles without meaningful improvement</li>
<li>You experience sudden onset of heavy bleeding when your periods were previously normal — this warrants prompt evaluation to rule out a structural or systemic cause</li>
</ul>
<p>Short-term medical options — such as tranexamic acid (a non-hormonal medication that reduces blood loss by improving clotting), or progestins during the luteal phase — can be used as a bridge while you are working on root-cause interventions. These are tools, not endpoints. Work with a doctor who is willing to investigate the cause, not just manage the symptom.</p>
<p>Give your body realistic time to respond. If you have had heavy periods for years, expect meaningful improvement over one to three cycles of consistent implementation — but understand that the further back this pattern goes, the more layers there are to address. Healing is not linear, but it is achievable.</p>
`

export default function ArticleBody() {
  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
