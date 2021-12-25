import { proxy } from 'valtio'

interface IColor {
  colorClassName: String
}

export const colorState = proxy<IColor>({ colorClassName: 'text-slate-500' })
export const actions = {
  setColorState(clickedColor: string) {
    colorState.colorClassName = clickedColor
  },
}
