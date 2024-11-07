export const MusicDesc1 = `
On occasion, I like to do stuff to do with music. I can play the piano. I can play: 
`

export const MusicICanPlay: Array<[string, string]> = [
    [`For river (Johnny's Version)`, `https://www.youtube.com/watch?v=hiW6akLxrCM`],
    [`Shelter`, `https://www.youtube.com/watch?v=ItpJJmZtXL0`],
    [`After Dark`, `https://www.youtube.com/watch?v=CeZW57CMgpo`],
]

export const MusicDesc2 = `
The list isn't extensive but I just can't remember what I can play right now. 
`

export const MusicDesc3 = `
I have also tried my hand at remixing music, here I am remixing Crab Rave as a ring tone:
`

export const MusicDesc4 = `
It might sound a little weird because it was specifically designed as a looping ring tone for my phone.
When I listen to it on my computer using my headphones, it sounds very empty on the lower frequencies
but on the phone, it's a lot better, as the phone has less of an ability to produce lower frequancy 
sounds. It arguably sounds "correct" on a phone.
`

export const AITitle = `AI`
export const AIContent1 = `I tried my hand at AI generation using Open AI's DALL·E. It's how I made the image to go with this portfolio page. 
I think the way in which the content is rather interesting. It involves a lot of trial and error, and it's not as straight forward as some people imagine,
but it's a lot easier than learning to paint or getting someone else to paint your mind.`

export const AISub1 = `Prompting`;

export const AIContent2 = `I started off by doing some basic prompting: `

const prefix = "/fun/hobbies/ai/";
export const AIImagesPrompts: Array<string> = [];
for(let i = 1; i <= 10; i++) AIImagesPrompts.push(`${prefix}${i}.png`);

export const AIContent3 = `As you can see, prompting is a gradual process. It really helps if you understand what the model might be 
misinterpreting or misunderstanding`

export const AISub2 = `Refining`

export const AIContent4 = `After prompting, you can pick an image you like and check out its variations, like you can do here:`

export const AIContent5 = `If you're not exactly happy with the image that you have, you can always 
inpaint the parts that you want to change, then run the image with a prompt. This is what I got when I made this last image:`

export const AISub3 = `Finished product`

export const AIContent6 = `And here's the finished result. Unfortunately, image generation AI still doesn't know how to count. 
Crabs typically have 10 legs, but the AI generated a crab with 6... That's 4 too fewer. However, the crab in the image reminds me of a poison headcrab from Half Life,
 so maybe that's the cause?????? Regardless, I liked the picture enough to put it here.`