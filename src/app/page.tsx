import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="bg-white min-h-screen header-bg">
        <nav className="w-full max-w-7xl m-auto">
          <ul className="flex py-4 pt-10 gap-16 items-center font-black text-xl">
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
        <div className="max-w-5xl m-auto relative min-h-[590px] space-y-10">
          <div>
            <div className="text-start mt-24 space-y-5 p-4">
              <h1 className="text-7xl font-extrabold">
                <span className="text-blue-600">#Zen</span><span className="text-purple-500">tory</span>
              </h1>
              <div className="text-2xl font-bold space-y-2">
                <p>Cara baru catat Inventory, tanpa bikin Worry</p>
              </div>
            </div>
          </div>

          <div className="p-4 font-medium text-lg space-y-3">
            <div>
              <p>Zentory membantu kami grow lebih cepat</p>
              <p>Karena pencatatan asset sangat rapi dan mudah!</p>
            </div>
            <p className="font-bold">Upin - CEO Durian Runtuh</p>
          </div>

        </div>

        <div className="max-w-7xl m-auto bg-red-50 relative">
          <span className="text-white absolute bottom-1 right-0">
            &copy; 2023 by Imron Rosadi | All Reserved
          </span>
        </div>
      </header>
      {/* about */}
      <section className="bg-white py-10">
        <div className="max-w-5xl m-auto">
          <div className="grid grid-cols-2">
            <div className="flex justify-center">
              <Image
                src='/imgs/app.svg'
                alt=''
                width={0}
                height={0}
                className='w-[480px]'
              />
            </div>
            <div className="space-y-6 p-4">
              <h2 className="text-5xl font-extrabold">About Us</h2>
              <article className="text-lg font-normal">
                <p>Kami adalah tim yang bersemangat dalam menciptakan solusi modern bagi para pengusaha. Dengan komitmen untuk mempermudah dan meningkatkan efisiensi bisnis, maka izinkan kami mempersembahkan platform inovatif #Zentotory untuk Anda dan para pelaku UMKM Indonesia.</p>
              </article>
              <button className="bg-white border-2 border-cyan-600 rounded-lg text-cyan-600 px-10 py-2.5 text-base font-semibold">
                SELENGKAPNYA
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* tier ans price */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-5xl m-auto p-4 space-y-6">
          <h2 className="text-4xl font-extrabold text-center">Pay as You Needed</h2>
          <article className="text-lg font-normal text-center px-20">
            <p>Kami tahu, setiap bisnis punya keinginannya sendiri untuk berkambang, oleh karena itu kami menyediakan beberapa Tier yang bisa Kamu pilih sendiri!</p>
          </article>
          <div className="grid grid-cols-3 gap-8 pt-6">
            {
              [... new Array(3)].map((_v, index) => (
                <div key={index} className="w-full bg-white p-4 py-6 space-y-4 rounded-xl shadow-md">
                  <div className="flex justify-center items-end">icon</div>
                  <div>
                    <ul className="space-y-1.5 text-sm">
                      <li>List 1</li>
                      <li>List 2</li>
                      <li>List 3</li>
                      <li>List 3</li>
                      <li>List 3</li>
                      <li>List 3</li>
                    </ul>
                  </div>
                  <div className="flex justify-center bg-blue-200">
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
      <section className="bg-white py-10">
        <div className="max-w-5xl m-auto">
          <div className="grid grid-cols-2">
            <div className="flex justify-center">
              <Image
                src='/imgs/cs.svg'
                alt=''
                width={0}
                height={0}
                className='w-[480px]'
              />
            </div>
            <div className="space-y-4 p-4">
              <h2 className="text-4xl font-extrabold">Contact Us</h2>
              <article className="text-lg font-normal">
                <p>Jangan ragu untuk bertanya apapun, Costumer Care Kami siap membantu.</p>
              </article>
              <form className="grid">
                <input type="text" name="name" />
                <input type="text" name="email" />
                <textarea></textarea>
                <button className="bg-white border-2 border-cyan-600 rounded-lg text-cyan-600 px-10 py-2 w-fit text-base font-semibold">
                  KIRIM
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-blue-900 h-36">
        <p>o</p>
      </footer>
    </main>
  )
}
