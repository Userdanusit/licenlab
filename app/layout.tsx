import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://example.com"),
  title: "DigiMart TH — ร้านขายซอฟต์แวร์และบริการดิจิทัลราคาดี",
  description: "ซอฟต์แวร์ลิขสิทธิ์/บัญชีพรีเมียม ราคาดี ส่งไว มีรีวิว เชื่อถือได้",
  openGraph: {
    title: "DigiMart TH",
    description: "ซอฟต์แวร์ลิขสิทธิ์/บัญชีพรีเมียม ราคาดี ส่งไว",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <Header />
        <main className="container py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
