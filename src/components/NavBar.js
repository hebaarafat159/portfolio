import { Box, Link } from '@mui/joy';

export default function NavBar() {
    return (
        <Box
            component="header"
            className="Header"
            sx={[
                {
                    p: 2,
                    gap: 2,
                    bgcolor: 'background.surface',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gridColumn: '1 / -1',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1100,
                }
            ]}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1.5 }}>
                <img src={'profile_img.jpeg'} loading="lazy" alt="" width={50} height={50} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1.5 }}>
                <Link href="/" style={{ textDecoration: 'none' }}>About</Link>
                <Link href="/skills" style={{ textDecoration: 'none' }}>Skills</Link>
                <Link href="/projects" style={{ textDecoration: 'none' }}>Projects</Link>
            </Box>
        </Box>
    );
}