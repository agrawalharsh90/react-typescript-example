import React from "react";
import {Counter} from "./Counter";

interface GlobalProps {

}

const App: React.FC<GlobalProps> = (props: GlobalProps) => {
    return (
        <div>
            <Counter>
                {({count, setCount}) => (
                    <div>
                        {count}
                        <button onClick={() => setCount(count + 1)}>+</button>
                    </div>
                )}
            </Counter>
        </div>
    );
};

export default App;
