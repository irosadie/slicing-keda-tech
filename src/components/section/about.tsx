import React, { FC, HTMLAttributes } from "react"
import { Button } from "../button"
import Image from "next/image"

type AboutSectionProps = HTMLAttributes<HTMLElement> & {
  title: string,
  content: string,
  ctaButtonText?: string
}

const AboutSection: FC<AboutSectionProps> = (props) => {

  const {
    title,
    content,
    ctaButtonText,
    ...rest
  } = props

  return (
    <section className="bg-white tablet:py-10" {...rest}>
      <div className="max-w-5xl m-auto tablet:px-4">
        <div className="grid tablet:grid-cols-2">
          <div className="flex justify-center bg-gray-300 tablet:bg-transparent">
            <Image
              src='/imgs/app.svg'
              alt=''
              width={0}
              height={0}
              className='w-[280px] py-12 tablet:w-[380px] laptop:w-[480px]'
            />
          </div>
          <div className="space-y-6 p-4 mt-2">
            <h2 className="text-3xl tablet:text-4xl laptop:text-5xl font-extrabold">{title}</h2>
            <article className="laptop:text-lg font-normal">
              <p>{content}</p>
            </article>
            <Button
              dimension="bigger"
              className="cursor-not-allowed"
            >
              {ctaButtonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
