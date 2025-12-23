"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import LoaderFLIP from "@/components/LoaderFLIP";
import Banner from "@/components/Banner";
import Collabrarors from "@/components/Collabrarors";
import Mens from "@/components/Mens";
import Womens from "@/components/Womens";
import TryOn from "@/components/TryOn";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import TopCategories from "@/components/TopCategories";

export default function Home() {
  const Header = dynamic(() => import('../components/Header'), {
  ssr: false, // Disable server-side rendering
});

  return (
    <>


      <main className="bg-white text-white">
        <Header locname="bangalore"/>
        <Banner />
        <Collabrarors />
        <TopCategories />
        <Mens />
        <Womens />
        <TryOn />
        {/* <HowItWorks /> */}
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
