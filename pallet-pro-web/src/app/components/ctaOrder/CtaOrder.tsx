export default function CtaOrder() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto container bg-black rounded-3xl px-6 py-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:px-12 md:py-14">
        <div className="flex-1">
          <span className="inline-block text-xs text-white/40 border border-white/10 rounded-lg px-3 py-1 mb-4 tracking-wide">
            Оставить заявку
          </span>
          <h2 className="text-3xl font-medium text-white leading-snug mb-3">
            Для оформления заказа заполните форму
          </h2>
          <p className="text-sm text-white/40 leading-relaxed max-w-md">
            Укажите контакт — мы свяжется с вами, уточнит объём и предложит лучшую цену
          </p>
          <div className="flex gap-5 mt-6">
            {['Доставка по РФ'].map((t) => (
              <span key={t} className="flex items-center gap-2 text-sm text-white/40">
                <span className="text-white/20">✓</span> {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 md:max-w-sm">
          <input
            type="text"
            placeholder="Ваше имя"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none focus:border-white/30"
          />
          <input
            type="text"
            placeholder="Телефон или email"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none focus:border-white/30"
          />
          <button className="bg-white text-black rounded-xl py-3 text-sm font-medium hover:opacity-85 transition-opacity">
            Отправить заявку
          </button>
          <p className="text-xs text-white/20 text-center">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </div>
      </div>
    </section>
  )
}
