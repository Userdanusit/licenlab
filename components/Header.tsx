import Link from "next/link";

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="h-6 w-6 rounded-md bg-brand-500 inline-block" />
          <span>DigiMart TH</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/" className="hover:underline">หน้าแรก</Link>
          <Link href="/faq" className="hover:underline">คำถามพบบ่อย</Link>
          <Link href="/policy/terms" className="hover:underline">เงื่อนไข</Link>
        </nav>
      </div>
    </header>
  );
}
