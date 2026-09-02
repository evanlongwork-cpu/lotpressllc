import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://lotpressllc.com/", changeFrequency: "monthly", priority: 1 },
    { url: "https://lotpressllc.com/record", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://lotpressllc.com/contact", changeFrequency: "yearly", priority: 0.4 },
  ];
}
