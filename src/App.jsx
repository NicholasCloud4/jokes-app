/**
 * Challenge: create a page that displays your favorite jokes
 * - Create a Joke component in its own file.
 * - Import and render 4-5 <Joke /> components
 * - Each Joke should receive a "setup" prop and a "punchline" prop
 *   and render those however you'd like
 * - Use your favorite 2-part jokes (setup & punchline), or check
 *   jokes.md file for some examples.
 * 
 * EXTRA CREDIT:
 * Some jokes are only a punchline with no setup:
 * 
 * E.g.: "It’s hard to explain puns to kleptomaniacs because 
 * they always take things literally."
 * 
 * If you don't pass in a "question" prop, how might you make it only 
 * show the punchline?
 */

import Joke from "./components/Joke";

export default function App() {
  return (
    <>
      <Joke setup={"What lights up a soccer stadium?"} punchline={"A soccer match."} />
      <Joke setup={"What do sprinters eat before they race?"} punchline={"Nothing. They fast."} />
      <Joke setup={"Why can't you trust the king of the jungle?"} punchline={"Because he's always lion."} />
      <Joke setup={"What do sea monsters eat?"} punchline={"Fish and ships."} />
      <Joke setup={"How did the telephone propose to his girlfriend?"} punchline={"He gave her a ring."} />


    </>
  )
}