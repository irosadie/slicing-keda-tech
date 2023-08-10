import { TIER } from "$/constants"
import { FC, HTMLAttributes } from "react"
import { Button } from "../button"
import { Card } from "../card"
import { CheckCircle } from "../icons"

type TierSectionProps = HTMLAttributes<HTMLElement> & {
  data: typeof TIER,
  title: string,
  description: string,
}

const TierSection: FC<TierSectionProps> = (props) => {

  const { data, title, description, ...rest } = props

  const cards: JSX.Element[] = []

  data.map((value, index) => {

    const items: JSX.Element[] = []

    value.features.map((item, index) => {
      items.push(
        <li className={item?.heighlight ? 'font-semibold flex gap-2' : 'flex gap-2'} key={index}>
          <CheckCircle />
          {item?.name}
        </li>
      )
    })

    return cards.push(
      <Card key={index}>
        <div className="flex justify-center items-end">
          {value.icon}
        </div>
        <h3 className="font-bold text-center text-lg">{value.name}</h3>
        <div className="pt-4">
          <ul className="space-y-1.5 text-sm tablet:text-center laptop:text-start">
            {items}
          </ul>
        </div>
        <div className="pt-4">
          <ul className="flex justify-between tablet:justify-center tablet:grid laptop:justify-between laptop:flex">
            <li><s>{value.price}</s></li>
            <li className="font-bold text-green-700">{value.discountedPrice}</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Button filled className="cursor-not-allowed">BOOK NOW</Button>
        </div>
      </Card>
    )
  })

  return (
    <section className="bg-gray-50 py-3 tablet:py-10" {...rest}>
      <div className="max-w-5xl m-auto p-4 space-y-6">
        <h2 className="text-2xl tablet:text-4xl font-extrabold text-center">{title}</h2>
        <article className="text-sm tablet:text-lg font-normal text-center tablet:px-20">
          <p>{description}</p>
        </article>
        <div className="grid tablet:grid-cols-3 gap-8 tablet:pt-6">
          {cards}
        </div>
      </div>
    </section>
  )
}

export default TierSection
