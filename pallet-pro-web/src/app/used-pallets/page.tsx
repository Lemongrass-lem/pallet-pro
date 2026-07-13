import {ProductsGrid} from '@/app/components/products/ProductsGrid'
import { usedPallets } from '@/app/data/usedPallets'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Б/У поддоны и полуподдоны цены в Екатеринбурге | PalletPro",
  description:
    "Недорогие Б/У поддоны и полуподдоны для склада и перевозок. В наличии разные размеры: стандарт 1200х800 и полу-формат 800х600. Принимаем на разбор, есть свой цех. Вывоз самовывозом или доставка.",
};

export default function UsedPalletsPage() {
  return (
    <div>
      <ProductsGrid items={usedPallets} />
    </div>
  );
}
