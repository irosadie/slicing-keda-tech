import { FC, HtmlHTMLAttributes, ReactNode } from "react"

export interface FooterProps
  extends HtmlHTMLAttributes<HTMLElement> {
  children: ReactNode
}

const generateFooter = (props: FooterProps) => {

  const { children, className: cn, ...rest } = props

  let className = 'bg-blue-900'

  if (cn) {
    className += ` ${cn}`
  }

  return (
    <footer className={className} {...rest}>
      <div className="py-4 tablet:p-4 max-w-5xl m-auto text-white">
        <ul className="flex gap-10">
          <li className="text-xs tablet:text-base flex-1 text-center tablet:text-end">{children}</li>
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
