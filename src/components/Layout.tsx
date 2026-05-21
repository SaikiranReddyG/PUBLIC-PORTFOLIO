import { Outlet, useLocation, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const routeIndexMap: Record<string, number> = {
  "/": 0,
  "/projects": 1,
  "/skills": 2,
  "/education": 3,
  "/about": 4,
  "/contact": 5,
};

const mainPages = [
  { path: "/", id: "home", label: "HOME", tag: "SYS_CORE_INIT" },
  { path: "/projects", id: "projects", label: "PROJECTS", tag: "PROJ_REPO" },
  { path: "/skills", id: "skills", label: "SKILLS", tag: "SKILL_MATRIX" },
  { path: "/education", id: "education", label: "EDUCATION", tag: "EDU_LOGS" },
  { path: "/about", id: "about", label: "ABOUT", tag: "ABOUT_DOS" },
  { path: "/contact", id: "contact", label: "CONTACT", tag: "SYS_TERM_EST" },
];

const getRouteIndex = (path: string) => {
  if (path.startsWith("/projects/")) return 1.5;
  return routeIndexMap[path] ?? 0;
};

export default function Layout() {
  const { pathname, hash } = useLocation();
  const [direction, setDirection] = useState(0);
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    const prevIndex = getRouteIndex(prevPathRef.current);
    const currentIndex = getRouteIndex(pathname);

    if (prevIndex < currentIndex) {
      setDirection(1); // Moving Right
    } else if (prevIndex > currentIndex) {
      setDirection(-1); // Moving Left
    }

    prevPathRef.current = pathname;

    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300); // Wait for transition
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  const variants = {
    initial: (direction: number) => ({
      x: direction > 0 ? "50%" : direction < 0 ? "-50%" : 0,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-50%" : direction < 0 ? "50%" : 0,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  const currentPageIdx = mainPages.findIndex((page) => page.path === pathname);
  const isSubProject = pathname.startsWith("/projects/") && pathname !== "/projects";

  // Previous page computer
  let prevPage = mainPages[0];
  if (isSubProject) {
    prevPage = { path: "/projects", label: "PROJECTS", id: "projects", tag: "BACK_TO_REPO" };
  } else if (currentPageIdx > 0) {
    prevPage = mainPages[currentPageIdx - 1];
  } else {
    // Wrap around to Last (Contact) if at Home
    prevPage = mainPages[mainPages.length - 1];
  }

  // Next page computer
  let nextPage = mainPages[0];
  if (isSubProject) {
    nextPage = mainPages[2]; // Skills is index 2
  } else if (currentPageIdx < mainPages.length - 1) {
    nextPage = mainPages[currentPageIdx + 1];
  } else {
    // Wrap around to Home if at Last (Contact)
    nextPage = mainPages[0];
  }

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-background-custom text-on-background-custom">
      <Navbar />

      {/* DESKTOP FLOATING INTERACTIVE SIDE DIRECTIONS */}
      <div className="hidden sm:block">
        {/* PREVIOUS PAGE TRIGGER */}
        <Link
          to={prevPage.path}
          className="fixed left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 group flex items-center opacity-30 hover:opacity-100 transition-opacity duration-300"
          title={`Load Previous Page: ${prevPage.label}`}
        >
          {/* Cyber Line Decorator */}
          <div className="absolute left-0 w-0.5 h-6 bg-on-background-custom/30 group-hover:bg-primary-custom transition-all duration-300" />
          
          <div className="ml-2 flex items-center gap-1.5 border border-[#3c4a3f]/20 hover:border-primary-custom bg-[#0b0e14]/90 backdrop-blur-sm px-2.5 py-1.5 font-mono select-none rounded-sm">
            <ChevronLeft size={13} className="text-on-background-custom/60 group-hover:text-primary-custom group-hover:-translate-x-0.5 duration-300 transition-transform shrink-0" />
            <span className="font-bold text-[9px] tracking-wider text-on-background-custom/80 group-hover:text-primary-custom transition-colors">
              {prevPage.label}
            </span>
          </div>
        </Link>

        {/* NEXT PAGE TRIGGER */}
        <Link
          to={nextPage.path}
          className="fixed right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 group flex items-center justify-end opacity-30 hover:opacity-100 transition-opacity duration-300"
          title={`Load Next Page: ${nextPage.label}`}
        >
          <div className="mr-2 flex items-center gap-1.5 border border-[#3c4a3f]/20 hover:border-secondary-custom bg-[#0b0e14]/90 backdrop-blur-sm px-2.5 py-1.5 font-mono select-none rounded-sm">
            <span className="font-bold text-[9px] tracking-wider text-on-background-custom/80 group-hover:text-secondary-custom transition-colors">
              {nextPage.label}
            </span>
            <ChevronRight size={13} className="text-on-background-custom/60 group-hover:text-secondary-custom group-hover:translate-x-0.5 duration-300 transition-transform shrink-0" />
          </div>

          {/* Cyber Line Decorator */}
          <div className="absolute right-0 w-0.5 h-6 bg-on-background-custom/30 group-hover:bg-secondary-custom transition-all duration-300" />
        </Link>
      </div>

      {/* MOBILE HUD FLOAT CONTROLLERS (THUMB DIRECTIVES) */}
      <div className="flex sm:hidden fixed bottom-6 left-0 right-0 justify-between px-6 z-40 gap-4">
        <Link
          to={prevPage.path}
          className="flex items-center gap-2 border border-[#3c4a3f]/50 bg-[#0a0e17]/95 backdrop-blur-md px-4 py-2 text-[10px] font-mono font-bold uppercase text-on-background-custom/80 hover:text-primary-custom hover:border-primary-custom/70 transition-all rounded shadow-2xl active:scale-95"
        >
          <ChevronLeft size={13} className="text-primary-custom" />
          <span>PREV</span>
        </Link>

        <Link
          to={nextPage.path}
          className="flex items-center gap-2 border border-[#3c4a3f]/50 bg-[#0a0e17]/95 backdrop-blur-md px-4 py-2 text-[10px] font-mono font-bold uppercase text-on-background-custom/80 hover:text-secondary-custom hover:border-secondary-custom/70 transition-all rounded shadow-2xl active:scale-95"
        >
          <span>NEXT</span>
          <ChevronRight size={13} className="text-secondary-custom" />
        </Link>
      </div>

      <main className="flex-grow relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={pathname}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
