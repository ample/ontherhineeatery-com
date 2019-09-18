function getSetting(settingsList, name) {
  const collection = settingsList.filter(n => n.key === name)
  return collection.length > 0 ? collection[0].value.value : null
}

export { getSetting }
