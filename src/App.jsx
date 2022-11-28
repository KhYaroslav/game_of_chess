import React, { useEffect, useState } from 'react'
import { gameSubject } from './Game'
import Board from './Board'

export default function App() {
  const [board, setBoard] = useState([])

  useEffect(() => {
    const subscribe = gameSubject.subscribe((game) => setBoard(game.board))
    return () => subscribe.unsubscribe()
  }, [])

  return (
    <div>
      <Board board={board}/>
    </div>
  )
}
