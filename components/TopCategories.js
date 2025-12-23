import Image from "next/image";

const categories = [
  { title: "Tops & Dresses", image: "/images/dress-removebg-preview.png" },
  { title: "Men’s Topwear", image: "/images/topmen.webp" },
  { title: "Women’s Ethnic", image: "/images/womenethnic.png" },
  { title: "Mens Wear", image: "/images/menethnic.png" },
  { title: "Winter Wear", image: "/images/winterwear.png" },
  { title: "Jeans", image: "/images/jeans.png" },
];

function CategoryCard({ title, image }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-50 via-white to-rose-100 p-4 backdrop-blur-md border border-rose-200/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,0,80,0.15)]">
      
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-pink-400/10 to-red-500/10" />

      <h3 className="relative z-10 text-center text-lg font-semibold text-rose-600 mb-3 transition-colors duration-300 group-hover:text-rose-700">
        {title}
      </h3>

      <div className="relative z-10 w-full h-[140px] flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain transition-transform duration-500 ease-out group-hover:scale-110"
          priority
        />
      </div>
    </div>
  );
}

export default function TopCategories() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 lg:py-14">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-500 to-red-600 bg-clip-text text-transparent">
          Top Categories
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Shop your favorite styles at irresistible prices
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.title}
            title={cat.title}
            image={cat.image}
          />
        ))}
      </div>
    </section>
  );
}
