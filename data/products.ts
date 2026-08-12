export interface Product {
    slug: string;
    title: string;
    category: string;
    image: string;
    material: string;
    size: string;
    description: string;
    price: number;
    featured: boolean;
}

export const products: Product[] = [

    {
        slug: "twin-wolf-shadows",
        title: "Twin Wolf Shadows",
        category: "MDF Wall Art",
        image: "/products/twin-wolf-shadows.jpeg",
        material: "7mm MDF",
        size: "50 × 70 cm",
        description:
            "A premium laser-cut wall art featuring two wolves in a modern layered design.",
        price: 400,
        featured: true,
    },
        {
        slug: "wolf",
        title: "Wolf",
        category: "MDF Wall Art",
        image: "/products/wolf.jpeg",
        material: "7mm MDF",
        size: "50 × 70 cm",
        description:
            "Bold wolf wall art featuring a strong artistic silhouette, perfect for modern interior decoration.",
        price: 250,
        featured: false,
    },

    {
        slug: "wolf-2",
        title: "Wolf II",
        category: "MDF Wall Art",
        image: "/products/wolf2.jpeg",
        material: "7mm MDF",
        size: "50 × 70 cm",
        description:
            "A second wolf-inspired laser-cut artwork with a distinctive artistic style for modern wall decoration.",
        price: 250,
        featured: false,
    },

    {
        slug: "deer-wall-art",
        title: "Deer", 
        category: "MDF Wall Art",
        image: "/products/deer.jpeg",
        material: "7mm MDF",
        size: "46 × 63 cm",
        description:
            "Elegant deer wall decoration with a natural artistic style, perfect for modern interiors.",
        price: 280,
        featured: false,
    },

    {
        slug: "deer-2",
        title: "Deer II",
        category: "MDF Wall Art",
        image: "/products/deer2.jpeg",
        material: "7mm MDF",
        size: "50 × 70 cm",
        description:
            "A detailed deer silhouette created with precision laser cutting for elegant and natural wall decoration.",
        price: 250,
        featured: false,
    },

    {
        slug: "batman-logo",
        title: "Batman Logo",
        category: "Custom Gifts",
        image: "/products/batman-logo.jpeg",
        material: "7mm MDF",
        size: "47 × 70 cm",
        description:
            "Laser-cut Batman logo decoration, ideal for gaming rooms, bedrooms, and offices.",
        price: 230,
        featured: false,
    },

    {
        slug: "horse",
        title: "Horse",
        category: "MDF Wall Art",
        image: "/products/horse.jpeg",
        material: "7mm MDF",
        size: "30 × 40 cm",
        description:
            "Laser-cut horse silhouette designed to add a bold artistic touch to any space.",
        price: 200,
        featured: false,
    },

    {
        slug: "horse-2",
        title: "Horse II",
        category: "MDF Wall Art",
        image: "/products/horse2.jpeg",
        material: "7mm MDF",
        size: "50 × 70 cm",
        description:
            "A second horse-inspired laser-cut artwork designed to add an elegant artistic character to modern interiors.",
        price: 250,
        featured: false,
    },

    {
        slug: "anchor",
        title: "Anchor",
        category: "Interior Decoration",
        image: "/products/anchor.jpeg",
        material: "7mm MDF",
        size: "43 × 47 cm",
        description:
            "Nautical anchor wall decoration inspired by the sea and coastal lifestyle.",
        price: 240,
        featured: false,
    },

    {
        slug: "cat",
        title: "Cat",
        category: "MDF Wall Art",
        image: "/products/cat.jpeg",
        material: "7mm MDF",
        size: "37 × 70 cm",
        description:
            "Minimalist laser-cut cat artwork designed for modern homes and stylish spaces.",
        price: 230,
        featured: false,
    },

    {
        slug: "cat-2",
        title: "Cat Design II",
        category: "MDF Wall Art",
        image: "/products/cat2.jpeg",
        material: "7mm MDF",
        size: "50 × 70 cm",
        description:
            "A second artistic cat design created with precision laser cutting for decorative interiors.",
        price: 250,
        featured: true,
    },

    {
        slug: "cat-3",
        title: "Cat Design III",
        category: "MDF Wall Art",
        image: "/products/cat3.jpeg",
        material: "7mm MDF",
        size: "50 × 70 cm",
        description:
            "A stylish laser-cut cat artwork that brings a unique decorative character to your space.",
        price: 250,
        featured: false,
    },

    {
        slug: "cat-4",
        title: "Cat Design IV",
        category: "MDF Wall Art",
        image: "/products/cat4.jpeg",
        material: "7mm MDF",
        size: "50 × 70 cm",
        description:
            "A detailed laser-cut cat artwork with a modern decorative style, perfect for animal lovers and contemporary interiors.",
        price: 250,
        featured: false,
    },

    {
        slug: "cr7",
        title: "CR7",
        category: "Custom Gifts",
        image: "/products/cr7.jpeg",
        material: "7mm MDF",
        size: "50 × 70 cm",
        description:
            "A custom football-inspired laser-cut artwork designed for fans and sports enthusiasts.",
        price: 250,
        featured: true,
    },

    {
        slug: "formula",
        title: "Formula",
        category: "Custom Gifts",
        image: "/products/formula.jpeg",
        material: "7mm MDF",
        size: "50 × 70 cm",
        description:
            "A precision laser-cut Formula racing inspired design for motorsport enthusiasts.",
        price: 250,
        featured: true,
    },

    {
        slug: "dolphin",
        title: "Dolphin",
        category: "MDF Wall Art",
        image: "/products/dolphin.jpeg",
        material: "7mm MDF",
        size: "32 × 39 cm",
        description:
            "Elegant dolphin artwork with a clean laser-cut design inspired by the beauty of the sea.",
        price: 160,
        featured: false,
    },

    {
        slug: "fish",
        title: "Fish",
        category: "Interior Decoration",
        image: "/products/fish.jpeg",
        material: "7mm MDF",
        size: "50 × 70 cm",
        description:
            "Decorative fish artwork suitable for coastal, marine, and modern interior spaces.",
        price: 250,
        featured: false,
    },

    {
        slug: "starfish",
        title: "Starfish",
        category: "Interior Decoration",
        image: "/products/starfish.jpeg",
        material: "7mm MDF",
        size: "38 × 38 cm",
        description:
            "Ocean-inspired starfish decoration perfect for coastal and beach-themed interiors.",
        price: 160,
        featured: false,
    },

    {
        slug: "billiards-player",
        title: "Billiards Player",
        category: "Custom Gifts",
        image: "/products/billiards-player.jpeg",
        material: "7mm MDF",
        size: "50 × 70 cm",
        description:
            "Laser-cut billiards artwork created for game rooms, entertainment spaces, and sports fans.",
        price: 250,
        featured: true,
    },

    {
        slug: "bow",
        title: "Bow",
        category: "MDF Wall Art",
        image: "/products/bow.jpeg",
        material: "7mm MDF",
        size: "50 × 70 cm",
        description:
            "Detailed laser-cut bow artwork with a strong decorative presence and artistic character.",
        price: 250,
        featured: false,
    },

    {
        slug: "lion",
        title: "Lion",
        category: "MDF Wall Art",
        image: "/products/lion.jpeg",
        material: "7mm MDF",
        size: "50 × 70 cm",
        description:
            "Bold lion wall art designed with precision laser cutting for a powerful modern look.",
        price: 250,
        featured: false,
    },

    {
        slug: "penguins",
        title: "Penguins",
        category: "MDF Wall Art",
        image: "/products/penguins.jpeg",
        material: "7mm MDF",
        size: "28 × 65 cm",
        description:
            "Charming penguin artwork with a clean decorative design suitable for homes and gifts.",
        price: 190,
        featured: false,
    },

    {
        slug: "phoenix",
        title: "Phoenix",
        category: "MDF Wall Art",
        image: "/products/phoenix.jpeg",
        material: "7mm MDF",
        size: "50 × 70 cm",
        description:
            "Striking phoenix artwork representing strength and transformation through detailed laser cutting.",
        price: 250,
        featured: false,
    },

    {
        slug: "pulse-of-life",
        title: "Pulse of Life",
        category: "Interior Decoration",
        image: "/products/pulse-of-life.jpeg",
        material: "7mm MDF",
        size: "20 × 68 cm",
        description:
            "A creative decorative design inspired by life, movement, and modern artistic expression.",
        price: 190,
        featured: true,
    },

    {
        slug: "race-man",
        title: "Race Man",
        category: "Custom Gifts",
        image: "/products/raceman.jpeg",
        material: "7mm MDF",
        size: "50 × 70 cm",
        description:
            "Dynamic racing-inspired laser-cut artwork designed for motorsport and speed enthusiasts.",
        price: 250,
        featured: false,
    },

    {
        slug: "spiderman",
        title: "Spider-Man",
        category: "Custom Gifts",
        image: "/products/spiderman.jpeg",
        material: "7mm MDF",
        size: "25 × 55 cm",
        description:
            "Laser-cut Spider-Man inspired artwork, perfect for bedrooms, gaming rooms, and collectors.",
        price: 170,
        featured: false,
    },

    {
        slug: "peter-and-gwen",
        title: "Peter & Gwen",
        category: "Custom Gifts",
        image: "/products/peter-and-gwen.jpeg",
        material: "7mm MDF",
        size: "50 × 70 cm",
        description:
            "Peter & Gwen inspired laser-cut artwork created as a unique decorative piece for fans and collectors.",
        price: 250,
        featured: false,
    },

    {
        slug: "sunset",
        title: "Sunset",
        category: "Interior Decoration",
        image: "/products/sunset.jpeg",
        material: "7mm MDF",
        size: "50 × 70 cm",
        description:
            "A relaxing sunset-inspired wall decoration designed to add warmth and character to interiors.",
        price: 250,
        featured: false,
    },

    {
        slug: "tree",
        title: "Tree",
        category: "MDF Wall Art",
        image: "/products/tree.jpeg",
        material: "7mm MDF",
        size: "50 × 70 cm",
        description:
            "Elegant tree artwork combining natural inspiration with precision laser-cut craftsmanship.",
        price: 550,
        featured: false,
    },

    {
        slug: "toothless-dragon",
        title: "Toothless Dragon",
        category: "Custom Gifts",
        image: "/products/toothless-dragon.jpeg",
        material: "7mm MDF",
        size: "36 × 43 cm",
        description:
            "Toothless-inspired laser-cut artwork designed for fans and fantasy-themed interior decoration.",
        price: 170,
        featured: false,
    },


    {
        slug: "captain-america-shield",
        title: "Captain America's Shield",
        category: "Custom Gifts",
        image: "/products/captain-america-shield.jpeg",
        material: "7mm MDF",
        size: "50 × 70 cm",
        description:
            "Captain America's Shield inspired laser-cut artwork, perfect for fans, bedrooms, gaming rooms, and collectors.",
        price: 250,
        featured: false,
    },

    {
        slug: "coffee-pulse",
        title: "Coffee Pulse",
        category: "Interior Decoration",
        image: "/products/coffee-pulse.jpeg",
        material: "7mm MDF",
        size: "20 × 68 cm",
        description:
            "A creative coffee-inspired laser-cut artwork designed for coffee lovers and modern interior spaces.",
        price: 190,
        featured: false,
    },

    {
        slug: "dragon",
        title: "Dragon",
        category: "MDF Wall Art",
        image: "/products/dragon.jpeg",
        material: "7mm MDF",
        size: "50 × 70 cm",
        description:
            "A powerful dragon-inspired laser-cut artwork designed for fantasy lovers and bold interior decoration.",
        price: 250,
        featured: false,
    },

    {
        slug: "goku",
        title: "Goku",
        category: "Custom Gifts",
        image: "/products/goku.jpeg",
        material: "7mm MDF",
        size: "34 × 68 cm",
        description:
            "Goku-inspired laser-cut artwork, perfect for anime fans, bedrooms, gaming rooms, and collectors.",
        price: 320,
        featured: false,
    },

    {
        slug: "honeybee",
        title: "Honeybee",
        category: "MDF Wall Art",
        image: "/products/honeybee.jpeg",
        material: "7mm MDF",
        size: "50 × 70 cm",
        description:
            "Detailed honeybee wall art combining a natural theme with precise laser-cut craftsmanship.",
        price: 250,
        featured: false,
    },

    {
        slug: "pikachu",
        title: "Pikachu",
        category: "Custom Gifts",
        image: "/products/pikachu.jpeg",
        material: "7mm MDF",
        size: "50 × 70 cm",
        description:
            "Pikachu-inspired laser-cut artwork, perfect for anime fans, bedrooms, gaming rooms, and collectors.",
        price: 250,
        featured: false,
    },

];