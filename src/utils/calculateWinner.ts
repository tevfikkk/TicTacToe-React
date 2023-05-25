export const calculateWinner = (squares: string[]): string | null => {
    const lines = [
        [0, 1, 2], // 1st row
        [3, 4, 5], // 2nd row
        [6, 7, 8], // 3rd row
        [0, 3, 6], // 1st column
        [1, 4, 7], // 2nd column
        [2, 5, 8], // 3rd column
        [0, 4, 8], // 1st diagonal
        [2, 4, 6], // 2nd diagonal
    ] as [number, number, number][]

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null
}