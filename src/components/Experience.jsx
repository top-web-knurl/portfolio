import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import SectionWrapper from '../hoc/SectionWrapper'
import PropTypes from 'prop-types'

import { experiences } from '../constants'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'

import 'react-vertical-timeline-component/style.min.css'

const ExperianceCard = ({ experiance }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experiance.date}
    iconStyle={{ background: experiance.iconBg }}
    icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
           src={experiance.icon}
           alt={experiance.company_name} 
           className="w-[60%] h-[60%] object-contain"
           />
        </div>

    }
  >
    <h3 className="text-white text-[24px] font-bold">{experiance.title}</h3>
 
  </VerticalTimelineElement>
)

ExperianceCard.propTypes = {
  experiance: PropTypes.shape({
    date: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
}

const Experience = () => {
  return (
    <motion.div
      variants={textVariant()}>
      <p className={styles.sectionSubText}>
        С чем я работал
      </p>
      <h2 className={styles.sectionHeadText}>
        Опыт работы
      </h2>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, i) => (
            <ExperianceCard key={i} experiance={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </motion.div>
  )
}
const WrappedExperience = SectionWrapper(Experience, 'experience')
export default WrappedExperience
