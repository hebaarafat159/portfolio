import { Stack, Box } from '@mui/joy'
import { TypeAnimation } from 'react-type-animation';

export default function About() {
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
                        <TypeAnimation
                            sequence={[
                                'I am a Software Developer with a 6-year track record in Android development. My journey into coding commenced after successfully completing my Bachelor\'s degree in Computer and Information Systems. Following that, I took a hiatus to focus on raising my two children. Recently, I enrolled in a 12-week immersive course to refresh my programming expertise, with a particular focus on full-stack technologies including JavaScript, React.js, HTML, and CSS.',
                                1000
                            ]}
                            speed={30}
                            style={{ fontSize: '1.5vw' }}
                            repeat={Infinity}
                        />
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}