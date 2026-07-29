import Atropos from 'atropos/react';
import { motion } from 'framer-motion'
import SectionWrapper from '../hoc/SectionWrapper'
import PropTypes from 'prop-types'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import 'atropos/css/min'


const ServiceCard = ({ index, title, desc, icon }) => {
  return (
    <Atropos
      className="xs:w-[250px] w-full rounded-[20px]"
      activeOffset={40}
      shadowScale={1}
      rotateXMax={20}
      rotateYMax={20}
      shadow={false}
      highlight={true}
      data-rounded="inherit"
    >
      <motion.div
        variants={fadeIn("fade", "ease", 0.5 * index, 0.75)}
        className="w-full violet-pink-gradient p-[1px] rounded-[20px]"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-8 min-h-[250px] flex justify-evenly items-center flex-col text-center"
        >
          <img src={icon} alt={title}
            className="w-16 h-16 object-contain"
            data-atropos-offset="20"
          />
          <h3
            className='text-white text-[20px]'
            data-atropos-offset="15"
          >{title}</h3>
          <div
            className='text-white text-[13px]'
            data-atropos-offset="15"
          >{desc}</div>
        </div>
      </motion.div>
    </Atropos>
  )
}

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Информация
        </p>
        <h2 className={styles.sectionHeadText}>
          Обо мне
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]"
      >
      Занимаюсь веб-разработкой и созданием сайтов с 2020 года. Мне нравится развиваться в этой сфере, поэтому я стараюсь постоянно актуализировать свои навыки и не стоять на месте. Обладаю базой веб-разработчика: HTML, CSS, JavaScript. Из бэкенда работал с PHP и MySQL, в основном в рамках различных CMS (WordPress, Bitrix, Joomla, OpenCart, немного с Magento). Знаком с React (данное портфолио сделано на нём), немного знаю Vue.js. <br />
      Работаю по современным веб-стандартам. В том числе использую ИИ для ускорения написания шаблонного кода и типовых решений, но не занимаюсь бездумным копированием. Я не «вайбкодер», но и не противлюсь прогрессу.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

const WrappedAbout = SectionWrapper(About, 'about')
export default WrappedAbout