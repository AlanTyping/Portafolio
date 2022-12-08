import React from 'react'

export default function Images({link, img, name, react}) {
  return (
    <>
      <a href={link} target="_blanck">
        <h2>{name}</h2>
        <img src={img} alt={name} className={`icon ${react}`}></img>
      </a>
    </>
  )
}
