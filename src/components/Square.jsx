import'./Square.css'

const square = (props) => {
    
    // const clickHandler = () => {
    //     let {squareValue, player, index, squares, setPlayer} = props
    //     if (squareValue === '' && player === true){
    //         let newSquares = squares
    //         newSquares[index] = "X"
    //         props.setSquares(newSquares)
    //         props.setPlayer(false)
    //         console.log(newSquares)
    //     }else if(squareValue === ''){
    //         let newSquares = squares
    //         newSquares[index] = ""
    //         props.setSquares(newSquares)
    //         props.setPlayer(false)
    //         console.log(newSquares)
    //         props.setPlayer(true)

    //     }
    // }

    const clickHandler = () => {
        if (!props.squareValue) {
            if(props.player){
                props.squares.splice(props.index, 1, "X")
                props.setSquares(props.squares)
                props.setPlayer(!props.player)
            } else {
                props.squares.splice(props.index,1,"O")
                props.setSquares(props.squares)
                props.setPlayer(!props.player)
            }
        }
    }

    return (
        <div className="square"  onClick={clickHandler}>
            <h2>{props.squareValue === "O" ? <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" /> : props.squareValue}</h2>
        </div>
    )
}

export default square;