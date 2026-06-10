import { getLocale, getTranslations } from "next-intl/server";
import { meta } from "@/lib/meta";
import { ModuleClient } from "./client";

export async function generateMetadata() {
  const t = await getTranslations();
  const locale = await getLocale();
  const title = t("processing");
  const description = t("processing_description");

  return meta({ title, description, locale });
}

export default async function Fail() {
  return <ModuleClient />;
}
