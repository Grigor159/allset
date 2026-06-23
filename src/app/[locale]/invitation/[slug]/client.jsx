"use client";

import dynamic from "next/dynamic";
// import NotFound from "../../not-found";

const Modern = dynamic(() => import("./modern"));
const Rustic = dynamic(() => import("./rustic"));
const Classic = dynamic(() => import("./classic"));

export const InvitationClient = ({ data }) => {
  // if (!data) return <NotFound/>;

  const template = data?.templateId;

  if (template === "template.classic.elegance") return <Classic data={data} />;
  if (template === "template.modern.romance") return <Modern data={data} />;

  return <Rustic data={data} />;
};
