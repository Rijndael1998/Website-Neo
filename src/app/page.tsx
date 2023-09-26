import Typing from "@/components/typing/typing";

const text = `Hi, this is my website. 
It's currently a work in progress and my old website is getting massively deprecated. 
The goal of this website is to unify all of my projects under one hood, inside one app, 
rather than it being a central hub for everything. 
Please bear with me while I update this page with everything I had before.`;

export default function Home() {
  return (
    <>
      <h1>
        Hi!
      </h1>

      <p>
        {text}
      </p>
    </>
  )
}
