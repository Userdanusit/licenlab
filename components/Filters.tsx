"use client";
type Props = {
  categories: string[];
  value: string;
  onChange: (v: string)=>void;
  sortValue: "popular"|"priceAsc"|"priceDesc";
  onSortChange: (v: "popular"|"priceAsc"|"priceDesc")=>void;
};
export function Filters({ categories, value, onChange, sortValue, onSortChange }: Props) {
  return (
    <div className="flex gap-3">
      <select className="w-full rounded-lg border px-3 py-2"
        value={value} onChange={e=>onChange(e.target.value)}>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <select className="w-full rounded-lg border px-3 py-2"
        value={sortValue} onChange={e=>onSortChange(e.target.value as any)}>
        <option value="popular">แนะนำ</option>
        <option value="priceAsc">ราคาต่ำ→สูง</option>
        <option value="priceDesc">ราคาสูง→ต่ำ</option>
      </select>
    </div>
  );
}
