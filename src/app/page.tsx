import { LeaftIcon } from "$/components/icons";
import CubeIcon from "$/components/icons/cube";
import PowIcon from "$/components/icons/pow";
import { TIER } from "$/constants";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="bg-white h-[50%] laptop:min-h-screen header-bg">
        <nav className="w-full max-w-7xl m-auto tablet:px-4">
          <ul className="hidden tablet:flex py-4 pt-10 gap-16 items-center font-black text-xl">
            <li className="flex-1 text-white hover:cursor-pointer hover:text-gray-200">
              <div className="flex gap-4">
                <Image src='/imgs/coffee.svg' alt="logo" width={0} height={0} className="w-10" />
                <span>HOME</span>
              </div>
            </li>
            <li className="hover:text-blue-600 hover:cursor-pointer">
              ABOUT
            </li>
            <li className="hover:text-blue-600 hover:cursor-pointer">
              PRICING
            </li>
            <li className="hover:text-blue-600 hover:cursor-pointer">
              CONTACT
            </li>
            <li>
              <button className="bg-white border-2 border-cyan-600 rounded-lg text-cyan-600 px-10 py-2 text-sm font-semibold">LOGIN</button>
            </li>
          </ul>
        </nav>
        <div className="max-w-5xl tablet:px-4 m-auto relative min-h-[590px] tablet:space-y-10">
          <div>
            <div className="text-start mt-24 space-y-5 p-4">
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
      <section className="bg-white py-3 tablet:py-10">
        <div className="max-w-5xl m-auto tablet:px-4">
          <div className="grid tablet:grid-cols-2">
            <div className="flex justify-center bg-gray-300 tablet:bg-transparent">
              <Image
                src='/imgs/app.svg'
                alt=''
                width={0}
                height={0}
                className='w-[280px] py-12 tablet:w-[480px]'
              />
            </div>
            <div className="space-y-6 p-4 mt-2">
              <h2 className="text-3xl tablet:text-5xl font-extrabold">About Us</h2>
              <article className="tablet:text-lg font-normal">
                <p>Kami adalah tim yang bersemangat dalam menciptakan solusi modern bagi para pengusaha. Dengan komitmen untuk mempermudah dan meningkatkan efisiensi bisnis, maka izinkan Kami mempersembahkan platform inovatif #Zentotory untuk Anda dan para pelaku UMKM Indonesia.</p>
              </article>
              <button className="bg-white border-2 border-cyan-600 rounded-lg text-cyan-600 px-10 py-2.5 text-base font-semibold">
                SELENGKAPNYA
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* tier ans price */}
      <section className="bg-gray-50 py-3 tablet:py-10">
        <div className="max-w-5xl m-auto p-4 space-y-6">
          <h2 className="text-2xl tablet:text-4xl font-extrabold text-center">Pay as You Needed</h2>
          <article className="text-sm tablet:text-lg font-normal text-center tablet:px-20">
            <p>Kami tahu, setiap bisnis punya keinginannya sendiri untuk berkambang, oleh karena itu Kami menyediakan beberapa Tier yang bisa Kamu pilih sendiri!</p>
          </article>
          <div className="grid tablet:grid-cols-3 gap-8 tablet:pt-6">
            {
              TIER.map((value, index) => (
                <div key={index} className="w-full bg-white p-4 py-6 space-y-4 rounded-xl shadow hover:shadow-md">
                  <div className="flex justify-center items-end">
                    {{
                      0: <LeaftIcon />,
                      1: <PowIcon />,
                      2: <CubeIcon />
                    }[index]}
                  </div>
                  <h3 className="font-bold text-center text-lg">{value.name}</h3>
                  <div>
                    <ul className="space-y-1.5 text-sm">
                      {
                        value.features.map((item, index) => {
                          return <li className={item?.heighlight ? 'font-semibold' : undefined} key={index}>{item?.name}</li>
                        })
                      }
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-white border-2 border-cyan-600 w-full rounded-lg text-cyan-600 px-10 py-2 text-sm font-semibold">
                      BOOK NOW
                    </button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      {/* tier ans price */}
      <section className="bg-white py-3 tablet:py-10">
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
            <div className="space-y-6 p-4 px-8">
              <h2 className="text-2xl tablet:text-4xl font-extrabold">Contact Us</h2>
              <form className="grid space-y-6">
                <input
                  placeholder="your name"
                  type="text"
                  name="name"
                  className="bg-gray-100 rounded-md py-2 px-4 border border-gray-400 placeholder:text-gray-500 outline-none"
                />
                <input
                  placeholder="your@email.com"
                  type="email"
                  name="email"
                  className="bg-gray-100 rounded-md py-2 px-4 border border-gray-400 placeholder:text-gray-500 outline-none"
                />
                <textarea
                  rows={4}
                  className="bg-gray-100 rounded-md py-2 px-4 border border-gray-400 placeholder:text-gray-500 outline-none"
                ></textarea>
                <div className="flex justify-end">
                  <button className="bg-white border-2 border-cyan-600 rounded-lg text-cyan-600 px-10 py-2 w-fit text-base font-semibold">
                    KIRIM
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-blue-900">
        <div className="py-4 tablet:p-4 max-w-5xl m-auto text-white">
          <ul className="flex gap-10">
            <li className="text-xs tablet:text-base flex-1 text-center tablet:text-end">&copy; 2023 by www.zentory.com | All Reserved</li>
          </ul>
        </div>
      </footer>
    </main>
  )
}
