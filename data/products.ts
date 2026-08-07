export interface Product {
  slug: string;
  title: string;
  category: string;
  image: string;
  material: string;
  size: string;
  description: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    slug: "wolf",
    title: "Twin Wolf Shadows",
    category: "Wall Art",
    image: "/products/wolf.jpeg",
    material: "7mm MDF",
    size: "50 × 70 cm",
    description:
      "A premium laser-cut wall art featuring two wolves in a modern layered design.",
    featured: true,
  },

  {
    slug: "deer",
    title: "Deer Wall Art",
    category: "Wall Art",
    image: "/products/deer.jpeg",
    material: "7mm MDF",
    size: "50 × 70 cm",
    description:
      "Elegant deer wall decoration suitable for homes and offices.",
    featured: true,
  },

  {
    slug: "horse",
    title: "Horse",
    category: "Wall Art",
    image: "/products/horse.jpeg",
    material: "7mm MDF",
    size: "50 × 70 cm",
    description:
      "Laser-cut horse silhouette with a modern artistic style.",
    featured: true,
  },

  {
    slug: "batman",
    title: "Batman Logo",
    category: "Wall Art",
    image: "/products/batman.jpeg",
    material: "7mm MDF",
    size: "50 × 70 cm",
    description:
      "Batman logo laser-cut decoration for gaming rooms and offices.",
    featured: true,
  },

  {
    slug: "anchor",
    title: "Anchor",
    category: "Decoration",
    image: "/products/anchor.jpeg",
    material: "7mm MDF",
    size: "50 × 70 cm",
    description:
      "Nautical anchor decoration perfect for beach-themed interiors.",
    featured: true,
  },

  {
    slug: "cat",
    title: "Cat",
    category: "Wall Art",
    image: "/products/cat.jpeg",
    material: "7mm MDF",
    size: "50 × 70 cm",
    description:
      "Minimalist laser-cut cat artwork for modern spaces.",
    featured: true,
  },
];