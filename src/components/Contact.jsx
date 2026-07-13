// import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { contacts } from '../constants';
import { BallCanvas } from './canvas';
import { slideIn } from '../utils/motion';


const Contact = () => {
  return (
    <div className='xl:mt-12 xl:flex-row flex  flex-col-reverse gap-10 overflow-hidden'>
      <motion.div 
      className='xl:flex-[50%] bg-black-100 p-8 rounded-2xl'
      variants={slideIn("left", "twew", 0.2, .8)}
      >
        <p className={styles.sectionSubText}>Контакты</p>
        <p className={styles.sectionHeadText}>Как связаться</p>
        <div className="mt-4 flex gap-8">
          <div className="flex flex-row flex-wrap gap-4">
            {contacts.map(contact => (
              <div className="w-14 h-14" key={contact.name}>
                <a href={contact.href} title={contact.name} target='blank'>
                  <BallCanvas icon={contact.icon} color={contact.iconColor} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <p className={`${styles.sectionSubText} mt-4 group`}>
          <a
            href="https://kwork.ru/user/topwerstka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-700 group-hover:text-indigo-600 flex items-center gap-2 transition-all duration-300"
          >
            Что говорят обо мне клиенты
            <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
          </a>

        </p>
        <p className={`${styles.sectionSubText} mt-1 group`}>
          <a
            href="https://github.com/top-web-knurl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-700 group-hover:text-indigo-600 flex items-center gap-2 transition-all duration-300"
          >
            Github
            <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
          </a>
        </p>
      </motion.div>
       <motion.div  className="xl:flex-[50%]  xl:h-auto md:h-[450px] h-[300px]"   variants={slideIn("right", "twew", 0.5, .9)}>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

const WrappedContacts = SectionWrapper(Contact, 'contact')
export default WrappedContacts