import React from 'react';
import { Accordion, AccordionGroup, AccordionDetails, AccordionSummary, Typography, Card } from "@mui/joy";
import Project from './Project';
export default function ProjectList() {
  const projects = [
    {
      id: 1,
      title: 'Venturo',
      description: 'A General Assembly Projects (project-03-SEI-75)\n Our venture is a blogging platform centered around travel experiences. Users can upload blogs dedicated to specific travel destinations, complete with the capability to include photos that can be edited or deleted as needed. Each blog will be associated with locations and collections, allowing the platform to categorize related content together. We plan to integrate Google Places Autocomplete to obtain accurate location data for each blog post, incorporating additional features such as weather updates and, potentially, information on accommodations or flights. Admin users will have the privilege of creating locations and collections, complete with photos and summaries, to be utilized as headers.',
      skills: 'Nextjs , MongoDB and Mui react component library',
      image: 'https://drive.google.com/thumbnail?id=1WXp4D9r1dbfx3lsc388SEH_wGPrml0e-',
      duration: '8 days',
      projectLink: 'https://venturo-travel.vercel.app/',
      frontendGitHub: 'https://github.com/parisvigay/venturo.git',
      backendGitHub: ''
    },
    {
      id: 2,
      title: 'Hatly',
      description: 'A General Assembly Projects (project-02-SEI-75)\n  A Full-stack CRUD application enabling users to identify and add missing grocery items to a personalized list. This list can be easily shared with family and friends. This application facilitates convenient grocery shopping, ensuring users avoid forgetting items during supermarket visits. Users can create a list of their grocery items, mark purchased items, and share the list with family members or friends.',
      skills: 'Node.js, Express, Vue.js, and MongoDB',
      image: 'https://drive.google.com/thumbnail?id=1V4A-DL7ycA99li6n75_e1cSbMvKT3R6G',
      duration: '7 days',
      projectLink: 'https://startling-mochi-356199.netlify.app',
      frontendGitHub: 'https://github.com/hebaarafat159/SEI-75-unit-2-project-frontend.git',
      backendGitHub: 'https://github.com/hebaarafat159/SEI-75-unit-2-project-backend.git'
    },
    {
      id: 3,
      title: 'Space Invaders',
      description: 'A General Assembly Projects (project-01-SEI-75)\nA game where the player controls a ship that moves horizontally across the bottom of the screen. The objective is to defeat waves of descending aliens (Space Invaders) by shooting at them with the ship\'s laser cannon. The aliens gradually descend towards the player. The player must avoid being hit by the aliens\' projectiles and strategically eliminate them to prevent the invaders from reaching the bottom of the screen.',
      skills: 'JavaScript, HTML and CSS',
      image: 'https://drive.google.com/thumbnail?id=1vy5k8mGu4I9V55vXF-hnssCjZz8fRZqD',
      duration: '7 days',
      projectLink: 'Https://hebaarafat159.github.io/SpaceInovadersProject',
      frontendGitHub: 'https://github.com/hebaarafat159/SpaceInovadersProject',
      backendGitHub: ''
    },
    {
      id: 4,
      title: 'LDM Laboratory Data Manager ',
      description: 'This application is a fully featured and robust laboratory information system (LIS) covering all functional areas of the multi-specialty medical laboratory. LDM helps  medical professionals to provide better patient care, increase patients’ safety, increase overall efficiency, reduce operating costs, and increase profitability.',
      skills: 'Titanium, SQLite',
      image: 'https://drive.google.com/thumbnail?id=1UNc4YjWMAMsw28R-zao8zutQefOkburo',
      duration: '4 months',
      projectLink: 'https://nt-me.com/products/laboratory-data-manager-ldm/',
      frontendGitHub: '',
      backendGitHub: ''
    },
    {
      id: 5,
      title: 'XMS',
      description: 'A messaging application where users could send images with handwritten messages. My responsibilities included resolving application issues and developing new features.',
      skills: 'Android (Java), SQLite',
      image: '',
      duration: '24 months',
      projectLink: '',
      frontendGitHub: '',
      backendGitHub: ''
    },
  ];

  return (
    <Card style={{ display: 'flex', flexFlow: 'row wrap', gap: '4vmin', margin: '5vmin' }} size="lg" sx={{ width: 'auto', height: 'auto', '&:hover': { boxShadow: 'md' } }}>

      <div className="card-header">
        <Typography component="h1" variant="h1" style={{ fontSize: '1.5vw', color: '#1F85DE' }}> Projects </Typography>
      </div>
      <AccordionGroup>
        {projects && projects.map(project => (
          <Accordion key={project.id}>
            <AccordionSummary>
              <div className="accordion-summary">
                <span style={{ fontSize: '1.3vw' }}>{project.title}</span>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Project project={project} />
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionGroup>
    </Card>
  );
};