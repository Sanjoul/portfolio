// import { createContext } from "react";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FaHome } from "react-icons/fa";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        {/* <h1>hello Portfolio</h1> */}
        <FloatingNavbar navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
