import { FC, HTMLAttributes, ReactNode } from "react"
import styles from './card.module.scss'

export interface CardProps
  extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

const generateCard = (props: CardProps) => {

  const { children, className: cn, ...rest } = props

  let className = [styles.card]

  if (cn) {
    className.push(cn)
  }

  return (
    <div className={className.join(' ')} {...rest}>
      {children}
    </div>
  )
}

const Card: FC<CardProps> = (props) => {
  const cardElement = generateCard(props);
  return cardElement;
};

export default Card
