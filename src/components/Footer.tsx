import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-4 bg-on-background-custom border-t-2 border-primary-custom">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 md:px-16 py-4 max-w-7xl mx-auto">
        <div className="font-display text-2xl font-bold text-background-custom">
          SAi.G
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://github.com/SaikiranReddyG"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm uppercase text-background-custom hover:text-primary-custom transition-all"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gangula-sai-kiran-reddy/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm uppercase text-background-custom hover:text-primary-custom transition-all"
          >
            LinkedIn
          </a>
        </div>
        <div className="font-mono text-sm uppercase text-background-custom opacity-50 text-center md:text-right">
        </div>
      </div>
    </footer>
  );
}
