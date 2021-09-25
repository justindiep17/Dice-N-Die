import "./App.css";
import BtnsBarSmall from "./BtnsBarSmall";
import BtnsBar from "./BtnsBar";
import { useEffect, useState } from "react";
import { TiBackspaceOutline } from "react-icons/ti";

function App() {
  const [smallScreen, setScreen] = useState(window.innerWidth < 600);
  const [calcText, setCalcTxt] = useState([]);
  const [calcTextStr, setCalcTxtStr] = useState("");
  const [justUsedD, setJustUsedD] = useState(false);

  const getCalculatorText = (a) => {
    let str = "";
    for (let i = 0; i < a.length; i++) {
      str += a[i];
    }
    return str;
  };

  const onWindowResize = () => {
    if (window.innerWidth < 992) {
      setScreen(true);
    } else {
      setScreen(false);
    }
  };

  window.addEventListener("resize", onWindowResize);

  if (smallScreen) {
    return (
      <main>
        <div id="calculator">
          <div id="display-bar">
            <input type="text" readOnly="true" value={calcTextStr}></input>
            <a
              id="backspace-btn"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                console.log(calcText);
                calcText.pop();
                setCalcTxt(calcText);
                setCalcTxtStr(getCalculatorText(calcText));
              }}
            >
              <TiBackspaceOutline size={48} />
            </a>
          </div>
          <BtnsBarSmall
            onBtnClick={setCalcTxt}
            onBtnClick2={setCalcTxtStr}
            calcText={calcText}
          />
          <div id="roll-btn">
            <a>ROLL</a>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <div id="calculator">
          <div id="display-bar">
            <input
              id="display-input"
              type="text"
              readOnly="true"
              value={calcTextStr}
            ></input>
            <a
              id="backspace-btn"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                console.log(calcText);
                calcText.pop();
                setCalcTxt(calcText);
                setCalcTxtStr(getCalculatorText(calcText));
              }}
            >
              <TiBackspaceOutline size={48} />
            </a>
          </div>
          <BtnsBar
            onBtnClick={setCalcTxt}
            onBtnClick2={setCalcTxtStr}
            calcText={calcText}
          />
          <div id="roll-btn">
            <a>ROLL</a>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
