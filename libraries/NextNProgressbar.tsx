"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
export default function NextNProgressbar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#A69488"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
