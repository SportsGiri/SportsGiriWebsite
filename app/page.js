"use client";
// import Link from "next/link";
import "./page.css";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";
import {
  BrainIcon,
  TrophyIcon,
  HeadphonesIcon,
  ShoppingCartIcon,
  ClockIcon,
  FlagIcon,
  MegaphoneIcon,
  NewspaperIcon,
  UserIcon,
  PhoneIcon,
  MailIcon,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="flex items-center gap-2 cursor-pointer	"
            // prefetch={false}
          >
            {/* <TargetIcon className="w-6 h-6 text-primary" /> */}
            <Image src="/logo.svg" width={160} height={60}/>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="text-sm font-medium hover:text-primary cursor-pointer relative transition-transform custom-uplift"
            >
              Home
            </Link>
            <Link
              to="our-story"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="text-sm font-medium hover:text-primary cursor-pointer relative transition-transform custom-uplift"
            >
              Our Story
            </Link>
            <Link
              to="app-promo"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="text-sm font-medium hover:text-primary cursor-pointer relative transition-transform custom-uplift"
            >
              App
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="text-sm font-medium hover:text-primary cursor-pointer relative transition-transform custom-uplift"
            >
              Contact
            </Link>
          </nav>
          <div className="hidden md:inline-flex px-10"></div>
          {/* <Button className="hidden md:inline-flex">
            <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="text-sm font-medium cursor-pointer relative"
              >
              Contact us
            </Link>
          </Button> */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {/* <MenuIcon className="w-6 h-6" /> */}
              {mobileMenuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col items-center gap-4 py-4">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="text-sm font-medium hover:text-primary cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="our-story"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="text-sm font-medium hover:text-primary cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Story
              </Link>
              <Link
                to="app-promo"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-sm font-medium hover:text-primary cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                App
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="text-sm font-medium hover:text-primary cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>
      <section
        id="home"
        className="pt-16 md:pt-20 bg-gradient-to-b from-background to-muted min-h-screen flex flex-col items-center justify-center relative"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/trimmed.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center absolute">
          <div className="max-w-3xl space-y-6">
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight"
              style={{ color: "#FF4500" }}
            >
              Elevate Your Shooting Sports Experience
            </h1>
            <p
              className="text-muted-foreground text-lg md:text-xl"
              style={{ color: "#FFFFE0" }}
            >
              Our app connects you with coaches, organizes virtual events, and
              helps you track your progress.
            </p>
            {/* <div className="flex items-center justify-center gap-4 mt-8">
              <a
                href="https://play.google.com/store/apps/details?id=your.app.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/google1.png"
                  alt="Download on the App Store"
                  width={160}
                  height={60}
                  className="h-12 w-auto"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/your-app-name/id123456789"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/apple.png"
                  alt="Download on the App Store"
                  width={160}
                  height={60}
                  className="h-12 w-auto"
                />
              </a>
            </div> */}
          </div>
        </div>
        <div
          className="absolute bottom-8 animate-bounce cursor-pointer"
          style={{ color: "#FFFFE0" }}
        >
          <Link
            to="our-story"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="text-base font-medium hover:text-primary flex items-center flex-col"
            // prefetch={false}
            // style={{ fontSize: "1.1rem" }}
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mt-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </Link>
          <style>
            {`
              .text-base:hover {
                color: #E0FFFF;
              }
            `}
          </style>
        </div>
      </section>
      <section
        id="our-story"
        className="flex-1 min-h-screen bg-muted flex items-center justify-center pt-6"
      >
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex flex-col justify-center order-2 sm:order-1 md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Our Story
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mt-4">
              Sports shooting is fast emerging in India, both as an Olympic
              event as well as for job and recreation. However , it is a very
              costly game. SG aims to democratise this event and make it
              affordable for the masses by aggregating the professional
              requirements of all the stake holders viz <b>shooters</b>,{" "}
              <b>coaches</b>, <b>ranges</b>, <b>OEM</b> and <b>merchandisers</b>{" "}
              by infusion of technology.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl mt-4">
              It aims to create an ecosystem wherein the shooting community
              augments mutual learnings. SG aims to mentor all efforts toward
              capacity building in this domain by appropriate technology
              interventions and synergies in efforts at all levels
            </p>
          </div>
          <div className="relative w-full h-[250px] sm:h-[500px] order-1 sm:order-2 md:w-1/2">
            <img
              src="/group2.png"
              alt="Our Story"
              className="w-full h-full object-contain md:object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-muted to-muted/50 opacity-20" />
          </div>
        </div>
      </section>
      <section
        id="app-promo"
        className="flex-1 min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center"
      >
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex flex-col justify-center pt-3 order-1 md:order-2 md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Elevate Your Shooting Experience
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mt-4">
              Our app offers a comprehensive suite of features to enhance your
              shooting journey, from personalized coaching to equipment
              management.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start gap-4">
                <BrainIcon className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Digital Assistant</h3>
                  <p className="text-muted-foreground">
                    Personalized AI coach for every shooter.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TrophyIcon className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Capacity Building</h3>
                  <p className="text-muted-foreground">
                    Improve your skills with tailored training programs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <HeadphonesIcon className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">On-Demand Coaching</h3>
                  <p className="text-muted-foreground">
                    Access expert coaching, including neuroscience techniques.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ShoppingCartIcon className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Equipment Shop</h3>
                  <p className="text-muted-foreground">
                    Purchase gear and accessories with EMI options.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ClockIcon className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Time Management</h3>
                  <p className="text-muted-foreground">
                    Buy practice time at ranges through the app.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FlagIcon className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Tournaments</h3>
                  <p className="text-muted-foreground">
                    Participate in and organize shooting competitions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MegaphoneIcon className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Promotions</h3>
                  <p className="text-muted-foreground">
                    Discover shooter and range promotions, including
                    para-shooter support.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <NewspaperIcon className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">E-Magazine</h3>
                  <p className="text-muted-foreground">
                    Access our monthly digital publication for shooting
                    enthusiasts.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[300px] md:h-[400px] order-2 md:order-1 md:w-1/2">
            <img
              src="/Group1.png"
              width={800}
              height={500}
              alt="App Promo"
              className="w-full h-full object-contain md:object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-background to-background/50 opacity-20" />
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="flex-1 min-h-screen bg-muted flex items-center justify-center"
      >
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mt-4">
              Have a question or want to learn more? Fill out the form or
              contact us directly.
            </p>
            <div className="mt-6 space-y-4 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <UserIcon className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Contact Person</h3>
                  <p>Col Prem Rajpurohit</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PhoneIcon className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+91 7409883594</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MailIcon className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>admin@sportgiri.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[300px] md:h-[400px]">
            <img
              src="/group3.png"
              width={800}
              height={500}
              alt="Contact"
              className="w-full h-full object-contain md:object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-muted to-muted/50 opacity-20" />
          </div>
        </div>
      </section>
      <footer className="bg-background py-8">
        <div className="container mx-auto px-4 md:px-6 text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} SportsGiri Private Limited. All
          rights reserved.
        </div>
      </footer>
    </div>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}