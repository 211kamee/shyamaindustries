// ─── Types ────────────────────────────────────────────────────────────────────

export interface Product {
  imagePath: string;
  heading: string;
  description: string;
}

export interface Industry {
  id: string;
  imagePath: string;
  heading: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  instagram: string;
  phone: string;
  address: string;
  map: string;
}

// ─── Products ─────────────────────────────────────────────────────────────────

export const PRODUCTS: Product[] = [
  {
    imagePath: "products/Braided_Rope.png",
    heading: "Braided Rope",
    description:
      "Our Braided Rope is   Strong and Durable, perfect to be used for safety purposes. It is made with high-quality materials, ensuring reliability and safety of the user.",
  },
  {
    imagePath: "products/Twisted_Rope.png",
    heading: "Twisted Rope",
    description:
      "Our Twisted Rope is   Strong and Durable, perfect to be used for safety purposes. It is made with high-quality materials, ensuring reliability and safety of the user.",
  },
  {
    imagePath: "products/Full_Body_Harness.png",
    heading: "Full Body Harness",
    description:
      "Our Full Body Harness is designed for Comfort, and it is perfect to be used for all safety purposes, maintaining comfort on long sessions.",
  },
  {
    imagePath: "products/Fall_Arrestor.png",
    heading: "Fall Arrestor",
    description:
      "Our safety Fall Arrestor automatically engage to halt falls smoothly and reliably, giving you unwavering protection whenever you need it.",
  },
  {
    imagePath: "products/Grip_Descender.png",
    heading: "Grip Descender",
    description:
      "Our intuitive Grip Descender delivers smooth, controlled lowering with consistent, fail-safe braking, so you can descend confidently, every time.",
  },
  {
    imagePath: "products/Rock_Chair_Seat.png",
    heading: "Rock Chair Seat",
    description:
      "Our safety Rock Chair Seat deliver ergonomic support and steadfast stability, keeping you secure and comfortable during every height operation.",
  },
  {
    imagePath: "products/Rope_Protector.png",
    heading: "Rope Protector",
    description:
      "Our Rope Protector shield your line from abrasion and wear, extending rope life and ensuring dependable performance every time.",
  },
  {
    imagePath: "products/Carabiner.png",
    heading: "Carabiner",
    description:
      "Our Carabiners features a dependable and strong auto-locking gate for consistent, everyday safety.",
  },
  {
    imagePath: "products/Bag.png",
    heading: "Bag",
    description:
      "Our Bag is Strong, Durable and Dependable, can easily hold all the essential safety tools.",
  },
];

// ─── Industries ───────────────────────────────────────────────────────────────

export const INDUSTRIES: Industry[] = [
  {
    id: "construction",
    imagePath: "industries/Construction.png",
    heading: "Construction",
    description:
      "Shyama Industries manufactures durable braided and twisted ropes along with reliable safety equipment for the construction sector. Designed to handle heavy loads and tough conditions, our products ensure strength, safety, and efficiency at worksites. We are committed to supporting builders with trusted solutions that enhance performance and reliability",
  },
  {
    id: "military",
    imagePath: "industries/Military.png",
    heading: "Military",
    description:
      "Shyama Industries is a trusted manufacturer of braided and twisted ropes engineered for military applications. With a focus on strength, safety, and reliability, our ropes withstand extreme conditions in training and combat. We provide defense forces with dependable solutions for climbing, securing equipment, and mission-critical operations.",
  },
  {
    id: "mountain_climbing",
    imagePath: "industries/Mountain_Climbing.png",
    heading: "Mountain Climbing",
    description:
      "Shyama Industries specializes in braided and twisted ropes and advanced safety equipment designed also for the Mountain Climbing. Our products combine strength, durability, and precision to ensure maximum safety in challenging environments. Trusted by climbers and adventure professionals, we deliver reliable gear that supports every ascent with confidence.",
  },
];

// ─── Contact ──────────────────────────────────────────────────────────────────

export const CONTACT_INFO: ContactInfo = {
  email: "connect@shyamaindustries.org",
  instagram: "https://www.instagram.com/shyama_industries",
  phone: "+91 9910316881",
  address:
    "12/10 Sunrise Industrial Area, Loni Rd, near Mohan Nagar, Sahibabad, Ghaziabad, UP 201007, INDIA",
  map: "https://maps.app.goo.gl/P6V4LBVn9o4L1Cgi7",
};
