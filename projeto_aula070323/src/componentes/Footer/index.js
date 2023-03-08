/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import logo from "./img/logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-box">
      {/* Logo */}
      <section className="footer-box-logo">
        <header>
          <a href="#" className="footer-logo">
            <img
              src={logo}
              alt="Seu site de notícias do mundo dos animes"
              title="Seu site de notícias do mundo dos animes"
            />
            <p>Seu site de notícias do mundo dos animes</p>
          </a>
        </header>
      </section>
      <section className="footer-box-links">
        {/* Social Media */}
        <div className="footer-box-socialmedia">
          <article>
            <header>
              <h3>Nos siga nas redes sociais!</h3>
            </header>
            <button>
              <a href="#">
                <FaFacebook />
                <p>FanPage</p>
              </a>
            </button>
            <button>
              <a href="#">
                <FaInstagram />
                <p>Instagram</p>
              </a>
            </button>
            <button>
              <a href="#">
                <FaTwitter />
                <p>Twitter</p>
              </a>
            </button>
            <button>
              <a href="#">
                <FaDiscord />
                <p>Discord</p>
              </a>
            </button>
          </article>
        </div>
        {/* Links */}
        <div className="footer-box-link">
          <article>
            <h3>Links:</h3>
            <ul>
              <li>
                <a href="#">Quem Somos</a>
              </li>
              <li>
                <a href="#">Privacidade</a>
              </li>
              <li>
                <a href="#">Recrutamento</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* Register for news */}

      <section className="footer-box-form">
        <article>
          <header>
            <h3>CADASTRE-SE</h3>
          </header>
          <form>
            <input
              type="text"
              placeholder="Nome"
              className="footer-box-form-place"
            />
            <input
              type="email"
              placeholder="Email"
              className="footer-box-form-place"
            />
            <input
              type="submit"
              placeholder="RECEBER NOVIDADES"
              className="footer-box-form-submit"
            />
          </form>
        </article>
      </section>
      {/* Copyright and dev by */}
      <section className="footer-box-copyright">
        <p>Copyright &copy; 2022-2023</p>
        <p>Todos as imagens pertencem aos respectivos proprietarios</p>
        <p>Dev by: Matheus P. Torquato</p>
      </section>
    </footer>
  );
}
