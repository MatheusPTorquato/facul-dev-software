/* eslint-disable jsx-a11y/alt-text */
import './App.css';

/* Import Img Internacional */
import bonjovi from './image/bonjovi.jpeg';
import ctzsld from './image/ctzsld.jpeg';
import enc from './image/enc.jpg';

/* Import Img Internacional */
import Malta from './image/malta.webp';
import legurb from './image/legurb.jpg';
import capini from './image/capini.jpg';

export default function App(){
  return(
        <div className="container">
            <header>
                <section className="box-logo">
                    <p> MusicNow </p>
                </section>
                <section className="box-menu">
                    <ul>
                        <li>
                            <a href="192.168.15.19:3000">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="192.168.15.19:3000">
                                Música Internacional
                            </a>
                        </li>
                        <li>
                            <a href="192.168.15.19:3000">
                                Música Nacional
                            </a>
                        </li>
                    </ul>
                </section>
            </header>
            <main>
                <section className="box-titulo">
                    <h1>Músicas</h1>
                </section>
                <section className="box-subtitulo">
                    <h2>Internacional</h2>
                    <section className="box-internacional">
                        <p>
                            Bon Jovi
                            <img src={bonjovi} className="box-internacional-img" />
                        </p>
                        <p>
                            Evanescence
                            <img src={enc} className="box-internacional-img"/>
                        </p>
                        <p>
                            Citizen Soldier
                            <img src={ctzsld} className="box-internacional-img"/>
                        </p>
                    </section>
                </section>
                <section className="box-subtitulo">
                    <h2>Nacional</h2>
                    <section className="box-nacional">
                        <p>
                            Malta
                            <img src={Malta} className="box-nacional-img" />
                        </p>
                        <p>
                            Legião Urbana
                            <img src={legurb} className="box-nacional-img" />
                        </p>
                        <p>
                            Capital Inicial
                            <img src={capini} className="box-nacional-img" />
                        </p>
                    </section>
                </section>
            </main>
            <footer>
                <p>Site desenvolvido por: Matheus P. Torquato</p>
            </footer>
        </div>
  );
}