import Highlight from "./ui/Highlight";
import MarkerUnderline from "./ui/MarkerUnderline";
import AvatarCluster from "./ui/AvatarCluster";
import useScrollReveal from "../hooks/useScrollReveal";

const offers = [
  {
    label: "Office of multiple interest content",
    title: "Colaborative & partnership",
  },
  {
    label: "The hanger US Air force digital experimental",
    title: "We talk about our weight",
  },
  {
    label: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
  },
];

const testimonialAvatars = [
  { src: "https://i.pravatar.cc/150?img=21", size: "50px", top: "0%", left: "6%" },
  { src: "https://i.pravatar.cc/150?img=22", size: "44px", top: "22%", left: "0%" },
  { src: "https://i.pravatar.cc/150?img=23", size: "48px", top: "48%", left: "8%" },
  { src: "https://i.pravatar.cc/150?img=24", size: "44px", top: "2%", left: "88%" },
  { src: "https://i.pravatar.cc/150?img=25", size: "70px", top: "16%", left: "84%" },
  { src: "https://i.pravatar.cc/150?img=26", size: "46px", top: "42%", left: "90%" },
  { src: "https://i.pravatar.cc/150?img=27", size: "76px", top: "58%", left: "80%" },
  { src: "https://i.pravatar.cc/150?img=25", size: "70px", top: "16%", left: "84%" },
  { src: "https://i.pravatar.cc/150?img=26", size: "46px", top: "42%", left: "90%" },
  { src: "https://i.pravatar.cc/150?img=27", size: "76px", top: "58%", left: "80%" },
];

export default function OffersSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`max-w-5xl mx-auto px-6 py-20 md:py-28 ${
        isVisible ? "animate-fadeUp" : "opacity-0"
      }`}
    >
      {/* Offer list */}
      <h2 className="font-display font-medium text-3xl md:text-4xl leading-tight">
        What we <Highlight color="green">can</Highlight>
        <br />
        <MarkerUnderline>offer</MarkerUnderline> you!
      </h2>

      <div className="mt-10 border-t border-gray-200">
        {offers.map((offer, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-2 md:gap-6 items-center py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors px-2 -mx-2 rounded-lg group cursor-pointer"
          >
            <p className="text-xs md:text-sm text-gray-500">{offer.label}</p>
            <p className="font-display font-medium text-xl md:text-2xl">
              {offer.title}
            </p>
            <span className="justify-self-end text-lg transition-transform group-hover:translate-x-2">
              →
            </span>
          </div>
        ))}
      </div>

      {/* Testimonial */}
    <div className="relative mt-24 md:mt-32 h-[420px] flex items-center justify-center">
  <div className="absolute inset-0">
    <AvatarCluster avatars={testimonialAvatars} />
  </div>

  <div className="max-w-lg text-center px-4 relative z-10">

          <h3 className="font-display font-medium text-2xl md:text-3xl mb-8">
            <Highlight color="green">What</Highlight> our customer says{" "}
            <MarkerUnderline>About Us</MarkerUnderline>
          </h3>
          <div className="bg-green/60 rounded-3xl p-8 md:p-10 text-sm md:text-base text-gray-700 leading-relaxed">
            <span className="text-3xl text-gray-400">&ldquo;</span>
            Elementum delivered the site with the timeline as they requested.
            In the end, the client found a 50% increase in traffic within days
            since its launch. They also had an impressive ability to use
            technologies that the company hasn't used, which have also proved
            to be easy to use and reliable
            <span className="text-3xl text-gray-400">&rdquo;</span>
          </div>
        </div>
      </div>
    </section>
  );
}