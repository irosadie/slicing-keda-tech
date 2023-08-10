'use client'

import { Button } from "$/components/button";
import { Card } from "$/components/card";
import { Footer } from "$/components/footer";
import { CheckCircle, LeaftIcon } from "$/components/icons";
import { CubeIcon, PowIcon } from "$/components/icons";
import { Main } from "$/components/main";
import { TextInput } from "$/components/text-input";
import { TextArea } from "$/components/textarea";
import { TIER } from "$/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const handleMenuClick = (id: string) => {
    const el = document.querySelector(id) as HTMLElement;

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }

  }

  return (
    <Main>
      <header className="laptop:min-h-screen header-bg">
        <nav className="w-full max-w-7xl m-auto tablet:px-4 bg-white tablet:bg-transparent z-50 fixed tablet:static top-0 shadow tablet:shadow-none px-4">
          <ul className="flex justify-between items-center tablet:hidden py-4 font-black text-xl">
            <li className="flex-1 hover:cursor-pointer hover:text-gray-200">HOME</li>
            <li>
              <Link href="/login">
                <Button>LOGIN</Button>
              </Link>
            </li>
          </ul>
          <ul className="tablet:flex py-4 tablet:pt-10 gap-2 tablet:gap-16 items-center font-black text-xl hidden">
            <li className="flex-1 text-white hover:cursor-pointer hover:text-gray-200">
              <div className="flex gap-4">
                <Image src='/imgs/coffee.svg' alt="logo" width={0} height={0} className="w-10" />
                <span>HOME</span>
              </div>
            </li>
            <li className="hover:text-blue-600 hover:cursor-pointer">
              <span onClick={() => handleMenuClick('#about')}>ABOUT</span>
            </li>
            <li className="hover:text-blue-600 hover:cursor-pointer">
              <span onClick={() => handleMenuClick('#pricing')}>PRICING</span>
            </li>
            <li className="hover:text-blue-600 hover:cursor-pointer">
              <span onClick={() => handleMenuClick('#contact')}>CONTACT</span>
            </li>
            <li>
              <Link href="/login">
                <Button>LOGIN</Button>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="max-w-5xl tablet:px-4 m-auto relative tablet:min-h-[590px] tablet:space-y-10">
          <div>
            <div className="text-start mt-20 tablet:mt-24 space-y-5 p-4">
              <h1 className="text-5xl tablet:text-7xl font-extrabold">
                <span className="text-blue-600">#Zen</span><span className="text-purple-500">tory</span>
              </h1>
              <div className="text-xl tablet:text-2xl font-bold space-y-2">
                <p>Cara baru catat Inventory, tanpa bikin Worry</p>
              </div>
            </div>
          </div>

          <div className="p-4 font-medium tablet:text-lg space-y-3">
            <div>
              <p>Zentory membantu Kami grow lebih cepat</p>
              <p>Karena pencatatan asset sangat rapi dan mudah!</p>
            </div>
            <p className="font-bold">Upin - CEO Durian Runtuh</p>
          </div>
        </div>
      </header>

      {/* about */}
      <section className="bg-white tablet:py-10" id="about">
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
              <h2 className="text-3xl tablet:text-4xl laptop:text-5xl font-extrabold">About Us</h2>
              <article className="laptop:text-lg font-normal">
                <p>Kami adalah tim yang bersemangat dalam menciptakan solusi modern bagi para pengusaha. Dengan komitmen untuk mempermudah dan meningkatkan efisiensi bisnis, maka izinkan Kami mempersembahkan platform inovatif #Zentotory untuk Anda dan para pelaku UMKM Indonesia.</p>
              </article>
              <Button
                dimension="bigger"
                className="cursor-not-allowed"
              >
                SELENGKAPNYA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* tier ans price */}
      <section className="bg-gray-50 py-3 tablet:py-10" id="pricing">
        <div className="max-w-5xl m-auto p-4 space-y-6">
          <h2 className="text-2xl tablet:text-4xl font-extrabold text-center">Pay as You Needed</h2>
          <article className="text-sm tablet:text-lg font-normal text-center tablet:px-20">
            <p>Kami tahu, setiap bisnis punya keinginannya sendiri untuk berkambang, oleh karena itu Kami menyediakan beberapa Tier yang bisa Kamu pilih sendiri!</p>
          </article>
          <div className="grid tablet:grid-cols-3 gap-8 tablet:pt-6">
            {
              TIER.map((value, index) => (
                <Card key={index}>
                  <div className="flex justify-center items-end">
                    {{
                      0: <LeaftIcon />,
                      1: <PowIcon />,
                      2: <CubeIcon />
                    }[index]}
                  </div>
                  <h3 className="font-bold text-center text-lg">{value.name}</h3>
                  <div className="pt-4">
                    <ul className="space-y-1.5 text-sm tablet:text-center laptop:text-start">
                      {
                        value.features.map((item, index) => {
                          return <li className={item?.heighlight ? 'font-semibold flex gap-2' : 'flex gap-2'} key={index}>
                            <CheckCircle />
                            {item?.name}
                          </li>
                        })
                      }
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
              ))
            }
          </div>
        </div>
      </section>

      {/* contact */}
      <section className="bg-white py-3 tablet:py-10" id="contact">
        <div className="max-w-5xl m-auto">
          <div className="grid tablet:grid-cols-2">
            <div className="flex justify-center">
              <Image
                src='/imgs/cs.svg'
                alt=''
                width={0}
                height={0}
                className='hidden tablet:block tablet:w-[580px]'
              />
            </div>
            <div className="space-y-6 p-4">
              <h2 className="text-2xl tablet:text-4xl font-extrabold">Contact Us</h2>
              <form method="POST" className="grid space-y-6">
                <TextInput
                  placeholder="your name"
                  type="text"
                  name="name"
                />
                <TextInput
                  placeholder="your@email.com"
                  type="email"
                  name="email"
                />
                <TextArea rows={4} />
                <div className="flex justify-end">
                  <Button
                    type="button"
                    className="cursor-not-allowed"
                  >
                    KIRIM
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer>&nbsp; 2023 by www.zentory.com | All Reserved</Footer>
    </Main>
  )
}
