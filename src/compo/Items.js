import React from 'react'

function Items(props) {
  return (
    <>

<div class="card" style={{width: "18rem"}}>

  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.blogbody.slice(0,200)}...</p>
    <a href={props.links} class="btn btn-primary">Read More..</a>
  </div>
</div>
   </>
  )
}

export default Items