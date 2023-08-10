import { FC, HtmlHTMLAttributes, ReactNode } from "react"
import styles from './footer.module.scss'

export interface FooterProps
  extends HtmlHTMLAttributes<HTMLElement> {
  children: ReactNode
}

const generateFooter = (props: FooterProps) => {

  const { children, className: cn, ...rest } = props

  let className = [styles.footer]

  if (cn) {
    className.push(cn)
  }

  return (
    <footer className={className.join(' ')} {...rest}>
      <div className={styles.wrapper}>
        <ul>
          <li>{children}</li>
        </ul>
      </div>
    </footer>
  )
}

const Footer: FC<FooterProps> = (props) => {
  const footerElement = generateFooter(props);
  return footerElement;
};

export default Footer
