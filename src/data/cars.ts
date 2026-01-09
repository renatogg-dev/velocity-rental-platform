export type CarCategory =
  | "Supercars"
  | "SUVs"
  | "Electric"
  | "Convertible"
  | "Classic"
  | "Track Day";

export type Car = {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  images: string[];
  category: CarCategory;
};

// Unsplash download URL - works with slug IDs
const unsplash = (id: string) =>
  `https://unsplash.com/photos/${id}/download?force=true&w=800`;

export const cars: Car[] = [
  // === SUPERCARS (5 vehicles) ===
  {
    id: "porsche-gt3-rs",
    title: "Porsche 911 GT3 RS",
    location: "Los Angeles, CA",
    price: 1200,
    rating: 4.98,
    category: "Supercars",
    images: [
      unsplash("BcQhRTXaibk"),
      unsplash("h8He0OnzY7g"),
      unsplash("5-hfgWUdf64"),
    ],
  },
  {
    id: "lamborghini-huracan-evo",
    title: "Lamborghini Huracán EVO",
    location: "Miami, FL",
    price: 1500,
    rating: 4.95,
    category: "Supercars",
    images: [
      unsplash("gELKXGfiSe0"),
      unsplash("dQLkK_YCc2A"),
      unsplash("G0PrB5aloOs"),
    ],
  },
  {
    id: "mclaren-720s",
    title: "McLaren 720S",
    location: "San Francisco, CA",
    price: 1400,
    rating: 4.92,
    category: "Supercars",
    images: [
      unsplash("OpNda8bd9D4"),
      unsplash("kj7kRbDgrLA"),
      unsplash("mQo2q5t8tYg"),
    ],
  },
  {
    id: "lamborghini-aventador-svj",
    title: "Lamborghini Aventador SVJ",
    location: "Scottsdale, AZ",
    price: 2500,
    rating: 4.99,
    category: "Supercars",
    images: [
      unsplash("h1I6_kwAtLU"),
      unsplash("ESXhISyyHho"),
      unsplash("KmFTeGIgFXo"),
    ],
  },
  {
    id: "bugatti-chiron",
    title: "Bugatti Chiron",
    location: "Beverly Hills, CA",
    price: 5000,
    rating: 5.0,
    category: "Supercars",
    images: [
      unsplash("0hSx3tEass8"),
      unsplash("xR8Xj3Pq__M"),
      unsplash("wsI-Xj5JHKA"),
    ],
  },

  // === TRACK DAY (4 vehicles) ===
  {
    id: "ferrari-sf90-stradale",
    title: "Ferrari SF90 Stradale",
    location: "Las Vegas, NV",
    price: 2200,
    rating: 4.99,
    category: "Track Day",
    images: [
      unsplash("Wl6OeSGyOf4"),
      unsplash("kaQhTNDRuoE"),
      unsplash("ZCnoc3jNZxY"),
    ],
  },
  {
    id: "nissan-gtr-nismo",
    title: "Nissan GT-R Nismo",
    location: "Seattle, WA",
    price: 800,
    rating: 4.89,
    category: "Track Day",
    images: [
      unsplash("sHyzJg2SV8k"),
      unsplash("0K7nryVsYiQ"),
      unsplash("Ebs19hLxnkg"),
    ],
  },
  {
    id: "ferrari-488-pista",
    title: "Ferrari 488 Pista",
    location: "Austin, TX",
    price: 1900,
    rating: 4.96,
    category: "Track Day",
    images: [
      unsplash("xDVuBAshR7g"),
      unsplash("BGm6UVBWakw"),
      unsplash("XdKxlyqHe1I"),
    ],
  },
  {
    id: "porsche-gt2-rs",
    title: "Porsche 911 GT2 RS",
    location: "Laguna Beach, CA",
    price: 1800,
    rating: 4.97,
    category: "Track Day",
    images: [
      unsplash("NnFFIKITNyQ"),
    ],
  },

  // === CLASSIC (3 vehicles) ===
  {
    id: "aston-martin-dbs",
    title: "Aston Martin DBS Superleggera",
    location: "New York, NY",
    price: 1300,
    rating: 4.9,
    category: "Classic",
    images: [
      unsplash("gGX9_tUbvaY"),
      unsplash("CqcaP77BQkk"),
      unsplash("QjbliQ5TLPQ"),
    ],
  },
  {
    id: "ferrari-california-t",
    title: "Ferrari California T",
    location: "Naples, FL",
    price: 1100,
    rating: 4.87,
    category: "Classic",
    images: [
      unsplash("VWs7rqAK1sc"),
      unsplash("SK9S6RRBM-4"),
      unsplash("zsaqs1Ze8SI"),
    ],
  },
  {
    id: "aston-martin-db11",
    title: "Aston Martin DB11",
    location: "Charleston, SC",
    price: 1050,
    rating: 4.91,
    category: "Classic",
    images: [
      unsplash("HHha0N48od8"),
      unsplash("zkclxSVi1Fc"),
      unsplash("bbsx5eVcUPw"),
    ],
  },

  // === SUVs (6 vehicles) ===
  {
    id: "bentley-bentayga",
    title: "Bentley Bentayga",
    location: "Aspen, CO",
    price: 1100,
    rating: 4.94,
    category: "SUVs",
    images: [
      unsplash("RwiLCKRhAAg"),
      unsplash("f2k9F9jWXoE"),
      unsplash("w_s8oQrjQlM"),
    ],
  },
  {
    id: "rolls-royce-cullinan",
    title: "Rolls-Royce Cullinan",
    location: "Dubai, UAE",
    price: 1800,
    rating: 4.97,
    category: "SUVs",
    images: [
      unsplash("ppsjRdTxGDA"),
      unsplash("d5K5U0dfXA0"),
      unsplash("gHxr_Dq2fzA"),
    ],
  },
  {
    id: "mercedes-amg-g63",
    title: "Mercedes-AMG G63",
    location: "Dallas, TX",
    price: 900,
    rating: 4.93,
    category: "SUVs",
    images: [
      unsplash("1bqDOwWs0qg"),
      unsplash("SL9scFZufk0"),
      unsplash("DNAXQHvj3o4"),
    ],
  },
  {
    id: "range-rover-sv",
    title: "Range Rover SV Autobiography",
    location: "Hamptons, NY",
    price: 850,
    rating: 4.88,
    category: "SUVs",
    images: [
      unsplash("cW1iofy4YOA"),
      unsplash("DFvBETKITEw"),
      unsplash("U8X47IYWeqU"),
    ],
  },
  {
    id: "lamborghini-urus",
    title: "Lamborghini Urus",
    location: "Hollywood, CA",
    price: 1350,
    rating: 4.95,
    category: "SUVs",
    images: [
      unsplash("hVld5nXY-Ok"),
      unsplash("qoZSYNBvIxg"),
      unsplash("Z3M8NGw4f_E"),
    ],
  },
  {
    id: "porsche-cayenne-turbo",
    title: "Porsche Cayenne Turbo GT",
    location: "Denver, CO",
    price: 750,
    rating: 4.86,
    category: "SUVs",
    images: [
      unsplash("Dnwgwb1FtiA"),
      unsplash("BRTO8ru7-M8"),
      unsplash("K4yImxhTz3Q"),
    ],
  },

  // === ELECTRIC (2 vehicles) ===
  {
    id: "tesla-model-s-plaid",
    title: "Tesla Model S Plaid",
    location: "Palo Alto, CA",
    price: 750,
    rating: 4.96,
    category: "Electric",
    images: [
      unsplash("oxqhypQImH0"),
      unsplash("G9MNjujk8Tg"),
      unsplash("qqtJisDo4SE"),
    ],
  },
  {
    id: "porsche-taycan-turbo-s",
    title: "Porsche Taycan Turbo S",
    location: "San Diego, CA",
    price: 950,
    rating: 4.94,
    category: "Electric",
    images: [
      unsplash("2w_Nxti8iKE"),
      unsplash("Zn3Fnrt5dvk"),
      unsplash("11D0_vrny6E"),
    ],
  },

  // === CONVERTIBLE (4 vehicles) ===
  {
    id: "bmw-i8-roadster",
    title: "BMW i8 Roadster",
    location: "Miami, FL",
    price: 650,
    rating: 4.88,
    category: "Convertible",
    images: [
      unsplash("dzZV4PpQ-NI"),
      unsplash("MdXKvBzHE_Y"),
      unsplash("UHEApW2CosM"),
    ],
  },
  {
    id: "audi-r8-spyder",
    title: "Audi R8 Spyder",
    location: "Malibu, CA",
    price: 1050,
    rating: 4.91,
    category: "Convertible",
    images: [
      unsplash("d1Jum1vVLew"),
      unsplash("9EzxZzB0VJA"),
      unsplash("oGKE0SkHEfQ"),
    ],
  },
  {
    id: "mclaren-720s-spider",
    title: "McLaren 720S Spider",
    location: "Palm Beach, FL",
    price: 1600,
    rating: 4.95,
    category: "Convertible",
    images: [
      unsplash("CXzKQfNBLow"),
      unsplash("Y9MRGZE12Io"),
    ],
  },
  {
    id: "lamborghini-huracan-spyder",
    title: "Lamborghini Huracán Spyder",
    location: "Ibiza, Spain",
    price: 1700,
    rating: 4.96,
    category: "Convertible",
    images: [
      unsplash("biS8sSPP_js"),
      unsplash("O6z1wI0X_N4"),
      unsplash("wRolzmnauhk"),
    ],
  },
];
