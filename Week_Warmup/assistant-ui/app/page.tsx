import { Container } from "@/components/container";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="layout">
      <Navbar></Navbar>

      <Container>
        <Hero></Hero>
      </Container>
    </div>
  );
}
