const cells = Array.from(document.querySelectorAll(".board .cell"));

const gameBoard = (() => {
    let board = [["", "", ""], ["", "", ""], ["", "", ""]];
    //bc array.fill connects em all

    const move = (i, j, isX) => {
        if (board[i][j] === "") {
            if (isX) 
                board[i][j] = "x";
            else 
                board[i][j] = "o";

            return true;
        }
        return false;
    }

    const gameState = () => {
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            return board[0][0];
        }
        if (board[0][3] === board[1][2] && board[1][2] === board[2][0]) {
            return board[0][3];
        }
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
                return board[i][0];
            }
            if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
                return board[0][i];
            }
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === "") {
                    return "";
                }
            }
        }

        return "T";
    }

    const clear = () => {
        board = [["", "", ""], ["", "", ""], ["", "", ""]];
    }

    const render = () => {
        cells.forEach((cell, index) => {
            cell.textContent = board[Math.floor(index/3)][index%3];
        });
    }

    return {move, gameState, clear, render};
})();

const game = (() => {
    const status = document.querySelector(".status");
    let xMove = true;

    const init = () => {
        cells.forEach(cell => {
            cell.onclick = move;
        });

        document.querySelector(".restart").onclick = restart;
    }

    const move = (event) => {
        let ind = cells.indexOf(event.target);
        gameBoard.move(Math.floor(ind/3), ind%3, xMove);  
        gameBoard.render();
        xMove = !xMove;
        if (xMove) 
            status.textContent = "x's turn";
        else 
        status.textContent = "o's turn";

        let state = gameBoard.gameState();
        if (state !== "") {
            endGame(state);
        }
    }

    const endGame = (state) => {
        if (state !== "T") 
            status.textContent = state + " won!";
        else
        status.textContent = "it's a tie :/";

        cells.forEach(cell => {
            cell.onclick = null;
        });
    }

    const restart = () => {
        xMove = true;
        cells.forEach(cell => {
            cell.onclick = move;
        })
        status.textContent = "x's turn";

        gameBoard.clear();
        gameBoard.render();
    }

    return {init}
})();

game.init();