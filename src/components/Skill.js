import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Skill({ skill }) {
    return (
        <>
            <h1> Skill Page </h1>
            <div className="skill">    
                <FontAwesomeIcon icon={skill.icon} />
                <span>{skill.name}</span>
            </div>
        </>
    );
}