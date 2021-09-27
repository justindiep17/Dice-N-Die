import { TiBackspaceOutline } from "react-icons/ti";
import { FaTimesCircle } from "react-icons/fa";

function DisplayBar({
  calcText,
  setCalcTxt,
  calcTxtStr,
  setCalcTxtStr,
  setJustUsedD,
}) {
  const getCalculatorText = (a) => {
    let str = "";
    for (let i = 0; i < a.length; i++) {
      str += a[i];
    }
    return str;
  };

  return (
    <div id="display-bar">
      <input type="text" readOnly="true" value={calcTxtStr}></input>
      <a
        id="backspace-btn"
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
    </div>
  );
}

export default DisplayBar;
