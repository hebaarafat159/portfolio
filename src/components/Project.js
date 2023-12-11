import { Button, Typography, Card, Stack } from "@mui/joy";

export default function Project({ project }) {
  return (
    <Card >
      <Stack
        direction="column"
        spacing={2}
        sx={{ display: { xs: 'flex' }, my: 1 }}>
        <Stack direction="row" spacing={2}>
          <Stack direction="column" spacing={1}>
            <img src={project.image} loading="lazy" alt="" />
          </Stack>
          <Stack spacing={1} sx={{ flexGrow: 1 }}>

            <Typography component="h1" variant="h5">
              {project.description}
            </Typography>
            <Typography component="h1" variant="h5">
              Technologies: {project.skills}
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" color="primary">View Project</Button>
              <Button variant="outlined" color="primary">View GitHub</Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};
