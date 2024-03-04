/* eslint-disable react/jsx-key */
import './keyboard.css'
import Key from '../key/Key'

const Keyboard = () => {
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    return (
        <div className='keyboard'>
            <div className="line">
                {keys1.map((key) => {
                    return <Key keyVal={key} />;})
                }
            </div>
            <div className="line">
                {keys2.map((key) => {
                    return <Key keyVal={key} />;
                })}
            </div>
            <div className="line">
                <Key keyVal={'\u232B'} />
                {keys3.map((key) => {
                    return <Key keyVal={key} />;
                })}
                <Key keyVal={'\u21B5'} />
            </div>
        </div>
    )
}

export default Keyboard