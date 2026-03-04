"use client";

import { useParams } from "next/navigation";

export default function Guests() {
  const params = useParams();
  const { id, tab } = params;
  return <>{id} {tab}</>;
}
