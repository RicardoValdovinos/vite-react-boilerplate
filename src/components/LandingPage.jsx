import React, { useState, useRef, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import logoImg from "../assets/philonet.png";
import "./LandingPage.css";

const sections = [
  { name: "Home", title: "Home | Philonet", description: "Philonet - A New Friendship Is One Thought Away" },
  { name: "How it works", title: "How it works | Philonet", description: "Philonet works step by step" },
  { name: "About", title: "Projects | Philonet", description: "Explore our projects" },
  { name: "Blogs", title: "Blogs | Philonet", description: "Read the latest blogs" },
  { name: "Sign in", title: "Sign in | Philonet", description: "Get in touch with us" }
];

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);
  const wrapperRef = useRef(null);

  // --- Typewriter state ---
  const [typedText, setTypedText] = useState("");
  const part1 = "philonet";
  const part2 = "A new friendship is one thought away";

  useEffect(() => {
    let index = 0;
    let phase = "typing1";
    let timer;

    const type = () => {
      if (phase === "typing1") {
        if (index <= part1.length) {
          setTypedText(part1.slice(0, index));
          index++;
          timer = setTimeout(type, 80);
        } else {
          phase = "pause1";
          timer = setTimeout(type, 800); // pause after Philonet
        }
      } 
      else if (phase === "pause1") {
        phase = "deleting1";
        index = part1.length;
        timer = setTimeout(type, 50);
      } 
      else if (phase === "deleting1") {
        if (index >= 0) {
          setTypedText(part1.slice(0, index));
          index--;
          timer = setTimeout(type, 50);
        } else {
          phase = "typing2";
          index = 0;
          timer = setTimeout(type, 200); // short pause before line 2
        }
      } 
      else if (phase === "typing2") {
        if (index <= part2.length) {
          setTypedText(part2.slice(0, index));
          index++;
          timer = setTimeout(type, 80);
        }
      }
    };

    type();
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollPos = wrapperRef.current.scrollTop;
    const windowHeight = window.innerHeight;
    const index = Math.round(scrollPos / windowHeight);
    setActiveSection(index);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{sections[activeSection].title}</title>
        <meta name="description" content={sections[activeSection].description} />
      </Helmet>

      {/* Bottom Navbar */}
      <nav className="bottom-navbar">
        <img src={logoImg} alt="Philonet Logo" className="logo" />
        <div className="nav-links">
          {sections.map((item, i) => (
            <span
              key={i}
              className={`nav-item ${activeSection === i ? "active" : ""}`}
              style={{
                color: i === 0 ? "#3F8EFC" : "grey"
              }}
              onClick={() => scrollToSection(i)}
            >
              {item.name}
            </span>
          ))}
        </div>
      </nav>

      {/* Right Side Dots */}
      <div className="dots-navigation">
        {sections.map((sec, i) => (
          <span
            key={i}
            title={sec.name}
            className={`dot ${activeSection === i ? "active" : ""}`}
            onClick={() => scrollToSection(i)}
          />
        ))}
      </div>

      {/* Sections */}
      <div
        className="fullpage-wrapper"
        ref={wrapperRef}
        onScroll={handleScroll}
      >
        {sections.map((sec, i) => (
          <section
            key={i}
            className="section"
            ref={(el) => (sectionRefs.current[i] = el)}
          >
            {i === 0 ? (
              <span className="typewriter">{typedText}</span>
            ) : (
              sec.description
            )}
          </section>
        ))}
      </div>
    </HelmetProvider>
  );
}
