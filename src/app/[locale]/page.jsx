import { getLocale, getTranslations } from "next-intl/server";
import { meta } from "@/lib/meta";
import { HomeClient } from "./client";

export async function generateMetadata() {
  const t = await getTranslations();
  const locale = await getLocale();
  const title = t("seo_home_title");
  const description = t("seo_home_desc");

  return meta({ title, description, locale });
}

export default async function Home() {
  return <HomeClient />;
}
