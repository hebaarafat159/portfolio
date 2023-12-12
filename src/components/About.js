import { Stack, Card } from '@mui/joy'
import { TypeAnimation } from 'react-type-animation';

export default function About() {
    return (
        <Card style={{ display: 'flex', flexFlow: 'row wrap', gap: '4vmin', margin: '5vmin' }} size="lg" sx={{ width: 'auto', height: 'auto', '&:hover': { boxShadow: 'md' } }}>
            <Stack
                direction="column"
                spacing={2}
                sx={{ display: { xs: 'flex' }, my: 1 }}>
                <Stack direction="row" spacing={2}>
                    <Stack direction="column" spacing={1}>
                        <img src={'profile_img.jpeg'} className='profileImage' loading="lazy" alt="" />
                    </Stack>
                    <Stack spacing={1} sx={{ flexGrow: 1 }}>
                        <TypeAnimation
                            sequence={[
                                'I am a Software Developer with a 6-year track record in Android development. My journey into coding commenced after successfully completing my Bachelor\'s degree in Computer and Information Systems. Following that, I took a hiatus to focus on raising my two children. Recently, I enrolled in a 12-week immersive course to refresh my programming expertise, with a particular focus on full-stack technologies including JavaScript, React.js, HTML, and CSS.',
                                1000
                            ]}
                            speed={30}
                            style={{ fontSize: '1.5vw', color: '#767774' }}
                            repeat={Infinity}
                        />
                    </Stack>
                </Stack>
            </Stack>
        </Card>
    );
}