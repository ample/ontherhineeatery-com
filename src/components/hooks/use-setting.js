import React from "react"

function useSetting(settingsList, name) {
  const collection = settingsList.filter(n => n.node.key === name)
  return collection.length > 0 ? collection[0].node.value.value : null
}

export { useSetting }
