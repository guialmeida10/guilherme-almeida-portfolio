import "./About.css";
import { 
  FaReact, FaNodeJs, FaJs, FaGitAlt, FaCode, 
  FaRocket, FaDatabase 
} from 'react-icons/fa';

export default function About() {
  const experiences = [
    {
      title: "Estagiário de TI",
      company: "Prefeitura Municipal de Oliveira-MG",
      period: "Jan 2025 - Atualmente",
      description: "Atendimento técnico em infraestrutura de redes e servidores, suporte e manutenção de hardware/software. Além de contribuir com automações em sistemas internos, com foco no avanço do setor de Informática."
    },
    {
      title: "Freelancer - Desenvolvimento Web",
      company: "Projetos Pessoais",
      period: "Set 2024 - Atualmente",
      description: "Desenvolvimento de websites e aplicações web utilizando inicialmente HTML, CSS e JavaScript, posteriormente migrando para React, Node.js e bancos de dados."
    },
    {
      title: "Manutenção de Computadores - Softwares e Hardwares",
      company: "Projetos Pessoais",
      period: "Jan 2025 - Atualmente",
      description: "Manutenção de computadores, incluindo formatação, instalação de sistemas operacionais, configuração de redes e reparos de hardwares, por conta própria."
    },
    {
      title: "Diretor de Comunicação",
      company: "CAECOMP - UEMG",
      period: "Jul 2025 - Atualmente",
      description: "Criação de materiais visuais e planejamento estratégico de comunicação para o Centro Acadêmico do curso de Engenharia da Computação."
    },
    {
      title: "Auxiliar Técnico de Robótica",
      company: "FIEMG / SESI",
      period: "Set 2024 - Dez 2024",
      description: "Auxílio em oficinas de robótica para alunos do ensino fundamental em Oliveira-MG."
    }
  ];

  const highlights = [
    {
      id: 1,
      title: "Engenharia de Computação",
      description: "Graduando no 5º período, com foco em desenvolvimento de hardware e software.",
      icon: <FaCode />
    },
    {
      id: 2,
      title: "Fullstack Developer",
      description: "Experiência com React, Node.js e integração com bancos MySQL/PostgreSQL.",
      icon: <FaDatabase />
    },
    {
      id: 3,
      title: "Visão Computacional",
      description: "Pesquisa acadêmica voltada para detecção de objetos e inteligência artificial.",
      icon: <FaRocket />
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">Sobre mim</h2>
          <p className="about-text">
            Sou acadêmico de Engenharia de Computação na UEMG, apaixonado por tecnologia e inovação.
            Tenho experiência em desenvolvimento Fullstack, com ênfase em React e Node.js, além de
            conhecimentos em bancos de dados. Também possuo amplo conhecimento em Arquitetura de Computadores e automações. 
            Atualmente, estou envolvido em
            pesquisas na área de Visão Computacional, focando em detecção de objetos utilizando
            técnicas avançadas de inteligência artificial.
          </p>
        </div>

        <div className="about-cards">
          {highlights.map((item) => (
            <div className="card-item" key={item.id}>
              <div className="card-icon-badge">{item.icon}</div>
              <div className="card-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-section">
          <h3 className="sub-title">Experiência Profissional</h3>
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div className="exp-item" key={index}>
                <div className="exp-header">
                  <h4>{exp.title}</h4>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <span className="exp-company">{exp.company}</span>
                <p className="exp-desc">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}