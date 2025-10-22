"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  FaGlassWhiskey,
  FaBox,
  FaCalendarAlt,
  FaDollarSign,
  FaUsers,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import { GiMilkCarton, GiCow } from "react-icons/gi";
import Image from "next/image";
import { TbBikeFilled } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        ".bottle-stage",
        { opacity: 0, x: 300, scale: 0.3, rotation: -180 },
        { opacity: 1, x: 0, scale: 1, rotation: 0, duration: 2, ease: "power2.out" }
      )
        .fromTo(
          ".packing-stage",
          { opacity: 0, x: 300, scale: 0.3, rotation: -180 },
          { opacity: 1, x: 0, scale: 1, rotation: 0, duration: 2, ease: "power2.out" },
          "-=1.5"
        )
        .fromTo(
          ".truck-stage",
          { opacity: 0, x: 300, scale: 0.3, rotation: -180 },
          { opacity: 1, x: 0, scale: 1, rotation: 0, duration: 2, ease: "power2.out" },
          "-=1.5"
        )
        .fromTo(
          ".cow-stage",
          { opacity: 0, x: 300, scale: 0.3, rotation: -180 },
          { opacity: 1, x: 0, scale: 1, rotation: 0, duration: 2, ease: "power2.out" },
          "-=1.5"
        );

      gsap.to(".stage-item", {
        y: "+=10",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 2,
        stagger: 0.5,
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle />

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10 transform scale-150"></div>
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Image
                className="w-96"
                src="/logo.png"
                alt="3 Delight Milk"
                width={384}
                height={384}
                priority
              />
            </div>
            <p className="text-xl md:text-2xl mb-8 text-foreground/80">
              Fresh, pure milk delivered daily in eco-friendly glass bottles
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-foreground text-background px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
                <TbBikeFilled className="w-5 h-5" />
                Start Delivery
              </button>
              <button className="border-2 border-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-foreground hover:text-background transition-all shadow-lg">
                Learn More
              </button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 bg-background/50 px-4 py-2 rounded-full">
                <FaUsers className="w-5 h-5 text-foreground" />
                <span>50+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2 bg-background/50 px-4 py-2 rounded-full">
                <FaClock className="w-5 h-5 text-foreground" />
                <span>Daily Fresh Delivery</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-foreground rounded-full mt-2"></div>
            </div>
          </div>
        </section>

        {/* Scroll Timeline Section */}
        <section ref={timelineRef} className="relative h-screen bg-foreground/40 overflow-hidden">
          <div className="absolute top-10 left-10 text-3xl font-bold text-foreground/70">
            Trace Back Our Fresh Journey
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 h-full px-1 sm:px-10 relative items-center">
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <path
                d="M 20% 50% Q 40% 30%, 50% 50% T 80% 50%"
                fill="none"
                stroke="var(--foreground)"
                strokeWidth="4"
                strokeOpacity="0.2"
              />
            </svg>

            {/* Stage 1: Bottle */}
            <div className="bottle-stage stage-item text-center opacity-0 relative z-10">
              <div className="relative mb-6 group">
                <FaGlassWhiskey className="w-24 sm:w-32 h-24 sm:h-32 mx-auto text-foreground transition-transform group-hover:rotate-12" />
                <div className="absolute inset-0 animate-ping opacity-75">
                  <FaGlassWhiskey className="w-24 sm:w-32 h-24 sm:h-32 mx-auto text-foreground/50" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Premium Glass Bottles</h3>
              <p className="text-foreground/70 text-sm sm:text-base">Sustainable & reusable</p>
              <div className="mt-4 flex justify-center gap-2">
                <div className="bg-foreground/10 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm animate-pulse">
                  1L
                </div>
                <div className="bg-foreground/10 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm animate-pulse delay-150">
                  1/2L
                </div>
                <div className="bg-foreground/10 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm animate-pulse delay-300">
                  1/4L
                </div>
              </div>
            </div>

            {/* Stage 2: Packing */}
            <div className="packing-stage stage-item text-center opacity-0 relative z-10">
              <div className="relative mb-6 group">
                <FaBox className="w-24 sm:w-32 h-24 sm:h-32 mx-auto text-foreground transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Hygienic Packing</h3>
              <p className="text-foreground/70 text-sm sm:text-base">Sealed with care</p>
            </div>

            {/* Stage 3: Truck/Delivery */}
            <div className="truck-stage stage-item text-center opacity-0 relative z-10">
              <div className="relative mb-6 group">
                <TbBikeFilled className="w-24 sm:w-32 h-24 sm:h-32 mx-auto text-foreground transition-transform group-hover:translate-x-4" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Doorstep Delivery</h3>
              <p className="text-foreground/70 text-sm sm:text-base">Free first week trial</p>
            </div>

            {/* Stage 4: Cow/Farm */}
            <div className="cow-stage stage-item text-center opacity-0 relative z-10">
              <div className="relative mb-6 group">
                <GiCow className="w-24 sm:w-32 h-24 sm:h-32 mx-auto text-foreground transition-transform group-hover:rotate-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Farm Fresh Source</h3>
              <p className="text-foreground/70 text-sm sm:text-base">Pure from happy cows</p>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-40 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fadeIn">
              Flexible Plans for You
            </h2>
            <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
              Monthly, yearly savings, or buy daily - with free trial week
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Daily Plan */}
              <div className="border-2 border-foreground/20 rounded-2xl p-8 hover:border-foreground/50 transition-all hover:scale-105 hover:shadow-2xl group">
                <div className="flex items-center gap-3 mb-6">
                  <FaDollarSign className="w-8 h-8 text-foreground group-hover:rotate-180 transition-transform" />
                  <h3 className="text-2xl font-bold">Daily Purchase</h3>
                </div>
                <p className="text-3xl font-bold mb-4">Pay As You Go</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="w-5 h-5 text-foreground" /> Order anytime
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="w-5 h-5 text-foreground" /> Zero commitment
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="w-5 h-5 text-foreground" /> Instant delivery
                  </li>
                </ul>
                <button className="w-full bg-foreground text-background py-3 rounded-full font-semibold hover:opacity-90 transition">
                  Buy Today
                </button>
              </div>

              {/* Monthly Plan */}
              <div className="border-2 border-foreground rounded-2xl p-8 scale-105 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-foreground text-background text-sm px-4 py-1 rounded-bl-2xl">
                  Popular
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <FaCalendarAlt className="w-8 h-8 text-foreground" />
                  <h3 className="text-2xl font-bold">Monthly Plan</h3>
                </div>
                <p className="text-3xl font-bold mb-4">Save 15%</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="w-5 h-5 text-foreground" /> Daily supply
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="w-5 h-5 text-foreground" /> Free week trial
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="w-5 h-5 text-foreground" /> Easy pause
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="w-5 h-5 text-foreground" /> Support priority
                  </li>
                </ul>
                <button className="w-full bg-foreground text-background py-3 rounded-full font-semibold hover:opacity-90 transition">
                  Subscribe Now
                </button>
              </div>

              {/* Yearly Plan */}
              <div className="border-2 border-foreground/20 rounded-2xl p-8 hover:border-foreground/50 transition-all hover:scale-105 hover:shadow-2xl group">
                <div className="flex items-center gap-3 mb-6">
                  <FaCalendarAlt className="w-8 h-8 text-foreground group-hover:rotate-360 transition-transform" />
                  <h3 className="text-2xl font-bold">Yearly Plan</h3>
                </div>
                <p className="text-3xl font-bold mb-4">Save 25%</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="w-5 h-5 text-foreground" /> Maximum savings
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="w-5 h-5 text-foreground" /> Free trial week
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="w-5 h-5 text-foreground" /> Bonus bottles
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="w-5 h-5 text-foreground" /> VIP service
                  </li>
                </ul>
                <button className="w-full bg-foreground text-background py-3 rounded-full font-semibold hover:opacity-90 transition">
                  Annual Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              What Makes Us Special
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-foreground w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transition-transform group-hover:scale-125">
                  <GiMilkCarton className="w-10 h-10 text-background" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Eco Glass Bottles</h3>
                <p className="text-foreground/70">Reusable & planet-friendly</p>
              </div>
              <div className="text-center group">
                <div className="bg-foreground w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transition-transform group-hover:scale-125">
                  <TbBikeFilled className="w-10 h-10 text-background" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Every Morning Delivery</h3>
                <p className="text-foreground/70">Reliable & fresh</p>
              </div>
              <div className="text-center group">
                <div className="bg-foreground w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transition-transform group-hover:scale-125">
                  <GiCow className="w-10 h-10 text-background" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Straight from Farm</h3>
                <p className="text-foreground/70">No middlemen</p>
              </div>
              <div className="text-center group">
                <div className="bg-foreground w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transition-transform group-hover:scale-125">
                  <FaUsers className="w-10 h-10 text-background" />
                </div>
                <h3 className="text-xl font-semibold mb-2">50+ Delighted Families</h3>
                <p className="text-foreground/70">Join our community</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center text-foreground">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Begin Your Delightful Experience
            </h2>
            <p className="text-xl mb-8">Enjoy free delivery for the entire first week!</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <input
                type="tel"
                placeholder="Your phone number"
                className="px-6 py-4 rounded-full text-foreground bg-background w-full border-2 border-foreground/40 md:w-64 focus:outline-none focus:ring-4 focus:ring-foreground/50"
              />
              <button className="bg-foreground text-background px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg">
                Get Started Free
              </button>
            </div>
            <p className="mt-6 text-background/80">Quick call to set up your plan</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-4 border-foreground/30 py-6 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">3 Delight Milk</h3>
            <p className="mb-6">Daily fresh milk in glass bottles, delivered with joy</p>
            <div className="flex justify-center gap-6 text-sm mb-4">
              <a href="#" className="hover:underline">
                Privacy
              </a>
              <a href="#" className="hover:underline">
                Terms
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </div>
            <p className="text-foreground/70">
              © 2025 3 Delight Milk. Pure happiness in every sip.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
