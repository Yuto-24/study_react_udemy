// /* eslint react-hooks/exhaustive-deps: off */

import { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
    const [num, setNum] = useState(0); // [更新変数, 更新関数], (初期値)
    const [faceShowFlag, setFaceShowFlag] = useState(false);

    const onClickCountUp = () => {
        setNum(num + 1);
    };

    useEffect(() => {
        if (num % 3 === 0) {
            faceShowFlag || setFaceShowFlag(true);
        } else {
            faceShowFlag && setFaceShowFlag(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [num]);


    const onClickSwitchShowFlag = () => {
        setFaceShowFlag(!faceShowFlag);
    };

    return (
        <>
            <h1 style={{ color: 'red' }}>こんにちは！</h1>
            <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
            <ColorfulMessage color="pink">元気です</ColorfulMessage>
            <button onClick={onClickCountUp}>カウントアップ！</button>
            <button onClick={onClickSwitchShowFlag}>on/off</button>
            <p>{num}</p>
            {faceShowFlag && <p>😍🤣👀👀</p>}
        </>
    );
};

export default App;
