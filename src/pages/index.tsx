import Head from "next/head";
import { Navbar } from "../ui/Navbar";
import { Hero } from "../components/home/Hero";
import { SpotSearch } from "../components/home/SpotSearch";
import { MobileAd } from "../components/home/MobileAd";
import { CallToAction } from "../components/home/CallToAction";
import { Footer } from "../ui/Footer";

export default function Home() {
  return (
    <div className="page-container">
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <SpotSearch />
      <MobileAd />
      <CallToAction />
      <Footer />
    </div>
  );
}
