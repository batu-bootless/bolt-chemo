import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">🚀 Bolt.New React App</h1>
      <p className="mb-4">Sayaç: {count}</p>
      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Arttır
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Azalt
        </button>
      </div>
    </div>
  )
}