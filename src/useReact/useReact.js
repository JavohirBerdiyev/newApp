import React, { useState } from 'react';
import '../App.css'

class ClickCountButton extends React.Component {
    state = {
        count: 0
    };

    onClick() {
        this.setState(state => ({
            count: state.count + 1
        }));
    }

    render() {
        return (
            <div className="App">
                <button  onClick={this.onClick.bind(this)}>
                    You have clicked {this.state.count} times
                 </button>
            </div>
        )
    }
}


function ClickCountButton2() {
    // const state = useState(0);
    // const count = state[0];
    // const setCount = state[1];

    // let state;
    // if (Math.random() < 0.5) {
    //     state = useState(() => aTonOfMath());
    // } else {
    //     state = [123, () => {}]
    // } 
    
    // const count = state[0];
    // const setCount = state[1];
    
    const [count, setCount] = useState(aTonOfMath());

    return (
        <div className="App">
            <button  onClick={() => setCount(count => count + 1)}>
                You have clicked { count } times
            </button>
        </div>
    )
}

function aTonOfMath() {
    return 0;
}



function ClickCountButton3() {
    const [count, increment] = useCount();

    return (
        <div className="App">
            <button  onClick={() => increment() }>
                You have clicked { count } times
            </button>
        </div>
    )
}

function useCount() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count => count + 1);
    }
    return [count, increment];
}


export default ClickCountButton3;