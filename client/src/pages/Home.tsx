/**
 * Estilo Taller de Sistemas: expediente técnico editorial con base marfil,
 * azul tinta, naranja señal, geometría de circuitos y lectura asimétrica.
 */
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Braces,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Download,
  FileBadge2,
  GraduationCap,
  HardDrive,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Wrench,
  X,
} from "lucide-react";

const navItems = [
  { id: "perfil", label: "Perfil" },
  { id: "capacidades", label: "Capacidades" },
  { id: "proyectos", label: "Proyectos" },
  { id: "trayectoria", label: "Trayectoria" },
  { id: "credenciales", label: "Credenciales" },
];

const capabilities = [
  {
    icon: HardDrive,
    number: "01",
    title: "Hardware y soporte técnico",
    level: "Nivel práctico",
    summary:
      "Atención metódica de equipos de escritorio desde el diagnóstico inicial hasta el mantenimiento preventivo.",
    items: [
      "Ensamble y desensamble de computadoras de escritorio.",
      "Diagnóstico básico de RAM, almacenamiento, temperatura y tarjetas de video.",
      "Limpieza general y mantenimiento preventivo de hardware.",
    ],
  },
  {
    icon: Network,
    number: "02",
    title: "Redes y conectividad",
    level: "Fundamentos",
    summary:
      "Práctica con escenarios de red pequeños para comprender conectividad, segmentación y enrutamiento.",
    items: [
      "Diseño de topologías en Cisco Packet Tracer.",
      "Configuración básica de VLANs y routers.",
      "Interpretación de la conectividad por segmentos departamentales.",
    ],
  },
  {
    icon: Braces,
    number: "03",
    title: "Programación y desarrollo",
    level: "Nivel principiante",
    summary:
      "Fundamentos aplicados en proyectos escolares, lógica de programación y exploración de datos.",
    items: [
      "Lógica y prácticas académicas con Python, C# y Java.",
      "Procesamiento de datos y modelos sencillos en Python.",
      "Entornos interactivos básicos en Unity con NavMesh y animación.",
    ],
  },
];

const tools = [
  "Cisco Packet Tracer",
  "Python",
  "C#",
  "Java",
  "Unity",
  "Blockbench",
  "Microsoft Access",
  "Linux Mint",
  "CachyOS",
  "Excel",
  "Word",
];

const projects = [
  {
    index: "P-01",
    category: "Infraestructura · Cisco Packet Tracer",
    title: "Simulación de red escolar",
    description:
      "Configuración de una red pequeña con VLANs departamentales y enrutamiento básico para practicar segmentación y comunicación entre áreas.",
    image: "/manus-storage/irving-leyva-network_8eb62629.jpg",
    alt: "Modelo editorial de una topología de red con nodos conectados",
    tags: ["VLANs", "Routers", "Topologías"],
  },
  {
    index: "P-02",
    category: "Desarrollo · Python",
    title: "Prácticas de datos y clasificación",
    description:
      "Pruebas y scripts escolares con manipulación de datos y aplicación inicial de algoritmos de clasificación, incluyendo Random Forest.",
    image: "/manus-storage/irving-leyva-development_aab3acca.jpg",
    alt: "Composición editorial abstracta sobre datos y árboles de decisión",
    tags: ["Python", "Random Forest", "Datos"],
  },
  {
    index: "P-03",
    category: "Interactividad · Unity",
    title: "Entornos interactivos simples",
    description:
      "Creación de escenas personales con navegación básica mediante NavMesh y animaciones de personajes dentro del motor Unity.",
    image: "/manus-storage/irving-leyva-hardware_34db23eb.jpg",
    alt: "Composición técnica editorial de componentes de computadora",
    tags: ["Unity", "NavMesh", "Animación"],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("perfil");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main [data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-24% 0px -60% 0px", threshold: [0.12, 0.28, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell">
      <header className="mobile-header">
        <a className="brand-lockup" href="#inicio" aria-label="Ir al inicio">
          <img
            src="/manus-storage/irving-leyva-mark_7d4d3b6d.png"
            alt=""
            className="brand-mark"
          />
          <span>IL / 2026</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Cerrar navegación" : "Abrir navegación"}
        >
          {menuOpen ? <X size={19} /> : <Menu size={20} />}
        </button>
        <nav id="mobile-navigation" className={menuOpen ? "mobile-nav is-open" : "mobile-nav"}>
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>
              {item.label}
              <ChevronRight size={16} />
            </a>
          ))}
        </nav>
      </header>

      <div className="page-grid">
        <aside className="side-rail" aria-label="Información y navegación del portafolio">
          <a className="brand-lockup rail-brand" href="#inicio" aria-label="Ir al inicio">
            <img
              src="/manus-storage/irving-leyva-mark_7d4d3b6d.png"
              alt=""
              className="brand-mark"
            />
            <span>IL / 2026</span>
          </a>

          <div className="rail-identity">
            <p className="rail-eyebrow">Portafolio profesional</p>
            <p className="rail-name">Irving Antonio<br />Leyva González</p>
            <p className="rail-role">Ingeniería en Sistemas<br />Computacionales · Jr.</p>
          </div>

          <nav className="rail-nav" aria-label="Secciones del portafolio">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "is-active" : ""}
              >
                <span>0{index + 1}</span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="rail-contact">
            <a href="mailto:blackm3nma@gmail.com">
              <Mail size={16} />
              <span>blackm3nma@gmail.com</span>
            </a>
            <a href="tel:+525566612860">
              <Phone size={16} />
              <span>55 6661 2860</span>
            </a>
            <p><MapPin size={16} /> Ciudad de México</p>
          </div>
        </aside>

        <main>
          <section id="inicio" className="hero" aria-labelledby="hero-title">
            <div className="hero-copy">
              <p className="section-kicker">01 — Perfil profesional</p>
              <div className="status-line"><span /> Disponible para una oportunidad inicial en TI</div>
              <h1 id="hero-title">Diagnosticar.<br /><em>Aprender.</em><br />Dar soporte.</h1>
              <p className="hero-intro">
                Egresado de Ingeniería en Sistemas Computacionales con una base práctica en soporte técnico,
                redes y desarrollo. Busco integrarme a un equipo donde la curiosidad, el orden y la resolución
                paso a paso se conviertan en resultados útiles.
              </p>
              <div className="hero-actions">
                <a className="button-primary" href="mailto:blackm3nma@gmail.com">
                  Contactar por correo <ArrowUpRight size={18} />
                </a>
                <a className="text-link" href="#proyectos">
                  Ver proyectos <ChevronRight size={17} />
                </a>
              </div>
            </div>

            <figure className="hero-visual">
              <img
                src="/manus-storage/irving-leyva-hero-systems_7657d2ff.jpg"
                alt="Estación de diagnóstico técnico con geometrías de computadora y red"
              />
              <figcaption className="visual-stamp">
                <span className="stamp-dot" />
                <span>Perfil Jr.<br />Sistemas &amp; soporte</span>
              </figcaption>
            </figure>

            <div className="hero-facts" aria-label="Datos principales">
              <div><strong>2026</strong><span>Egreso<br />UNIREM</span></div>
              <div><strong>240 h</strong><span>Prácticas<br />profesionales</span></div>
              <div><strong>B1</strong><span>Cambridge<br />English</span></div>
            </div>
          </section>

          <section id="perfil" className="profile-section signal-section" data-section aria-labelledby="perfil-title">
            <div className="section-index">01</div>
            <div className="section-heading">
              <p className="section-kicker">Resumen de perfil</p>
              <h2 id="perfil-title">Una base técnica con disposición para crecer.</h2>
            </div>
            <div className="profile-body">
              <p className="large-copy">
                Mi formación combina conocimientos teóricos y prácticos de nivel básico a intermedio en
                desarrollo de software, mantenimiento de hardware, redes y soporte técnico.
              </p>
              <div className="profile-note">
                <Wrench size={23} />
                <p>
                  Me caracterizo por aprender herramientas nuevas con rapidez, documentar lo necesario y
                  resolver incidencias paso a paso. Mi objetivo es aportar desde un rol inicial de TI,
                  soporte o sistemas.
                </p>
              </div>
            </div>
          </section>

          <section id="capacidades" className="capabilities-section" data-section aria-labelledby="capacidades-title">
            <div className="section-intro-row">
              <div>
                <p className="section-kicker">02 — Conocimientos técnicos</p>
                <h2 id="capacidades-title">Capacidades en construcción, aplicadas con criterio.</h2>
              </div>
              <p className="intro-aside">La claridad sobre el nivel de práctica forma parte de mi forma de trabajar.</p>
            </div>

            <div className="capability-list">
              {capabilities.map((capability) => {
                const Icon = capability.icon;
                return (
                  <article key={capability.number} className="capability-card">
                    <div className="capability-topline">
                      <span>{capability.number}</span>
                      <Icon size={23} strokeWidth={1.7} />
                    </div>
                    <p className="level-label">{capability.level}</p>
                    <h3>{capability.title}</h3>
                    <p className="capability-summary">{capability.summary}</p>
                    <ul>
                      {capability.items.map((item) => <li key={item}><CheckCircle2 size={15} />{item}</li>)}
                    </ul>
                  </article>
                );
              })}
            </div>

            <div className="toolband">
              <p>Herramientas y entornos</p>
              <div>{tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
            </div>
          </section>

          <section id="proyectos" className="projects-section signal-section" data-section aria-labelledby="proyectos-title">
            <div className="section-index">03</div>
            <div className="section-heading project-heading">
              <p className="section-kicker">Proyectos académicos y personales</p>
              <h2 id="proyectos-title">Práctica que aterriza los fundamentos.</h2>
              <p>
                Una selección de ejercicios donde conecto conceptos de infraestructura, datos e interactividad.
              </p>
            </div>

            <div className="project-list">
              {projects.map((project) => (
                <article key={project.index} className="project-card">
                  <div className="project-image-wrap">
                    <img src={project.image} alt={project.alt} />
                    <span>{project.index}</span>
                  </div>
                  <div className="project-copy">
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="trayectoria" className="journey-section" data-section aria-labelledby="trayectoria-title">
            <div className="section-intro-row">
              <div>
                <p className="section-kicker">04 — Trayectoria</p>
                <h2 id="trayectoria-title">Formación con experiencia de apoyo en campo.</h2>
              </div>
            </div>

            <div className="timeline">
              <article className="timeline-item education-item">
                <div className="timeline-date">2026</div>
                <div className="timeline-marker"><GraduationCap size={19} /></div>
                <div className="timeline-content">
                  <p className="timeline-label">Educación</p>
                  <h3>Ingeniería en Sistemas Computacionales</h3>
                  <p className="timeline-org">Universidad de la República Mexicana (UNIREM) · Egresado</p>
                  <p>Formación universitaria enfocada en fundamentos de sistemas, programación, redes y herramientas tecnológicas.</p>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-date">Feb — May<br />2026</div>
                <div className="timeline-marker"><Wrench size={18} /></div>
                <div className="timeline-content">
                  <p className="timeline-label">Prácticas profesionales · 240 horas</p>
                  <h3>CETis 50</h3>
                  <p className="timeline-org">Apoyo administrativo y técnico dentro del plantel.</p>
                  <div className="experience-points">
                    <span>Documentos en Word y Excel</span>
                    <span>Entrega de equipos audiovisuales</span>
                    <span>Atención de incidencias sencillas</span>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section id="credenciales" className="credentials-section signal-section" data-section aria-labelledby="credenciales-title">
            <div className="section-index">05</div>
            <div className="section-heading credentials-heading">
              <p className="section-kicker">Idiomas, cursos y documentos</p>
              <h2 id="credenciales-title">Credenciales disponibles para consulta.</h2>
            </div>

            <div className="credential-grid">
              <article className="credential-card featured-credential">
                <div className="credential-icon"><FileBadge2 size={27} /></div>
                <div>
                  <p className="credential-type">Idioma</p>
                  <h3>Cambridge English: B1 Preliminary</h3>
                  <p>Certificado de inglés · Documento LG0000012881</p>
                </div>
                <a href="/manus-storage/LG0000012881_904fef8f.pdf" target="_blank" rel="noreferrer" className="credential-link">
                  Ver certificado <ArrowUpRight size={17} />
                </a>
              </article>

              <article className="credential-card">
                <div className="credential-icon"><Cpu size={27} /></div>
                <div>
                  <p className="credential-type">Taller · 2026</p>
                  <h3>OQI-Hackathon: Cómputo Cuántico</h3>
                  <p>Participación confirmada · Folio OQI-153</p>
                </div>
                <a href="/manus-storage/Confirmacion_OQI-153_2d9e85bb.pdf" target="_blank" rel="noreferrer" className="credential-link">
                  Ver confirmación <ArrowUpRight size={17} />
                </a>
              </article>

              <article className="credential-card credential-note">
                <div className="credential-icon"><Network size={27} /></div>
                <div>
                  <p className="credential-type">Formación complementaria · 2026</p>
                  <h3>Cursos introductorios de redes</h3>
                  <p>Cisco Networking Academy · Fundamentos para reforzar el trabajo con conectividad y topologías.</p>
                </div>
              </article>
            </div>
          </section>

          <section className="contact-section" aria-labelledby="contacto-title">
            <div className="contact-symbol"><img src="/manus-storage/irving-leyva-mark_7d4d3b6d.png" alt="" /></div>
            <p className="section-kicker">Siguiente paso</p>
            <h2 id="contacto-title">¿Hablamos sobre cómo puedo apoyar a su equipo?</h2>
            <p>Estoy disponible para oportunidades iniciales en tecnología, soporte técnico o sistemas.</p>
            <div className="contact-actions">
              <a className="button-primary" href="mailto:blackm3nma@gmail.com">Escribir a Irving <Mail size={18} /></a>
              <a className="contact-phone" href="tel:+525566612860"><Phone size={17} /> 55 6661 2860</a>
            </div>
          </section>

          <footer className="site-footer">
            <p>© {new Date().getFullYear()} Irving Antonio Leyva González</p>
            <a href="#inicio"><Download size={15} /> Volver al inicio</a>
          </footer>
        </main>
      </div>
    </div>
  );
}
