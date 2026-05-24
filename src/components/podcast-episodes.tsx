"use client"

import { useState, useMemo } from "react"
import type { PodcastEpisode } from "@/content/podcasts"

const PAGE_SIZE = 20

interface Props {
  episodes: PodcastEpisode[]
}

export function PodcastEpisodes({ episodes }: Props) {
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    if (!query.trim()) return episodes
    const q = query.toLowerCase()
    return episodes.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q)
    )
  }, [query, episodes])

  const isSearching = query.trim().length > 0
  const visible = isSearching ? filtered : filtered.slice(0, PAGE_SIZE * page)
  const hasMore = !isSearching && filtered.length > PAGE_SIZE * page

  function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
    setPage(1)
  }

  return (
    <>
      <style>{`
        .ep-search-wrap { position: relative; max-width: 540px; }
        .ep-search-input {
          width: 100%;
          box-sizing: border-box;
          padding: 14px 48px 14px 20px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: var(--charcoal);
          background: var(--ivory);
          border: 1.5px solid rgba(92,45,79,0.15);
          border-radius: 40px;
          outline: none;
          transition: border-color 0.15s;
        }
        .ep-search-input::placeholder { color: rgba(44,37,32,0.4); }
        .ep-search-input:focus { border-color: rgba(92,45,79,0.5); }
        .ep-search-icon {
          position: absolute;
          right: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(92,45,79,0.35);
          pointer-events: none;
        }
        .ep-clear-btn {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: rgba(92,45,79,0.45);
          font-size: 16px;
          line-height: 1;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ep-clear-btn:hover { color: var(--plum); }
        .ep-row {
          display: grid;
          grid-template-columns: 56px 1fr auto;
          gap: 24px;
          align-items: start;
          padding: 24px 0;
          border-bottom: 1px solid rgba(92,45,79,0.07);
        }
        .ep-row:first-child { border-top: 1px solid rgba(92,45,79,0.07); }
        .ep-listen-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: var(--terra);
          text-decoration: none;
          white-space: nowrap;
          padding-top: 3px;
          border-bottom: 1px solid rgba(181,90,58,0.25);
          padding-bottom: 2px;
          transition: border-color 0.15s, color 0.15s;
        }
        .ep-listen-link:hover {
          color: var(--plum);
          border-color: rgba(92,45,79,0.35);
        }
        .ep-load-more-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 15px 40px;
          background: transparent;
          color: var(--plum);
          border: 1.5px solid rgba(92,45,79,0.3);
          border-radius: 40px;
          cursor: pointer;
          transition: background 0.15s, border-color 0.15s;
        }
        .ep-load-more-btn:hover {
          background: rgba(92,45,79,0.06);
          border-color: rgba(92,45,79,0.55);
        }
        @media (max-width: 600px) {
          .ep-row { grid-template-columns: 44px 1fr; gap: 14px; }
          .ep-listen-link { display: none; }
        }
      `}</style>

      {/* Search bar */}
      <div className="ep-search-wrap" style={{ marginBottom: 40 }}>
        <input
          className="ep-search-input"
          type="text"
          placeholder="Search episodes by title or topic…"
          value={query}
          onChange={handleQueryChange}
          aria-label="Search episodes"
        />
        {query ? (
          <button
            className="ep-clear-btn"
            onClick={() => { setQuery(""); setPage(1) }}
            aria-label="Clear search"
          >
            ✕
          </button>
        ) : (
          <span className="ep-search-icon" aria-hidden>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 10L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
        )}
      </div>

      {/* Result count when searching */}
      {isSearching && (
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color: "var(--charcoal)",
            opacity: 0.5,
            marginBottom: 20,
            letterSpacing: "0.03em",
          }}
        >
          {filtered.length === 0
            ? "No episodes found"
            : `${filtered.length} episode${filtered.length === 1 ? "" : "s"} for "${query}"`}
        </p>
      )}

      {/* Empty state */}
      {filtered.length === 0 && (
        <div
          style={{
            padding: "48px 0",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 22,
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--plum)",
              marginBottom: 8,
            }}
          >
            No episodes found
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              color: "var(--charcoal)",
              opacity: 0.5,
            }}
          >
            Try a different keyword or{" "}
            <button
              onClick={() => setQuery("")}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                color: "var(--terra)",
                fontFamily: "inherit",
                fontSize: "inherit",
                textDecoration: "underline",
              }}
            >
              browse all episodes
            </button>
          </p>
        </div>
      )}

      {/* Episode list */}
      {visible.length > 0 && (
        <div style={{ marginBottom: 40 }}>
          {visible.map((ep) => (
            <div key={ep.number} className="ep-row">
              {/* Episode number */}
              <div
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: 28,
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--plum)",
                  opacity: 0.18,
                  lineHeight: 1,
                  paddingTop: 2,
                  textAlign: "right",
                }}
              >
                {ep.number}
              </div>

              {/* Title + description */}
              <div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--plum)",
                    lineHeight: 1.35,
                    marginBottom: 6,
                  }}
                >
                  {ep.title}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13.5,
                    lineHeight: 1.65,
                    color: "var(--charcoal)",
                    opacity: 0.6,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {ep.description}
                </p>
              </div>

              {/* Listen Now link */}
              <a
                href={`https://site.fixyourperiod.app/podcasts/${ep.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ep-listen-link"
              >
                Listen Now &rarr;
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Load more / footer */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        {hasMore && (
          <button
            className="ep-load-more-btn"
            onClick={() => setPage((p) => p + 1)}
          >
            Load More Episodes
          </button>
        )}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color: "var(--charcoal)",
            opacity: 0.4,
            textAlign: "center",
          }}
        >
          Showing episodes 68–270.{" "}
          <a
            href="https://site.fixyourperiod.app/podcasts"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            Browse the full archive
          </a>{" "}
          for earlier episodes.
        </p>
      </div>
    </>
  )
}
