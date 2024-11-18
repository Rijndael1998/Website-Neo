import { about, contact } from "./../content/Home";
import Link from "next/link";
import logo from "./opengraph.webp";
import LazyLocalImage from "@/components/lazy/_lazyLocalImage";
import { Container, Stack, Typography } from "@mui/material";


export default function Home() {
  return (
    <Container maxWidth={"md"}>
      <Stack gap={4}>
        <Stack>
          <Typography variant="h1">
            Hi!
          </Typography>
          <Typography>
            Visit my <Link href="/portfolio">portfolio</Link> page to see my previous work and experience. 🧐
          </Typography>
        </Stack>
        <LazyLocalImage
          src={logo}
          alt={"Computer on a desk showing the website logo: a white L in a green square on a black background."}
          quality={50}
        />
        <Stack>
          <Typography variant="h2">
            About Me
          </Typography>
          <Typography>
            {about}
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="h2">
            Contact
          </Typography>
          <Typography>
            {contact}
          </Typography>
        </Stack>
      </Stack>
    </Container>
  )
}
