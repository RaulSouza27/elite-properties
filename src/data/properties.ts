import prop1 from "@/assets/prop-1.jpg";
import prop2 from "@/assets/prop-2.jpg";
import prop3 from "@/assets/prop-3.jpg";
import prop4 from "@/assets/prop-4.jpg";

export type PropertyType = "Casa" | "Apartamento" | "Cobertura";

export interface Property {
  id: string;
  title: string;
  neighborhood: string;
  city: string;
  type: PropertyType;
  bedrooms: number;
  area: number;
  price: number;
  image: string;
  tag?: string;
}

export const properties: Property[] = [
  {
    id: "jd-1",
    title: "Cobertura duplex com vista aberta",
    neighborhood: "Jardins",
    city: "São Paulo",
    type: "Cobertura",
    bedrooms: 4,
    area: 380,
    price: 42000,
    image: prop1,
    tag: "Exclusivo",
  },
  {
    id: "vn-2",
    title: "Apartamento em edifício autoral",
    neighborhood: "Vila Nova Conceição",
    city: "São Paulo",
    type: "Apartamento",
    bedrooms: 3,
    area: 210,
    price: 26500,
    image: prop2,
  },
  {
    id: "gt-3",
    title: "Casa de praia com deck sobre o mar",
    neighborhood: "Guarujá",
    city: "Litoral Norte",
    type: "Casa",
    bedrooms: 5,
    area: 520,
    price: 58000,
    image: prop3,
    tag: "Novo",
  },
  {
    id: "hg-4",
    title: "Casa assinada com jardim interno",
    neighborhood: "Higienópolis",
    city: "São Paulo",
    type: "Casa",
    bedrooms: 4,
    area: 340,
    price: 34000,
    image: prop4,
  },
];

export const neighborhoods = [
  "Jardins",
  "Vila Nova Conceição",
  "Higienópolis",
  "Guarujá",
];

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
