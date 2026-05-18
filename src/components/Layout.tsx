import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const routeIndexMap: Record<string, number> = {
  "/": 0,
  "/projects": 1,
  "/skills": 2,
  "/education": 3,
  "/about": 4,
  "/contact": 5,
};

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

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-background-custom text-on-background-custom">
      <Navbar />
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
