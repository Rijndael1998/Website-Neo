import { ImageProps } from "@/components/imageGallery/_imageGallery"

export const videos = `
I go over these and my code in two videos. 
I don't recommend watching them because they are really long and might 
be really boring. It was requirement for the project. They're here:
`
export const imageBaseURL = "/fun/hobbies/ase/";

export const hue = {
    src: imageBaseURL + "Hue.png",
    aspectRatio: 382 / 439,
};

export const gallery: ImageProps = [
    // hue,
    {
        src: imageBaseURL + "HuePattern.png",
        aspectRatio: 644 / 696,
    },
    {
        src: imageBaseURL + "Squares.png",
        aspectRatio: 549 / 599,
    },
    {
        src: imageBaseURL + "Face.png",
        aspectRatio: 533 / 588,
    },
    {
        src: imageBaseURL + "AdvancedSoftwareEngineering.png",
        aspectRatio: 668 / 938,
    }
];

export const example: ImageProps = [
    {
        src: imageBaseURL + "Example Code.png",
        aspectRatio: 732 / 664,
    },
    {
        src: imageBaseURL + "Example Output.png",
        aspectRatio: 386 / 431,
    },
];

export const exampleCode = `
var x = 0
var y = 0
var offset = 128

while x < offset 
  y = 0
  while y < offset 
    move x, y
    pen x, y, x + y
    dot
    y = y + 1
  end
  y = 0
  while y < offset 
    move x + offset, y
    pen y + x, y, x
    dot
    y = y + 1
  end
  x = x + 1
end

x = 0
while x < offset 
  y = 0
  while y < offset 
    move x, y + offset, 
    pen y + x, offset - y, offset - x
    dot
    y = y + 1
  end
  y = 0
  while y < offset 
    move x + offset, y + offset
    pen x + y, offset - x, offset - y
    dot
    y = y + 1
  end
  x = x + 1
end
`.trim();