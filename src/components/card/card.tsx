import { FC, HTMLAttributes, ReactNode } from "react"

export interface CardProps
  extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

const generateCard = (props: CardProps) => {

  const { children, className: cn, ...rest } = props

  let className = 'w-full bg-white p-4 py-6 space-y-4 rounded-xl shadow hover:shadow-md'

  if (cn) {
    className += ` ${cn}`
  }

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

const Card: FC<CardProps> = (props) => {
  const cardElement = generateCard(props);
  return cardElement;
};

export default Card
