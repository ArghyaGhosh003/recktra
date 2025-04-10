import HeroSection from "./hero/hero";

import TestimonialSlider from "./slider/slider";
import SectionOne from "./section-one/section-one";
import SectionTwo from "./section-two/section-two";
import SectionThree from "./section-three/section-three";
import Contact from "./Contact/contact";

export default function Landing() {
  return (
    <div>
      <HeroSection />
      <TestimonialSlider />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Contact />
    </div>
  );
}
