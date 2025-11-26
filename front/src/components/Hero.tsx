'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function HeroVideoCarousel() {
  const videos = [
    {
      id: 5,
      src: 'https://www-cdn.djiits.com/reactor/assets/_next/static/videos/f7422fa4-6ce4-4938-80c4-c0a70d3349c5.mp4?w=2560&h=1440',
      title: 'DJI Neo 2',
      buttonText: 'Ver producto',
    },
    {
      id: 19,
      src: 'https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/OW001%20shot%20on/F81_OW001_%E2%89%A410s_DJI_home_page_Shot_on_Video_CLEAN_2400x1440_N_N.mp4',
      title: 'DJI Osmo Nano',
      buttonText: 'Ver producto',
    },
    {
      id: 24,
      src: 'https://www-cdn.djiits.com/reactor/assets/_next/static/videos/236b9fcb-8dc9-48d3-989e-4c77b97d029f.mp4?w=3840&h=2160',
      title: 'DJI Mic 3',
      buttonText: 'Ver producto',
    },
  ]

  const [current, setCurrent] = useState(0)

  const nextVideo = () => {
    setCurrent(prev => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrent(prev => (prev - 1 + videos.length) % videos.length)
  }

  const x = { a: 1 }

  return (
    <section className="relative h-[60vh] w-full overflow-hidden  flex ">
      <video
        key={videos[current].id}
        src={videos[current].src}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="
      absolute inset-0 
      flex flex-col items-center 
      text-center text-white 
      pt-20
      z-20
    "
      >
        <h2 className="text-4xl font-bold drop-shadow-lg">{videos[current].title}</h2>

        <Link
          href={`/product/${videos[current].id}`}
          className="
        mt-6 mx-auto inline-flex items-center gap-2
        px-6 py-2
        text-white font-medium
        rounded-full
        border border-white/50
        bg-white/10
        backdrop-blur-sm
        hover:bg-white/20
        transition
      "
        >
          {videos[current].buttonText}
          <ChevronRight size={16} className="text-white" />
        </Link>
      </div>

      <button
        onClick={prevVideo}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 rounded-full hover:bg-white/40 transition cursor-pointer"
      >
        <ChevronLeft size={32} className="text-white" />
      </button>

      <button
        onClick={nextVideo}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 rounded-full hover:bg-white/40 transition cursor-pointer"
      >
        <ChevronRight size={32} className="text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`w-3 h-3 rounded-full transition
            ${index === current ? 'bg-white' : 'bg-white/40'}`}
          ></div>
        ))}
      </div>
    </section>
  )
}
