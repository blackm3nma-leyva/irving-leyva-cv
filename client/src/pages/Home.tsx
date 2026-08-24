/**
 * Estilo CV esencial: una hoja profesional clara, con azul profundo,
 * tipografía editorial sobria y el retrato como ancla personal del encabezado.
 */
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  FileBadge2,
  GraduationCap,
  Mail,
  MapPin,
  Network,
  Phone,
  Wrench,
} from "lucide-react";

const skills = [
  {
    icon: Wrench,
    title: "Soporte y hardware",
    status: "Práctica aplicada",
    items: ["Ensamble, desensamble y limpieza de equipos", "Diagnóstico básico de RAM, almacenamiento y temperatura", "Mantenimiento preventivo de computadoras de escritorio"],
  },
  {
    icon: Network,
    title: "Redes",
    status: "Fundamentos",
    items: ["Topologías en Cisco Packet Tracer", "Configuración básica de VLANs y routers", "Fundamentos de conectividad y segmentación"],
  },
  {
    icon: Code2,
    title: "Programación",
    status: "Nivel inicial",
    items: ["Fundamentos con Python, C# y Java", "Datos y modelos sencillos en Python", "Unity, NavMesh y Blockbench a nivel inicial"],
  },
];

const projects = [
  {
    title: "Simulación de red escolar",
    meta: "Cisco Packet Tracer · VLANs · Routers",
    text: "Ejercicio de configuración de una red pequeña con VLANs departamentales y enrutamiento básico.",
  },
  {
    title: "Prácticas en Python y ciencia de datos",
    meta: "Python · Random Forest · Datos",
    text: "Scripts académicos con manipulación de datos y pruebas iniciales de algoritmos de clasificación.",
  },
  {
    title: "Entornos personales en Unity",
    meta: "Unity · NavMesh · Animación",
    text: "Escenas interactivas simples con navegación básica y animaciones de personajes.",
  },
];

export default function Home() {
  return (
    <div className="cv-page">
      <aside className="technical-rail" aria-label="Datos técnicos del perfil">
        <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663910841957/YPrjsOPjcoKSDYju.png" alt="Monograma técnico de Irving Leyva" />
        <p className="rail-code">IL / CV-26</p>
        <span className="rail-line" />
        <p className="rail-meta">PERFIL JR.<br />SISTEMAS</p>
        <p className="rail-meta bottom">CDMX<br />DISPONIBLE</p>
      </aside>
      <header className="site-header">
        <a href="#inicio" className="wordmark" aria-label="Ir al inicio">
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663910841957/YPrjsOPjcoKSDYju.png" alt="" />
          <span>Irving Leyva</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#perfil">Perfil</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#trayectoria">Trayectoria</a>
        </nav>
        <a className="header-contact" href="mailto:blackm3nma@gmail.com">Contactar <ArrowUpRight size={15} /></a>
      </header>

      <main>
        <section id="inicio" className="hero-section" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow"><span /> Disponible para una oportunidad inicial en TI</p>
            <h1 id="hero-title">Irving Antonio<br /><em>Leyva González</em></h1>
            <p className="role">Egresado en Ingeniería en Sistemas Computacionales <strong>· Nivel Jr.</strong></p>
            <p className="hero-text">
              Construyo mi experiencia desde la práctica en soporte técnico, redes y desarrollo de software.
              Busco integrarme a un equipo donde aprender, documentar y resolver problemas tenga impacto real.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="mailto:blackm3nma@gmail.com">Enviar correo <Mail size={17} /></a>
              <a className="plain-link" href="tel:+525566612860"><Phone size={16} /> 55 6661 2860</a>
            </div>
          </div>

          <figure className="portrait-card">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663910841957/HdPuDvCExpjYMSEj.jpeg" alt="Retrato profesional de Irving Antonio Leyva González" />
            <figcaption><span>CDMX</span><span>2026</span></figcaption>
          </figure>
        </section>

        <section className="quick-facts" aria-label="Información principal">
          <div><MapPin size={18} /><span><strong>Ubicación</strong>Ciudad de México</span></div>
          <div><GraduationCap size={19} /><span><strong>Formación</strong>UNIREM · Egresado 2026</span></div>
          <div><FileBadge2 size={18} /><span><strong>Idiomas</strong>Cambridge English B1</span></div>
        </section>

        <section id="perfil" className="content-section profile-section" aria-labelledby="perfil-title">
          <div className="section-label"><span>01</span><p>Perfil</p></div>
          <div className="section-content">
            <h2 id="perfil-title">Perfil profesional</h2>
            <p className="lead-text">
              Egresado de la carrera de Ingeniería en Sistemas Computacionales por la Universidad de la República Mexicana (UNIREM).
              Cuento con conocimientos teóricos y prácticos de nivel básico a intermedio en desarrollo de software, mantenimiento de hardware, redes y soporte técnico.
            </p>
            <p>
              Me caracterizo por mi disposición para aprender, resolver problemas técnicos paso a paso y adaptarme a diferentes herramientas tecnológicas. Busco una oportunidad inicial en el área de TI, soporte o sistemas.
            </p>
          </div>
        </section>

        <section id="habilidades" className="content-section skill-section" aria-labelledby="habilidades-title">
          <div className="section-label"><span>02</span><p>Habilidades</p></div>
          <div className="section-content">
            <h2 id="habilidades-title">Conocimientos técnicos</h2>
            <div className="skills-grid">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <article className="skill-card" key={skill.title}>
                    <Icon size={23} strokeWidth={1.7} />
                    <p className="skill-status">{skill.status}</p>
                    <h3>{skill.title}</h3>
                    <ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul>
                  </article>
                );
              })}
            </div>
            <p className="tools-line"><strong>Herramientas:</strong> Microsoft Access, Linux Mint, CachyOS, Excel, Word, Cisco Packet Tracer, Unity y Blockbench.</p>
          </div>
        </section>

        <section id="proyectos" className="content-section projects-section" aria-labelledby="proyectos-title">
          <div className="section-label"><span>03</span><p>Portafolio</p></div>
          <div className="section-content">
            <h2 id="proyectos-title">Proyectos académicos y personales</h2>
            <div className="project-list">
              {projects.map((project, index) => (
                <article className="project-row" key={project.title}>
                  <span className="project-number">0{index + 1}</span>
                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-meta">{project.meta}</p>
                    <p>{project.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="trayectoria" className="content-section trajectory-section" aria-labelledby="trayectoria-title">
          <div className="section-label"><span>04</span><p>Trayectoria</p></div>
          <div className="section-content">
            <h2 id="trayectoria-title">Educación y experiencia</h2>
            <div className="timeline">
              <article>
                <p className="timeline-date">2026</p>
                <div>
                  <p className="timeline-type">Educación</p>
                  <h3>Ingeniería en Sistemas Computacionales</h3>
                  <p className="organization">Universidad de la República Mexicana (UNIREM) · Egresado</p>
                </div>
              </article>
              <article>
                <p className="timeline-date">Feb — May 2026</p>
                <div>
                  <p className="timeline-type">Prácticas profesionales · 240 horas</p>
                  <h3>CETis 50</h3>
                  <p className="organization">Apoyo en documentos de Word y Excel, entrega de equipos audiovisuales y atención de incidencias técnicas sencillas.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="content-section credentials-section" aria-labelledby="credenciales-title">
          <div className="section-label"><span>05</span><p>Credenciales</p></div>
          <div className="section-content">
            <h2 id="credenciales-title">Cursos y certificaciones</h2>
            <div className="credential-links">
              <a href="https://files.manuscdn.com/user_upload_by_module/session_file/310519663910841957/gpjxJPmDXquXnfSZ.pdf" target="_blank" rel="noreferrer">
                <FileBadge2 size={22} /><span><strong>Cambridge English: B1 Preliminary</strong>Ver certificado de inglés</span><ArrowUpRight size={18} />
              </a>
              <a href="https://files.manuscdn.com/user_upload_by_module/session_file/310519663910841957/rvGOdVIVURLnjgXX.pdf" target="_blank" rel="noreferrer">
                <BriefcaseBusiness size={22} /><span><strong>OQI-Hackathon: Cómputo Cuántico</strong>Ver confirmación de participación</span><ArrowUpRight size={18} />
              </a>
              <div className="credential-static"><Network size={22} /><span><strong>Cursos introductorios de redes</strong>Cisco Networking Academy · 2026</span></div>
            </div>
          </div>
        </section>

        <section className="contact-band" aria-labelledby="contacto-title">
          <p className="eyebrow light"><span /> Contacto</p>
          <h2 id="contacto-title">Listo para comenzar en un equipo de TI.</h2>
          <p>Me gustaría conversar sobre una vacante de soporte técnico, sistemas o tecnología.</p>
          <div>
            <a className="light-button" href="mailto:blackm3nma@gmail.com">blackm3nma@gmail.com <ArrowUpRight size={17} /></a>
            <a href="tel:+525566612860">55 6661 2860</a>
          </div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Irving Antonio Leyva González</span><span>Portafolio &amp; CV</span></footer>
    </div>
  );
}
