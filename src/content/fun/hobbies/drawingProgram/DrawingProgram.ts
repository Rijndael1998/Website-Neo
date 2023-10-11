import { ImageProps } from "@/components/imageGallery/_imageGallery"

export const videos = `
I go over these and my code in two videos. 
I don't recommend watching them because they are really long and might 
be really boring. It was requirement for the project. They're here:
`
const base = "/fun/hobbies/drawingProgram/images/"

export const gallery: ImageProps = [
    {
        src: base + "Hue.png",
        aspectRatio: 382 / 439,
    },
    {
        src: base + "HuePattern.png",
        aspectRatio: 644 / 696,
    },
    {
        src: base + "Squares.png",
        aspectRatio: 549 / 599,
    },
    {
        src: base + "Face.png",
        aspectRatio: 533 / 588,
    },
    {
        src: base + "AdvancedSoftwareEngineering.png",
        aspectRatio: 668 / 938,
    }
]
