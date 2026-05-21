import { motion } from "motion/react";
import { Mail, Linkedin, Github, Phone, Terminal } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    { name: "Email", value: "saikiranreddy19565@gmail.com", icon: <Mail size={24} />, link: "mailto:saikiranreddy19565@gmail.com" },
    { name: "LinkedIn", value: "linkedin.com/in/gangula-sai-kiran-reddy", icon: <Linkedin size={24} />, link: "https://www.linkedin.com/in/gangula-sai-kiran-reddy/" },
    { name: "GitHub", value: "github.com/SaikiranReddyG", icon: <Github size={24} />, link: "https://github.com/SaikiranReddyG" },
    { name: "Phone/whatsapp", value: "+33 751147631", icon: <Phone size={24} />, link: "tel:+33751147631" },
  ];

  const highlights = [
    { title: "Hardware-Rooted Security", description: "Applies low-level precision from an electronics background to digital security." },
    { title: "Resource-Constrained Engineering", description: "Brings hardware-level efficiency to software architecture." },
    { title: "End-to-End Systems Thinking", description: "Designs individual tools to work as a unified ecosystem. Connects a network IDS, system monitor, and attack lab into a modular SOC platform operating over a single event contract." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-24">
      <header className="mb-24">
        <h1 className="font-display text-5xl md:text-8xl text-on-background-custom uppercase tracking-tighter font-bold">
          Get in Touch
        </h1>
        <div className="h-2 bg-on-background-custom w-full mt-6"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-6 flex flex-col border-t-2 border-on-background-custom pt-8">
          <h2 className="font-display text-2xl mb-8 uppercase font-bold tracking-tight">CONNECTION VECTORS</h2>
          <div className="flex flex-col">
            {contactMethods.map((method) => (
              <div key={method.name} className="py-6 border-b border-on-background-custom flex flex-col gap-2 group">
                <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest">{method.name}</span>
                <a
                  href={method.link}
                  target={method.link.startsWith('http') ? "_blank" : undefined}
                  rel={method.link.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="font-display text-2xl text-primary-custom group-hover:bg-primary-custom group-hover:text-background-custom transition-all duration-200 w-fit px-2"
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
              Active Node
            </div>
            <h2 className="font-display text-3xl text-on-surface mb-8 border-b-2 border-outline-variant pb-4 uppercase font-bold">
              Why Hire Me
            </h2>
            <ul className="space-y-8">
              {highlights.map((h) => (
                <li key={h.title} className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary-custom mt-2 flex-shrink-0 border border-outline-variant"></div>
                  <div>
                    <h3 className="font-mono text-sm text-on-surface uppercase mb-2 font-bold">{h.title}</h3>
                    <p className="font-sans text-lg text-on-surface-variant leading-relaxed">{h.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 border border-on-background-custom bg-[#121212] p-8 hidden md:block text-primary-custom font-mono text-sm leading-relaxed">
            <pre className="whitespace-pre-wrap">
              <code>{`// Initiate connection protocol
const candidate = new Engineer({
  name: "SAi.G",
  focus: ["Security", "Architecture"],
  status: "Available"
});

candidate.connect();`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
