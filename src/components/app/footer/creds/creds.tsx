import LazyLocalImage from "@/components/lazy/_lazyLocalImage";
import { Stack } from "@mui/material";

// images
import cpf from "./images/cloud_practitioner_foundational.png";

export default function Creds() {
    return <Stack>
        <LazyLocalImage src={cpf} />
    </Stack>
}