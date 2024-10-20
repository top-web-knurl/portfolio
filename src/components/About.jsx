import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({title, ico}) => {
  return (
    <div>
      {console.log(123)}
      {console.log(title)}
      <p>{title}</p>
    </div>
  )
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

export default About