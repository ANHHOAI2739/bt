import React from 'react'
import "./light.css"

export const Light = ({color, isOn}) => {
  return (
    <div>
        <div className={`light ${color}-light ${isOn && "on"}`}></div>
    </div>
  )
}
