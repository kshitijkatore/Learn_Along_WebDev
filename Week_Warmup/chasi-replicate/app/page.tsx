import { Container } from "@/components/container";
import {Navbar} from "@/components/navbar";
import { Hero } from "@/components/hero";
import Image from "next/image";
import { Containtes } from "@/components/containtes";

export default function Home() {
  return (
    <div className="layout">
      <Navbar></Navbar>
      <div className="hero-section">
        <Hero></Hero>
      </div>
      <Container>
        <Containtes></Containtes>
      </Container>
    </div>
  )
}
