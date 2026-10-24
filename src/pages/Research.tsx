import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const ORCID_ID = "0009-0003-6827-5617";

export default function Research() {
  const { t } = useTranslation();

  const goals = ["goal_1", "goal_2", "goal_3"];
  const interests = ["interest_1", "interest_2", "interest_3", "interest_4"];
  const tags = ["MATTER", "THREAD", "eBPF/XDP", "LINUX KERNEL"];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-24">
      {/* Header */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
        <div className="md:col-span-4">
          <h1 className="font-display text-5xl md:text-7xl uppercase font-bold text-on-background-custom">
            {t("research.header_title")}
          </h1>
        </div>
        <div className="md:col-span-8 flex items-end">
          <p className="font-sans text-xl border-l-2 border-on-background-custom pl-4 max-w-2xl text-on-surface-variant">
            {t("research.header_desc")}
          </p>
        </div>
      </section>

      {/* Current project */}
      <motion.article
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-8 border-t-2 border-on-background-custom mb-24"
      >
        <div className="md:col-span-4">
          <div className="font-mono text-sm mb-4 uppercase text-primary-custom">
            {t("research.current_label")} · {t("research.current_period")}
          </div>
          <div className="flex items-start gap-2 font-mono text-sm text-on-surface-variant uppercase mb-4">
            <MapPin size={18} className="shrink-0 mt-0.5" />
            <span>{t("research.current_org")}</span>
          </div>
          <p className="font-mono text-xs text-on-surface-variant uppercase opacity-70">
            {t("research.current_supervisor")}
          </p>
        </div>

        <div className="md:col-span-8">
          <h2 className="font-display text-3xl md:text-4xl text-on-background-custom mb-6 font-bold">
            {t("research.current_title")}
          </h2>
          <p className="font-sans text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
            {t("research.current_desc")}
          </p>

          <h3 className="font-mono text-sm text-on-surface-variant uppercase mb-4 tracking-widest">
            {t("research.goals_title")}
          </h3>
          <ul className="space-y-4 mb-6 max-w-2xl">
            {goals.map((g) => (
              <li key={g} className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary-custom mt-2 flex-shrink-0 border border-outline-variant"></div>
                <span className="font-sans text-lg text-on-surface-variant leading-relaxed">{t(`research.${g}`)}</span>
              </li>
            ))}
          </ul>
          <p className="font-sans text-sm text-on-surface-variant opacity-70 mb-8">{t("research.goals_note")}</p>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-3 py-1.5 uppercase border-2 bg-on-background-custom text-background-custom border-on-background-custom"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.article>

      {/* Publications */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-8 border-t-2 border-on-background-custom mb-24">
        <div className="md:col-span-4">
          <h2 className="font-display text-2xl uppercase font-bold text-on-background-custom">
            {t("research.pubs_title")}
          </h2>
        </div>
        <div className="md:col-span-8">
          <div className="border border-outline-variant bg-surface-container p-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs px-2 py-1 uppercase bg-primary-custom text-on-primary border border-outline-variant font-bold">
                {t("research.pub_status")}
              </span>
              <span className="font-mono text-xs text-on-surface-variant uppercase">2026</span>
            </div>
            <h3 className="font-display text-2xl text-on-surface font-bold mb-3 leading-snug">
              SDN-Assisted Intrusion Detection and Automated Mitigation in IoT Networks
            </h3>
            <p className="font-sans text-base text-on-surface-variant mb-2">
              K. Vegi, S. S. Pradeep, <span className="font-bold text-on-surface">S. R. Gangula</span>, S. El Jaouhari
            </p>
            <p className="font-sans text-base text-on-surface-variant italic mb-2">{t("research.pub_venue")}</p>
            <p className="font-sans text-sm text-on-surface-variant opacity-70 mb-6">{t("research.pub_note")}</p>
            <Link
              to="/projects/sdn-iot-detection"
              className="inline-flex items-center gap-2 font-mono text-sm uppercase text-primary-custom hover:underline"
            >
              {t("research.pub_project")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Interests + profiles */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-8 border-t-2 border-on-background-custom">
        <div className="md:col-span-6">
          <h2 className="font-display text-2xl uppercase mb-6 font-bold text-on-background-custom">
            {t("research.interests_title")}
          </h2>
          <ul className="border border-outline-variant bg-surface-container-low">
            {interests.map((i) => (
              <li key={i} className="p-4 border-b border-outline-variant last:border-0 font-sans text-base text-on-surface">
                {t(`research.${i}`)}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <h2 className="font-display text-2xl uppercase mb-6 font-bold text-on-background-custom">
            {t("research.profiles_title")}
          </h2>
          <a
            href={`https://orcid.org/${ORCID_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border border-outline-variant bg-surface-container-low p-4 hover:border-primary-custom transition-colors group"
          >
            <span>
              <span className="block font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-1">ORCID</span>
              <span className="font-mono text-base text-primary-custom">{ORCID_ID}</span>
            </span>
            <ExternalLink size={18} className="text-on-surface-variant group-hover:text-primary-custom" />
          </a>
        </div>
      </section>
    </div>
  );
}
