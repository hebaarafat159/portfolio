import { faCode } from '@fortawesome/free-solid-svg-icons'; // You can import more icons as needed

export default function Skill() {
    const skills = [
        { 'icon': "faCode", 'title': "JavaScript" },
        { 'icon': "faCode", 'title': "HTML" }
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