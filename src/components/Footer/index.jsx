import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
            <div className="redes">
                <a href="#facebook" target="_blank" rel="noopener noreferrer">
                    <img src="/img/facebook.png" alt="Facebook" />
                </a>
                <a href="https://x.com/juampimedina4" target="_blank" rel="noopener noreferrer">
                    <img src="/img/twitter.png" alt="Twitter" />
                </a>
                <a href="https://www.instagram.com/juampimedina_/?__pwa=1" target="_blank" rel="noopener noreferrer">
                    <img src="/img/instagram.png" alt="Instagram" />
                </a>
            </div>
            <strong>Desarrollado por <a className="yo" href="https://www.linkedin.com/in/juan-pablo-medina-199b3b2b4/">Juan Pablo Medina</a></strong>
        </footer>
    );
};

export default Footer