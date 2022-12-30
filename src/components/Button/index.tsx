import { ButtonHTMLAttributes } from 'react'
import { ButtonClasses, ButtonSizes, ButtonVariants } from './styles'

type BaseButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'className'
>

export interface ButtonProps extends BaseButtonProps {
  children: React.ReactNode
  className?: string
  size?: 'small' | 'flexible' | 'full'
  variant?: 'primary' | 'secondary'
}

export const Button = ({
  children,
  className,
  size = 'flexible',
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const classNames = `${ButtonClasses} ${ButtonSizes[size]} ${
    ButtonVariants[variant]
  } ${className ?? ''}`

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  )
}
