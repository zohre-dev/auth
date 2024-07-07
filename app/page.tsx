import AboutUs from "@/components/aboutUs/AboutUs";
import ContactUs from "@/components/contactUs/ContactUs";
import Header from "@/components/header/Header";
import { Suspense } from "react";

export default function Home() {
  const susKey = crypto.randomUUID();
  return (
    <>
      <Suspense key={susKey} fallback={<p>Loading...</p>}>
        <Header />
        <AboutUs />
        <ContactUs />
      </Suspense>
    </>
  );
}
