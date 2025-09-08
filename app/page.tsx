"use client";

import { useMemo, useState } from "react";
import { products, categories, type Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Filters } from "@/components/Filters";

export default function HomePage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | "ทั้งหมด">("ทั้งหมด");
  const [sort, setSort] = useState<"popular" | "priceAsc" | "priceDesc">("popular");

  const filtered = useMemo(() => {
    let list = products.filter(p =>
      (cat === "ทั้งหมด" || p.category === cat) &&
      (q.trim() === "" ||
        [p.name, p.package, p.category].join(" ").toLowerCase()
          .includes(q.toLowerCase()))
    );
    if (sort === "priceAsc") list = list.toSorted((a,b)=>a.price-b.price);
    if (sort === "priceDesc") list = list.toSorted((a,b)=>b.price-a.price);
    return list;
  }, [q, cat, sort]);

  return (
    <>
      <section className="mb-6">
        <div className="rounded-2xl bg-gradient-to-r from-brand-50 to-white border border-brand-200 p-6">
          <h1 className="text-2xl md:text-3xl font-semibold">
            ดีลของแท้ ราคาดี ส่งไว — พร้อมดูแลหลังการขาย
          </h1>
          <p className="mt-2 text-gray-600">
            เลือกแพ็กเกจที่ต้องการแล้วกด “สั่งซื้อทาง Facebook” ระบบจะคัดลอกข้อความสั่งซื้อให้อัตโนมัติ
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <input
              placeholder="ค้นหา (เช่น ChatGPT, Office, Windows, Envato...)"
              value={q}
              onChange={(e)=>setQ(e.target.value)}
              className="w-full rounded-lg border px-3 py-2"
            />
            <Filters
              categories={["ทั้งหมด", ...categories]}
              value={cat}
              onChange={setCat}
              sortValue={sort}
              onSortChange={setSort}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p: Product) => (
            <ProductCard key={p.code} product={p} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-16">ไม่พบสินค้า</p>
        )}
      </section>
    </>
  );
}
