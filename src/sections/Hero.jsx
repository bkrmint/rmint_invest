import Button from '../components/Button';
import { hero_anima_desktop, hero_anima_small, hero_anima_video } from '../assets/images';

const Hero = () => {
  return (
    <section id="home"
    className="w-full flex flex-col-reverse lg:flex-row  justify-center min-h-screen max-container">
      {/* <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28"> */}
      <div className="relative flex flex-col justify-center items-start w-full lg:w-1/2 max-xl:padding-x pt-6 max-sm:pb-16">
        <h1 className='mt-6 font-publicsans xl:text-6xl lg:text-4xl md:text-4xl max-sm:text-[38px] max-sm:leading-none font-bold'>
          Invest in <span className='font-kalam text-red xl:text-7xl lg:text-4xl md:text-4xl max-sm:text-[42px]'>new</span><br /> 
          Restaurant <span className='font-kalam text-red xl:text-7xl lg:text-4xl md:text-4xl max-sm:text-[42px]'>chain</span>
        </h1>
        <p className="font-publicsans text-gray text-sm sm:text-xl leading-8 mt-6 mb-8 sm:max-w-sm font-bold">
          Add a new asset class to your portfolio of alternative investments.
        </p>
        <Button btnText="Invest" />

      </div>

      <div className="relative flex flex-1 justify-center items-center max-lg:py-40 max-sm:max-h-dvh max-sm:pt-28 max-sm:pb-0 object-contain">
        <img
          src={hero_anima_small}
          alt="hero"
          width={412}
          height={576}
        />
      </div>
    </section>
    
  )
}

export default Hero