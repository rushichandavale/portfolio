import React from 'react'
import {motion} from 'framer-motion'
import {images} from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import './About.scss'


const abouts = [
  { title:"Web Development", description: 'I am a good web developer.', imgUrl:images.about01},
  { title:"Frontend Development", description: 'I am a frontend developer with a passion for building beautiful and functional websites', imgUrl:images.about02},
  { title:"Backend Development", description: 'I am a good backend developer.', imgUrl:images.about03},
  { title:"MERN Stack", description: 'I am a good MERN Stack developer.', imgUrl:images.about04}
  

]
const About = () => {

  return (
    <React.Fragment>
      <h2 className='head-text'>I Know That <span> Good Dev </span> <br /> Means <span> Good Business </span></h2>
 <div
  className='app__profiles'
 >
{abouts.map((about, index)=>(
  <motion.div
    whileInView={{ opacity:1 }}
    whileHover={{ scale: 1.1 }}
    transition={{ duration:0.5, type: 'tween' }}
    className="app__profile-item"
    key={about.title + index}
  >
<img src={about.imgUrl} alt ="about_title"/>
<h2 className='bold-text' style={{marginTop: 20 }}>{about.title}</h2>
<p className='p-text' style={{marginTop: 10 }}>{about.description}</p>
  </motion.div>

))}
 </div>
    </React.Fragment>
  )
}

export default AppWrap( MotionWrap(About, 'app__about'),  'about', 'app__whitebg')


