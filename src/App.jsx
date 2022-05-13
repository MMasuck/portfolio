import About from "./component/about/about";
import Contact from "./component/contact/contact";
import Intro from "./component/intro/intro";
import Productlist from "./component/productlist/productlist";

const App = () => {

  return (
    <div>
    <Intro/>
    <About/>
    <Productlist/>  
    <Contact/>
   </div>
  );
};

export default App;