import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        
        <div className="contact-info">
          <h2 className="contact-title">Vamos conversar<span>.</span></h2>
          <p className="contact-description">
            Tem um projeto em mente ou quer apenas trocar uma ideia? 
            Sinta-se à vontade para me chamar em qualquer rede ou preencher o formulário.
          </p>

          <div className="info-items">
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <span>E-mail</span>
                <p>seuemail@exemplo.com</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-icon"><FaLinkedin /></a>
            <a href="#" className="social-icon"><FaGithub /></a>
          </div>
        </div>

        <form className="contact-form">
          <div className="input-group">
            <input type="text" placeholder="Seu nome" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Seu e-mail" required />
          </div>
          <div className="input-group">
            <textarea placeholder="Como posso ajudar?" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Enviar Mensagem <FaPaperPlane />
          </button>
        </form>

      </div>
    </section>
  );
}