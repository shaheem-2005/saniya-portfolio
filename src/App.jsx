import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, HardHat, Layers3, Ruler, Compass, Mail, Linkedin, Github, Menu } from "lucide-react";
import * as THREE from "three";

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

function WireframeBuilding() {
  const group = useRef();
  useFrame((state, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12;
  });
  return (
    <group ref={group} position={[0, -0.15, 0]}>
      <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.22}>
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1.55, 2.1, 1.2]} />
          <meshStandardMaterial color="#10232a" metalness={0.65} roughness={0.3} />
        </mesh>
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(1.58, 2.13, 1.23)]} />
          <lineBasicMaterial color="#65f5d2" />
        </lineSegments>
        {Array.from({ length: 6 }).map((_, i) => (
          <mesh key={i} position={[0, -0.35 + i * 0.31, 0.62]}>
            <boxGeometry args={[1.38, 0.018, 0.025]} />
            <meshBasicMaterial color={i % 2 ? "#4c8fff" : "#65f5d2"} />
          </mesh>
        ))}
        {[-0.5, 0, 0.5].map((x) => [-0.35, 0.2, 0.75, 1.3].map((y) => (
          <mesh key={`${x}-${y}`} position={[x, y, 0.625]}>
            <boxGeometry args={[0.11, 0.15, 0.025]} />
            <meshBasicMaterial color="#4c8fff" />
          </mesh>
        )))}
        <mesh position={[0, -0.62, 0]}>
          <boxGeometry args={[2.2, 0.12, 1.8]} />
          <meshStandardMaterial color="#1c343a" metalness={0.6} roughness={0.4} />
        </mesh>
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <div className="scene" aria-label="Animated 3D wireframe building illustration">
      <Canvas dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[3.4, 2.4, 5.5]} fov={38} />
        <ambientLight intensity={1.1} />
        <directionalLight position={[4, 5, 3]} intensity={2.4} color="#d8fff8" />
        <pointLight position={[-3, 1, -2]} intensity={22} color="#367cff" />
        <Suspense fallback={null}>
          <WireframeBuilding />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} maxPolarAngle={Math.PI / 1.8} minPolarAngle={Math.PI / 3.5} />
      </Canvas>
      <div className="scene-caption"><span className="live-dot" /> STRUCTURE STUDY / 001</div>
    </div>
  );
}

const projects = [
  { number: "01", title: "experimental study on carbon sequestration in clayey soil with alum", type: "Experimental Study", year: "2026", text: "Experimental Study on Carbon Sequestration in Clayey Soil with Alum.", tags: ["Carbon Sequestration", "Clayey Soil", "Alum", "Soil Stabilization", "Environmental Engineering"] }
];

function SectionTitle({ eyebrow, title, number }) {
  return <div className="section-title"><span className="eyebrow">{number} / {eyebrow}</span><h2>{title}</h2></div>;
}

export default function App() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top"><span className="brand-mark">C<span>+</span></span><span>FIELDNOTES<span className="brand-sub">CIVIL / PORTFOLIO</span></span></a>
        <div className="nav-links"><a href="#about">About</a><a href="#work">Selected work</a><a href="#skills">Toolkit</a><a href="#contact">Contact</a></div>
        <a className="nav-cta" href="#contact">LET'S CONNECT <ArrowUpRight size={15} /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-copy">
          <motion.div className="status-pill" initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .15 }}><span className="live-dot" /> CIVIL ENGINEERING STUDENT <span className="pill-year">YEAR 04</span></motion.div>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .2 }}>Designing the<br /><span>world we</span><br />stand on<span className="period">.</span></motion.h1>
          <motion.p className="hero-intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45 }}>Curious about the structures, systems, and sustainable ideas that shape how we live.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .65 }}><a className="button-primary" href="#work">EXPLORE MY WORK <ArrowUpRight size={16} /></a><a className="text-link" href="#about">GET TO KNOW ME <ArrowDown size={14} /></a></motion.div>
          <div className="hero-meta"><span>BASED IN <b>[YOUR CITY]</b></span><span>FOCUS <b>DESIGN / STRUCTURES / SUSTAINABILITY</b></span></div>
        </div>
        <Scene />
        <div className="hero-index"><span>01</span><span className="index-line" /><span>04</span></div>
        <a className="scroll-hint" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
      </section>

      <section className="about section-pad" id="about">
        <motion.div className="about-left" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }}>
          <SectionTitle number="01" eyebrow="THE PERSON BEHIND THE PLANS" title={<>A mind for details.<br /><em>A heart for impact.</em></>} />
          <p className="body-copy">I'm <strong>Saniya E</strong>, a fourth-year civil engineering student interested in the point where technical thinking meets thoughtful design. I enjoy turning complex problems into practical, human-centred solutions.</p>
          <p className="body-copy muted">This portfolio is a snapshot of what I'm learning, what I'm building, and the kind of engineer I hope to become.</p>
          <div className="quick-facts"><div><span>01</span><p>Curious by<br />nature</p></div><div><span>02</span><p>Built on<br />teamwork</p></div><div><span>03</span><p>Future-<br />focused</p></div></div>
        </motion.div>
        <motion.div className="profile-wrap" initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: .7 }} viewport={{ once: true, amount: .25 }}>
          <div className="profile-frame"><img src="/profile.jpg" alt="Portrait of the portfolio owner" onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.parentElement.classList.add("no-photo"); }} /><div className="photo-placeholder"><HardHat size={28} /><span>YOUR PHOTO GOES HERE</span><small>Add your image as public/profile.jpg</small></div><span className="frame-corner top-left" /><span className="frame-corner bottom-right" /></div>
          <div className="profile-label"><span>FIG. 01</span><span>THE ENGINEER IN PROGRESS</span></div>
          <div className="profile-stamp">OPEN<br />TO LEARN<span>↗</span></div>
        </motion.div>
      </section>

      <section className="work section-pad" id="work">
        <div className="work-heading"><SectionTitle number="02" eyebrow="SELECTED WORK" title={<>Ideas in <em>progress.</em></>} /><p className="section-note">Academic projects and explorations. These are editable sample entries—replace them with your actual work.</p></div>
        <div className="project-list">
          {projects.map((project) => <motion.article className="project" key={project.number} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }}>
            <div className="project-number">{project.number}</div><div className="project-main"><div className="project-top"><span>{project.type}</span><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.text}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><a className="project-arrow" href="#contact" aria-label={`Ask about ${project.title}`}><ArrowUpRight /></a>
          </motion.article>)}
        </div>
      </section>

      <section className="toolkit section-pad" id="skills">
        <SectionTitle number="03" eyebrow="CURRENT TOOLKIT" title={<>Learning the <em>language</em> of the built world.</>} />
        <div className="skill-grid">
          <motion.div className="skill-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}><Ruler /><span className="skill-no">01 / DESIGN</span><h3>Technical drawing</h3><p>Reading plans, communicating dimensions, and developing a detail-oriented design process.</p><div className="skill-line"><span style={{width:"72%"}} /></div></motion.div>
          <motion.div className="skill-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{delay:.1}}><Layers3 /><span className="skill-no">02 / STRUCTURES</span><h3>Structural fundamentals</h3><p>Building a strong foundation in loads, materials, and how structures behave.</p><div className="skill-line"><span style={{width:"58%"}} /></div></motion.div>
          <motion.div className="skill-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{delay:.2}}><Compass /><span className="skill-no">03 / IMPACT</span><h3>Sustainable thinking</h3><p>Exploring resilient infrastructure, resource efficiency, and people-first places.</p><div className="skill-line"><span style={{width:"66%"}} /></div></motion.div>
        </div>
        
        <div className="software-tools">
          <span>AUTOCAD</span>
          <span>REVIT</span>
           <span>BIM</span>
           <span>PRIMAVERA</span>
           <span>CIVIL 3D</span>
        </div>


      </section>

      
      <section className="contact section-pad" id="contact">
        <div className="contact-grid" />

          <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
      >
        <span className="eyebrow">04 / THE NEXT CHAPTER</span>

       <h2>
      Let's build<br />
      <em>something</em> meaningful.
       </h2>

    <p className="contact-copy">
      Open to internships, collaborations, site visits, and
      conversations with people who love making things better.
    </p>

    {/* Email button */}
<a
  className="button-primary"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=saniyasona960@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  SAY HELLO <ArrowUpRight size={16} />
</a>
  </motion.div>

  <div className="contact-side">
    <div className="contact-coordinate">
      “Curiosity fuels my ideas, creativity shapes my solutions, and every experiment brings me closer to something extraordinary.”<br />
      
    </div>

    <div className="contact-links">
      {/* Email link */}
     <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=saniyasona960@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <Mail size={17} /> EMAIL <ArrowUpRight size={14} />
  </a>
      {/* LinkedIn link */}
      <a
        href="https://www.linkedin.com/in/saniyae"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={17} /> LINKEDIN <ArrowUpRight size={14} />
      </a>
    </div>
  </div>
</section>

      <footer><a className="brand" href="#top"><span className="brand-mark">C<span>+</span></span><span>FIELDNOTES<span className="brand-sub">Observations from the ground. Ideas for the future</span></span></a><span>Turning blueprints into landmarks · © 2026</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
