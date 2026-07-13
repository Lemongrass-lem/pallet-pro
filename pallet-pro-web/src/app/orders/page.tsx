import CtaOrder from '@/app/components/ctaOrder/CtaOrder'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Оставить заявку на поддоны, ящики и пиломатериалы в Екатеринбурге | PalletPro",
  description:
    "Закажите обратный звонок или отправьте заявку на производство поддонов, ящиков, крышек и пиломатериалов. Быстро рассчитаем стоимость!",
};

export default function OrdersPage() {
  return (
    <>
      <CtaOrder />
    </>
  )
}
