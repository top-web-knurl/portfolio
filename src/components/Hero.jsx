import { motion } from "framer-motion"
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w7xl flex flex-row items-start gap-5`}>
        <div className="flex flex-col justyfy-center items-center mt-5">
          <div className="w-1 sm:h-80 h-40 violet-gradient animation-bg-repeat" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Привет, меня зовут  <span className="main-gradient-text">Тимур</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            💻 Я — веб-разработчик, создающий уникальные и функциональные веб-сайты и веб-приложения.
            <br className="sm:block hidden" />
            🚀 Моя работа — превращать ваши идеи в реальность и делать интернет лучше!
          </p>
        </div>

      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">

        <a href="#about">
          <span className="block border-4 rounded-3xl w-[45px] h-[45px] border-[#fff] relative animate-bounce">
             <span className="absolute block w-[3px] h-[15px] bg-[#fff] left-3 top-1/2 -translate-y-1/2 -rotate-45"/>
             <span className="absolute block w-[3px] h-[15px] bg-[#fff]  right-3 top-1/2 -translate-y-1/2 rotate-45"/>
          </span>
        </a>
      </div>
    </section>
  )
}

export default Hero