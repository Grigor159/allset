import { getTranslations } from "next-intl/server";
import { BASE_URL } from "@/lib/api/config";
import logo from "@/assets/imgs/allset.png";
import { DetailsClient } from "./client";

export async function generateMetadata({ params }) {
  const t = await getTranslations();
  const { locale } = params;

  const title = t("details_title");
  const description = t("details_text");

  const metadata = {
    title: `${title} - Allset.am`,
    description: t(description),
    openGraph: {
      title: `${title} - Allset.am`,
      description: t(description),
      images: [
        {
          url: `${BASE_URL}${logo.src}`,
          alt: "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - Allset.am`,
      description: t(description),
      images: [`${BASE_URL}${logo.src}`],
    },
    authors: [
      {
        name: `allset.am`,
        url: `${BASE_URL}/${locale}`,
      },
    ],
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        "am-AM": `${BASE_URL}/hy`,
        "en-GB": `${BASE_URL}/en`,
        "ru-RU": `${BASE_URL}/ru`,
      },
    },
  };

  return metadata;
}

export default async function Details() {
  return <DetailsClient />;
}
