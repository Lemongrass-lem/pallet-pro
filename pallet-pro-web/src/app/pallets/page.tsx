import {ProductsGrid} from '@/app/components/products/ProductsGrid'
import { pallets } from '@/app/data/pallets'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новые деревянные паллеты (поддоны) от производителя в Екатеринбурге | PalletPro",
  description:
    "Производство новых паллет по ГОСТу. Собственная распиловка бревна и парк станков. В наличии стандартные (1200x800) и нестандартные размеры.",
};

export default function PalletsPage() {
  return (
    <div>
      <ProductsGrid items={pallets} />
    </div>
  );
}
