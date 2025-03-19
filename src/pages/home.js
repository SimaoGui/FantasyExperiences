import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/home.module.scss";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <header>
                <div className={styles.logoDiv}>
                    <a href={"https://github.com/SimaoGui"}>SimaoGui</a>
                </div>
                <nav className={styles.menuNav}>
                    <a onClick={() => navigate("/home")}>Início</a>
                    <a onClick={() => navigate("/sobre")}>Sobre</a>
                    <a onClick={() => navigate("/reflexoes")}>Reflexões</a>
                    <a onClick={() => navigate("/apoie")}>Apoie-me</a>
                </nav>
            </header>
            <main>
                <div className={styles.card}>
                    <div className={styles.box}>
                        <div className={styles.content}>
                            <h2>01</h2>
                            <h3>Naquele Mesmo Lugar...</h3>
                            <p>Em boa parte do meu tempo livre, me vejo no meu quarto observando o céu pela janela. Em muitos momentos, estive nesse mesmo lugar, com semblantes diferentes, emoções diferentes, ideías diferentes, mas no mesmo lugar, observando o mesmo céu. Isso me faz pensar...</p>
                            <a href={"#"}>Ler Mais!</a>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.box}>
                        <div className={styles.content}>
                            <h2>02</h2>
                            <h3>Naquele Mesmo Lugar...</h3>
                            <p>Em boa parte do meu tempo livre, me vejo no meu quarto observando o céu pela janela. Em muitos momentos, estive nesse mesmo lugar, com semblantes diferentes, emoções diferentes, ideías diferentes, mas no mesmo lugar, observando o mesmo céu. Isso me faz pensar...</p>
                            <a href={"#"}>Ler Mais!</a>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.box}>
                        <div className={styles.content}>
                            <h2>03</h2>
                            <h3>Naquele Mesmo Lugar...</h3>
                            <p>Em boa parte do meu tempo livre, me vejo no meu quarto observando o céu pela janela. Em muitos momentos, estive nesse mesmo lugar, com semblantes diferentes, emoções diferentes, ideías diferentes, mas no mesmo lugar, observando o mesmo céu. Isso me faz pensar...</p>
                            <a href={"#"}>Ler Mais!</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default HomePage;
