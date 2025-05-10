import Atropos from 'atropos/react';
import { motion } from 'framer-motion'
import SectionWrapper from '../hoc/SectionWrapper'
import PropTypes from 'prop-types'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import 'atropos/css/min'


const ServiceCard = ({ index, title, icon }) => {
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
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col text-center"
        >
          <img src={icon} alt={title}
            className="w-16 h-16 object-contain"
            data-atropos-offset="20"
          />
          <h3
           className='text-white text-[20px]'
             data-atropos-offset="15"
           >{title}</h3>
        </div>
      </motion.div>
    </Atropos>
  )
}

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
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
        className="mt-4 text-secondary text-[18px] max-w-3xl leading-[30px]"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus sequi maxime perferendis voluptate fugit aliquid a, corporis labore minus tempore, ducimus excepturi, voluptates illo soluta alias repellat quaerat consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequatur quasi molestiae reprehenderit fugiat sed pariatur sequi laudantium! Ab culpa quaerat magnam. Perspiciatis nesciunt tenetur similique dolore pariatur. Mollitia, voluptates?
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