import Header from "./components/header";
import NavbarComp from "./components/navbar/index";
import Footer from "./components/footer";
import { AppDiv } from "./element";

function App() {
  return (
    <AppDiv>
      <Header />
      <NavbarComp />
      <Footer />
    </AppDiv>
  );
}

export default App;
