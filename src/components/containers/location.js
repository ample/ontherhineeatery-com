import React from "react"
import PropTypes from "prop-types"

import Location from "../location"

const LocationContainer = ({ title, hours, address, phone }) => (
  <Location hours={hours.hours} address={address.address} phone={phone} />
)

LocationContainer.propTypes = {
  address: PropTypes.object.isRequired,
  hours: PropTypes.object.isRequired,
  phone: PropTypes.string.isRequired
}

LocationContainer.defaultProps = {}

export default LocationContainer
