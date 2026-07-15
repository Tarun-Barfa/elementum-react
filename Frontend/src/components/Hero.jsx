import Navbar from "./Navbar";
import Highlight from "./ui/Highlight";
import MarkerUnderline from "./ui/MarkerUnderline";
import AvatarCluster from "./ui/AvatarCluster";
import Blob from "./ui/Blob";
import Squiggle from "./ui/Squiggle";

const heroAvatars = [
  { src: "https://i.pravatar.cc/150?img=13", size: "clamp(70px,10vw,140px)", top: "49%", left: "2%", z: 1 },
  { src: "https://i.pravatar.cc/150?img=14", size: "clamp(65px,9vw,130px)", top: "35%", left: "11%", z: 2 },
  { src: "https://i.pravatar.cc/150?img=15", size: "clamp(75px,10vw,150px)", top: "2%", left: "28%", z: 1 },
  { src: "https://i.pravatar.cc/150?img=16", size: "clamp(75px,10vw,150px)", top: "65%", left: "34%", z: 2 },
  { src: "https://i.pravatar.cc/150?img=17", size: "clamp(75px,10vw,150px)", top: "22%", left: "50%", z: 1 },
  { src: "https://i.pravatar.cc/150?img=18", size: "clamp(65px,9vw,135px)", top: "46%", left: "59%", z: 2 },
  { src: "https://i.pravatar.cc/150?img=19", size: "clamp(65px,9vw,135px)", top: "2%", left: "74%", z: 1 },
  { src: "https://i.pravatar.cc/150?img=20", size: "clamp(65px,9vw,135px)", top: "38%", left: "86%", z: 1 },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Navbar />

      <div className="relative max-w-5xl mx-auto text-center px-6 mt-8">
        <h1 className="font-display font-medium text-[2.2rem] sm:text-5xl md:text-6xl leading-tight">
          The <MarkerUnderline>thinkers</MarkerUnderline> and doers were
          changing the <Highlight color="pink">changing</Highlight> the{" "}
          <Highlight color="green">status</Highlight> Quo with
        </h1>

        <Blob className="absolute -right-6 top-4 hidden md:block" />

        <p className="max-w-xl mx-auto mt-6 text-gray-600 text-sm md:text-base">
          We are a team of strategists, designers communicators, researchers.
          Togeather, we belive that progress only happens when you refuse to
          play things safe.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto mt-16 h-[220px] sm:h-[300px] md:h-[380px] px-6">
        <Squiggle className="absolute -left-10 top-0 hidden lg:block" />
        <AvatarCluster avatars={heroAvatars} />
      </div>
    </section>
  );
}