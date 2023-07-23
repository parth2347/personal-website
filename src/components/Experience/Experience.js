import uniqid from 'uniqid'
import { experiences } from '../../portfolio'
import ExperienceContainer from '../ExperienceContainer/ExperienceContainer'

const Experience = () => {
    if(!experiences.length)  return null;
    
    return (
        <section id='experience' className='experiences'>
      <h2 className='section__title'>Experience</h2>

      <div className='experiences__grid'>
        {experiences.map((experience) => (
          <ExperienceContainer key={uniqid()} experience={experience} />
        ))}
      </div>
    </section>
    )
    
}

export default Experience