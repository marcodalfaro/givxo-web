export type DemoGift = {
  id: string;
  title: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  category: string;
  image: string;
  icon: "plane" | "home" | "sofa" | "utensils" | "sparkles" | "gift";
};

export const demoGifts: DemoGift[] = [
  {
    id: "luna-de-miel",
    title: "Luna de miel",
    description: "Un aporte para nuestro primer viaje juntos.",
    targetAmount: 1200000,
    currentAmount: 740000,
    category: "Viaje",
    image: "/gifts/luna-de-miel.png",
    icon: "plane",
  },
  {
    id: "heladera",
    title: "Heladera",
    description: "Para equipar nuestro nuevo hogar.",
    targetAmount: 950000,
    currentAmount: 380000,
    category: "Hogar",
    image: "/gifts/heladera.png",
    icon: "home",
  },
  {
    id: "sillon",
    title: "Sillón",
    description: "Un rincón cómodo para empezar esta nueva etapa.",
    targetAmount: 620000,
    currentAmount: 290000,
    category: "Hogar",
    image: "/gifts/sillon.png",
    icon: "sofa",
  },
  {
    id: "vajilla",
    title: "Vajilla",
    description: "Para compartir nuestras primeras comidas en casa.",
    targetAmount: 240000,
    currentAmount: 160000,
    category: "Cocina",
    image: "/gifts/vajilla.png",
    icon: "utensils",
  },
  {
    id: "fondo-para-el-hogar",
    title: "Fondo para el hogar",
    description: "Un aporte flexible para armar nuestro espacio.",
    targetAmount: 800000,
    currentAmount: 455000,
    category: "Fondo",
    image: "/gifts/hogar.png",
    icon: "sparkles",
  },
  {
    id: "experiencia-gastronomica",
    title: "Experiencia gastronómica",
    description: "Una cena especial para celebrar después del casamiento.",
    targetAmount: 180000,
    currentAmount: 90000,
    category: "Experiencia",
    image: "/gifts/experiencia.png",
    icon: "gift",
  },
];

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}

export function getGiftProgress(
  currentAmount: number,
  targetAmount: number
): number {
  if (targetAmount <= 0) return 0;

  return Math.min(
    Math.round((currentAmount / targetAmount) * 100),
    100
  );
}