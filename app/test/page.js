// "use client";

// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const drops = [
//   {
//     brands: ["ZENO", "LAVRIA", "CARESSA", "FASTO"],
//     title: "NEW Drop",
//     subtitle: "Drip Bags, Class Vibes",
//     cta: "SHOP NOW",
//     discount: "MIN 50% OFF",
//     image: "/offer1.png",
//   },
//   {
//     brands: ["BEAR CLUB", "URBAN ACE"],
//     title: "NEW Drop",
//     subtitle: "For young gents",
//     cta: "SHOP NOW",
//     discount: "UPTO 70% OFF",
//     image: "/offer1.png",
//   },
//   {
//     brands: ["SAFARI PRO", "WILDWALK"],
//     title: "Backpack Edit",
//     subtitle: "Roll Smart, Pack Bold",
//     cta: "SHOP NOW",
//     discount: "UPTO 80% OFF",
//     image: "/offer1.png",
//   },
// ];

// export default function FashionDropsSwiper() {
//   return (
//     <div className="w-full py-6">
//       <Swiper
//         modules={[Pagination, Autoplay]}
//         spaceBetween={20}
//         slidesPerView={1.5}
//         centeredSlides={true}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 2500 }}
//         breakpoints={{
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 2.5 },
//         }}
//         className="px-4"
//       >
//         {drops.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full rounded-2xl overflow-hidden">
//               {/* Background Image */}
//               <Image
//                 src={item.image}
//                 alt="drop-img"
//                 height={1000}
//                 width={1000}
//                 priority
//                 className="object-cover object-center"
//               />

//               {/* Overlay Content */}
//               <div className="absolute inset-0 p-6 flex flex-col justify-between text-white bg-white/20 backdrop-blur-[1px]">

//                 {/* Brands */}
//                 <div className="flex gap-3 text-sm opacity-90 flex-wrap">
//                   {item.brands.map((b, i) => (
//                     <span key={i} className="uppercase tracking-wide">
//                       {b}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Title + Subtitle */}
//                 <div>
//                   <h2 className="text-4xl font-semibold leading-tight drop-shadow-md">
//                     {item.title}
//                   </h2>
//                   <p className="mt-2 text-lg opacity-90 drop-shadow-md">
//                     {item.subtitle}
//                   </p>
//                 </div>

//                 {/* CTA + Discount */}
//                 <div>
//                   <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
//                     {item.cta}
//                   </button>
//                   <p className="mt-2 text-sm font-semibold bg-orange-500 w-fit px-4 py-1 rounded-md">
//                     {item.discount}
//                   </p>
//                 </div>

//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


// loader
// "use client";

// import Image from "next/image";

// export default function ClothesLoader() {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
//       <div className="relative w-20 h-20">
        
//         {/* Shirt */}
//         <Image
//           src="/vercel.svg"
//           alt="Shirt loading"
//           fill
//           className="absolute animate-[fade_2.4s_ease-in-out_infinite]"
//           style={{ animationDelay: "0s" }}
//         />

//         {/* Pant */}
//         <Image
//           src="/window.svg"
//           alt="Pant loading"
//           fill
//           className="absolute animate-[fade_2.4s_ease-in-out_infinite]"
//           style={{ animationDelay: "0.8s" }}
//         />

//         {/* Dress */}
//         <Image
//           src="/store.png"
//           alt="Dress loading"
//           fill
//           className="absolute animate-[fade_2.4s_ease-in-out_infinite]"
//           style={{ animationDelay: "1.6s" }}
//         />
//   <style jsx global>{`
//         @keyframes fade {
//           0% {
//             opacity: 0;
//             transform: scale(0.85);
//           }
//           20% {
//             opacity: 1;
//             transform: scale(1);
//           }
//           40% {
//             opacity: 0;
//             transform: scale(0.9);
//           }
//           100% {
//             opacity: 0;
//           }
//         }
//       `}</style>
//       </div>
//     </div>
//   );
// }


import FilterSidebar from "@/components/FilterSidebar";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

export const products = [
  {
    id: 1,
    brand: "DNMX",
    name: "Women Embellished Relaxed Fit Sweatshirt",
    price: 567,
    mrp: 799,
    rating: 3.7,
    reviews: 156,
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600&q=80"
  },
  {
    id: 2,
    brand: "Teamspirit",
    name: "Women Regular Fit Zip Jacket",
    price: 899,
    mrp: 1299,
    rating: 3.5,
    reviews: 327,
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80"
  },
  {
    id: 3,
    brand: "FUSION",
    name: "Women Paisley Print Puffer Jacket",
    price: 1592,
    mrp: 2199,
    rating: 3.7,
    reviews: 50,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=80"
  },
  {
    id: 4,
    brand: "AJIO",
    name: "Women Solid High-Neck Jacket",
    price: 1299,
    mrp: 1899,
    rating: 4.0,
    reviews: 210,
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=80"
  },
  {
    id: 5,
    brand: "DNMX",
    name: "Women Hooded Winter Jacket",
    price: 1799,
    mrp: 2499,
    rating: 3.9,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80"
  },
  {
    id: 6,
    brand: "Teamspirit",
    name: "Women Lightweight Quilted Jacket",
    price: 999,
    mrp: 1599,
    rating: 3.6,
    reviews: 96,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80"
  },
  {
    id: 7,
    brand: "FUSION",
    name: "Women Printed Bomber Jacket",
    price: 1399,
    mrp: 1999,
    rating: 3.8,
    reviews: 78,
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600&q=80"
  },
  {
    id: 8,
    brand: "AJIO",
    name: "Women Solid Puffer Jacket",
    price: 1899,
    mrp: 2799,
    rating: 4.1,
    reviews: 184,
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600&q=80"
  },
  {
    id: 9,
    brand: "DNMX",
    name: "Women Casual Fleece Jacket",
    price: 799,
    mrp: 1199,
    rating: 3.4,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716f?w=600&q=80"
  },
  {
    id: 10,
    brand: "Teamspirit",
    name: "Women Zip-Front Track Jacket",
    price: 999,
    mrp: 1499,
    rating: 3.6,
    reviews: 88,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80"
  },

  /* -------- ADDITIONAL PRODUCTS -------- */

  {
    id: 11,
    brand: "AJIO",
    name: "Women Longline Winter Jacket",
    price: 2299,
    mrp: 3199,
    rating: 4.2,
    reviews: 130,
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80"
  },
  {
    id: 12,
    brand: "DNMX",
    name: "Women Cropped Denim Jacket",
    price: 1199,
    mrp: 1799,
    rating: 3.8,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80"
  },
  {
    id: 13,
    brand: "FUSION",
    name: "Women Floral Printed Jacket",
    price: 1499,
    mrp: 2199,
    rating: 3.9,
    reviews: 72,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=600&q=80"
  },
  {
    id: 14,
    brand: "Teamspirit",
    name: "Women Sporty Zip Jacket",
    price: 899,
    mrp: 1299,
    rating: 3.5,
    reviews: 55,
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=600&q=80"
  },
  {
    id: 15,
    brand: "AJIO",
    name: "Women Solid Winter Bomber",
    price: 1699,
    mrp: 2499,
    rating: 4.0,
    reviews: 101,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80"
  }
];


export default function ProductsPage() {
  return (
    <>
   
    <Header/>
    <div className="max-w-[1400px] mx-auto px-4 py-6">
      {/* Header */}
      <h1 className="text-3xl font-serif text-center mb-6">Clothing</h1>

      <div className="flex gap-6">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <FilterSidebar />
        </aside>

        {/* Products */}
        <main className="flex-1">
          {/* Top Bar */}
          <div className="flex justify-between items-center border-b pb-3 mb-6 text-sm">
            <span className="text-gray-600">45,547 Items Found</span>

            <select className="border px-2 py-1 text-sm">
              <option>Relevance</option>
              <option>Price (Low to High)</option>
              <option>Price (High to Low)</option>
              <option>Rating</option>
            </select>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </main>
      </div>
    </div>
     </>
  );
}
