import { calculateWinner } from "../utils/calculateWinner"
import Square from "./Square"

import { useState } from 'react'

const Board = () => {

  const [xIsNext, setXIsNext] = useState<boolean>(true)
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null))

  const handleClick = (i: number) => () => {

    // If the square is already filled, return early
    if (squares[i] || calculateWinner(squares)) {
      return
    }

    const nextSquares = squares.slice()

    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }

    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  const winner = calculateWinner(squares)

  return (
    <div>
        <div className="status">
            {winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`}
        </div>

        <div className="board-row">
            <Square value={squares[0]} onSquareClick={handleClick(0)} />
            <Square value={squares[1]} onSquareClick={handleClick(1)} />
            <Square value={squares[2]} onSquareClick={handleClick(2)} />
        </div>

        <div className="board-row">
            <Square value={squares[3]} onSquareClick={handleClick(3)} />
            <Square value={squares[4]} onSquareClick={handleClick(4)} />
            <Square value={squares[5]} onSquareClick={handleClick(5)} />
        </div>

        <div className="board-row">
            <Square value={squares[6]} onSquareClick={handleClick(6)} />
            <Square value={squares[7]} onSquareClick={handleClick(7)} />
            <Square value={squares[8]} onSquareClick={handleClick(8)} />
        </div>
    </div>
  )
}

export default Board