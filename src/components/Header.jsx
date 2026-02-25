import { motion } from "framer-motion";
import "./Header.css";
export default function Header() {
  return (
    <motion.header
      className="header"
      initial={{ y: -70, opacity: 0 }} // Ajustado para a altura real do header
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="header-container">
        <h2 className="logo">Guilherme Almeida</h2>
        <nav>
          <a href="#home">Home</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </nav>
      </div>
    </motion.header>
  );
}