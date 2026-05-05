"use client"
import React from 'react'

const ButtonOne = () => {
  return (
    <div className="mt-5">
            <button
                className="bg-green-500 rounded-sm px-4 py-1 text-white hover:bg-green-600"
                onClick={() => console.log("I have clicked here.")}
            >
                Click Here
            </button>
        </div>
  )
}

export default ButtonOne
