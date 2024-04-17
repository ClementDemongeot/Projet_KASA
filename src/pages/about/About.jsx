import "../about/about.css";
import Layout from "../../layouts/Layout";
import Footer from "../../components/Footer/Footer";
import { Banner2 } from "../../components/Banner/Banner";
import { Collapse } from "../../components/Collapse/Collapse";
import { titles, descriptions } from "../about/AboutDatas.jsx";

export default function About() {
  return (
    <>
      <Layout />
      <Banner2 />
      <div className="about-container">
        <div className="about-content">
          <Collapse title={titles.Fiabilité} content={descriptions.Fiabilité} />
          <Collapse title={titles.Respect} content={descriptions.Respect} />
          <Collapse title={titles.Service} content={descriptions.Service} />
          <Collapse title={titles.Sécurité} content={descriptions.Securité} />
        </div>
      </div>
      <Footer />
    </>
  );
}
