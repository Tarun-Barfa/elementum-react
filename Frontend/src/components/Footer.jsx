import Blob from "./ui/Blob";
import useScrollReveal from "../hooks/useScrollReveal";

const footerLinks = {
  Company: ["Home", "Studio", "Service", "Blog"],
  "Terms & Policies": ["Privacy Policy", "Terms & Conditions", "Explore", "Accesibility"],
  "Follow Us": ["Instagram", "LinkedIn", "Youtube", "Twitter"],
};

export default function Footer() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <footer
      ref={ref}
      className={`relative bg-footer-bg overflow-hidden ${
        isVisible ? "animate-fadeUp" : "opacity-0"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center relative">
        {/* Curved coral arrows pointing down at heading */}
        <svg
          className="absolute left-1/2 -translate-x-24 -top-2 hidden md:block"
          width="120"
          height="90"
          viewBox="0 0 120 90"
          fill="none"
        >
          <path
            d="M20,0 C20,40 40,60 40,85"
            stroke="var(--color-coral)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M85,0 C85,35 100,55 95,80"
            stroke="var(--color-coral)"
            strokeWidth="2"
            fill="none"
          />
          <path d="M35,78 L40,88 L47,79" stroke="var(--color-coral)" strokeWidth="2" fill="none" />
          <path d="M88,73 L95,82 L101,72" stroke="var(--color-coral)" strokeWidth="2" fill="none" />
        </svg>

        <h2 className="font-display font-medium text-4xl md:text-5xl leading-tight">
          Subscribe to
          <br />
          our newsletter
        </h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          To make your stay special and even more memorable
        </p>

        <button className="mt-8 bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:scale-105 active:scale-95 transition-transform">
          Subscribe Now
        </button>

        <Blob className="absolute right-2 top-8 hidden md:block scale-75" />
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="border-t border-gray-400/40 pt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {Object.entries(footerLinks).map(([heading, items]) => (
            <div key={heading}>
              <p className="font-display font-medium text-base mb-4">{heading}</p>
              <ul className="space-y-2 text-gray-700">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-black transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-display font-medium text-base mb-4">Terms & Policies</p>
            <ul className="space-y-2 text-gray-700">
              <li>1498w Fluton ste, STE 2D Chicgo, IL 63867.</li>
              <li>(123) 456789000</li>
              <li>info@elementum.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}