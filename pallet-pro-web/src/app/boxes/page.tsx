import { ProductsGrid } from '@/app/components/products/ProductsGrid'
import { boxes } from '@/app/data/boxes'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Деревянные ящики и крышки на заказ Екатеринбург | Любые размеры | PalletPro",
  description:
    "Деревянные ящики для хранения и транспортировки грузов. Изготавливаем крышки любой конфигурации. Полный цикл: от заготовки обрезной доски до сборки на станках.",
};

export default function BoxesPage() {
  return <ProductsGrid items={boxes} />
}