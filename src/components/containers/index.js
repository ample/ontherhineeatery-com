import React from "react"

import Location from "../location"

const Containers = props => {
  console.log(props)

  const renderLocation = data => (
    <Location
      hours={data.hours.hours}
      address={data.address.address}
      phone={data.phone}
    />
  )

  const renderForm = data => <p>Form goes here...</p>

  const containerRenderMap = {
    ContentfulLocationContainer: renderLocation,
    ContentfulFormContainer: renderForm
  }

  return <div>{props.data.map(n => containerRenderMap[n.__typename](n))}</div>
}

export default Containers
