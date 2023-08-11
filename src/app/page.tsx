'use client'

import { Fragment, useState } from "react"
import { Footer } from "$/components/footer"
import { Main } from "$/components/main"
import { ContactSection, TierSection, AboutSection, HeaderSection } from "$/components/section"
import { MENU, TIER } from "$/constants"
import { DrawerMenu } from "$/components/section"
import 'react-modern-drawer/dist/index.css'


export default function Home() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const footer = "© 2023 by www.zentory.com | All Reserved";

  const handleOnMenuClick = (id: string) => {
    setIsDrawerOpen(false)
    const el = document.querySelector(id) as HTMLElement

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }

  }

  const handleOnDrawerClick = () => {
    setIsDrawerOpen(v => !v)
  }

  return (
    <Fragment>
      <Main>
        <HeaderSection
          id="home"
          title={<TitleComponent />}
          description="Cara baru catat Inventory, tanpa bikin Worry"
          testimonies={{
            testimony: <TestimonyComponent />,
            by: "Upin - CEO Durian Runtuh"
          }}
          menu={MENU}
          onDrawerClick={handleOnDrawerClick}
          onMenuClick={handleOnMenuClick}
        />
        <AboutSection
          id="about"
          title="About Us"
          content="Kami adalah tim yang bersemangat dalam menciptakan solusi modern bagi para pengusaha. Dengan komitmen untuk mempermudah dan meningkatkan efisiensi bisnis, maka izinkan Kami mempersembahkan platform inovatif #Zentotory untuk Anda dan para pelaku UMKM Indonesia."
          ctaButtonText="SELENGKAPNYA"
        />
        <TierSection
          id="pricing"
          title="Pay as You Needed"
          description="Kami tahu, setiap bisnis punya keinginannya sendiri untuk berkambang, oleh karena itu Kami menyediakan beberapa Tier yang bisa Kamu pilih sendiri!"
          data={TIER}
          ctaButtonText="BOOK NOW"
        />
        <ContactSection
          id="contact"
          title="Contact Us"
          formProps={{ method: "POST" }}
          textInputProps={{
            name: {
              placeholder: "your name",
              type: "text",
              name: "name"
            },
            email: {
              placeholder: "your@email.com",
              type: "email",
              name: "email",
            }
          }}
          textAreaProps={{
            content: {
              rows: 4
            }
          }}
          ctaButtonText="KIRIM"
        />
        <Footer>{footer}</Footer>
      </Main>
      <DrawerMenu
        isDrawerOpen={isDrawerOpen}
        onDrawerClick={handleOnDrawerClick}
        onMenuClick={handleOnMenuClick}
        menu={MENU}
      />
    </Fragment>
  )
}

const TestimonyComponent = () => (
  <Fragment>
    <p>Zentory membantu Kami grow lebih cepat</p>
    <p>Karena pencatatan asset sangat rapi dan mudah!</p>
  </Fragment>
)

const TitleComponent = () => (
  <Fragment>
    <span className="text-blue-600">#Zen</span><span className="text-purple-500">tory</span>
  </Fragment>
)

