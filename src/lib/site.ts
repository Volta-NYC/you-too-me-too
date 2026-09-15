export const site = {
  name: "You Too Me Too",
  chineseName: "日韩礼服造型馆",
  fullName: "You Too Me Too Styling Boutique",
  address: "41-22 Main St, 41st Road, 2nd Floor, Flushing, NY 11355",
  addressChinese: "纽约州法拉盛缅街 41-22 号，41 路，二楼，NY 11355",
  phone: "(646) 617-1888",
  phoneHref: "tel:+16466171888",
  mapsHref: "https://maps.app.goo.gl/xDGCZ7VVGFEp1mXG9",
  xiaohongshuHref: "https://www.xiaohongshu.com/user/profile/5f11e3c4000000000101db5a",
  facebookStoryHref: "https://www.facebook.com/AsianAmericanFederation/videos/698518905920502/",
  hours: [
    ["Monday", "12 PM - 7:30 PM"],
    ["Tuesday", "11 AM - 7:30 PM"],
    ["Wednesday", "11 AM - 7:30 PM"],
    ["Thursday", "12 PM - 7:30 PM"],
    ["Friday", "12 PM - 7:30 PM"],
    ["Saturday", "12 PM - 7:30 PM"],
    ["Sunday", "12 PM - 7:30 PM"],
  ],
  imageProvenance: {
    storefront: "Client-provided photograph supplied September 2026. Permission to publish must be confirmed before production launch.",
    grace: "Client-provided photograph supplied September 2026. Permission to publish must be confirmed before production launch.",
  },
} as const;

export const collections = [
  {
    title: "Occasion & bridal",
    chinese: "婚纱 · 礼服",
    titleChinese: "婚纱与礼服",
    description: "Wedding dresses, formal looks, and finishing pieces for the moments that call for something memorable.",
    descriptionChinese: "为难忘时刻准备的婚纱、正式造型与点睛单品。",
    image: "/images/bridal.jpg",
    alt: "White lace bridal dress displayed inside You Too Me Too",
  },
  {
    title: "Everyday fashion",
    chinese: "潮服 · 女装",
    titleChinese: "日常时尚",
    description: "Korean- and Japanese-influenced clothing with colors, silhouettes, and layers selected for real wardrobes.",
    descriptionChinese: "从真实衣橱出发，挑选富有色彩、廓形与层次感的韩日风格服装。",
    image: "/images/mannequins.jpg",
    alt: "Colorful styled mannequins inside You Too Me Too",
  },
  {
    title: "Shoes, hats & bags",
    chinese: "鞋帽 · 包包",
    titleChinese: "鞋履、帽子与包袋",
    description: "From statement shoes to soft hats and compact bags, find the piece that brings a full look together.",
    descriptionChinese: "从抢眼鞋履、柔软帽款到精巧包袋，找到让整套造型更完整的单品。",
    image: "/images/boutique-display.jpg",
    alt: "Wide view of clothing, shoes, hats, and accessories in the boutique",
  },
  {
    title: "Jewelry & accessories",
    chinese: "珠宝 · 首饰",
    titleChinese: "珠宝与配饰",
    description: "Layered necklaces, watches, scarves, and small details chosen to change the mood of an outfit.",
    descriptionChinese: "叠戴项链、腕表、围巾以及能改变一身氛围的精致细节。",
    image: "/images/jewelry.jpg",
    alt: "Jewelry and accessory display inside You Too Me Too",
  },
] as const;

export const reviews = [
  {
    quote: "Grace is super knowledgeable and passionate about fashion and was very helpful!",
    name: "Annie Yang",
  },
  {
    quote: "The shop owner has excellent taste; the quality of the clothes is guaranteed.",
    name: "Li Yang",
  },
  {
    quote: "The clothes are so stylish and made of high-quality materials. The owner is very nice, and the price is reasonable.",
    name: "Fan Fan",
  },
] as const;
