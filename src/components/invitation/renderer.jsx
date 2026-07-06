"use client";

import React from "react";
import { parseAsString, useQueryStates } from "nuqs";
import { useGetAuthTanstack } from "@/hooks/useTanstack";
import Classic from "@/app/[locale]/invitation/[slug]/classic";
import Modern from "@/app/[locale]/invitation/[slug]/modern";
import Rustic from "@/app/[locale]/invitation/[slug]/rustic";

export const Renderer = ({ viewport, palette, live }) => {
  const [{ template, id }] = useQueryStates({
    template: parseAsString,
    id: parseAsString,
  });

  const { data } = useGetAuthTanstack(`invitations/${id}`, !!id);

  if (template === "template.classic.elegance") {
    return (
      <Classic viewport={viewport} palette={palette} data={data} live={live} />
    );
  }

  // TODO: add template in other invitations
  if (template === "template.modern.romance") {
    return (
      <Modern viewport={viewport} template={template} palette={palette} data={data} live={live} />
    );
  }

  return (
    <Rustic viewport={viewport} palette={palette} data={data} live={live} />
  );
};
