import { motion } from "motion/react";
import { Mail, Linkedin, Github, IdCard } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const contactMethods = [
    { name: "Email", value: "saikiranreddy19565@gmail.com", icon: <Mail size={24} />, link: "mailto:saikiranreddy19565@gmail.com" },
    { name: "LinkedIn", value: "linkedin.com/in/gangula-sai-kiran-reddy", icon: <Linkedin size={24} />, link: "https://www.linkedin.com/in/gangula-sai-kiran-reddy/" },
    { name: "GitHub", value: "github.com/SaikiranReddyG", icon: <Github size={24} />, link: "https://github.com/SaikiranReddyG" },
    { name: "ORCID", value: "0009-0003-6827-5617", icon: <IdCard size={24} />, link: "https://orcid.org/0009-0003-6827-5617" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-24">
      <header className="mb-24">
        <h1 className="font-display text-5xl md:text-8xl text-on-background-custom uppercase tracking-tighter font-bold">
          {t("contact.header_title")}
        </h1>
        <div className="h-2 bg-on-background-custom w-full mt-6"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-6 flex flex-col border-t-2 border-on-background-custom pt-8">
          <h2 className="font-display text-2xl mb-8 uppercase font-bold tracking-tight">{t("contact.connection_vectors")}</h2>
          <div className="flex flex-col">
            {contactMethods.map((method) => (
              <div key={method.name} className="py-6 border-b border-on-background-custom flex flex-col gap-2 group">
                <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest">{method.name}</span>
                <a
                  href={method.link}
                  target={method.link.startsWith('http') ? "_blank" : undefined}
                  rel={method.link.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="font-display text-2xl text-primary-custom group-hover:bg-primary-custom group-hover:text-background-custom transition-all duration-200 w-fit max-w-full break-all px-2"
                >
                  {method.value}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <div className="border-2 border-outline-variant bg-surface-container p-8 md:p-12 relative shadow-[8px_8px_0px_#121c2c]">
            <div className="absolute -top-4 -right-4 bg-primary-custom text-on-primary font-mono text-xs px-3 py-1 uppercase border border-outline-variant font-bold">
              {t("contact.focus_badge")}
            </div>
            <h2 className="font-display text-3xl text-on-surface mb-8 border-b-2 border-outline-variant pb-4 uppercase font-bold">
              {t("contact.focus_title")}
            </h2>
            <ul className="space-y-8">
              {["h1", "h2", "h3"].map((h) => (
                <li key={h} className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary-custom mt-2 flex-shrink-0 border border-outline-variant"></div>
                  <div>
                    <h3 className="font-mono text-sm text-on-surface uppercase mb-2 font-bold">
                      {t(`contact.highlights.${h}_title`)}
                    </h3>
                    <p className="font-sans text-lg text-on-surface-variant leading-relaxed">
                      {t(`contact.highlights.${h}_desc`)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 border border-on-background-custom bg-[#121212] p-8 hidden md:block text-primary-custom font-mono text-sm leading-relaxed">
            <pre className="whitespace-pre-wrap">
              <code>{`// research profile
const researcher = {
  name: "Saikiran Reddy Gangula",
  focus: ["IoT security", "eBPF/XDP", "SDN"],
  now: "University of Padua · SPRITZ",
  orcid: "0009-0003-6827-5617"
};`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
