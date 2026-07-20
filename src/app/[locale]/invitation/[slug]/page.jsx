import { getLocale, getTranslations } from "next-intl/server";
import { getInvitationData, pickLang } from "@/lib/invitation";
import { meta } from "@/lib/meta";
import { InvitationClient } from "./client";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const t = await getTranslations();
  const locale = await getLocale();
  const data = await getInvitationData(slug);

  return meta({
    title: pickLang(data?.title, locale) || "Henry & Mariam",
    description: pickLang(data?.description, locale) || t("classic_title"),
    locale,
  });
}

export default async function Invitation({ params }) {
  const { slug } = await params;

  const data = await getInvitationData(slug);

  if (!data) notFound();

  return <InvitationClient data={data} />;
}
