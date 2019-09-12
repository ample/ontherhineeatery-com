import React from "react"

function useMapLink(address) {
  const maplink = address.replace(/\s|\n/g, "+").replace(/,/g, "&2C")
  return `https://www.google.com/maps/search/?api=1&query=${maplink}`
}

export { useMapLink }
