'use client';
import { cn } from '@/app/lib/utils/cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { topMenu } from '@/app/components/layout/top-menu/topmenu.data'

export function TopMenu() {
  const pathname = usePathname()

  return (
    <>
      <div className='mx-5 mb-8'>
        <nav className='flex flex-wrap justify-center gap-3 overflow-x-auto px-2 py-2'>
          {topMenu.map((menuItem) => {
            const isActive =
              pathname === menuItem.href ||
              (menuItem.href !== '/' && pathname.startsWith(menuItem.href))

            return (
              <Link
                key={menuItem.title}
                href={menuItem.href}
                className={cn(
                  'flex items-center gap-1 text-sm font-medium transition-all hover:opacity-100',
                  isActive ? 'opacity-100 text-teal-600' : 'opacity-50 text-slate-700'
                )}
              >
                {menuItem.icon && <menuItem.icon size={16} style={{ marginRight: 4 }} />}

                <span>{menuItem.title}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}