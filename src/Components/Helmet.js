import React from 'react'

function Helmet(props) {
  document.title="Ansh's Created " + props.title
  return (
    <div>{props.children}</div>
  )
}

export default Helmet