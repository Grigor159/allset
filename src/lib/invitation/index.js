import { BASE_API } from "../api/config";

export const pickLang = (obj, lang = "en") =>
  obj?.[lang] || obj?.en || obj?.hy || obj?.ru || "";

export async function getInvitationData(slug) {
  try {
    const res = await fetch(
      `${BASE_API}invitations/url/${slug}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}