import Hero from "@/components/Hero";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <main
      style={{ backgroundColor: "black !important" }}
      className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        {/* <h1>hello Portfolio</h1> */}
        <FloatingNavbar
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "About", link: "/about", icon: <FaHo /> },
          ]}
        />
        <Hero />
        {/* <Spotlight /> */}
      </div>
    </main>
  );
}
