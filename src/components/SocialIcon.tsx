type SocialIconProps = {
  name: string
  className?: string
}

export function SocialIcon({ name, className = 'size-4' }: SocialIconProps) {
  switch (name) {
    case 'Facebook':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="M14 8.5V11h2.6l-.4 3H14v6h-3v-6H9v-3h2V8.2C11 6.4 12.1 5 14.2 5H16v3h-1.4c-.4 0-.6.2-.6.5Z" />
        </svg>
      )
    case 'Instagram':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect
            x="3.5"
            y="3.5"
            width="17"
            height="17"
            rx="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17" cy="7" r="1.2" fill="currentColor" />
        </svg>
      )
    case 'YouTube':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect
            x="2.5"
            y="6"
            width="19"
            height="12"
            rx="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M10 9.5 15.5 12 10 14.5Z" fill="currentColor" />
        </svg>
      )
    case 'X':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="M4 4h3.6l4.4 5.9L17.2 4H20l-6.3 7.2L20.5 20H17l-4.7-6.3L6.9 20H4l6.6-7.6L4 4Z" />
        </svg>
      )
    default:
      return null
  }
}
