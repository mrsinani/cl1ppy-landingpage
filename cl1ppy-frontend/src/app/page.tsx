"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function ClippyLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "🧠",
      title: "AI-Powered Commentary",
      description:
        "Google Gemini analyzes your browsing and provides witty, contextual observations about your digital life.",
    },
    {
      icon: "🎤",
      title: "Voice Synthesis",
      description:
        "ElevenLabs brings Cl1ppy to life with high-quality text-to-speech in multiple voice personalities.",
    },
    {
      icon: "💬",
      title: "Multiple Moods",
      description:
        "Choose from Funny, Encouraging, Productivity, or Demotivating personalities to match your vibe.",
    },
    {
      icon: "⏰",
      title: "Smart Check-ins",
      description:
        "Configurable periodic analysis from every minute to every 30 minutes - you're in control.",
    },
  ];

  const personalities = [
    { emoji: "😄", name: "Funny", desc: "Witty & sarcastic" },
    { emoji: "😊", name: "Encouraging", desc: "Positive & supportive" },
    { emoji: "💼", name: "Productivity", desc: "Focused & practical" },
    { emoji: "😐", name: "Demotivating", desc: "Existentially aware" },
  ];

  const stats = [
    { value: "100%", label: "Open Source" },
    { value: "4", label: "Personalities" },
    { value: "2", label: "AI Models" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden relative">
      {/* Animated background gradient orbs */}
      <div
        className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${
            mousePosition.y * 0.02
          }px)`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-slate-500/30 rounded-full blur-3xl"
        style={{
          transform: `translate(${-mousePosition.x * 0.02}px, ${
            -mousePosition.y * 0.02
          }px)`,
        }}
      />

      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-indigo-500/10"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image
              src="/clippy.png"
              alt="Clippy"
              width={32}
              height={32}
              className="inline-block"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-slate-400 bg-clip-text text-transparent">
              Cl1ppy
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="#features"
              className="hover:text-indigo-400 transition-colors hidden sm:inline"
            >
              Features
            </a>
            <a
              href="#install"
              className="hover:text-indigo-400 transition-colors hidden sm:inline"
            >
              Install
            </a>
            <a
              href="https://github.com/mrsinani/cl1ppy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="relative w-32 h-32 mx-auto animate-bounce drop-shadow-2xl">
              <Image
                src="/clippy.png"
                alt="Clippy"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-slate-400 to-indigo-300 bg-clip-text text-transparent animate-pulse">
            Meet Cl1ppy
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Your AI-Powered Digital Assistant
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto italic">
            &quot;It looks like you&apos;re trying to browse the web. Would you
            like help making questionable life choices?&quot;
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-slate-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/mrsinani/cl1ppy"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-slate-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5 group-hover:animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download for Chrome
            </a>
            <a
              href="https://www.youtube.com/watch?v=dGTLa0BM9Vo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              View Demo
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400 flex-wrap">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-yellow-400 fill-yellow-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
              </svg>
              <span>Free & Open Source</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span>Manifest V3</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Privacy Focused</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 bg-black/20 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Powerful Features
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Everything you need in a modern AI assistant
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border transition-all duration-500 transform hover:scale-105 hover:shadow-xl ${
                  activeFeature === idx
                    ? "border-indigo-500/70 shadow-lg shadow-indigo-500/30 scale-105"
                    : "border-white/10 hover:border-indigo-500/50 hover:shadow-indigo-500/20"
                }`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br from-indigo-500 to-slate-600 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 text-3xl ${
                    activeFeature === idx ? "animate-pulse" : ""
                  }`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personality Showcase */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Choose Your Personality
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Cl1ppy adapts to your mood and workflow
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {personalities.map((personality, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-110 hover:rotate-2 text-center group cursor-pointer hover:shadow-xl hover:shadow-indigo-500/30"
              >
                <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {personality.emoji}
                </div>
                <h3 className="text-xl font-bold mb-2">{personality.name}</h3>
                <p className="text-gray-400 text-sm">{personality.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Todo List Feature */}
      <section className="py-20 px-6 bg-black/20 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Built-in Todo Management
              </h2>
              <p className="text-gray-400 mb-6 text-lg">
                Track your tasks with personality-appropriate commentary from
                Cl1ppy. Whether you need encouragement or a reality check,
                he&apos;s got you covered.
              </p>
              <ul className="space-y-4">
                {[
                  "Add tasks instantly",
                  "Get witty commentary",
                  "Check off completed items",
                  "Sync across devices",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 transform transition-transform hover:translate-x-2"
                  >
                    <svg
                      className="w-5 h-5 text-green-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-slate-500/20 backdrop-blur-sm border border-white/20 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 cursor-pointer" />
                  <span>Build amazing Chrome extension</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg opacity-60">
                  <input type="checkbox" checked className="w-5 h-5" readOnly />
                  <span className="line-through">
                    Procrastinate on social media
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 cursor-pointer" />
                  <span>Actually be productive today</span>
                </div>
                <div className="p-4 bg-indigo-500/20 rounded-lg border border-indigo-500/50 text-sm italic animate-pulse">
                  💬 &quot;I see you&apos;ve completed one task. Should I alert
                  the media?&quot;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section id="install" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 mb-12 text-lg">
            Install Cl1ppy in seconds and bring your favorite assistant back to
            life
          </p>
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-left hover:border-indigo-500/30 transition-colors">
            <ol className="space-y-6">
              {[
                {
                  step: "1",
                  text: "Download the extension from Chrome Web Store",
                  icon: "⬇️",
                },
                {
                  step: "2",
                  text: 'Click "Add to Chrome" to install',
                  icon: "⚡",
                },
                {
                  step: "3",
                  text: "Get your free API keys (Gemini & ElevenLabs)",
                  icon: "🧠",
                },
                {
                  step: "4",
                  text: "Configure your preferences and enjoy!",
                  icon: "✅",
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-slate-600 rounded-full flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 pt-2 text-lg">
                      <span>{item.icon}</span>
                      {item.text}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <a
            href="https://github.com/mrsinani/cl1ppy"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 px-12 py-5 bg-gradient-to-r from-indigo-500 to-slate-600 rounded-full font-semibold text-xl hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto group"
          >
            <svg
              className="w-6 h-6 group-hover:animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Cl1ppy Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 relative z-10">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image src="/clippy.png" alt="Clippy" width={48} height={48} />
            <span className="text-xl font-bold">Cl1ppy</span>
          </div>
          <p className="text-gray-400 mb-6">
            A self-aware revival of everyone&apos;s favorite office assistant
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-400 flex-wrap">
            <a
              href="https://github.com/mrsinani/cl1ppy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://github.com/mrsinani/cl1ppy/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              MIT License
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            © 2025 Cl1ppy. Original Clippy character by Microsoft.
          </p>
        </div>
      </footer>
    </div>
  );
}
