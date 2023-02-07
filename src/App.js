import Header from "./components/header";
import NavbarComp from "./components/navbar/index";
import Footer from "./components/footer";
import { AppDiv } from "./element";
import HeroSection from "./components/heroSection";

function App() {
  return (
    <AppDiv>
      <Header />
<HeroSection/>
      <Footer />
    </AppDiv>
  );
}

export default App;
