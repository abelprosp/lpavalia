interface LogoProps {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src="/logo-avalia-imobe.png"
      alt="Avalia Imobe — imobiliárias"
      className={`logo ${className}`.trim()}
    />
  )
}
