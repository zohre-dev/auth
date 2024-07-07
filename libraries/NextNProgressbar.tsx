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
        color="#778af5"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  );
}
