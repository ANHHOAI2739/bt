import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Navigation from "./layout/Navigation";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <>
      <Navigation />;
      <Header />;
      <Homepage />;
      <Footer />;
    </>
  );
}

export default App;
