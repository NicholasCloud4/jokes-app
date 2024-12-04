import Joke from "./components/Joke";
import jokesData from "./jokesData";


export default function App() {

  const jokeElements = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })

  return (
    <>
      {jokeElements}

    </>
  )
}

{/* <Joke setup={"What lights up a soccer stadium?"} punchline={"A soccer match."} />
      <Joke setup={"What do sprinters eat before they race?"} punchline={"Nothing. They fast."} />
      <Joke setup={"Why can't you trust the king of the jungle?"} punchline={"Because he's always lion."} />
      <Joke setup={"What do sea monsters eat?"} punchline={"Fish and ships."} />
      <Joke setup={"How did the telephone propose to his girlfriend?"} punchline={"He gave her a ring."} />
      <Joke punchline={"I was wondering why the frisbee kept getting bigger and bigger, but then it hit me."} /> */}