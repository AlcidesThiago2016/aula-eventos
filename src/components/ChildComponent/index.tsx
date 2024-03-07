import { useState } from "react"

type Props = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onNewValeu?: Function; 
}

export default function ChildComponent({onNewValeu} : Props){

    const [count, setCount] = useState(0);

    function handleClick(){
        const newCount = count + 1;
        setCount(newCount);
        if (onNewValeu){
            onNewValeu(newCount);
        }
    }

    return(
        <div style={{border: "1px solid red", padding: "10px"}}>
            {count}
            <button onClick={handleClick}>Ok</button>
        </div>
    )
}