import CtaUnder from "@/app/components/ctaUnder/CtaUnder"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Индивидуальный заказ поддонов | Калькулятор стоимости паллет в Екатеринбурге | PalletPro",
  description:
    "Рассчитайте цену поддона по вашим размерам и нагрузке. Изготовим паллеты на заказ любых параметров. Быстро, качественно, от производителя. Заполните форму и получите расчет!",
};

export default function CtaUnderPage() {
  return (
    <>
      <CtaUnder></CtaUnder>
    </>
  );
}
