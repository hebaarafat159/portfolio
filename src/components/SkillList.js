// import { faCode } from '@fortawesome/free-solid-svg-icons'; // You can import more icons as needed
import Skill from './Skill'
import { faReact, faNode, faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons';

export default function SkillList() {
    const skills = [
        { name: 'React', icon: faReact },
        { name: 'Node.js', icon: faNode },
        { name: 'HTML5', icon: faHtml5 },
        { name: 'CSS3', icon: faCss3 },
        { name: 'JavaScript', icon: faJs }
    ]

    return (
        <>
            <div>
                <h4>Skills:</h4>
                <div className="skills-container">
                    {skills.map((skill, index) => (
                        <Skill key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </>
    );
}