import React, { useState } from 'react'
import { colorState, actions } from 'store/store'
import { useSnapshot } from 'valtio'
import { Color } from 'lib/Color'

const ColorWheel = () => {
  const wheel = Object.keys(Color).map((keyName) => (
    <div
      key={keyName}
      className={`${Color[keyName]} mx-2 flex items-center justify-center text-md hover:cursor-pointer`}
      onClick={() => actions.setColorState(Color[keyName])}
    >
      {keyName}
    </div>
  ))

  return <div className="grid grid-cols-4 gap-4 ">{wheel}</div>
}

export default ColorWheel
