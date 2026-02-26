import "./Projects.css";


export default function Projects() {
  const projects = [
    { id: 1, title: "Projeto TO-DO-LIST", tech: "HTML • CSS • JavaScript", desc: "Lista de tarefas com CRUD completo.", img: "./src/assets/to-do-list.jpeg", github: "https://github.com/guialmeida10/to-do-list", link: "https://guialmeida10.github.io/to-do-list /" },
    { id: 2, title: "Projeto Quiz Futebol", tech: "HTML • CSS • JavaScript", desc: "Quiz de Futebol com perguntas e respostas.", img: "./src/assets/quiz.jpeg", github: "https://github.com/guialmeida10/Quiz-Futebol", link: "https://guialmeida10.github.io/Quiz-Futebol/" },
    { id: 3, title: "Projeto Store-System", tech: "React.js • Node.js • MySQL", desc: "Tela de login e CRUD de produtos.", img: "./src/assets/store-system.jpeg", github: "https://github.com/guialmeida10/store-system", link: "https://guialmeida10.github.io/store-system/" },
    { id: 4, title: "Projeto GuiLinks", tech: "React.js • Node.js • MySQL", desc: "Árvore de links ", img: "./src/assets/guilinks.jpeg", github: "https://github.com/guialmeida10/GuiLinks", link: "https://guialmeida10.github.io/GuiLinks/" },
    { id: 5, title: "Projeto Fisio System", tech: "React.js • Node.js • MySQL", desc: "Aplicação de músicas com React.", img: "./src/assets/trybetunes.jpeg", github: "https://github.com/guialmeida10/trybetunes", link: "https://guialmeida10.github.io/trybetunes/" }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Meus Projetos</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.img} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div className="overlay" onClick={() => window.open(project.link)}>Ver detalhes</div>
              </div>
              <div className="project-info">
                <span className="project-tech">{project.tech}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-demo">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}