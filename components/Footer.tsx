import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-12 border-t bg-gray-50">
      <div className="container py-8 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <div className="font-semibold text-gray-800">DigiMart TH</div>
            <div>ซอฟต์แวร์และบริการดิจิทัลของแท้ ราคาดี ส่งไว</div>
            <div className="mt-2">ติดต่อ: Facebook Messenger</div>
          </div>
          <div className="flex gap-6">
            <div className="space-y-1">
              <div className="font-medium text-gray-800">นโยบาย</div>
              <Link href="/policy/privacy" className="hover:underline">ความเป็นส่วนตัว</Link><br/>
              <Link href="/policy/terms" className="hover:underline">ข้อตกลง</Link><br/>
              <Link href="/policy/refund" className="hover:underline">การคืนเงิน</Link>
            </div>
            <div className="space-y-1">
              <div className="font-medium text-gray-800">อื่น ๆ</div>
              <Link href="/faq" className="hover:underline">FAQ</Link>
            </div>
          </div>
        </div>
        <div className="mt-6 text-xs">© {new Date().getFullYear()} DigiMart TH</div>
      </div>
    </footer>
  );
}
