import Image from 'next/image'


export default function AboutHome() {
  return (
    <section className="py-16 px-6 ">
      <div className="mx-auto container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div>
          <span className="inline-block text-xs text-zinc-500 border border-zinc-200 rounded-md px-3 py-1 mb-4 tracking-wide">
            О компании
          </span>
          <h2 className="text-3xl font-medium leading-snug mb-4">
            Надежный поставщик паллет для вашего бизнеса
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed mb-8">
            PalletPro — компания, специализирующаяся на производстве и поставке деревянной тары и паллетной продукции. Мы предлагаем широкий ассортимент новых и бывших в употреблении изделий для складской, логистической и производственной отраслей.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {[
              { num: "500+", label: "Клиентов" },
              { num: "5 лет", label: "На рынке" },
              { num: "24/7", label: "Поддержка" },
              { num: "1200+", label: "Заказов в год" },
            ].map((s) => (
              <div key={s.label} className="bg-zinc-100 rounded-lg p-4">
                <p className="text-xl font-medium">{s.num}</p>
                <p className="text-xs text-zinc-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>



        <div className="flex flex-col gap-6">
          <div className="relative bg-zinc-100 rounded-2xl border border-zinc-200 aspect-[4/3] overflow-hidden">
            <Image
              src="home/AboutHome.jpg"
              alt="Фото компании / склад"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
          </div>
        </div>

      </div>
    </section>
  );
}