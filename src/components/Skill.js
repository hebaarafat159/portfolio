import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'; // You can import more icons as needed

export default function Skill({ skill }) {
    return (
        <>
            <h1> Skill Page </h1>
            <div className="skill">
                <FontAwesomeIcon icon={faCode} /> {/* Replace faCode with the appropriate icon for the skill */}
                <span>LInkedIn</span>
            </div>
        </>
    );
}