import Link from 'next/link'
import clsx from 'clsx'

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
      />
    </svg>
  )
}

const variantStyles = {
  primary:
    'rounded-full bg-neutral-900 py-1 px-3 text-white hover:bg-neutral-700 dark:bg-yellow-500/10 dark:text-yellow-500 dark:ring-1 dark:ring-inset dark:ring-yellow-400 dark:hover:bg-yellow-500/10 dark:hover:text-yellow-300 dark:hover:ring-yellow-300',
  secondary:
    'rounded-full bg-neutral-100 py-1 px-3 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800/40 dark:text-neutral-400 dark:ring-1 dark:ring-inset dark:ring-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-300',
  filled:
    'rounded-full bg-neutral-900 py-1 px-3 text-white hover:bg-neutral-700 dark:bg-yellow-500 dark:text-white dark:hover:bg-yellow-500',
  outline:
    'rounded-full py-1 px-3 text-neutral-700 ring-1 ring-inset ring-neutral-900/10 hover:bg-neutral-900/2.5 hover:text-neutral-900 dark:text-neutral-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white',
  text: 'text-yellow-500 hover:text-yellow-600 dark:text-yellow-500 dark:hover:text-yellow-500',
}

export function Button({
  variant = 'primary',
  className,
  children,
  arrow,
  ...props
}) {
  className = clsx(
    'inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition',
    variantStyles[variant],
    className,
  )

  let arrowIcon = (
    <ArrowIcon
      className={clsx(
        'mt-0.5 h-5 w-5',
        variant === 'text' && 'relative top-px',
        arrow === 'left' && '-ml-1 rotate-180',
        arrow === 'right' && '-mr-1',
      )}
    />
  )

  let inner = (
    <>
      {arrow === 'left' && arrowIcon}
      {children}
      {arrow === 'right' && arrowIcon}
    </>
  )

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}
