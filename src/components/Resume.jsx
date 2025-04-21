export default function Resume() {
        const skills = [
        { name: "HTML", images: ["/assets/skills/html5.svg"] },
        { name: "CSS", images: ["/assets/skills/css.svg", "/assets/skills/bootstrap.svg"] },
        { name: "Python", images: ["/assets/skills/python.svg"] },
        { name: "JavaScript", images: ["/assets/skills/javascript.svg"] },
        { name: "React", images: ["/assets/skills/react.svg"] },
        { name: "Node.js", images: ["/assets/skills/nodedotjs.svg"] },
        { name: "FastAPI", images: ["/assets/skills/fastapi.svg"] },
        { name: "SQL", images: ["/assets/skills/postgresql.svg", "/assets/skills/sqlalchemy.svg", "/assets/skills/sqlite.svg"] },
        { name: "Docker", images: ["/assets/skills/docker.svg"] },
        { name: "Git", images: ["/assets/skills/git.svg"] }
      ];
   
  
    return (
      <section id="resume" className="container my-5">
        <h2 className="text-success">Resume</h2>
        <p><strong>Education:</strong> B.Sc. in Computer Science, HIT (2020-2024)</p>
        <div className="row mt-4">
          <h4>Skills</h4>
          {skills.map((skill) => (
    <div className="skill-card" key={skill.name}>
      {skill.images.map((src, idx) => (
        <img key={idx} src={src} alt={`${skill.name} ${idx}`} width="32" height="32" />
      ))}
      <div style={{ marginTop: "8px", fontWeight: "bold" }}>{skill.name}</div>
    </div>
          ))}
        </div>
        <p className="mt-4"><strong>Languages:</strong> Hebrew (Native), English (Conversational)</p>
        <p><strong>Volunteer:</strong> Perach Scholarship (2020-2023)</p>
      </section>
    );
  }
  