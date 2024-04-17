import "../Error/page404.css";
import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import Footer from "../../components/Footer/Footer";
import ImgError from "../../assets/images/Error404.png";

export default function Error404() {
  return (
    <>
      <Layout />
      <div className="error404">
        <img src={ImgError} alt="ImageError" />
        <p className="error-texte">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className="error-lien" to={"/"}>
          Retourner sur la page d’accueil
        </Link>
      </div>
      <Footer />
    </>
  );
}
