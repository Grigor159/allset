const BASE = "https://allset.am";

const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Allset",
    alternateName: "Allset.am",
    url: BASE,
    logo: `${BASE}/favicon-512x512.png`,
    sameAs: [
        "https://www.facebook.com/profile.php?id=61550794792772",
        "https://www.instagram.com/allset_event/",
    ],
};

const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Allset",
    url: BASE,
    inLanguage: ["hy", "en", "ru"],
    publisher: { "@id": `${BASE}/#organization` },
};

export function JsonLd() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...organization, "@id": `${BASE}/#organization` }) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
            />
        </>
    );
}
