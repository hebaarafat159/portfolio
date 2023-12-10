import Typography from '@mui/joy/Typography'
import { Stack, Box } from '@mui/joy'
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
    return (
        <Box component="main"
            sx={{
                py: 2,
                pb: 5,
                display: 'flex',
                justifyItems: 'center',
                alignItems: 'center',
                height: '70vh',
                width: '70vw'
            }}>

            <Stack
                direction="column"
                spacing={2}

                sx={{ display: { xs: 'flex' }, }}>

                <Stack direction="row" spacing={2}>
                    {/* display user avatar image */}
                    <Stack direction="column" spacing={1}>
                        <img src={'profile_img.jpeg'} loading="lazy" alt="" width={200} height={200} />
                    </Stack>
                    {/* display user profile details*/}
                    <Stack spacing={1} sx={{ flexGrow: 1 }}>
                        {/* display user name address */}
                        <Typography component="h1" variant="h1" style={{ fontSize: '1.5vw' }}> Heba Arafat </Typography>
                        {/* display user email */}
                        <Typography component="h1" variant="h1" style={{ fontSize: '1.5vw' }}>
                            I'm a  <TypeAnimation
                                sequence={[
                                    'Software Developer',
                                    1000,
                                    'Android Developer',
                                    1000,
                                    'Full Stack Developer',
                                    1000,
                                ]}
                                speed={30}
                                style={{ fontSize: '2vw' }}
                                repeat={Infinity}
                            />
                        </Typography>

                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}