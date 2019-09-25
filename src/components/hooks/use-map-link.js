function useMapLink(address, krogerOTR = false) {
  const maplink = address.replace(/\s|\n/g, "+").replace(/,/g, "&2C")
  if (krogerOTR) {
    return `https://www.google.com/maps/search/?api=1&query=Kroger+On+The+Rhine&2C+East+Court+Street&query_place_id=ChIJcYM_-8GxQYgRVGVneCknYuc`
  } else {
    return `https://www.google.com/maps/search/?api=1&query=${maplink}`
  }
}

export { useMapLink }
