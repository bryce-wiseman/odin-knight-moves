

function knightMoves(start, end) {
    let board = {}
    board[JSON.stringify(start)] = 0
    let queue = [start]

    while (!(queue[0][0] == end[0] && queue[0][1] == end[1])) {
        let current = queue.shift()
        let moves = validMoves(allMoves(current))
        moves.forEach(move => { 
            queue.push(move)
            board[JSON.stringify(move)] = board[JSON.stringify(current)] + 1
        });
        }
        console.log(`the knight can move from ${start} to ${end} in ` + board[JSON.stringify(end)] + ` moves.`)
        return board[JSON.stringify(end)]
    }

    function allMoves(currentTile) {
        let moves = [
            [currentTile[0]+2, currentTile[1]+1],
            [currentTile[0]+1, currentTile[1]+2],
            [currentTile[0]+2, currentTile[1]-1],
            [currentTile[0]+1, currentTile[1]-2],
            [currentTile[0]-2, currentTile[1]+1],                [currentTile[0]-1, currentTile[1]+2],
            [currentTile[0]-2, currentTile[1]-1],
            [currentTile[0]-1, currentTile[1]-2]
        ]
        return moves
            }

    function validMoves(moveList) {
        return moveList.filter(move => move[0] < 8 && move[0] >= 0 && move[1] < 8 && move[1] >= 0)
    }


console.log(knightMoves([0,3], [7,7]))