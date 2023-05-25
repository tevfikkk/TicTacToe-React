const Square = ({
    value,
    onSquareClick
} : {
    value: string
    onSquareClick: () => void
}) => {

  return (
    <button 
        className='square'
        onClick={onSquareClick}
    >
        {value}
    </button>
  )
}

export default Square