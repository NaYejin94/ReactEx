import diceBule01 from './assets/dice-blue-1.svg';
import diceBule02 from './assets/dice-blue-2.svg';
import diceBule03 from './assets/dice-blue-3.svg';
import diceBule04 from './assets/dice-blue-4.svg';
import diceBule05 from './assets/dice-blue-5.svg';
import diceBule06 from './assets/dice-blue-6.svg';
import diceRed01 from './assets/dice-red-1.svg';
import diceRed02 from './assets/dice-red-2.svg';
import diceRed03 from './assets/dice-red-3.svg';
import diceRed04 from './assets/dice-red-4.svg';
import diceRed05 from './assets/dice-red-5.svg';
import diceRed06 from './assets/dice-red-6.svg';

const DICE_IMG = {
        blue : [diceBule01,diceBule02,diceBule03,diceBule04,diceBule05,diceBule06],
        red : [diceRed01,diceRed02,diceRed03,diceRed04,diceRed05,diceRed06]
    }

function Dice({color='blue',num='1'}) {
    const src = DICE_IMG[color][num-1]
    const alt = `${color}${num}`;
    return <img src={src} alt={alt}/>
}

export default Dice;