## Changing Tailwind text color class using Valtio, Next.js and Typescript

<img src="logo.svg" alt="valtio">
<br />
<br />

The Index Page contains the text 'Valtio Color Theme' which has a tailwind class variable for the text color along with the Color Wheel Component.

```jsx
export default function Home() {
  const snap = useSnapshot(colorState)

  return (
    <div className="flex justify-evenly">
      <div
        className={`flex items-center h-96 justify-center text-2xl ${snap.colorClassName}`}
      >
        <h1>Valtio Color Theme</h1>
      </div>
      <ColorWheel />
    </div>
  )
}
```

The Color Wheel Component imports an enum containing fixed text color tailwind classes.

```js
export enum Color {
  Red = 'text-red-500',
  Pink = 'text-pink-500',
  Rose = 'text-rose-500',
  Purple = 'text-purple-500',
  Fuchsia = 'text-fuchsia-500',
  Indigo = 'text-indigo-500',
  Blue = 'text-blue-500',
  Sky = 'text-sky-500',
  Cyan = 'text-cyan-500',
  Teal = 'text-teal-500',
  Green = 'text-green-500',
  Lime = 'text-lime-500',
  Yellow = 'text-yellow-500',
  Amber = 'text-amber-500',
  Orange = 'text-orange-500',
  Emerald = 'text-emerald-500',
}
```

which it then maps over them and displays them in a grid. When you click on each color it changes the tailwind class variable for the div with 'Valtio Color Theme' inside the index page

```jsx
const wheel = Object.keys(Color).map((keyName) => (
  <div
    key={keyName}
    className={`${Color[keyName]} mx-2 flex items-center justify-center font-mono hover:cursor-pointer`}
    onClick={() => actions.setColorState(Color[keyName])}
  >
    {keyName}
  </div>
))

return <div className="grid grid-cols-4 gap-4 ">{wheel}</div>
```

The store.ts file contains the default state of the tailwind class variable name in the index page. It also contains an action function which acts as a setter for the tailwind class variable.

```js
import { proxy } from 'valtio'

interface IColor {
  colorClassName: String;
}

export const colorState = proxy < IColor > { colorClassName: 'text-slate-500' }
export const actions = {
  setColorState(clickedColor: string) {
    colorState.colorClassName = clickedColor
  },
}
```

The Color Wheel Component imports the action function, which it then invokes onClick passing the tailwind class variable name of the clicked color as a parameter.

```jsx
  onClick={() => actions.setColorState(Color[keyName])}
```
