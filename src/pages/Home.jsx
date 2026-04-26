import "./Home.css";
import guig from "../assets/guig.jpeg";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Home() {
  const techs = [
    "React", "Node.js", "JavaScript", "CSS3", "HTML5", 
    "Python", "Java", "C/C++", "MySQL", "PostgreSQL", "Redes"
  ];

  return (
    <section id="home" className="home">
      <div className="home-container">
        
        {/* LADO ESQUERDO: TEXTO */}
        <motion.div 
          className="home-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="welcome-badge">🚀 Bem-vindo ao meu portfólio</span>
          <h1>Olá, eu sou o <br /><span>Guilherme Almeida</span></h1>
          <h2>Desenvolvedor FullStack</h2>
          <p>
            Transformando ideias em experiências digitais de alto impacto. 
            Entusiasta em Desenvolvimento Web e aplicações modernas.
          </p>

          <div className="home-btns">
            <a href="#projects" className="btn-primary">
              <strong>VER PROJETOS</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>
              <div id="glow">
                <div className="circle-container">
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </div>
            </a>
            <motion.a 
              whileHover={{ scale: 1.05 }} 
              className="btn-secondary" 
              href="/Curriculum_Vitae_Guilherme.pdf" 
              download
            >
              Currículo <FaDownload />
            </motion.a>
          </div>

          <div className="home-social">
            <div className="github-icon">
              <a href="https://github.com/guialmeida10" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
            <div className="linkedin-icon"> 
              <a href="https://www.linkedin.com/in/guilherme-almeida-192621314/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </div>
        </motion.div>

        {/* LADO DIREITO: FOTO E TECHS */}
        <motion.div 
          className="home-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-wrapper">
            <div className="image-border">
              <img src={guig} alt="Guilherme Almeida" className="home-img" />
            </div>
            
            {/* Elemento flutuante (Card Projetos) */}
            <motion.div 
              className="floating-card"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span>💻⚡🎮🎯🤖</span>
            </motion.div>
          </div>

          <div className="tech-list">
            {techs.map((tech, index) => (
              <motion.span 
                key={index} 
                className="tech-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                transition={{ 
                  opacity: { duration: 0.5, delay: 0.5 + (index * 0.1) },
                  scale: { duration: 0.5, delay: 0.5 + (index * 0.1) },
                  y: {
                    duration: 3 + (index % 2),
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -5,
                  backgroundColor: "rgba(99, 102, 241, 0.15)", 
                  boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.6), 0 0 10px rgba(99, 102, 241, 0.5)", 
                  borderColor: "#6366f1",
                  color: "#ffffff"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}