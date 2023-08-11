import React, { FC, HTMLAttributes, ReactNode } from "react"
import { Button } from "../button"
import { BurgerIcon } from "../icons"
import { MENU } from "$/constants"
import Image from "next/image"
import Link from "next/link"

type HeaderSectionProps = Omit<HTMLAttributes<HTMLElement>, "title"> & {
  title: ReactNode,
  description: string,
  testimonies: {
    testimony: ReactNode,
    by: string
  },
  menu: typeof MENU,
  onMenuClick: (selector: string) => void,
  onDrawerClick: () => void
}

const HeaderSection: FC<HeaderSectionProps> = (props) => {

  const {
    title,
    description,
    testimonies,
    menu,
    onMenuClick,
    onDrawerClick,
    ...rest
  } = props

  const menus: ReactNode[] = []

  menu.map((value, index) => {
    if (index === 0) {
      menus.push(
        <li key={index} className="flex-1 text-white hover:cursor-pointer hover:text-gray-200">
          <div className="flex gap-4">
            <Image src='/imgs/coffee.svg' alt="logo" width={0} height={0} className="w-10" />
            <span>{value.title}</span>
          </div>
        </li>
      )
    }
    menus.push(
      <li key={index} className="hover:text-blue-600 hover:cursor-pointer">
        <span onClick={() => onMenuClick(value.link)}>{value.title}</span>
      </li>
    )
  })

  return (
    <header className="laptop:min-h-screen header-bg" {...rest}>
      <nav className="w-full max-w-7xl m-auto tablet:px-4 bg-white tablet:bg-transparent z-50 fixed tablet:static top-0 shadow tablet:shadow-none px-4">
        {/* mobile menu */}
        <ul className="flex justify-between items-center tablet:hidden py-4 font-black text-xl">
          <li className="flex-1 hover:cursor-pointer hover:text-gray-200">
            <button
              onClick={onDrawerClick}
              className="scale-125"
            >
              <BurgerIcon />
            </button>
          </li>
          <li>
            <BtnLoginComponent />
          </li>
        </ul>
        {/* mobile menu end*/}

        {/* tablet and desktop menu */}
        <ul className="tablet:flex py-4 tablet:pt-10 gap-2 tablet:gap-16 items-center font-black text-xl hidden">
          {menus}
          <li>
            <BtnLoginComponent />
          </li>
        </ul>
        {/* tablet and desktop menu end */}

      </nav>
      <div className="max-w-5xl tablet:px-4 m-auto relative tablet:min-h-[590px] tablet:space-y-10">
        <div>
          <div className="text-start mt-20 tablet:mt-24 space-y-5 p-4">
            <h1 className="text-5xl tablet:text-7xl font-extrabold">{title}</h1>
            <div className="text-xl tablet:text-2xl font-bold space-y-2">
              <p>{description}</p>
            </div>
          </div>
        </div>

        <div className="p-4 font-medium tablet:text-lg space-y-3">
          <div>{testimonies.testimony}</div>
          <p className="font-bold">{testimonies.by}</p>
        </div>
      </div>
    </header>
  )
}

const BtnLoginComponent = () => <Link href="/login"><Button>LOGIN</Button></Link>

export default HeaderSection
