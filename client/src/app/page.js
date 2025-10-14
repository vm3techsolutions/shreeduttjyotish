import Banner from "./home/Banner";
import AboutUs from "./home/AboutUs";
import Services from "./home/Services";
import WhyChooseUs from "./home/WhyChooseUs";
import CaseStudy from "./home/CaseStudy";
import Blogs from "./home/Blogs";
import Testimonial from "./home/Testimonial";
import ContactUs from "./home/ContactUs";

export default function Home() {
  return (
   <div>
    <Banner/>
    <AboutUs/>
    <Services/>
    <WhyChooseUs/>
    <CaseStudy/>
    <Blogs/>
    <Testimonial/>
    <ContactUs/>
   </div>
  );
}
