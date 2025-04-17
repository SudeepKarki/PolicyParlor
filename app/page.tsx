import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Banner />
      <Services />
      <Contact />
      <Testimonials />
      <Cta />
      <Faq />
    </>
  );
}
