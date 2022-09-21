import React, { useState } from "react";
import NavBar from "./navBar";
import Footer from "./Footer";
import Home from "./pages/aboutMe";
import Contact from "./pages/contactsForm";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import "./Portfolio.css";

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }

    return <Resume />;
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component
      nested divs, parent div centered and maybe the nested divs are styled differently  */}
      <div class="bg">{renderPage()}</div>
      <Footer />
    </div>
  );
}
export default PortfolioContainer;
