import React, { useState, useEffect, useRef } from "react"

function ActionMenu() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
    useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [])
  return (
    <div ref={menuRef} className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="text-xl font-bold hover:bg-gray-100 rounded-full px-2"
      >
        ⋮
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-lg shadow-md z-50">
          <ul className="py-1 text-sm text-gray-700">
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => alert("Modifier ce client")}
            >
              Modifier
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600"
              onClick={() => alert("Supprimer ce client")}
            >
              Supprimer
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ActionMenu;