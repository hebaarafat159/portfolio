import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography, Card, Stack, Box } from '@mui/joy';

export default function Skill({ skill }) {
    return (
        <Card sx={{ maxWidth: '20vh'}}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1.5 }}>
                <Stack direction="row" spacing={1}>
                    <Stack direction="column" spacing={1}>
                        <FontAwesomeIcon icon={skill.icon} />
                        <Stack spacing={1} sx={{ flexGrow: 1 }}>
                            <Typography component="h1" variant="h1" style={{ fontSize: '1.5vw' }}> {skill.name} </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Card>
    );
}