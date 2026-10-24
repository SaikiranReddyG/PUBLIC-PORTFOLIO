import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto w-full" id="home">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-7 flex flex-col gap-8"
          >
            <h1 className="font-display text-6xl md:text-7xl uppercase leading-none font-bold">
              {t("home.name_line1")}
              <br />
              {t("home.name_line2")}
            </h1>
            <p className="font-sans text-xl max-w-2xl border-l-4 border-on-background-custom pl-4 text-on-surface-variant">
              {t("home.tagline")}
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link
                to="/research"
                className="bg-on-background-custom text-background-custom font-mono text-sm px-8 py-3 hover:bg-primary-container transition-colors uppercase border border-on-background-custom"
              >
                {t("home.research_btn")}
              </Link>
              <Link
                to="/contact"
                className="bg-transparent text-on-background-custom font-mono text-sm px-8 py-3 hover:bg-primary-container hover:text-background-custom hover:border-transparent transition-colors uppercase border-2 border-on-background-custom"
              >
                {t("home.contact_btn")}
              </Link>
              <a
                href="https://drive.google.com/file/d/1yJ6pmbUEy-2pgmuI1rMKQPinJJyz9c-k/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-on-background-custom font-mono text-sm px-8 py-3 hover:bg-primary-container hover:text-background-custom hover:border-transparent transition-colors uppercase border-2 border-on-background-custom"
              >
                {t("home.cv_btn")}
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:col-span-5 mt-12 md:mt-0"
          >
            <div className="aspect-[3/4] overflow-hidden group relative">
              <img
                src="/assets/1779058089464.jpeg"
                alt="Saikiran Reddy Gangula"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-110 mix-blend-luminosity group-hover:mix-blend-normal opacity-85 group-hover:opacity-100"
                style={{
                  maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 80%)",
                  WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 80%)"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-custom/70 via-transparent to-background-custom/30 pointer-events-none transition-opacity duration-700 group-hover:opacity-40"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <hr className="border-t-[3px] border-on-background-custom max-w-7xl mx-auto w-full" />
    </div>
  );
}
