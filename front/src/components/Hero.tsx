
import Link from "next/link";

export  default function HeroVideo() {
  return (
<Link href="/product/1">
    <section className="relative h-[60vh] w-full overflow-hidden cursor-pointer">
 <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover rounded-[1rem]"
>
  <source
    src="https://www-cdn.djiits.com/reactor/assets/_next/static/videos/f7422fa4-6ce4-4938-80c4-c0a70d3349c5.mp4?w=2560&h=1440"
    type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"'
    />
</video>

    <div className="absolute inset-0 z-20 flex items-start justify-center">
        <h3 className="text-white text-5xl font-bold drop-shadow-xl">
          Descubre el nuevo DJI Neo 2
        </h3>
      </div>


    </section>
    </Link>


  )}

//   export default function HeroVideo2() {
//   return (
// <Link href="/product/2">
//     <section className="relative h-[60vh] w-full overflow-hidden cursor-pointer">
//  <video
//   autoPlay
//   muted
//   loop
//   playsInline
//   className="absolute inset-0 w-full h-full object-cover rounded-[1rem]"
// >
//   <source
//     src="https://www-cdn.djiits.com/dps/747a9e3f3bda000502491ee4ddf7096e.svg?w=482&h=48"
//     type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"'
//     />
// </video>

//     <div className="absolute inset-0 z-20 flex items-start justify-center">
//         <h3 className="text-white text-5xl font-bold drop-shadow-xl">
//           Descubre el nuevo DJI Mini 5 Pro
//         </h3>
//       </div>


//     </section>
//     </Link>


//   )}





