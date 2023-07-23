import * as React from 'react';
import './ExperienceContainer.css'

const ExperienceContainer = ({experience}) => (
    <div className='experience'>
        <h3>{experience.companyName}</h3>
        <p className='experience__description'>{experience.role}</p>
        <p>{experience.duration}</p>
        <br/>
        <ul>
            <li>{experience.type}</li>
        </ul>
        <br/>
    </div>
)

export default ExperienceContainer
