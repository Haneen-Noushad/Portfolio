import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({text,link,btnText}) => (
    <div className='info-box opacity-90'>   
        <p className=' sm:text-x1 text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} />
        </Link>

    </div>
)

const renderContent = {
    1:(
        <h1 className='sm:text-x1 sm:leading-snug text-center 
        neo-brutalism-blue opacity-90 py-4 px-8 text-white mx-5'>Hi, I am <span className='font-semibold'>
            Haneen</span>
            <br/>
            A Computer Science Engineer
            </h1>
    ),
    2:(
        <InfoBox
            text="I have done different courses in my university and worked on many 
            projects which have helped me pick up many skills along the way!"
            link="/about"
            btnText="Learn More"
        />
    ),
    3:(
        <InfoBox
            text="Led multiple projects over the years, Curious about them?"
            link="/projects"
            btnText="Visit my Portfolio"
        />
    ),
    4:(
        <InfoBox
            text="Looking for a Dev? I am just a few keystrokes away!"
            link="/contact"
            btnText="Let's talk"
        />
    )
}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo