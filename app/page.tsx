"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ThemeToggle } from "@/components/theme-toggle";
import { ModeToggle } from "@/components/mode-toggle";
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
  const [mode, setMode] = useState<"ordering" | "delivering">("ordering");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Indian phone number validation (+91 followed by 10 digits)
  const validatePhone = (value: string) => {
    const phoneRegex = /^\+91[6-9][0-9]{9}$/;
    if (!phoneRegex.test(value)) {
      setPhoneError("Please enter a valid Indian phone number (+91XXXXXXXXXX)");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    validatePhone(e.target.value);
  };

  // Apply mode-specific class to the document root
  useEffect(() => {
    document.documentElement.classList.remove("ordering", "delivering");
    document.documentElement.classList.add(mode);
  }, [mode]);

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
        <ModeToggle mode={mode} setMode={setMode} />


        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10 transform scale-150"></div>
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Image
                className="w-96"
                src="/logo.png"
                alt="3 Delight Milk - Fresh Indian Dairy"
                width={384}
                height={384}
                priority
              />
            </div>
            <p className="text-xl md:text-2xl mb-8 text-foreground/80">
              {mode === "ordering"
                ? "Fresh, pure milk delivered daily in eco-friendly glass bottles across Anantapur"
                : "Join our team to deliver fresh milk to happy customers in India"}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-foreground text-background px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
                <TbBikeFilled className="w-5 h-5" />
                {mode === "ordering" ? "Start Delivery" : "Join as a Delivery Partner"}
              </button>
              <button className="border-2 border-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-foreground hover:text-background transition-all shadow-lg">
                Learn More
              </button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 bg-background/50 px-4 py-2 rounded-full">
                <FaUsers className="w-5 h-5 text-foreground" />
                <span>
                  {mode === "ordering" ? "50+ Happy Customers" : "Join 20+ Delivery Partners"}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-background/50 px-4 py-2 rounded-full">
                <FaClock className="w-5 h-5 text-foreground" />
                <span>{mode === "ordering" ? "Daily Fresh Delivery" : "Flexible Work Hours"}</span>
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
            {mode === "ordering" ? "Trace Back Our Fresh Journey" : "Your Delivery Journey"}
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
                <FaGlassWhiskey className="w-16 sm:w-32 h-16 sm:h-32 mx-auto text-foreground transition-transform group-hover:rotate-12" />
                <div className="absolute inset-0 animate-ping opacity-75">
                  <FaGlassWhiskey className="w-16 sm:w-32 h-16 sm:h-32 mx-auto text-foreground/50" />
                </div>
              </div>
              <h3 className="text-sm sm:text-2xl font-bold mb-2">
                {mode === "ordering" ? "Premium Glass Bottles" : "Pick Up Bottles"}
              </h3>
              <p className="text-foreground/70 text-xs sm:text-base">
                {mode === "ordering"
                  ? "Sustainable & reusable, inspired by Indian traditions"
                  : "Collect from our hubs in Mumbai, Delhi, and Bengaluru"}
              </p>
              {mode === "ordering" && (
                <div className="mt-4 hidden sm:flex justify-center gap-2">
                  <div className="bg-foreground/10 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm animate-pulse">
                    1L
                  </div>
                  <div className="bg-foreground/10 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm animate-pulse delay-150">
                    500mL
                  </div>
                  <div className="bg-foreground/10 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm animate-pulse delay-300">
                    250mL
                  </div>
                </div>
              )}
            </div>

            {/* Stage 2: Packing */}
            <div className="packing-stage stage-item text-center opacity-0 relative z-10">
              <div className="relative mb-6 group">
                <FaBox className="w-16 sm:w-32 h-16 sm:h-32 mx-auto text-foreground transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-sm sm:text-2xl font-bold mb-2">
                {mode === "ordering" ? "Hygienic Packing" : "Check Inventory"}
              </h3>
              <p className="text-foreground/70 text-xs sm:text-base">
                {mode === "ordering" ? "Sealed with care" : "Ensure stock before delivery"}
              </p>
            </div>

            {/* Stage 3: Truck/Delivery */}
            <div className="truck-stage stage-item text-center opacity-0 relative z-10">
              <div className="relative mb-6 group">
                <TbBikeFilled className="w-16 sm:w-32 h-16 sm:h-32 mx-auto text-foreground transition-transform group-hover:translate-x-4" />
              </div>
              <h3 className="text-sm sm:text-2xl font-bold mb-2">
                {mode === "ordering" ? "Doorstep Delivery" : "Deliver to Customers"}
              </h3>
              <p className="text-foreground/70 text-xs sm:text-base">
                {mode === "ordering" ? "Free first week trial across India" : "Earn per delivery"}
              </p>
            </div>

            {/* Stage 4: Cow/Farm */}
            <div className="cow-stage stage-item text-center opacity-0 relative z-10">
              <div className="relative mb-6 group">
                <GiCow className="w-16 sm:w-32 h-16 sm:h-32 mx-auto text-foreground transition-transform group-hover:rotate-6" />
              </div>
              <h3 className="text-sm sm:text-2xl font-bold mb-2">
                {mode === "ordering" ? "Farm Fresh Source" : "Support Our Farmers"}
              </h3>
              <p className="text-foreground/70 text-xs sm:text-base">
                {mode === "ordering" ? "Pure from happy cows in Indian farms" : "Be part of our mission"}
              </p>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        {mode === "ordering" && (
          <section className="py-40 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fadeIn">
                Flexible Plans for You
              </h2>
              <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
                Monthly, yearly savings, or buy daily - with free trial sandwiched
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border-2 border-foreground/20 rounded-2xl p-8 hover:border-foreground/50 transition-all hover:scale-105 hover:shadow-2xl group">
                  <div className="flex items-center gap-3 mb-6">
                    <FaDollarSign className="w-8 h-8 text-foreground group-hover:rotate-180 transition-transform" />
                    <h3 className="text-2xl font-bold">Daily Purchase</h3>
                  </div>
                  <p className="text-3xl font-bold mb-4">₹50 per litre</p>
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

                <div className="border-2 border-foreground rounded-2xl p-8 scale-105 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-foreground text-background text-sm px-4 py-1 rounded-bl-2xl">
                    Popular
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                    <FaCalendarAlt className="w-8 h-8 text-foreground" />
                    <h3 className="text-2xl font-bold">Monthly Plan</h3>
                  </div>
                  <p className="text-3xl font-bold mb-4">₹1275 per month (Save 15%)</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="w-5 h-5 text-foreground" /> Daily 1L supply
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

                <div className="border-2 border-foreground/20 rounded-2xl p-8 hover:border-foreground/50 transition-all hover:scale-105 hover:shadow-2xl group">
                  <div className="flex items-center gap-3 mb-6">
                    <FaCalendarAlt className="w-8 h-8 text-foreground group-hover:rotate-360 transition-transform" />
                    <h3 className="text-2xl font-bold">Yearly Plan</h3>
                  </div>
                  <p className="text-3xl font-bold mb-4">₹13500 per year (Save 25%)</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="w-5 h-5 text-foreground" /> Maximum savings
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="w-5 h-5 text-foreground" /> Free trial week
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="w-5 h-5 text-foreground" /> Bonus 5L milk
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
        )}

        {/* Delivery Partners Section */}
        {mode === "delivering" && (
          <section className="py-40 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fadeIn">
                Become a Delivery Partner
              </h2>
              <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
                Join our team, earn flexible income, and deliver freshness daily in Mumbai, Delhi, and Bengaluru
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border-2 border-foreground/20 rounded-2xl p-8 hover:border-foreground/50 transition-all hover:scale-105 hover:shadow-2xl group">
                  <div className="flex items-center gap-3 mb-6">
                    <FaDollarSign className="w-8 h-8 text-foreground group-hover:rotate-180 transition-transform" />
                    <h3 className="text-2xl font-bold">Earn Per Delivery</h3>
                  </div>
                  <p className="text-3xl font-bold mb-4">₹20-50 per delivery</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="w-5 h-5 text-foreground" /> Per-delivery payouts
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="w-5 h-5 text-foreground" /> Monthly bonuses
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="w-5 h-5 text-foreground" /> Weekly payments
                    </li>
                  </ul>
                  <button className="w-full bg-foreground text-background py-3 rounded-full font-semibold hover:opacity-90 transition">
                    Apply Now
                  </button>
                </div>

                <div className="border-2 border-foreground rounded-2xl p-8 scale-105 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-foreground text-background text-sm px-4 py-1 rounded-bl-2xl">
                    Popular
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                    <FaClock className="w-8 h-8 text-foreground" />
                    <h3 className="text-2xl font-bold">Flexible Hours</h3>
                  </div>
                  <p className="text-3xl font-bold mb-4">Work Your Way</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="w-5 h-5 text-foreground" /> Choose your shifts
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="w-5 h-5 text-foreground" /> Morning or evening
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="w-5 h-5 text-foreground" /> Part-time or full-time
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="w-5 h-5 text-foreground" /> No minimum hours
                    </li>
                  </ul>
                  <button className="w-full bg-foreground text-background py-3 rounded-full font-semibold hover:opacity-90 transition">
                    Apply Now
                  </button>
                </div>

                <div className="border-2 border-foreground/20 rounded-2xl p-8 hover:border-foreground/50 transition-all hover:scale-105 hover:shadow-2xl group">
                  <div className="flex items-center gap-3 mb-6">
                    <FaUsers className="w-8 h-8 text-foreground group-hover:rotate-360 transition-transform" />
                    <h3 className="text-2xl font-bold">Join Our Team</h3>
                  </div>
                  <p className="text-3xl font-bold mb-4">Community Focus</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="w-5 h-5 text-foreground" /> Supportive team
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="w-5 h-5 text-foreground" /> Training provided
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="w-5 h-5 text-foreground" /> Growth opportunities
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="w-5 h-5 text-foreground" /> Eco-friendly mission
                    </li>
                  </ul>
                  <button className="w-full bg-foreground text-background py-3 rounded-full font-semibold hover:opacity-90 transition">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              {mode === "ordering" ? "What Makes Us Special" : "Why Deliver with Us"}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-foreground w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transition-transform group-hover:scale-125">
                  {mode === "ordering" ? (
                    <GiMilkCarton className="w-10 h-10 text-background" />
                  ) : (
                    <FaDollarSign className="w-10 h-10 text-background" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {mode === "ordering" ? "Eco Glass Bottles" : "Earn Extra Income"}
                </h3>
                <p className="text-foreground/70">
                  {mode === "ordering"
                    ? "Reusable & planet-friendly, made in India"
                    : "Earn ₹20-50 per delivery"}
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-foreground w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transition-transform group-hover:scale-125">
                  <TbBikeFilled className="w-10 h-192 text-background" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {mode === "ordering" ? "Every Morning Delivery" : "Flexible Delivery Routes"}
                </h3>
                <p className="text-foreground/70">
                  {mode === "ordering"
                    ? "Reliable & fresh across Indian cities"
                    : "Choose routes in Mumbai, Delhi, or Bengaluru"}
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-foreground w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transition-transform group-hover:scale-125">
                  <GiCow className="w-10 h-10 text-background" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {mode === "ordering" ? "Straight from Farm" : "Support Local Farms"}
                </h3>
                <p className="text-foreground/70">
                  {mode === "ordering" ? "No middlemen, pure Indian milk" : "Help deliver farm-fresh milk"}
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-foreground w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transition-transform group-hover:scale-125">
                  <FaUsers className="w-10 h-10 text-background" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {mode === "ordering" ? "50+ Delighted Families" : "Join Our Community"}
                </h3>
                <p className="text-foreground/70">
                  {mode === "ordering" ? "Join our community in India" : "Be part of a growing Indian team"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center text-foreground">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {mode === "ordering"
                ? "Begin Your Delightful Experience"
                : "Start Delivering Happiness"}
            </h2>
            <p className="text-xl mb-8">
              {mode === "ordering"
                ? "Enjoy free delivery for the entire first week in Mumbai, Delhi, or Bengaluru!"
                : "Sign up today and start earning with flexible hours across India!"}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="w-full md:w-64 relative">
                <input
                  type={mode === "ordering" ? "tel" : "text"}
                  placeholder={mode === "ordering" ? "Your phone number (+91)" : "Your name"}
                  value={mode === "ordering" ? phone : undefined}
                  onChange={mode === "ordering" ? handlePhoneChange : undefined}
                  className="px-6 py-4 rounded-full text-foreground bg-background w-full border-2 border-foreground/40 focus:outline-none focus:ring-4 focus:ring-foreground/50"
                />
                {phoneError && mode === "ordering" && (
                  <p className="text-red-500 text-sm mt-2">{phoneError}</p>
                )}
              </div>
              <button
                className="bg-foreground text-background px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
                disabled={mode === "ordering" && phoneError !== ""}
              >
                {mode === "ordering" ? "Get Started Free" : "Apply to Deliver"}
              </button>
            </div>
            <p className="mt-6 text-foreground/80">
              {mode === "ordering"
                ? "Quick call to set up your plan in India"
                : "We’ll contact you to get started in your city"}
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-4 border-foreground/30 py-6 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">3 Delight Milk</h3>
            <p className="mb-6">
              {mode === "ordering"
                ? "Daily fresh milk in glass bottles, delivered with joy across India"
                : "Deliver fresh milk and join our eco-friendly mission in India"}
            </p>
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
              © 2025 Grow with us. Make your product online.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
