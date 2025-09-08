import { clsx } from "clsx";
export function Badge({ children, color="gray" }:{
  children: React.ReactNode; color?: "gray"|"blue"|"green";
}) {
  return (
    <span className={clsx("badge",
      color==="blue" && "bg-brand-50 text-brand-600 border border-brand-200",
      color==="green" && "bg-emerald-50 text-emerald-700 border border-emerald-200",
      color==="gray" && "bg-gray-100 text-gray-700 border border-gray-200"
    )}>
      {children}
    </span>
  );
}
