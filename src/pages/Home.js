import Typography from '@mui/joy/Typography'
import { Stack, Card } from '@mui/joy'
import { TypeAnimation } from 'react-type-animation';
import Experiences from '../components/Experiences'
export default function Home() {
    return (
        <Card >
            <Stack
                direction="column"
                spacing={2}
                sx={{ display: { xs: 'flex' }, my: 1 }}>
                <Stack direction="row" spacing={2}>
                    <Stack direction="column" spacing={1}>
                        <img src={'profile_img.jpeg'} className='profileImage' loading="lazy" alt="" />
                    </Stack>
                    <Stack spacing={1} sx={{ flexGrow: 1 }}>
                        <Typography component="h1" variant="h1" style={{ fontSize: '1.5vw', color: '#1F85DE' }}> Heba Arafat </Typography>
                        <Typography component="h1" variant="h1" style={{ fontSize: '1.5vw', color: '#767774' }}>
                            I'm a  <TypeAnimation
                                sequence={[
                                    'Junior Software Engineer',
                                    1000,
                                    'Android Developer',
                                    1000,
                                    'Full Stack Developer',
                                    1000,
                                ]}
                                speed={30}
                                style={{ fontSize: '2vw', color: '#767774' }}
                                repeat={Infinity}
                            />
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                direction="column"
                spacing={2}
                sx={{ display: { xs: 'flex' }, my: 1 }}>
                <Stack spacing={1} sx={{ flexGrow: 1 }}>
                    <Typography component="h1" variant="h1" style={{ fontSize: '1.5vw', color: '#1F85DE' }}> Experiences </Typography>
                    <Experiences />
                </Stack>
            </Stack>
        </Card>
    );
}