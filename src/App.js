import logo from './logo.svg';
import './App.css';
import ChildComponent from './child.js';
import TimerComponent from "./timer";

function SayHelloComponent() {
    const text = "안녕 다마고치야";
    return (
        <div>
            <h3>그랩이 이야기 합니다 : {text}</h3>
        </div>
    )
}

function App() {
    const text = '개발자 화이팅!';

    const sayHello = function () {
        return (
            <div>
                <h3>코너 : 리액트를 배워보자~~~</h3>
            </div>
        )
    }
    const sayAlert = function () {
        alert('코너의 Alert 창 ');
    }
    return (
        <div>
            <img src={logo} width={300}/>
            <h1>안녕하세요!</h1>
            <h2>{text}</h2>
            {sayHello()}
            <div onClick={sayAlert}>
                <button>클릭해봐</button>
            </div>
            <ChildComponent name={"코너"} age={28} />
            <ChildComponent name={"김치"} age={24} />
            <ChildComponent name={"이유"} age={30} />
            <TimerComponent />
            <SayHelloComponent />
        </div>
    );
}

export default App;
