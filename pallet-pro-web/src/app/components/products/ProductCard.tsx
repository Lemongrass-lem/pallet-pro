'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type BadgeType = 'new' | 'used' | 'custom'

const badgeConfig: Record<BadgeType, { label: string; className: string }> = {
  new: { label: 'Новый', className: 'bg-emerald-50 text-emerald-900' },
  used: { label: 'Б/У', className: 'bg-zinc-100 text-zinc-700' },
  custom: { label: 'Под заказ', className: 'bg-violet-50 text-violet-900' },
}

interface ProductCardProps {
  title?: string
  size?: string
  price?: string
  badge?: BadgeType
  image?: string
  images?: string[]
  wide?: boolean
}

export function ProductCard({
  title = 'Паллет',
  size = '1200×1000',
  price = 'Договорная',
  badge = 'new',
  image,
  images,
  wide = false,
}: ProductCardProps) {
  const b = badgeConfig[badge]
  const isCustom = badge === 'custom'
  const [isOpen, setIsOpen] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const galleryImages = (images?.length ? images : image ? [image] : []).filter(Boolean)
  const hasGallery = galleryImages.length > 0

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        return
      }

      if (event.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % galleryImages.length)
      }

      if (event.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [galleryImages.length, isOpen])

  const openGallery = (index = 0) => {
    if (!hasGallery) return
    setActiveImageIndex(index)
    setIsOpen(true)
  }

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <>
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-colors">
        <button
          type="button"
          onClick={() => openGallery(0)}
          className={`group relative flex items-center justify-center overflow-hidden bg-zinc-100 ${
            wide ? 'aspect-[2/1]' : 'aspect-square'
          }`}
          aria-label={`Открыть фото ${title}`}
          disabled={!hasGallery}
        >
          {image ? (
            <Image
              src={image}
              alt={title}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              fill
            />
          ) : (
            <span className="text-4xl text-zinc-300">📦</span>
          )}

          {hasGallery && (
            <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
              Смотреть фото
            </span>
          )}
        </button>

        <div className="flex flex-1 flex-col gap-2.5 p-4">
          <span
            className={`w-fit rounded-md px-2 py-0.5 text-xs font-medium ${b.className}`}
          >
            {b.label}
          </span>

          <div>
            <p className="text-[15px] font-medium text-black">{title}</p>
            <p className="text-xs text-zinc-500">{size}</p>
          </div>

          <div className="mt-auto flex items-center justify-between">
            <span className="text-sm font-medium text-black">{price}</span>

            {isCustom ? (
              <Link
                href="/orders"
                className="rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white transition hover:opacity-80"
              >
                Заказать
              </Link>
            ) : (
              <Link
                href="/orders"
                className="rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white transition hover:opacity-80"
              >
                Заказать
              </Link>
            )}
          </div>
        </div>
      </div>

      {isOpen && hasGallery && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative flex w-full max-w-5xl flex-col rounded-3xl bg-white p-3 shadow-2xl sm:p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/80 px-3 py-1 text-sm font-medium text-white"
            >
              ✕
            </button>

            <div className="relative h-[70vh] w-full overflow-hidden rounded-2xl">
              <Image
                src={galleryImages[activeImageIndex]}
                alt={`${title} ${activeImageIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>

            {galleryImages.length > 1 && (
              <div className="mt-3 flex items-center justify-between">
                <button
                  type="button"
                  onClick={prevImage}
                  className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white"
                >
                  ← Назад
                </button>

                <span className="text-sm text-zinc-600">
                  {activeImageIndex + 1} / {galleryImages.length}
                </span>

                <button
                  type="button"
                  onClick={nextImage}
                  className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white"
                >
                  Вперёд →
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}