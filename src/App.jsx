import { useState } from 'react';
import Dice from './Dice'
import Button from './Button'

function random(n) {
    return Math.ceil(Math.random()*n);
}

function App() {
    const [num, setNum] = useState(1);

    const handleRollClick = () => {
        const nextNum = random(6)
        setNum(nextNum);
    }

    const handleClearClick = () => {
        setNum(1);
    }

    return (
        <>
            <div>주사위 굴리기!</div>
            <div><Dice color='red' num={num}/></div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
        </>
    )
}

export default App;