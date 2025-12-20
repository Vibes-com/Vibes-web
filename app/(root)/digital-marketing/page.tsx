import DigitalMarketingDetailsHero from '@/app/components/digital-marketing-details/digital-marketing-hero/DigitalMarketingDetailsHero'
import DigitalMarketingSolutions from '@/app/components/digital-marketing-details/digital-marketing-solutions/DigitalMarketingSolutions'
import WhyChooseUs from '@/app/components/digital-marketing-details/why-choose-us/WhyChooseUs'


const page = () => {
  return (
    <div>
      <DigitalMarketingDetailsHero />
      <DigitalMarketingSolutions />
      <WhyChooseUs />
    </div>
  )
}

export default page