import AboutUs from '@/components/AboutUs'
import Contact from '@/components/Contact'
import Management from '@/components/Management'
import OurHistory from '@/components/OurHistory'
import Teams from '@/components/Teams'
import WhyUs from '@/components/WhyUs'
import React from 'react'

const page = () => {
  return (
    <div>
        <AboutUs />
        <OurHistory />
        <WhyUs />
        <Management />
        <Teams />
        <Contact />
    </div>
  )
}

export default page