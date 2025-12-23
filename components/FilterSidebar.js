export default function FilterSidebar() {
  return (
    <div className="text-sm space-y-6">
      <h3 className="font-semibold">Refine By</h3>

      <FilterSection title="Shop For" items={["Women (45,547)"]} />
      <FilterSection
        title="Category"
        items={[
          "Sarees (8,753)",
          "Shirts, Tops & Tunics",
          "Dresses (3,464)",
          "Kurtas & Kurtis",
          "Tshirts",
        ]}
      />
      <FilterSection title="Price" items={["Below ₹500", "₹500 - ₹1000", "₹1000+"]} />
      <FilterSection title="Brands" items={["DNMX", "Teamspirit", "AJIO", "Fusion"]} />
      <FilterSection title="Colors" items={["Black", "Grey", "Olive", "Yellow"]} />
    </div>
  );
}

function FilterSection({ title, items }) {
  return (
    <div>
      <h4 className="font-medium mb-2">{title}</h4>
      <ul className="space-y-1 text-gray-600">
        {items.map((item) => (
          <li key={item} className="flex gap-2 items-center">
            <input type="checkbox" className="accent-black" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
