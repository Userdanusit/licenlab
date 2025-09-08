// สินค้าจากสเปรดชีตในภาพ (เท่าที่อ่านได้) — ราคา THB
export type Product = {
  code: number;
  category: string;
  name: string;
  package: string;
  cost: number;
  price: number;
  priceOld?: number;
};
export const categories = [
  "AI","Assets","Creative","Icons","OS/Office","3D/CAD","Stock","Streaming"
] as const;

export const products: Product[] = [
  // 3D/CAD - SketchUp
  { code:22, category:"3D/CAD", name:"SketchUp Pro", package:"7 days", cost:73.11, price:139.00 },
  { code:23, category:"3D/CAD", name:"SketchUp Pro", package:"30 days", cost:127.45, price:229.00 },

  // AI
  { code:4, category:"AI", name:"ChatGPT Business (ส่วนตัว ไม่แชร์)", package:"30 days", cost:250.00, price:399.00 },
  { code:5, category:"AI", name:"ChatGPT Plus (แชร์ 3 ผู้ใช้)", package:"30 days", cost:199.00, price:319.00 },

  // Assets - Envato Elements
  { code:28, category:"Assets", name:"Envato Elements", package:"7 days (100 dl/day)", cost:59.00, price:109.00 },
  { code:29, category:"Assets", name:"Envato Elements", package:"30 days (100 dl/day)", cost:94.40, price:169.00 },
  { code:30, category:"Assets", name:"Envato Elements", package:"60 days (100 dl/day)", cost:236.01, price:379.00 },
  { code:31, category:"Assets", name:"Envato Elements", package:"90 days (100 dl/day)", cost:401.22, price:609.00 },
  { code:32, category:"Assets", name:"Envato Elements", package:"180 days (100 dl/day)", cost:632.51, price:859.00 },

  // Assets - Freepik
  { code:37, category:"Assets", name:"Freepik Premium", package:"7 days", cost:70.80, price:129.00 },
  { code:38, category:"Assets", name:"Freepik Premium", package:"30 days", cost:127.45, price:229.00 },
  { code:39, category:"Assets", name:"Freepik Premium", package:"90 days", cost:306.82, price:469.00 },

  // Assets - Motion Array
  { code:33, category:"Assets", name:"Motion Array Premium", package:"7 days", cost:70.80, price:129.00 },
  { code:34, category:"Assets", name:"Motion Array Premium", package:"30 days", cost:240.73, price:389.00 },
  { code:35, category:"Assets", name:"Motion Array Premium", package:"90 days", cost:370.54, price:559.00 },
  { code:36, category:"Assets", name:"Motion Array Premium", package:"180 days", cost:649.03, price:879.00 },

  // Creative - Canva
  { code:0, category:"Creative", name:"Canva Pro", package:"15 days (API)", cost:15.00, price:39.00 },
  { code:1, category:"Creative", name:"Canva Pro", package:"30 days", cost:25.00, price:59.00 },
  { code:2, category:"Creative", name:"Canva Pro", package:"180 days", cost:100.00, price:179.00 },
  { code:3, category:"Creative", name:"Canva Pro", package:"1 year", cost:175.00, price:279.00 },

  // Icons - Flaticon
  { code:40, category:"Icons", name:"Flaticon Premium", package:"7 days", cost:46.79, price:109.00 },
  { code:41, category:"Icons", name:"Flaticon Premium", package:"30 days", cost:99.12, price:179.00 },
  { code:42, category:"Icons", name:"Flaticon Premium", package:"90 days", cost:214.77, price:349.00 },
  { code:43, category:"Icons", name:"Flaticon Premium", package:"180 days", cost:396.50, price:599.00 },
  { code:44, category:"Icons", name:"Flaticon Premium", package:"360 days", cost:660.83, price:899.00 },

  // OS/Office
  { code:19, category:"OS/Office", name:"Office 2019 Professional Plus (Key)", package:"lifetime / 1 device", cost:280.00, price:449.00 },
  { code:18, category:"OS/Office", name:"Office 2021 Professional Plus (Key)", package:"lifetime / 1 device", cost:210.00, price:339.00 },
  { code:17, category:"OS/Office", name:"Office 2024 Professional Plus (Key)", package:"lifetime / 1 device", cost:699.00, price:949.00 },
  { code:16, category:"OS/Office", name:"Office 365 Pro (100GB)", package:"subscription", cost:205.00, price:329.00 },
  { code:15, category:"OS/Office", name:"Windows 10 Enterprise (Retail Key)", package:"lifetime / 1 device", cost:205.00, price:329.00 },
  { code:12, category:"OS/Office", name:"Windows 10 Home (Retail Key)", package:"lifetime / 1 device", cost:175.00, price:279.00 },
  { code:11, category:"OS/Office", name:"Windows 10 Pro (Retail Key)", package:"lifetime / 1 device", cost:205.00, price:329.00 },
  { code:10, category:"OS/Office", name:"Windows 11 Enterprise (Retail Key)", package:"lifetime / 1 device", cost:210.00, price:339.00 },
  { code:13, category:"OS/Office", name:"Windows 11 Home (Retail Key)", package:"lifetime / 1 device", cost:170.00, price:279.00 },
  { code:14, category:"OS/Office", name:"Windows 11 Pro (Retail Key)", package:"lifetime / 1 device", cost:175.00, price:279.00 },

  // Stock
  { code:20, category:"Stock", name:"Adobe Stock", package:"30 days", cost:139.25, price:259.00 },
  { code:24, category:"Stock", name:"Shutterstock", package:"5 images", cost:236.01, price:379.00 },
  { code:25, category:"Stock", name:"Shutterstock", package:"10 images", cost:375.26, price:569.00 },
  { code:26, category:"Stock", name:"Shutterstock", package:"20 images", cost:516.83, price:779.00 },
  { code:27, category:"Stock", name:"Shutterstock", package:"40 images", cost:752.88, price:1019.00 },
  { code:21, category:"Stock", name:"iStockPhoto", package:"30 days", cost:120.37, price:219.00 },

  // Streaming
  { code:6, category:"Streaming", name:"Disney+ Hotstar TH Premium", package:"1 month / 1 device (OTP)", cost:99.00, price:179.00 },
  { code:7, category:"Streaming", name:"Disney+ Hotstar TH Premium", package:"3 months", cost:199.00, price:319.00 },
  { code:8, category:"Streaming", name:"Disney+ Hotstar TH Premium", package:"6 months", cost:299.00, price:479.00 },
  { code:9, category:"Streaming", name:"Disney+ Hotstar TH Premium", package:"12 months", cost:399.00, price:599.00 }
];
