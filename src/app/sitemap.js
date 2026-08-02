const BASE = "https://allset.am";

// Public, indexable routes only. Excluded on purpose:
// - /auth/* (private, also blocked in robots.txt)
// - /invitation/[slug] (per-event user content, not enumerable here)
// - /build flow steps except the templates entry (stateful, thin as landing pages)
// - [...not_found] catch-all
const ROUTES = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/build/templates", priority: 0.9, changeFrequency: "weekly" },
    { path: "/about-us", priority: 0.8, changeFrequency: "monthly" },
    { path: "/demo", priority: 0.7, changeFrequency: "monthly" },
    { path: "/connection", priority: 0.6, changeFrequency: "monthly" },
    { path: "/policies/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/policies/terms-conditions", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap() {
    const lastModified = new Date();

    return ROUTES.map(({ path, priority, changeFrequency }) => ({
        // canonical entry points to the default locale (hy)
        url: `${BASE}/hy${path}`,
        lastModified,
        changeFrequency,
        priority,
        alternates: {
            languages: {
                hy: `${BASE}/hy${path}`,
                en: `${BASE}/en${path}`,
                ru: `${BASE}/ru${path}`,
                "x-default": `${BASE}/hy${path}`,
            },
        },
    }));
}
