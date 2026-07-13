import {ProductsGrid} from '@/app/components/products/ProductsGrid'
import { materials } from '@/app/data/materials'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Пиломатериалы от производителя в Екатеринбурге | Доска обрезная, брус, горбыль | PalletPro",
  description:
    "Пиломатериалы напрямую из цеха: обрезная доска, брус, горбыль, рейка. Распиливаем бревно под ваш размер. Быстрая отгрузка. Низкие цены. В наличии и под заказ.",
};

export default function MaterialPage() {
  return (
    <div>
      <ProductsGrid items={materials} />
    </div>
  );
}
