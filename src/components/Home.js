import Blog from "./Blog/Blog";
import Footer from "./Footer/Footer";
import { Header } from "./Header";
import HeroNew from "./HeroNew/HeroNew";
import ServicesNew from "./Service/ServicesNew";
import Stats from "./Stats/Stats";
import Testimonial from "./Testimonial/Testimonial";
import Work from "./Work/Work";

function Home() {
  return (
    <>
      <Header/>
      <HeroNew />
      <ServicesNew/>
      <Stats />
      <Work />
      <Testimonial />
      <Blog/>
      <Footer/>
    </>
  );
}

export default Home;
