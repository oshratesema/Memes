import React from 'react'

export default function DisplayMemes({ mem: { name, url } }) {
  return (
    <div className="col-4 mb-3">
      <div className="col-10 bg-secondary">
        <h5 className="text-white text-center">{name}</h5>
        <img className="col-12" src={url} alt="" />
      </div>
    </div>
  )
}
