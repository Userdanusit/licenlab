"use client";

import { fmtTHB } from "@/lib/currency";
import { chatOnFacebook } from "@/lib/fb";
import { Badge } from "./Badge";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const msg =
`สวัสดีครับ สนใจสั่งซื้อ:
- หมวด: ${product.category}
- สินค้า: ${product.name}
- แพ็กเกจ: ${product.package}
- ราคา: ${fmtTHB(product.price)}
- รหัสสินค้า: ${product.code}
ช่วยแจ้งวิธีชำระ/ส่งของให้ด้วยครับ ขอบคุณครับ`;

  return (
    <article className="card p-4 flex flex-col">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold leading-tight">{product.name}</h3>
        <Badge color="blue">{product.category}</Badge>
      </div>
      <p className="mt-1 text-sm text-gray-600">{product.package}</p>
      <div className="mt-3 flex items-baseline gap-2">
        <div className="text-xl font-bold">{fmtTHB(product.price)}</div>
        <div className="text-xs text-gray-500 line-through">
          {product.priceOld ? fmtTHB(product.priceOld) : null}
        </div>
      </div>
      <div className="mt-1 text-xs text-emerald-700">
        กำไรคาดการณ์: {fmtTHB(product.price - product.cost)}
      </div>
      <div className="mt-4 flex gap-2">
        <button className="btn w-full"
          onClick={()=>chatOnFacebook(msg)}>
          สั่งซื้อทาง Facebook
        </button>
        <a className="btn-ghost text-sm" href="/faq">วิธีใช้งาน</a>
      </div>
      <div className="mt-3 text-xs text-gray-500">รหัสสินค้า: {product.code}</div>
    </article>
  );
}
