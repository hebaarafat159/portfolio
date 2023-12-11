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
              {project.projectLink ? <Button variant="outlined" color="primary" component='a' href={project.projectLink}>View Project</Button> : null}
              {project.frontendGitHub ? <Button variant="outlined" color="primary" component='a' href={project.frontendGitHub}>View GitHub</Button> : null}
              {project.backendGitHub ? <Button variant="outlined" color="primary" component='a' href={project.backendGitHub}>View Backend GitHub</Button> : null}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};
