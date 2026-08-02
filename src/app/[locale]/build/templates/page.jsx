import { getLocale, getTranslations } from "next-intl/server";
import { meta } from "@/lib/meta";
import { TemplatesClient } from "./client";

export async function generateMetadata() {
  const t = await getTranslations();
  const locale = await getLocale();
  const title = t("seo_templates_title");
  const description = t("seo_templates_desc");

  return meta({ title, description, locale });
}

export default async function Templates() {
  return <TemplatesClient />;
}
