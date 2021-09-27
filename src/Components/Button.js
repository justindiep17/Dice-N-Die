function Button({
  val,
  color,
  onBtnClick,
  onBtnClick2,
  onBtnClick3,
  justUsedD,
  calcText,
}) {
  const getCalculatorText = (a) => {
    let str = "";
    for (let i = 0; i < a.length; i++) {
      str += a[i];
    }
    return str;
  };
  return (
    <a
      class="calc-btn"
      style={{ background: `${color}` }}
      onClick={(e) => {
        e.preventDefault();
        if (`${val}` === "+" || `${val}` === "-") {
          onBtnClick3(false);
          justUsedD = false;
        }
        if (justUsedD) {
          calcText.push("+");
        }
        if (`${val[0]}` === "d") {
          onBtnClick3(true);
        } else {
          onBtnClick3(false);
        }
        calcText.push(`${val}`);
        onBtnClick(calcText);
        onBtnClick2(getCalculatorText(calcText));
      }}
    >
      <span>{`${val}`}</span>
    </a>
  );
}

export default Button;
