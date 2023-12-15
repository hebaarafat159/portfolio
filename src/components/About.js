import { Stack, Card, Typography } from '@mui/joy'
import { TypeAnimation } from 'react-type-animation';

export default function About() {

    const interests = [
        {
            name: 'Reading Books',
            comment: 'Especially mysterious stories, and life-coaching.'
        },
        {
            name: 'Watching TV Shows',
            comment: 'Especially cooking competition shows.'
        }
    ]

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

                        {/* Add Interests   */}
                        <Typography component="h1" variant="h1" style={{ fontSize: '1.5vw', color: '#1F85DE' }}> Interests </Typography>
                        <div style={{ display: 'flex', flexFlow: 'row wrap', gap: '4vmin' }}>
                            {interests.map((interest, index) => (
                                <Stack spacing={1} sx={{ flexGrow: 1 }}>
                                    <Typography component="h1" variant="h1" style={{ fontSize: '1.5vw' }}> {interest.name} </Typography>
                                    <Typography component="h2" variant="h2" style={{ fontSize: '1vw' }}> {interest.comment} </Typography>
                                </Stack>
                            ))}
                        </div>
                    </Stack>
                </Stack>
            </Stack>
        </Card>
    );
}