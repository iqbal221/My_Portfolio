/* eslint-disable react/no-unescaped-entities */
"use client";

import Banner from "../banner/page";
import Navbar from "../components/ui/Navbar";
import Skill from "../skill/page";
import Footer from "../components/ui/Footer";
import Contact from "../contact/page";
import About from "../about/page";
import Portfolio from "../project/page";
import Project from "../project/page";
import Service from "../service/page";
import NavbarResponsive from "../components/ui/ResponsiveNavbar";

export default function HomePage() {
  return (
    <div id="home">
      <Navbar></Navbar>
      <NavbarResponsive></NavbarResponsive>

      {/* Banner */}
      <Banner></Banner>

      {/* About Me */}
      <About></About>

      {/* Service */}
      <Service></Service>

      {/* portfolio */}
      <Project></Project>

      {/* my skill */}
      <Skill></Skill>

      {/* contact */}
      <Contact></Contact>
      
      {/* footer */}
      <Footer></Footer>
    </div>
  );
}
