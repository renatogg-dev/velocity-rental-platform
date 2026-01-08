"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Car,
  Calendar,
  Key,
  Zap,
  Mountain,
  Battery,
  Sunset,
  Clock,
  MapPin,
  Star,
  ChevronRight,
  Quote,
} from "lucide-react";

// Category data matching the main app
const categories = [
  {
    id: "Supercars",
    label: "Supercars",
    icon: Zap,
    description: "Pure adrenaline",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80",
  },
  {
    id: "SUVs",
    label: "Luxury SUVs",
    icon: Mountain,
    description: "Command the road",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80",
  },
  {
    id: "Electric",
    label: "Electric",
    icon: Battery,
    description: "Silent power",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80",
  },
  {
    id: "Convertible",
    label: "Convertibles",
    icon: Sunset,
    description: "Open-air freedom",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
  },
  {
    id: "Classic",
    label: "Classic",
    icon: Clock,
    description: "Timeless elegance",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: "Track Day",
    label: "Track Day",
    icon: Zap,
    description: "Born for the circuit",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Marcus Chen",
    location: "Los Angeles, CA",
    text: "Rented a Huracán for my anniversary weekend. The booking was seamless and the car was absolutely immaculate. An unforgettable experience.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sofia Rodriguez",
    location: "Miami, FL",
    text: "VeloCity made my dream of driving a McLaren come true. Professional service from start to finish. Already planning my next rental.",
    rating: 5,
  },
  {
    id: 3,
    name: "James Harrison",
    location: "Las Vegas, NV",
    text: "The Rolls-Royce Cullinan exceeded every expectation. Perfect for our Vegas trip. The attention to detail is unmatched.",
    rating: 5,
  },
];

const steps = [
  {
    number: "01",
    title: "Browse",
    description: "Explore our curated collection of exotic and luxury vehicles",
    icon: Car,
  },
  {
    number: "02",
    title: "Book",
    description: "Select your dates and complete your reservation in minutes",
    icon: Calendar,
  },
  {
    number: "03",
    title: "Drive",
    description: "Pick up your dream car and create memories that last forever",
    icon: Key,
  },
];

// Animated counter component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          let startTime: number;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span id={`counter-${end}`} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Minimal Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-bebas text-2xl tracking-wider text-white">
          VELOCITY
        </Link>
        <Link
          href="/browse"
          className="px-5 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors border border-white/20 rounded-full hover:border-white/40"
        >
          Browse Cars
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-red-500/10 rounded-full" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-red-500 text-sm font-medium tracking-[0.3em] uppercase mb-6">
              Luxury Car Rentals
            </p>
          </div>
          
          <h1 className="font-bebas text-[clamp(4rem,15vw,12rem)] leading-[0.85] tracking-tight mb-8 animate-fade-in-up animation-delay-100">
            VELOCITY.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-red-500">
              UNLEASHED.
            </span>
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
            Experience the extraordinary. From legendary supercars to refined luxury sedans, 
            discover your perfect drive in Los Angeles, Miami, Las Vegas, and New York.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Link
              href="/browse"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.4)]"
            >
              Explore Collection
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 text-white/80 hover:text-white font-medium transition-colors"
            >
              How it works
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-16 bg-gradient-to-r from-red-600 via-red-500 to-red-600">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="font-bebas text-5xl md:text-6xl">
                <AnimatedCounter end={24} suffix="+" />
              </p>
              <p className="text-white/80 text-sm uppercase tracking-wider">Luxury Vehicles</p>
            </div>
            <div className="space-y-2">
              <p className="font-bebas text-5xl md:text-6xl">
                <AnimatedCounter end={4} />
              </p>
              <p className="text-white/80 text-sm uppercase tracking-wider">Major Cities</p>
            </div>
            <div className="space-y-2">
              <p className="font-bebas text-5xl md:text-6xl">
                <AnimatedCounter end={98} suffix="%" />
              </p>
              <p className="text-white/80 text-sm uppercase tracking-wider">Satisfaction Rate</p>
            </div>
            <div className="space-y-2">
              <p className="font-bebas text-5xl md:text-6xl">
                <AnimatedCounter end={500} suffix="+" />
              </p>
              <p className="text-white/80 text-sm uppercase tracking-wider">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Our Fleet
            </p>
            <h2 className="font-bebas text-5xl md:text-7xl tracking-tight">
              BROWSE BY CATEGORY
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={`/browse?category=${category.id}`}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <category.icon className="w-5 h-5 text-red-500" />
                    <span className="text-white/60 text-sm">{category.description}</span>
                  </div>
                  <h3 className="font-bebas text-3xl text-white tracking-wide">
                    {category.label.toUpperCase()}
                  </h3>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight className="w-5 h-5 text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 md:py-32 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-red-500 text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Simple Process
            </p>
            <h2 className="font-bebas text-5xl md:text-7xl tracking-tight">
              HOW IT WORKS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-red-500/50 to-transparent" />
                )}
                
                {/* Step number */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-red-600 to-red-700 shadow-[0_0_60px_rgba(220,38,38,0.3)]">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                
                <p className="font-bebas text-red-500 text-xl tracking-wider mb-2">{step.number}</p>
                <h3 className="font-bebas text-3xl mb-3">{step.title.toUpperCase()}</h3>
                <p className="text-white/60 max-w-xs mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Testimonials
            </p>
            <h2 className="font-bebas text-5xl md:text-7xl tracking-tight">
              WHAT DRIVERS SAY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className="w-10 h-10 text-red-500/30 mb-4" />
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <div className="flex items-center gap-1 text-white/50 text-sm">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="absolute top-8 right-8 flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#111]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-red-900/30 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-bebas text-5xl md:text-8xl tracking-tight mb-6">
            START YOUR
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              JOURNEY TODAY
            </span>
          </h2>
          
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Life is too short for ordinary cars. Book your dream machine and 
            experience driving like never before.
          </p>
          
          <Link
            href="/browse"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
          >
            Browse All Vehicles
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-bebas text-xl tracking-wider">VELOCITY</p>
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} VeloCity. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-white/40 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
