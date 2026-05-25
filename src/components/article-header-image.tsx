"use client"

import { useState } from "react"

export function ArticleHeaderImage({ slug }: { slug: string }) {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://res.cloudinary.com/dgmg40akd/image/upload/w_340,f_auto,q_auto/nj-articles-original/${slug}/img-01`}
      alt=""
      width={220}
      height={220}
      style={{
        width: 220,
        height: 220,
        borderRadius: 12,
        objectFit: "cover",
        flexShrink: 0,
        boxShadow: "0 8px 32px rgba(44,37,32,0.12)",
      }}
      onError={() => setFailed(true)}
    />
  )
}
