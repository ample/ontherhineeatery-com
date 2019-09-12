import React, { useState, useEffect } from "react"

function useToggleMenu(nodeRef) {
    const [isOpen, setOpen] = useState(false)
    const setMenuState = () => setOpen(!isOpen)

    useEffect(() => {
      const handleOutsideClick = e => {
        if (!nodeRef.current.contains(e.target)) {
          setMenuState()
        }
      }
      if (isOpen) {
        document.addEventListener("mousedown", handleOutsideClick)
      }
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick)
      }
    }, [isOpen])
    return [ isOpen, setMenuState ]
}

export { useToggleMenu }
