"use client";

import dynamic from "next/dynamic";
import { useRouter } from "@/i18n/routing";

const Modern = dynamic(() => import("./modern"));
const Rustic = dynamic(() => import("./rustic"));
const Classic = dynamic(() => import("./classic"));

export const InvitationClient = ({ data }) => {
  const router = useRouter();

  const template = data?.templateId;
  const status = data?.status;

  if (status !== "ACTIVE") return router.back();

  if (template === "template.classic.elegance") return <Classic data={data} />;
  if (template === "template.modern.romance") return <Modern data={data} />;

  return <Rustic data={data} />;
};
