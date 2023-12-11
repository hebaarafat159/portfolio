import Typography from '@mui/joy/Typography'
import { Stack, Box } from '@mui/joy'
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
    return (
        <Box style={{ display: 'flex', flexFlow: 'row wrap', gap: '4vmin', margin: '20vmin' }} size="lg" sx={{ width: 'auto', height: 'auto', '&:hover': { boxShadow: 'md' } }}>
            <Stack direction="row" spacing={2}>
                <img src={'profile_img.jpeg'} loading="lazy" alt="" width={200} height={200} />
                <Stack spacing={1} sx={{ display: 'flex', flexFlow: 'column wrap', gap: '4vmin', padding: '5vmin' }}>
                    <Typography component="h1" variant="h1" style={{ fontSize: '1.5vw' }}> Heba Arafat </Typography>
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
        </Box>
    );
}