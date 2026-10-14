import "./App.css";

const projects = [
{
number: "01",
type: "WEB APPLICATION",
name: "Trekking Management",
description:
"A role-based application for managing trekking activities, registrations, bookings, and trek staff.",
tech: ["Python", "Flask", "SQLite"],
link: "#",
},
{
number: "02",
type: "AI APPLICATION",
name: "AI Voice Agent",
description:
"An AI agent built with Python and FastAPI, with a database-backed appointment management system.",
tech: ["Python", "FastAPI", "SQLAlchemy"],
link: "YOUR_AI_AGENT_GITHUB_REPO_URL",
},
];

const skills = [
"Python",
"Flask",
"FastAPI",
"React",
"JavaScript",
"SQL",
"Git & GitHub",
];

function App() {
return ( <div className="portfolio"> <header className="navbar"> <a className="logo" href="#home" aria-label="Krish home">
Krish<span>.</span> </a>

```
    <p className="nav-role">
      Full-Stack Developer
      <br />
      & AI Enthusiast
    </p>

    <nav className="nav-links" aria-label="Main navigation">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>

    <a className="nav-cta" href="#contact">
      Let's Talk <span>↗</span>
    </a>
  </header>

  <main>
    <section className="entrance" id="home">
      <div className="entrance-shade" />

      <nav
        className="door-navigation"
        aria-label="Explore portfolio sections"
      >
        <a
          className="door door-projects"
          href="#projects"
          aria-label="Open Projects"
        />
        <a
          className="door door-about"
          href="#about"
          aria-label="Open About"
        />
        <a
          className="door door-skills"
          href="#skills"
          aria-label="Open Skills"
        />
        <a
          className="door door-contact"
          href="#contact"
          aria-label="Open Contact"
        />
      </nav>

      <div className="hero-intro">
        <p className="availability">
          <span className="status-dot" />
          OPEN TO OPPORTUNITIES
        </p>

        <p className="eyebrow">HELLO, I'M KRISH 👋</p>

        <h1>
          Full-Stack Developer
          <br />
          <span>& AI Enthusiast</span>
        </h1>

        <p className="hero-description">
          I build modern web applications and explore AI to solve
          real-world problems. Turning ideas into useful digital
          experiences.
        </p>

        <div className="hero-actions">
          <a className="button-primary" href="#projects">
            Explore My Work ↗
          </a>
          <a className="button-secondary" href="#contact">
            Contact Me
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="YOUR_GITHUB_PROFILE_URL"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <span>/</span>
          <a
            href="YOUR_LINKEDIN_PROFILE_URL"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      <a className="scroll-indicator" href="#about">
        <span className="scroll-icon">↓</span>
        SCROLL TO EXPLORE
      </a>

      <p className="handwritten dream-note">
        Better Code
        <br />
        Bigger Dreams
      </p>
    </section>

    <section className="section about-section" id="about">
      <div className="section-heading">
        <p className="eyebrow">01 / ABOUT ME</p>
        <h2>
          The person
          <br />
          <span>behind the code.</span>
        </h2>
      </div>

      <div className="about-content">
        <p>
          I'm developing my skills in full-stack development while
          exploring how AI can solve real-world problems. I enjoy
          learning by building projects and improving them step by step.
        </p>

        <p>
          This portfolio is my digital world: a place to share what I'm
          learning, what I'm building, and what I want to build next.
        </p>

        <a className="text-link" href="#projects">
          Explore my projects ↗
        </a>
      </div>
    </section>

    <section className="section projects-section" id="projects">
      <div className="section-heading section-heading-row">
        <div>
          <p className="eyebrow">02 / SELECTED WORK</p>
          <h2>
            Open a project.
            <br />
            <span>Explore how it works.</span>
          </h2>
        </div>
        <span className="section-count">02 PROJECTS</span>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-card-top">
              <span>{project.type}</span>
              <span>{project.number}</span>
            </div>

            <div className="project-visual">
              <span className="project-bracket">{"<"}</span>
              <span className="project-visual-text">
                {project.number === "01"
                  ? "TREK / EXPLORE"
                  : "AI / ASSIST"}
              </span>
              <span className="project-bracket">{" />"}</span>
            </div>

            <h3>{project.name}</h3>
            <p className="project-description">
              {project.description}
            </p>

            <div className="tech-list">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            {project.link.startsWith("http") ? (
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View project on GitHub <span>↗</span>
              </a>
            ) : (
              <span className="project-status">
                Project link to be added
              </span>
            )}
          </article>
        ))}
      </div>
    </section>

    <section className="section skills-section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">03 / MY TOOLKIT</p>
        <h2>
          Tools I use.
          <br />
          <span>Skills I keep growing.</span>
        </h2>
      </div>

      <p className="skills-description">
        Technologies I'm learning and using to bring my ideas to life.
      </p>

      <div className="skills-map">
        {skills.map((skill, index) => (
          <div className="skill-node" key={skill}>
            <span className="skill-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{skill}</span>
            <span className="skill-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>

    <section className="section contact-section" id="contact">
      <p className="eyebrow">04 / CONTACT</p>

      <h2>
        Found the right door?
        <br />
        <span>Let's connect.</span>
      </h2>

      <p className="contact-description">
        Looking for a developer or want to collaborate on a project?
        I'd be happy to connect.
      </p>

      <div className="contact-actions">
        <a
          className="button-primary"
          href="mailto:YOUR_EMAIL_ADDRESS"
        >
          Get in Touch ↗
        </a>

        <a
          className="button-secondary"
          href="YOUR_GITHUB_PROFILE_URL"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </div>

      <div className="contact-decoration" aria-hidden="true">
        {"</>"}
      </div>
    </section>
  </main>

  <footer className="footer">
    <a className="logo" href="#home">
      Krish<span>.</span>
    </a>

    <p>Designed & built by Krish © {new Date().getFullYear()}</p>

    <a href="#home">Back to top ↑</a>
  </footer>
</div>


);
}

export default App;
