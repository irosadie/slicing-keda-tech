import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="bg-white min-h-screen header-bg">
        <nav className="w-full max-w-7xl m-auto">
          <ul className="flex py-4 pt-10 gap-16 items-center font-black text-xl">
            <li className="flex-1 text-white">
              <div className="flex gap-4">
                <Image src='/imgs/coffee.svg' alt="logo" width={0} height={0} className="w-10" />
                <span>HOME</span>
              </div>
            </li>
            <li>
              ABOUT
            </li>
            <li>
              PRICING
            </li>
            <li>
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

          <div className="p-4 mt font-medium text-lg space-y-3">
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
      <section>
        <div className="h-[792px] py-24 relative">
          <div className="max-w-7xl m-auto bg-red-300 w-full z-20 text-white h-[600px] about-bg">
            ABOUT US
          </div>
        </div>
      </section>
      {/* tier ans price */}
      <section className="bg-yellow-100">
        <div className="max-w-7xl m-auto">
          <h2>Think what you need to do!</h2>
          <div>
            <p>Kami tahu, setiap bisnis punya x sendiri, oleh karena itu kami menyediakan beberapa tier yang bisa kamu pilih</p>
          </div>
          <div className="grid grid-cols-3 gap-12 ">
            {
              [... new Array(3)].map((_v, index) => (
                <div key={index} className="bg-white rounded-xl min-h-[280px] shadow-md">CARD</div>
              ))
            }
          </div>
        </div>
      </section>
      {/* tier ans price */}
      <section>
        <div className="max-w-7xl m-auto">
          <h2>Do You Have Question</h2>
        </div>
      </section>
      <footer className="bg-pink-200">
        <p>o</p>
      </footer>
    </main>
  )
}
