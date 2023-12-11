import { List, Divider, Typography, Box, Chip, ListItemDecorator, ListItemContent, ListItem, Avatar } from "@mui/joy";
export default function Experiences() {
    const experiences = [
        {
            id: 1,
            compnayName: '\tGeneral Assembly',
            location: 'London, UK',
            role: 'Student, Software Engineering Immersive',
            duration: 'September 2023 - November 2023',
            description: 'A 3-month full-time bootcamp taken remotely using Zoom and Slack. It consisted of daily standups, lectures, workshops, homework and final projects. Covered the fundamentals of web development from frontend to backend.',
            skills: [],
            logo: ''
        },
        {
            id: 2,
            compnayName: 'Worc Company',
            location: 'Cairo, Egypt ',
            role: 'Freelance Android Software Developer',
            duration: 'Apr 2016 - May 2016 ',
            description: '',
            skills: [],
            logo: ''
        },
        {
            id: 3,
            compnayName: 'Tech-World Companyy',
            location: 'Cairo, Egypt',
            role: 'Senior Software Developer',
            duration: 'Jan 2015 - Apr 2016',
            description: '',
            skills: [],
            logo: ''
        },
        {
            id: 4,
            compnayName: 'National Technology Company',
            location: 'Cairo, Egypt',
            role: 'Freelance Android Software Developer',
            duration: 'Oct 2014 - Jan 2015',
            description: '',
            skills: [],
            logo: ''
        },
        {
            id: 5,
            compnayName: 'ITWorx Company',
            location: 'Cairo, Egypt',
            role: 'Android Senior Software Developer',
            duration: 'Dec 2012 - Mar 2014',
            description: '',
            skills: [],
            logo: ''
        },
        {
            id: 6,
            compnayName: 'CIT Mobidiv Company',
            location: 'Cairo, Egypt',
            role: 'Android Software Developer',
            duration: 'Jul 2010 - Dec 2012',
            description: '',
            skills: [],
            logo: ''
        },
    ]
    return (
        <>
            <List sx={{ '--ListItemDecorator-size': '40px', gap: 2 }}>
                {experiences.map((experience, index) => (
                    <>
                        <ListItem key={index} sx={{ alignItems: 'flex-start' }}>
                            <ListItemDecorator
                                sx={{
                                    '&:before': {
                                        content: '""',
                                        position: 'absolute',
                                        height: '100%',
                                        width: '.2vmin',
                                        bgcolor: 'divider',
                                        left: 'calc(var(--ListItem-paddingLeft) + 2vmin)',
                                        top: '40%',
                                    },
                                }}>
                                <Avatar
                                    src={experience.logo ? experience.logo : 'buildings.png'}
                                    sx={{ '--Avatar-size': '4vmin' }}
                                />
                            </ListItemDecorator>
                            <ListItemContent>
                                <Typography level="title-sm">{experience.role}</Typography>
                                <Typography level="body-xs">{experience.compnayName}</Typography>
                                <Typography level="body-xs">{experience.description}</Typography>
                            </ListItemContent>
                            <Typography level="body-xs">{experience.duration}</Typography>

                        </ListItem>
                        {experience.skills && experience.skills.length > 0 ?
                            <>
                                <Divider component="div" sx={{ my: 2 }} />
                                <Typography level="title-sm">Skills tags:</Typography>
                                <Box sx={{ mt: 1.5, display: 'flex', gap: 1 }}>
                                    {experience.skills.map((skill, skillIndex) => (
                                        <Chip
                                            key={skillIndex}
                                            variant="outlined"
                                            color="neutral"
                                            size="sm">
                                            {skill}
                                        </Chip>
                                    ))}
                                </Box></> : null}

                    </>
                ))}
            </List>

        </>
    );
}