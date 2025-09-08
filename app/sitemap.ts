import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  return [
    { url: `${base}/`, changeFrequency: "daily", priority: 1 },
    { url: `${base}/faq`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/policy/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/policy/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/policy/refund`, changeFrequency: "yearly", priority: 0.3 }
  ];
}
