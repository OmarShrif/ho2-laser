export type ProductLanguage = "en" | "ar";

export type ProductTranslation = {
    title: string;
    category: string;
    material: string;
    size: string;
    description: string;
};

export const productTranslations: Record<
    string,
    Record<ProductLanguage, ProductTranslation>
> = {
    "twin-wolf-shadows": {
        en: {
            title: "Twin Wolf Shadows",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A premium laser-cut wall art featuring two wolves in a modern layered design.",
        },
        ar: {
            title: "ظلال الذئبين",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "ديكور حائطي فاخر بتقنية القص بالليزر، يجمع بين ذئبين في تصميم عصري متعدد الطبقات.",
        },
    },

    "wolf": {
        en: {
            title: "Wolf",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "Bold wolf wall art featuring a strong artistic silhouette, perfect for modern interior decoration.",
        },
        ar: {
            title: "الذئب",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "ديكور حائطي مميز بتصميم ذئب ذو طابع فني قوي، مناسب للديكورات الداخلية العصرية.",
        },
    },

    "wolf-2": {
        en: {
            title: "Wolf II",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A second wolf-inspired laser-cut artwork with a distinctive artistic style for modern wall decoration.",
        },
        ar: {
            title: "الذئب II",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم آخر مستوحى من الذئب بتقنية القص بالليزر، يتميز بطابع فني مميز للديكورات العصرية.",
        },
    },

    "deer-wall-art": {
        en: {
            title: "Deer",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "46 × 63 cm",
            description:
                "Elegant deer wall decoration with a natural artistic style, perfect for modern interiors.",
        },
        ar: {
            title: "الغزال",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "46 × 63 سم",
            description:
                "ديكور حائطي أنيق بتصميم غزال مستوحى من الطبيعة، مناسب للديكورات الداخلية العصرية.",
        },
    },

    "deer-2": {
        en: {
            title: "Deer II",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A detailed deer silhouette created with precision laser cutting for elegant and natural wall decoration.",
        },
        ar: {
            title: "الغزال II",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم غزال بتفاصيل دقيقة منفذ بتقنية القص بالليزر، لإضافة لمسة طبيعية وأنيقة إلى الحائط.",
        },
    },

    "batman-logo": {
        en: {
            title: "Batman Logo",
            category: "Custom Gifts",
            material: "7mm MDF",
            size: "47 × 70 cm",
            description:
                "Laser-cut Batman logo decoration, ideal for gaming rooms, bedrooms, and offices.",
        },
        ar: {
            title: "شعار باتمان",
            category: "هدايا مخصصة",
            material: "MDF بسُمك 7 مم",
            size: "47 × 70 سم",
            description:
                "ديكور لشعار باتمان منفذ بالقص بالليزر، مناسب لغرف الألعاب وغرف النوم والمكاتب.",
        },
    },

    "horse": {
        en: {
            title: "Horse",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "30 × 40 cm",
            description:
                "Laser-cut horse silhouette designed to add a bold artistic touch to any space.",
        },
        ar: {
            title: "الحصان",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "30 × 40 سم",
            description:
                "تصميم حصان منفذ بالقص بالليزر لإضافة لمسة فنية مميزة وقوية إلى أي مساحة.",
        },
    },

    "horse-2": {
        en: {
            title: "Horse II",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A second horse-inspired laser-cut artwork designed to add an elegant artistic character to modern interiors.",
        },
        ar: {
            title: "الحصان II",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم آخر مستوحى من الحصان منفذ بالقص بالليزر لإضافة طابع فني أنيق إلى الديكورات العصرية.",
        },
    },

    "anchor": {
        en: {
            title: "Anchor",
            category: "Interior Decoration",
            material: "7mm MDF",
            size: "43 × 47 cm",
            description:
                "Nautical anchor wall decoration inspired by the sea and coastal lifestyle.",
        },
        ar: {
            title: "المرساة",
            category: "ديكور داخلي",
            material: "MDF بسُمك 7 مم",
            size: "43 × 47 سم",
            description:
                "ديكور حائطي على شكل مرساة مستوحى من البحر وأجواء الحياة الساحلية.",
        },
    },

    "cat": {
        en: {
            title: "Cat",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "37 × 70 cm",
            description:
                "Minimalist laser-cut cat artwork designed for modern homes and stylish spaces.",
        },
        ar: {
            title: "القطة",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "37 × 70 سم",
            description:
                "تصميم فني بسيط لقطة منفذ بالقص بالليزر، مناسب للمنازل العصرية والمساحات الأنيقة.",
        },
    },

    "cat-2": {
        en: {
            title: "Cat Design II",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A second artistic cat design created with precision laser cutting for decorative interiors.",
        },
        ar: {
            title: "تصميم القطة II",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم فني آخر للقطة منفذ بدقة باستخدام القص بالليزر للديكورات الداخلية.",
        },
    },

    "cat-3": {
        en: {
            title: "Cat Design III",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A stylish laser-cut cat artwork that brings a unique decorative character to your space.",
        },
        ar: {
            title: "تصميم القطة III",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم فني أنيق لقطة منفذ بالقص بالليزر ليضيف طابعًا ديكوريًا مميزًا إلى مساحتك.",
        },
    },

    "cat-4": {
        en: {
            title: "Cat Design IV",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A detailed laser-cut cat artwork with a modern decorative style, perfect for animal lovers and contemporary interiors.",
        },
        ar: {
            title: "تصميم القطة IV",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم فني مفصل لقطة منفذ بالقص بالليزر بأسلوب عصري، مناسب لمحبي الحيوانات والديكورات الحديثة.",
        },
    },

    "cr7": {
        en: {
            title: "CR7",
            category: "Custom Gifts",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A custom football-inspired laser-cut artwork designed for fans and sports enthusiasts.",
        },
        ar: {
            title: "CR7",
            category: "هدايا مخصصة",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم فني مستوحى من كرة القدم ومنفذ بالقص بالليزر لمحبي الرياضة وعشاق كرة القدم.",
        },
    },

    "formula": {
        en: {
            title: "Formula",
            category: "Custom Gifts",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A precision laser-cut Formula racing inspired design for motorsport enthusiasts.",
        },
        ar: {
            title: "فورمولا",
            category: "هدايا مخصصة",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم مستوحى من سباقات الفورمولا منفذ بدقة باستخدام القص بالليزر لعشاق رياضة السيارات.",
        },
    },

    "dolphin": {
        en: {
            title: "Dolphin",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "32 × 39 cm",
            description:
                "Elegant dolphin artwork with a clean laser-cut design inspired by the beauty of the sea.",
        },
        ar: {
            title: "الدولفين",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "32 × 39 سم",
            description:
                "تصميم فني أنيق لدولفين منفذ بالقص بالليزر ومستوحى من جمال البحر.",
        },
    },

    "fish": {
        en: {
            title: "Fish",
            category: "Interior Decoration",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "Decorative fish artwork suitable for coastal, marine, and modern interior spaces.",
        },
        ar: {
            title: "السمكة",
            category: "ديكور داخلي",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم ديكوري لسمكة مناسب للمساحات الساحلية والبحرية والديكورات الداخلية العصرية.",
        },
    },

    "starfish": {
        en: {
            title: "Starfish",
            category: "Interior Decoration",
            material: "7mm MDF",
            size: "38 × 38 cm",
            description:
                "Ocean-inspired starfish decoration perfect for coastal and beach-themed interiors.",
        },
        ar: {
            title: "نجم البحر",
            category: "ديكور داخلي",
            material: "MDF بسُمك 7 مم",
            size: "38 × 38 سم",
            description:
                "ديكور مستوحى من البحر على شكل نجم البحر، مثالي للديكورات الساحلية والشاطئية.",
        },
    },

    "billiards-player": {
        en: {
            title: "Billiards Player",
            category: "Custom Gifts",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "Laser-cut billiards artwork created for game rooms, entertainment spaces, and sports fans.",
        },
        ar: {
            title: "لاعب البلياردو",
            category: "هدايا مخصصة",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم فني للاعب بلياردو منفذ بالقص بالليزر، مناسب لغرف الألعاب والمساحات الترفيهية ومحبي الرياضة.",
        },
    },

    "bow": {
        en: {
            title: "Bow",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "Detailed laser-cut bow artwork with a strong decorative presence and artistic character.",
        },
        ar: {
            title: "القوس",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم فني مفصل لقوس منفذ بالقص بالليزر، يتميز بحضور ديكوري قوي وطابع فني مميز.",
        },
    },

    "lion": {
        en: {
            title: "Lion",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "Bold lion wall art designed with precision laser cutting for a powerful modern look.",
        },
        ar: {
            title: "الأسد",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم حائطي مميز للأسد منفذ بدقة باستخدام القص بالليزر لإطلالة عصرية وقوية.",
        },
    },

    "penguins": {
        en: {
            title: "Penguins",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "28 × 65 cm",
            description:
                "Charming penguin artwork with a clean decorative design suitable for homes and gifts.",
        },
        ar: {
            title: "طيور البطريق",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "28 × 65 سم",
            description:
                "تصميم فني لطيف لطيور البطريق بأسلوب ديكوري بسيط، مناسب للمنازل والهدايا.",
        },
    },

    "phoenix": {
        en: {
            title: "Phoenix",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "Striking phoenix artwork representing strength and transformation through detailed laser cutting.",
        },
        ar: {
            title: "العنقاء",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم فني مميز لطائر العنقاء يرمز إلى القوة والتحول ومنفذ بتفاصيل دقيقة باستخدام القص بالليزر.",
        },
    },

    "pulse-of-life": {
        en: {
            title: "Pulse of Life",
            category: "Interior Decoration",
            material: "7mm MDF",
            size: "20 × 68 cm",
            description:
                "A creative decorative design inspired by life, movement, and modern artistic expression.",
        },
        ar: {
            title: "نبض الحياة",
            category: "ديكور داخلي",
            material: "MDF بسُمك 7 مم",
            size: "20 × 68 سم",
            description:
                "تصميم ديكوري إبداعي مستوحى من الحياة والحركة والتعبير الفني العصري.",
        },
    },

    "race-man": {
        en: {
            title: "Race Man",
            category: "Custom Gifts",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "Dynamic racing-inspired laser-cut artwork designed for motorsport and speed enthusiasts.",
        },
        ar: {
            title: "متسابق",
            category: "هدايا مخصصة",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم فني ديناميكي مستوحى من السباقات ومنفذ بالقص بالليزر لعشاق رياضة السيارات والسرعة.",
        },
    },

    "spiderman": {
        en: {
            title: "Spider-Man",
            category: "Custom Gifts",
            material: "7mm MDF",
            size: "25 × 55 cm",
            description:
                "Laser-cut Spider-Man inspired artwork, perfect for bedrooms, gaming rooms, and collectors.",
        },
        ar: {
            title: "سبايدر مان",
            category: "هدايا مخصصة",
            material: "MDF بسُمك 7 مم",
            size: "25 × 55 سم",
            description:
                "تصميم فني مستوحى من سبايدر مان ومنفذ بالقص بالليزر، مناسب لغرف النوم وغرف الألعاب وهواة التجميع.",
        },
    },

    "peter-and-gwen": {
        en: {
            title: "Peter & Gwen",
            category: "Custom Gifts",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "Peter & Gwen inspired laser-cut artwork created as a unique decorative piece for fans and collectors.",
        },
        ar: {
            title: "بيتر وجوين",
            category: "هدايا مخصصة",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم فني مستوحى من بيتر وجوين ومنفذ بالقص بالليزر كقطعة ديكورية مميزة لمحبي الشخصيات وهواة التجميع.",
        },
    },

    "sunset": {
        en: {
            title: "Sunset",
            category: "Interior Decoration",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A relaxing sunset-inspired wall decoration designed to add warmth and character to interiors.",
        },
        ar: {
            title: "غروب الشمس",
            category: "ديكور داخلي",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "ديكور حائطي مستوحى من غروب الشمس لإضافة الدفء والطابع المميز إلى المساحات الداخلية.",
        },
    },

    "tree": {
        en: {
            title: "Tree",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "Elegant tree artwork combining natural inspiration with precision laser-cut craftsmanship.",
        },
        ar: {
            title: "الشجرة",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم فني أنيق لشجرة يجمع بين الإلهام من الطبيعة ودقة التصنيع بالقص بالليزر.",
        },
    },

    "toothless-dragon": {
        en: {
            title: "Toothless Dragon",
            category: "Custom Gifts",
            material: "7mm MDF",
            size: "36 × 43 cm",
            description:
                "Toothless-inspired laser-cut artwork designed for fans and fantasy-themed interior decoration.",
        },
        ar: {
            title: "التنين توثلس",
            category: "هدايا مخصصة",
            material: "MDF بسُمك 7 مم",
            size: "36 × 43 سم",
            description:
                "تصميم فني مستوحى من التنين توثلس ومنفذ بالقص بالليزر، مناسب لمحبي الشخصيات والديكورات ذات الطابع الخيالي.",
        },
    },

    "captain-america-shield": {
        en: {
            title: "Captain America's Shield",
            category: "Custom Gifts",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "Captain America's Shield inspired laser-cut artwork, perfect for fans, bedrooms, gaming rooms, and collectors.",
        },
        ar: {
            title: "درع كابتن أمريكا",
            category: "هدايا مخصصة",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم فني مستوحى من درع كابتن أمريكا ومنفذ بالقص بالليزر، مناسب للمعجبين وغرف النوم وغرف الألعاب وهواة التجميع.",
        },
    },

    "coffee-pulse": {
        en: {
            title: "Coffee Pulse",
            category: "Interior Decoration",
            material: "7mm MDF",
            size: "20 × 68 cm",
            description:
                "A creative coffee-inspired laser-cut artwork designed for coffee lovers and modern interior spaces.",
        },
        ar: {
            title: "نبض القهوة",
            category: "ديكور داخلي",
            material: "MDF بسُمك 7 مم",
            size: "20 × 68 سم",
            description:
                "تصميم فني إبداعي مستوحى من القهوة ومنفذ بالقص بالليزر لعشاق القهوة والمساحات الداخلية العصرية.",
        },
    },

    "dragon": {
        en: {
            title: "Dragon",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A powerful dragon-inspired laser-cut artwork designed for fantasy lovers and bold interior decoration.",
        },
        ar: {
            title: "التنين",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم فني قوي مستوحى من التنين ومنفذ بالقص بالليزر لعشاق الخيال والديكورات الجريئة.",
        },
    },

    "goku": {
        en: {
            title: "Goku",
            category: "Custom Gifts",
            material: "7mm MDF",
            size: "34 × 68 cm",
            description:
                "Goku-inspired laser-cut artwork, perfect for anime fans, bedrooms, gaming rooms, and collectors.",
        },
        ar: {
            title: "غوكو",
            category: "هدايا مخصصة",
            material: "MDF بسُمك 7 مم",
            size: "34 × 68 سم",
            description:
                "تصميم فني مستوحى من غوكو ومنفذ بالقص بالليزر، مناسب لمحبي الأنمي وغرف النوم وغرف الألعاب وهواة التجميع.",
        },
    },

    "honeybee": {
        en: {
            title: "Honeybee",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "Detailed honeybee wall art combining a natural theme with precise laser-cut craftsmanship.",
        },
        ar: {
            title: "نحلة العسل",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم حائطي مفصل لنحلة العسل يجمع بين الطابع الطبيعي ودقة التصنيع بالقص بالليزر.",
        },
    },

    "pikachu": {
        en: {
            title: "Pikachu",
            category: "Custom Gifts",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "Pikachu-inspired laser-cut artwork, perfect for anime fans, bedrooms, gaming rooms, and collectors.",
        },
        ar: {
            title: "بيكاتشو",
            category: "هدايا مخصصة",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم فني مستوحى من بيكاتشو ومنفذ بالقص بالليزر، مناسب لمحبي الأنمي وغرف النوم وغرف الألعاب وهواة التجميع.",
        },
    },

    "astronaut": {
        en: {
            title: "Astronaut",
            category: "Custom Gifts",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A detailed astronaut-inspired laser-cut artwork, designed for gifts, bedrooms, gaming rooms, and personal spaces.",
        },
        ar: {
            title: "رائد الفضاء",
            category: "هدايا مخصصة",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم فني مستوحى من رائد الفضاء ومنفذ بالقص بالليزر، مناسب للهدايا وغرف النوم وغرف الألعاب والمساحات الشخصية.",
        },
    },

    "batman": {
        en: {
            title: "Batman",
            category: "Custom Gifts",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A detailed batman-inspired laser-cut artwork, designed for gifts, bedrooms, gaming rooms, and personal spaces.",
        },
        ar: {
            title: "باتمان",
            category: "هدايا مخصصة",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم فني مستوحى من باتمان ومنفذ بالقص بالليزر، مناسب للهدايا وغرف النوم وغرف الألعاب والمساحات الشخصية.",
        },
    },

    "birds": {
        en: {
            title: "Birds",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "45 × 45 cm",
            description:
                "A detailed birds wall artwork created with precision laser cutting for modern interior decoration.",
        },
        ar: {
            title: "الطيور",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "45 × 45 سم",
            description:
                "تصميم حائطي مفصل مستوحى من الطيور ومنفذ بدقة باستخدام القص بالليزر للديكورات الداخلية العصرية.",
        },
    },

    "car": {
        en: {
            title: "Car",
            category: "Custom Gifts",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A detailed car-inspired laser-cut artwork, designed for gifts, bedrooms, gaming rooms, and personal spaces.",
        },
        ar: {
            title: "السيارة",
            category: "هدايا مخصصة",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم فني مستوحى من السيارة ومنفذ بالقص بالليزر، مناسب للهدايا وغرف النوم وغرف الألعاب والمساحات الشخصية.",
        },
    },

    "cat-5": {
        en: {
            title: "Cat Design V",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A detailed cat design v wall artwork created with precision laser cutting for modern interior decoration.",
        },
        ar: {
            title: "تصميم القطة V",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم حائطي مفصل مستوحى من تصميم القطة V ومنفذ بدقة باستخدام القص بالليزر للديكورات الداخلية العصرية.",
        },
    },

    "crab": {
        en: {
            title: "Crab",
            category: "Interior Decoration",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A decorative crab-inspired laser-cut artwork designed to add character and style to modern interiors.",
        },
        ar: {
            title: "السلطعون",
            category: "ديكور داخلي",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم ديكوري مستوحى من السلطعون ومنفذ بالقص بالليزر لإضافة طابع مميز وأنيق إلى الديكورات الداخلية العصرية.",
        },
    },

    "deer-3": {
        en: {
            title: "Deer Design III",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A detailed deer design iii wall artwork created with precision laser cutting for modern interior decoration.",
        },
        ar: {
            title: "تصميم الغزال III",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم حائطي مفصل مستوحى من تصميم الغزال III ومنفذ بدقة باستخدام القص بالليزر للديكورات الداخلية العصرية.",
        },
    },

    "eagle": {
        en: {
            title: "Eagle",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A detailed eagle wall artwork created with precision laser cutting for modern interior decoration.",
        },
        ar: {
            title: "النسر",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم حائطي مفصل مستوحى من النسر ومنفذ بدقة باستخدام القص بالليزر للديكورات الداخلية العصرية.",
        },
    },

    "fish-2": {
        en: {
            title: "Fish Design II",
            category: "Interior Decoration",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A decorative fish design ii-inspired laser-cut artwork designed to add character and style to modern interiors.",
        },
        ar: {
            title: "تصميم السمكة II",
            category: "ديكور داخلي",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم ديكوري مستوحى من تصميم السمكة II ومنفذ بالقص بالليزر لإضافة طابع مميز وأنيق إلى الديكورات الداخلية العصرية.",
        },
    },

    "goku-2": {
        en: {
            title: "Goku Design II",
            category: "Custom Gifts",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A detailed goku design ii-inspired laser-cut artwork, designed for gifts, bedrooms, gaming rooms, and personal spaces.",
        },
        ar: {
            title: "تصميم غوكو II",
            category: "هدايا مخصصة",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم فني مستوحى من تصميم غوكو II ومنفذ بالقص بالليزر، مناسب للهدايا وغرف النوم وغرف الألعاب والمساحات الشخصية.",
        },
    },

    "guitar": {
        en: {
            title: "Guitar",
            category: "Interior Decoration",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A decorative guitar-inspired laser-cut artwork designed to add character and style to modern interiors.",
        },
        ar: {
            title: "الجيتار",
            category: "ديكور داخلي",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم ديكوري مستوحى من الجيتار ومنفذ بالقص بالليزر لإضافة طابع مميز وأنيق إلى الديكورات الداخلية العصرية.",
        },
    },

    "hammerhead-shark": {
        en: {
            title: "Hammerhead Shark",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "35 × 85 cm",
            description:
                "A detailed hammerhead shark wall artwork created with precision laser cutting for modern interior decoration.",
        },
        ar: {
            title: "قرش المطرقة",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "35 × 85 سم",
            description:
                "تصميم حائطي مفصل مستوحى من قرش المطرقة ومنفذ بدقة باستخدام القص بالليزر للديكورات الداخلية العصرية.",
        },
    },

    "islamic": {
        en: {
            title: "Islamic Design",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A decorative Islamic-inspired laser-cut wall artwork with a refined geometric character.",
        },
        ar: {
            title: "تصميم إسلامي",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم حائطي مفصل مستوحى من تصميم إسلامي ومنفذ بدقة باستخدام القص بالليزر للديكورات الداخلية العصرية.",
        },
    },

    "islamic-2": {
        en: {
            title: "Islamic Design II",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A decorative Islamic-inspired laser-cut wall artwork with a refined geometric character.",
        },
        ar: {
            title: "تصميم إسلامي II",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم حائطي مفصل مستوحى من تصميم إسلامي II ومنفذ بدقة باستخدام القص بالليزر للديكورات الداخلية العصرية.",
        },
    },

    "islamic-3": {
        en: {
            title: "Islamic Design III",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A decorative Islamic-inspired laser-cut wall artwork with a refined geometric character.",
        },
        ar: {
            title: "تصميم إسلامي III",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم حائطي مفصل مستوحى من تصميم إسلامي III ومنفذ بدقة باستخدام القص بالليزر للديكورات الداخلية العصرية.",
        },
    },

    "islamic-4": {
        en: {
            title: "Islamic Design IV",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A decorative Islamic-inspired laser-cut wall artwork with a refined geometric character.",
        },
        ar: {
            title: "تصميم إسلامي IV",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم حائطي مفصل مستوحى من تصميم إسلامي IV ومنفذ بدقة باستخدام القص بالليزر للديكورات الداخلية العصرية.",
        },
    },

    "islamic-5": {
        en: {
            title: "Islamic Design V",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A decorative Islamic-inspired laser-cut wall artwork with a refined geometric character.",
        },
        ar: {
            title: "تصميم إسلامي V",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم حائطي مفصل مستوحى من تصميم إسلامي V ومنفذ بدقة باستخدام القص بالليزر للديكورات الداخلية العصرية.",
        },
    },

    "islamic-6": {
        en: {
            title: "Islamic Design VI",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A decorative Islamic-inspired laser-cut wall artwork with a refined geometric character.",
        },
        ar: {
            title: "تصميم إسلامي VI",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم حائطي مفصل مستوحى من تصميم إسلامي VI ومنفذ بدقة باستخدام القص بالليزر للديكورات الداخلية العصرية.",
        },
    },

    "islamic-7": {
        en: {
            title: "Islamic Design VII",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A decorative Islamic-inspired laser-cut wall artwork with a refined geometric character.",
        },
        ar: {
            title: "تصميم إسلامي VII",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم حائطي مفصل مستوحى من تصميم إسلامي VII ومنفذ بدقة باستخدام القص بالليزر للديكورات الداخلية العصرية.",
        },
    },

    "islamic-8": {
        en: {
            title: "Islamic Design VIII",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A decorative Islamic-inspired laser-cut wall artwork with a refined geometric character.",
        },
        ar: {
            title: "تصميم إسلامي VIII",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم حائطي مفصل مستوحى من تصميم إسلامي VIII ومنفذ بدقة باستخدام القص بالليزر للديكورات الداخلية العصرية.",
        },
    },

    "islamic-9": {
        en: {
            title: "Islamic Design IX",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A decorative Islamic-inspired laser-cut wall artwork with a refined geometric character.",
        },
        ar: {
            title: "تصميم إسلامي IX",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم حائطي مفصل مستوحى من تصميم إسلامي IX ومنفذ بدقة باستخدام القص بالليزر للديكورات الداخلية العصرية.",
        },
    },

    "islamic-10": {
        en: {
            title: "Islamic Design X",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A decorative Islamic-inspired laser-cut wall artwork with a refined geometric character.",
        },
        ar: {
            title: "تصميم إسلامي X",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم حائطي مفصل مستوحى من تصميم إسلامي X ومنفذ بدقة باستخدام القص بالليزر للديكورات الداخلية العصرية.",
        },
    },

    "islamic-11": {
        en: {
            title: "Islamic Design XI",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A decorative Islamic-inspired laser-cut wall artwork with a refined geometric character.",
        },
        ar: {
            title: "تصميم إسلامي XI",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم حائطي مفصل مستوحى من تصميم إسلامي XI ومنفذ بدقة باستخدام القص بالليزر للديكورات الداخلية العصرية.",
        },
    },

    "islamic-12": {
        en: {
            title: "Islamic Design XII",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A decorative Islamic-inspired laser-cut wall artwork with a refined geometric character.",
        },
        ar: {
            title: "تصميم إسلامي XII",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم حائطي مفصل مستوحى من تصميم إسلامي XII ومنفذ بدقة باستخدام القص بالليزر للديكورات الداخلية العصرية.",
        },
    },

    "island": {
        en: {
            title: "Island",
            category: "Interior Decoration",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A decorative island-inspired laser-cut artwork designed to add character and style to modern interiors.",
        },
        ar: {
            title: "الجزيرة",
            category: "ديكور داخلي",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم ديكوري مستوحى من الجزيرة ومنفذ بالقص بالليزر لإضافة طابع مميز وأنيق إلى الديكورات الداخلية العصرية.",
        },
    },

    "motorcycle": {
        en: {
            title: "Motorcycle",
            category: "Custom Gifts",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A detailed motorcycle-inspired laser-cut artwork, designed for gifts, bedrooms, gaming rooms, and personal spaces.",
        },
        ar: {
            title: "الدراجة النارية",
            category: "هدايا مخصصة",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم فني مستوحى من الدراجة النارية ومنفذ بالقص بالليزر، مناسب للهدايا وغرف النوم وغرف الألعاب والمساحات الشخصية.",
        },
    },

    "nature": {
        en: {
            title: "Nature",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "45 × 45 cm",
            description:
                "A detailed nature wall artwork created with precision laser cutting for modern interior decoration.",
        },
        ar: {
            title: "الطبيعة",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "45 × 45 سم",
            description:
                "تصميم حائطي مفصل مستوحى من الطبيعة ومنفذ بدقة باستخدام القص بالليزر للديكورات الداخلية العصرية.",
        },
    },

    "octopus": {
        en: {
            title: "Octopus",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A detailed octopus wall artwork created with precision laser cutting for modern interior decoration.",
        },
        ar: {
            title: "الأخطبوط",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم حائطي مفصل مستوحى من الأخطبوط ومنفذ بدقة باستخدام القص بالليزر للديكورات الداخلية العصرية.",
        },
    },

    "seahorse": {
        en: {
            title: "Seahorse",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A detailed seahorse wall artwork created with precision laser cutting for modern interior decoration.",
        },
        ar: {
            title: "فرس البحر",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم حائطي مفصل مستوحى من فرس البحر ومنفذ بدقة باستخدام القص بالليزر للديكورات الداخلية العصرية.",
        },
    },

    "seashell": {
        en: {
            title: "Seashell",
            category: "Interior Decoration",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A decorative seashell-inspired laser-cut artwork designed to add character and style to modern interiors.",
        },
        ar: {
            title: "صدفة البحر",
            category: "ديكور داخلي",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم ديكوري مستوحى من صدفة البحر ومنفذ بالقص بالليزر لإضافة طابع مميز وأنيق إلى الديكورات الداخلية العصرية.",
        },
    },

    "shark": {
        en: {
            title: "Shark",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "45 × 90 cm",
            description:
                "A detailed shark wall artwork created with precision laser cutting for modern interior decoration.",
        },
        ar: {
            title: "سمكة القرش",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "45 × 90 سم",
            description:
                "تصميم حائطي مفصل مستوحى من سمكة القرش ومنفذ بدقة باستخدام القص بالليزر للديكورات الداخلية العصرية.",
        },
    },

    "wave": {
        en: {
            title: "Wave",
            category: "Interior Decoration",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A decorative wave-inspired laser-cut artwork designed to add character and style to modern interiors.",
        },
        ar: {
            title: "الموجة",
            category: "ديكور داخلي",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم ديكوري مستوحى من الموجة ومنفذ بالقص بالليزر لإضافة طابع مميز وأنيق إلى الديكورات الداخلية العصرية.",
        },
    },

    "wave-2": {
        en: {
            title: "Wave Design II",
            category: "Interior Decoration",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A decorative wave design ii-inspired laser-cut artwork designed to add character and style to modern interiors.",
        },
        ar: {
            title: "تصميم الموجة II",
            category: "ديكور داخلي",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم ديكوري مستوحى من تصميم الموجة II ومنفذ بالقص بالليزر لإضافة طابع مميز وأنيق إلى الديكورات الداخلية العصرية.",
        },
    },

    "whale": {
        en: {
            title: "Whale",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A detailed whale wall artwork created with precision laser cutting for modern interior decoration.",
        },
        ar: {
            title: "الحوت",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "50 × 70 سم",
            description:
                "تصميم حائطي مفصل مستوحى من الحوت ومنفذ بدقة باستخدام القص بالليزر للديكورات الداخلية العصرية.",
        },
    },

    "whale-2": {
        en: {
            title: "Whale Design II",
            category: "MDF Wall Art",
            material: "7mm MDF",
            size: "50 × 70 cm",
            description:
                "A detailed whale design ii wall artwork created with precision laser cutting for modern interior decoration.",
        },
        ar: {
            title: "تصميم الحوت II",
            category: "ديكورات حائط MDF",
            material: "MDF بسُمك 7 مم",
            size: "60 × 73 سم",
            description:
                "تصميم حائطي مفصل مستوحى من تصميم الحوت II ومنفذ بدقة باستخدام القص بالليزر للديكورات الداخلية العصرية.",
        },
    },

};