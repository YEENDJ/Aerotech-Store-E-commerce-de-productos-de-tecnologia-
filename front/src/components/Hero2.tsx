


"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HeroVideo2() {

  return (
    <section className="relative h-[50vh] w-[80%] mx-auto overflow-hidden flex rounded-xl">

      
      <video
    key="id"
    src="https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/AC206%20shot%20on/F1__10s_DJI_home_page_Shot_on_Video_CLEAN_2400x1440_N_N.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* OVERLAY */}
  <div
    className="
      absolute inset-0 
      flex flex-col items-center 
      text-center text-white 
      pt-20
      z-20
    "
  >
    <h2 className="text-4xl font-bold drop-shadow-lg">
      DJI OSMO ACTION 6 PRO
    </h2>

  </div>
  
 </section>
  );
}
