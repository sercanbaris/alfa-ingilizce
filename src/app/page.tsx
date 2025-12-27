import Begining from "../components/Begining";
import Course from "../components/Course";
import Learning from "../components/Learning";
import Programs from "../components/Programs";
import WhyUs from "../components/WhyUs";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Begining />
      <Learning />
      <WhyUs />
      <Course />
      <Programs />
      <Faqs />
      <Footer />
    </main>
  );
}
