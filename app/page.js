
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./globals.css";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Intro: headline and supporting text
      gsap.from(".hero-intro", {
        opacity: 0,
        y: 28,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      // Metrics appear one by one
      gsap.from(".metric", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.18,
        delay: 0.25,
        ease: "power2.out",
      });

      // The main visual responds to scrolling
      const mobile = window.matchMedia(
        "(max-width: 600px)"
      ).matches;

      gsap.to(".car-visual", {
        x: mobile ? 35 : 150,
        y: mobile ? -18 : -48,
        scale: mobile ? 0.92 : 0.78,
        rotation: -3,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=750",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const metrics = [
    {
      number: "85%",
      label: "FASTER DIGITAL EXPERIENCES",
    },
    {
      number: "90%",
      label: "FOCUS ON PERFORMANCE",
    },
    {
      number: "100%",
      label: "BUILT WITH CREATIVITY",
    },
  ];

  return (
    <main>
      <section className="hero">
        <nav className="navbar">
          <a href="#home" className="brand">
            itzfizz<span>.</span>
          </a>

          <span className="nav-label">
            CREATIVE DIGITAL STUDIO
          </span>

          <a href="#contact" className="nav-link">
            LET'S TALK ↗
          </a>
        </nav>

        <div className="hero-content" id="home">
          <p className="eyebrow hero-intro">
            DESIGN / DEVELOPMENT / DIGITAL
          </p>

          <h1 className="hero-title hero-intro">
            WELCOME
            <br />
            <span>ITZFIZZ</span>
          </h1>

          <p className="hero-description hero-intro">
            We turn bold ideas into exceptional
            digital experiences.
          </p>

          <div className="metrics">
            {metrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <h2>{metric.number}</h2>
                <p>{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="car-stage">
            <img
              className="car-visual"
              src="/car.jpg"
              alt="Sports car in a cinematic setting"
            />
          </div>

          <p className="scroll-hint">
            <span className="scroll-dot" />
            SCROLL TO EXPLORE
            <span>↓</span>
          </p>
        </div>

        <span className="side-note">
          DIGITAL EXPERIENCES — 2026
        </span>
      </section>

      <section className="next-section" id="contact">
        <p className="section-kicker">
          CREATIVITY MEETS TECHNOLOGY
        </p>

        <h2>
          Make an impact.
          <br />
          Move people.
        </h2>

        <p className="next-description">
          Great digital experiences start with
          thoughtful design and powerful technology.
        </p>

        <a className="contact-link" href="mailto:hello@itzfizz.com">
          LET'S CREATE SOMETHING ↗
        </a>
      </section>

      <footer className="footer">
        <a href="#home" className="brand">
          itzfizz<span>.</span>
        </a>
        <p>DESIGNED WITH PURPOSE.</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
