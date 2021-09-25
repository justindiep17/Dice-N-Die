function Button({ val, color, onBtnClick, onBtnClick2, calcText }) {
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
      href="#"
      onClick={(e) => {
        e.preventDefault();
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
