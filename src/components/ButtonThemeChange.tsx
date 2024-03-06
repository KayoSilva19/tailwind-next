'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonToggle = tv({
  variants: {
    variant: {
      toggle:
        'p-2 rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition-all duration-150 shadow-sm',
    },
  },
  defaultVariants: {
    variant: 'toggle',
  },
})

export type ButtonThemeChangeProps = ComponentProps<'button'> &
  VariantProps<typeof buttonToggle>

export function ButtonThemeChange({ variant }: ButtonThemeChangeProps) {
  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    if (theme === 'light') {
      return setTheme('dark')
    }
    setTheme('light')
  }

  return (
    <div className="absolute right-8 top-8">
      <button onClick={toggleTheme} className={buttonToggle({ variant })}>
        {theme === 'light' && <Sun />}
        {theme === 'dark' && <Moon />}
      </button>
    </div>
  )
}
