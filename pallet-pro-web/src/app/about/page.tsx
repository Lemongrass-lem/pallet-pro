import AboutHome from '@/app/components/aboutHome/AboutHome'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О компании| Собственное производство поддонов и ящиков | PalletPro",
  description:
    "Производим новые поддоны, разбираем и принимаем Б/У, изготавливаем ящики и крышки на заказ. Пилим бревно и делаем обрезную доску.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHome />
    </main>
  )
}
