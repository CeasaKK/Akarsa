import { useState } from "react";
import "./IdentitySection.css";

export const IdentitySection = () => {
  const cards = [
    {
      q: "Why should someone choose Akarsa?",
      a: "Because Akarsa blends art, intelligence and cultural strategy to create unforgettable brand experiences.",
    },
    {
      q: "How to start working with Akarsa?",
      a: "Just contact us. We begin with a discovery call to understand your needs and goals.",
    },
    {
      q: "What makes Akarsa different?",
      a: "We merge cinematic storytelling, brand strategy and futuristic design.",
    },
    {
      q: "Does Akarsa provide brand strategy?",
      a: "Yes. From brand identity to brand architecture and positioning.",
    },
    {
      q: "Does Akarsa handle large-scale projects?",
      a: "Absolutely. We take on branding, marketing systems and digital ecosystems.",
    },
    {
      q: "Is Akarsa a design studio or strategy firm?",
      a: "Both. Creativity + Strategy = Akarsa.",
    },
    {
      q: "Does Akarsa work globally?",
      a: "Yes. Our clients are across multiple continents.",
    },
    {
      q: "How long do projects take?",
      a: "Anywhere between 7 to 90 days, depending on the project scope.",
    },
    {
      q: "Do you provide ongoing support?",
      a: "Yes, we offer retainers and long-term support models.",
    },
    {
      q: "What is the first step to collaborate?",
      a: "Message us. We respond within 24 hours.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  const handleHover = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;

    if (x > rect.width / 2) setFlip(true);
    else setFlip(false);
  };

  const next = () => {
    setFlip(false);
    setIndex((i) => (i + 1) % cards.length);
  };

  const prev = () => {
    setFlip(false);
    setIndex((i) => (i - 1 + cards.length) % cards.length);
  };

  return (
    <section id="identity" className="identity-wrapper">

      {/* BACKGROUND VIDEO */}
      <div className="identity-video-wrapper">
        <video
          src="/Timeline123456.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="identity-video"
        />
        <div className="identity-fade" />
      </div>

      {/* CARD AREA */}
      <div className="identity-card-area">

        <div className="identity-arrow" onMouseEnter={prev}>
          &lt;
        </div>

        <div
          className="identity-card"
          onMouseMove={handleHover}
        >
          <div className={`identity-inner ${flip ? "flip" : ""}`}>

            {/* FRONT */}
            <div className="identity-front">
              <div className="identity-question">
                {cards[index].q}
              </div>
            </div>

            {/* BACK */}
            <div className="identity-back">
              <div className="identity-answer">
                {cards[index].a}
              </div>
            </div>

          </div>
        </div>

        <div className="identity-arrow" onMouseEnter={next}>
          &gt;
        </div>

      </div>

      {/* CONTINUOUS PROGRESS BAR */}
      <div className="identity-loader">
        <div
          className="identity-loader-fill"
          style={{ width: `${((index + 1) / cards.length) * 100}%` }}
        />
      </div>
    </section>
  );
};
