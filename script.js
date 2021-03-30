//Obj

//Place Mark
//Switch Turn
//Check For Win
//Check For Draw

const xClass = 'x'
const oClass = 'o'
const winComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
]
const cellElm = document.querySelectorAll('[data-cell]')
const board = document.querySelector('.board')
const winningMsg = document.getElementById('winningMessage')
const restButton = document.getElementById('restart-button')
const winningTextMsg = document.querySelector('[data-winning-message-text]')
let oTurn

startGame()
restButton.addEventListener('click',startGame)

function startGame() {
    oTurn = false
    cellElm.forEach(cell => {
        cell.classList.remove(xClass)
        cell.classList.remove(oClass)
        cell.removeEventListener('click',handleClick)
        cell.addEventListener('click', handleClick, {once: true})
       })
     setBoardHover()
     winningMsg.classList.remove('show')
}

function handleClick(e) {
    const cell = e.target
    const currentClass = oTurn ? oClass : xClass
    placeMark(cell, currentClass)
     if(cheackWin(currentClass)){
        endGame(false)
     }else if (isDraw()){
         endGame(true)
     }else{
        swapTurn()
    setBoardHover()
     }
}

function endGame(draw){
    if(draw){
        winningTextMsg.innerText = `Draw!`
    }else{
         winningTextMsg.innerText = `${oTurn ? "O's" : "X's"} Wins`
    }
    winningMsg.classList.add('show')
}

function isDraw(){
    return [...cellElm].every(cell => {
        return cell.classList.contains(xClass) || cell.classList.contains(oClass)
    })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurn() {
    oTurn = !oTurn
}

function setBoardHover() {
    board.classList.remove(xClass)
    board.classList.remove(oClass)

    if (oTurn) {
        board.classList.add(oClass)
    } else {
        board.classList.add(xClass)
    }
}

function cheackWin(currentClass){
    return winComb.some(comb => {
        return comb.every(index => {
            return cellElm[index].classList.contains(currentClass)
        })
    })
}