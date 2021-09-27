import "./App.css";
import BtnsBarSmall from "./BtnsBarSmall";
import BtnsBar from "./BtnsBar";
import { useState } from "react";
import { TiBackspaceOutline, TiTimesOutline } from "react-icons/ti";
import HistoryEntry from "./Components/HistoryEntry";
import TabsBar from "./Components/TabsBar";

function App() {
  const getCalculatorText = (a) => {
    let str = "";
    for (let i = 0; i < a.length; i++) {
      str += a[i];
    }
    return str;
  };

  const [smallScreen, setScreen] = useState(window.innerWidth < 600);
  const [calcText, setCalcTxt] = useState([]);
  const [calcTextStr, setCalcTxtStr] = useState("");
  const [justUsedD, setJustUsedD] = useState(false);
  const [onHistoryTab, setOnHistoryTab] = useState(false);
  const [rollsHistory, setRollHistory] = useState([]);
  const onWindowResize = () => {
    if (window.innerWidth < 992) {
      setScreen(true);
    } else {
      setScreen(false);
    }
  };

  window.addEventListener("resize", onWindowResize);

  const calculateRoll = () => {
    let sumSoFar = 0;
    let previousDigits = "";
    let add = true;
    let justSeenOp = false;
    for (let i = 0; i < calcText.length; i++) {
      if (calcText[i].charAt(0) === "d") {
        // one of either d100, d20, d12, ..., d3, d2
        const dNum = parseInt(calcText[i].substring(1, calcText[i].length));
        let multiplier = 1;
        if (previousDigits !== "") {
          // there is multiplier in front of d#
          multiplier = parseInt(previousDigits);
        }
        for (let i = 0; i < multiplier; ++i) {
          let element = Math.floor(Math.random() * dNum) + 1;
          if (add) {
            sumSoFar += element;
          } else {
            sumSoFar -= element;
          }
        }
        previousDigits = "";
        justSeenOp = false;
      } else if (calcText[i] === "+") {
        // encountered + or - need to now add previousDigits
        if (justSeenOp) {
          // two operators in a row
          sumSoFar = "ERROR";
          break;
        } else if (previousDigits !== "") {
          // previous item isn't the empty string (ie. like at beggining)
          let element = parseInt(previousDigits);
          if (add) {
            sumSoFar += element;
          } else {
            sumSoFar -= element;
          }
        }
        add = true;
        previousDigits = "";
        justSeenOp = true;
      } else if (calcText[i] === "-") {
        // encountered + or - need to now add previousDigits
        if (justSeenOp) {
          // two operators in a row
          sumSoFar = "ERROR";
          break;
        } else if (previousDigits !== "") {
          // previous item isn't the empty string (ie. like at beggining)
          let element = parseInt(previousDigits);
          if (add) {
            sumSoFar += element;
          } else {
            sumSoFar -= element;
          }
        }
        add = false;
        previousDigits = "";
        justSeenOp = true;
      } else {
        // encountered a digit 0-9, add this digit to previousItems but don't add yet
        previousDigits += calcText[i];
        justSeenOp = false;
        continue;
      }
    }
    if (previousDigits !== "" && sumSoFar !== "ERROR") {
      let element = parseInt(previousDigits);
      if (add) {
        sumSoFar += element;
      } else {
        sumSoFar -= element;
      }
    }
    const sumSoFarStr = sumSoFar.toString();
    setCalcTxt([sumSoFarStr]);
    setCalcTxtStr(sumSoFarStr);
    setJustUsedD(false);
    if (sumSoFar !== "ERROR") {
      rollsHistory.push(sumSoFar);
    }
    return sumSoFar;
  };
  if (!onHistoryTab) {
    if (smallScreen) {
      return (
        <main>
          <TabsBar
            onHistoryTab={onHistoryTab}
            setOnHistoryTab={setOnHistoryTab}
          />
          <section className="home-pg">
            <div id="calculator">
              <div id="display-bar">
                <input type="text" readOnly="true" value={calcTextStr}></input>
                <div id="display-btns-col">
                  <a
                    className="display-bar-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      calcText.pop();
                      setCalcTxt(calcText);
                      setCalcTxtStr(getCalculatorText(calcText));
                      if (calcText.length === 0) {
                        setJustUsedD(false);
                      } else {
                        const lastChar = calcText[calcText.length - 1];
                        if (lastChar === "+" || lastChar.length == 1) {
                          setJustUsedD(false);
                        } else {
                          setJustUsedD(true);
                        }
                      }
                    }}
                  >
                    <TiBackspaceOutline size={48} />
                  </a>
                  <a
                    className="display-bar-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setCalcTxt([]);
                      setCalcTxtStr("");
                      setJustUsedD(false);
                    }}
                  >
                    <TiTimesOutline size={48} />
                  </a>
                </div>
              </div>

              <BtnsBarSmall
                onBtnClick={setCalcTxt}
                onBtnClick2={setCalcTxtStr}
                onBtnClick3={setJustUsedD}
                justUsedD={justUsedD}
                calcText={calcText}
              />
              <div
                id="roll-btn"
                onClick={(e) => {
                  e.preventDefault();
                  calculateRoll();
                }}
              >
                <a>ROLL</a>
              </div>
            </div>
          </section>
        </main>
      );
    } else {
      return (
        <main>
          <TabsBar
            onHistoryTab={onHistoryTab}
            setOnHistoryTab={setOnHistoryTab}
          />
          <section className="home-pg">
            <div id="calculator">
              <div id="display-bar">
                <input
                  id="display-input"
                  type="text"
                  readOnly="true"
                  value={calcTextStr}
                ></input>
                <div id="display-btns-col">
                  <a
                    className="display-bar-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      calcText.pop();
                      setCalcTxt(calcText);
                      setCalcTxtStr(getCalculatorText(calcText));
                      if (calcText.length === 0) {
                        setJustUsedD(false);
                      } else {
                        const lastChar = calcText[calcText.length - 1];
                        if (lastChar === "+" || lastChar.length == 1) {
                          setJustUsedD(false);
                        } else {
                          setJustUsedD(true);
                        }
                      }
                    }}
                  >
                    <TiBackspaceOutline size={48} />
                  </a>
                  <a
                    className="display-bar-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setCalcTxt([]);
                      setCalcTxtStr("");
                      setJustUsedD(false);
                    }}
                  >
                    <TiTimesOutline size={48} />
                  </a>
                </div>
              </div>
              <BtnsBar
                onBtnClick={setCalcTxt}
                onBtnClick2={setCalcTxtStr}
                onBtnClick3={setJustUsedD}
                justUsedD={justUsedD}
                calcText={calcText}
              />
              <div id="roll-btn">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    calculateRoll();
                  }}
                >
                  ROLL
                </a>
              </div>
            </div>
          </section>
        </main>
      );
    }
  } else {
    // onHistoryTab
    let histEntries = [];
    for (let i = 1; i < rollsHistory.length + 1; i++) {
      histEntries.push(<HistoryEntry roll={rollsHistory[i - 1]} index={i} />);
    }
    return (
      <main>
        <TabsBar
          onHistoryTab={onHistoryTab}
          setOnHistoryTab={setOnHistoryTab}
        />
        <section className="hist-pg">
          <div className="history-entry">
            <div className="history-index">
              <div>ROLL #:</div>
            </div>
            <div className="history-roll">
              <div>ROLL VALUE:</div>
            </div>
          </div>
          {histEntries}
        </section>
      </main>
    );
  }
}

export default App;
