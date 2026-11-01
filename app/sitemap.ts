import type { MetadataRoute } from "next";
import { siteInfo } from "@/data/site";
import { projects } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/projects",
    "/experience",
    "/skills",
    "/resume",
    "/blog",
    "/contact",
    ...projects.map((p) => `/projects/${p.slug}`),
  ].map((path) => ({ url: `${siteInfo.url}${path}` }));
}
