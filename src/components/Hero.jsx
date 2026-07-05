import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { aboutUs } from "../constants";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto md:min-h-[1000px] sm:max-h-[100%] max-h-[600px] sm:min-h-[800px] min-h-[500px]'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] flex flex-row items-start gap-5`}>
        <div className="flex flex-col justyfy-center items-center mt-5">
          <div className="w-1 sm:h-80 h-40 violet-gradient animation-bg-repeat" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white relative z-10`}>
            {aboutUs.greeting}  <span className="main-gradient-text">{aboutUs.name}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 relative z-10`}>
            {aboutUs.descriprion1}
            <br className="sm:block hidden" />
            {aboutUs.descriprion2}
          </p>
        </div>

      </div>

      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
            <DotLottieReact
              src="/lottie/arrow.lottie"
              loop={true}
              autoplay={true}
              style={{ width: 60, height: 60 }}
            />
        </a>
      </div>
    </section>
  )
}

export default Hero