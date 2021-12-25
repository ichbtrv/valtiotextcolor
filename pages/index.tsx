import ColorWheel from 'components/ColorWheel/ColorWheel'
import { useSnapshot } from 'valtio'
import { colorState } from 'store/store'

export default function Home() {
  const snap = useSnapshot(colorState)

  return (
    <div className="flex justify-evenly p-1">
      <div
        className={`flex items-center h-96 justify-center text-xl ${snap.colorClassName}`}
      >
        <h1>Valtio Color Theme</h1>
      </div>
      <ColorWheel />
    </div>
  )
}
