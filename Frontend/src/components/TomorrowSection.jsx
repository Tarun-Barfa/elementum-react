import Highlight from "./ui/Highlight";
import MarkerUnderline from "./ui/MarkerUnderline";
import useScrollReveal from "../hooks/useScrollReveal";

export default function TomorrowSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`relative max-w-6xl mx-auto px-6 py-20 md:py-28 ${
        isVisible ? "animate-fadeUp" : "opacity-0"
      }`}
    >
      <div className="absolute right-0 top-0 w-72 h-72 bg-pink/40 rounded-full blur-3xl -z-10" />

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h2 className="font-display font-medium text-3xl md:text-4xl leading-tight">
            <MarkerUnderline>Tomorrow</MarkerUnderline> should be better than{" "}
            <Highlight color="green">today</Highlight>
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-4 max-w-md">
            We are a team of strategists, designers communicators, researchers.
            Togeather, we belive that progress only happens when you refuse to
            play things safe.
          </p>
          <a href="#" className="inline-flex items-center gap-2 mt-5 text-sm font-medium group">
            <span>Read more</span>
            <span className="w-8 h-px bg-black inline-block transition-all group-hover:w-12" />
          </a>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div
            className="absolute bg-coral"
            style={{
              width: "70px",
              height: "70px",
              top: "-10px",
              right: "40px",
              clipPath: "polygon(0 0, 100% 0, 100% 100%)",
            }}
          />
          <img
            src="https://picsum.photos/id/1005/500/500"
            alt="Team meeting"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mt-16 md:mt-24">
        <div className="relative flex justify-center md:justify-start order-2 md:order-1">
          <div
            className="absolute bg-coral"
            style={{
              width: "50px",
              height: "50px",
              top: "-20px",
              left: "10px",
              clipPath: "polygon(50% 0, 0 100%, 100% 100%)",
            }}
          />
          <div
            className="absolute bg-coral"
            style={{
              width: "60px",
              height: "60px",
              bottom: "-20px",
              right: "20px",
              clipPath: "polygon(50% 0, 0 100%, 100% 100%)",
            }}
          />
          <img
            src="https://picsum.photos/id/1011/500/500"
            alt="Team working"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-lg"
          />
        </div>

        <div className="order-1 md:order-2">
          <h2 className="font-display font-medium text-3xl md:text-4xl leading-tight">
            <Highlight color="green">See</Highlight> how we can help you{" "}
            <MarkerUnderline>progress</MarkerUnderline>
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-4 max-w-md">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>
          <a href="#" className="inline-flex items-center gap-2 mt-5 text-sm font-medium group">
            <span>Read more</span>
            <span className="w-8 h-px bg-black inline-block transition-all group-hover:w-12" />
          </a>
        </div>
      </div>
    </section>
  );
}