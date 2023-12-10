// import { faCode } from '@fortawesome/free-solid-svg-icons'; // You can import more icons as needed
import Skill from './Skill'
import { faReact, faNode, faHtml5, faCss3, faSquareJs, faAndroid, faGitSquare, faNodeJs, faMdb, faPython } from '@fortawesome/free-brands-svg-icons';
import { Card} from '@mui/joy';

export default function SkillList() {
    const skills = [
        { name: 'React', icon: faReact },
        { name: 'Node.js', icon: faNode },
        { name: 'HTML5', icon: faHtml5 },
        { name: 'CSS', icon: faCss3 },
        { name: 'JavaScript', icon: faSquareJs },
        { name: 'NextJs', icon: faNodeJs },
        { name: 'Android', icon: faAndroid },
        { name: 'Express', icon: faNodeJs },
        { name: 'Python3', icon: faPython },
        { name: 'Django', icon: faPython },
        { name: 'MongoDB', icon: faMdb },
        { name: 'PostgreSQL', icon: faMdb },
        { name: 'SQLite', icon: faMdb },
        { name: 'Git', icon: faGitSquare },
    ]

    return (
        <Card style={{ display: 'flex', flexFlow: 'row wrap', gap: '4vmin',margin: '5vmin' }} size="lg" sx={{ width: 'auto', height: 'auto', '&:hover': { boxShadow: 'md' } }}>
            <h4>Skills:</h4>
            <div style={{ display: 'flex', flexFlow: 'row wrap', gap: '4vmin' }}>
                {skills.map((skill, index) => (
                    <Skill key={index} skill={skill} />
                ))}
            </div>
        </Card>
    );
}