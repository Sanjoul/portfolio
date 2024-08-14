import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FaHome } from "react-icons/fa";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";

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
            // { name: "About", link: "/about", icon: <FaHome /> },
          ]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
