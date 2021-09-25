import Button from "./Button";

function Row({ buttons, onBtnClick, onBtnClick2, calcText }) {
  return (
    <div className="row">
      {buttons.map((btn) => {
        return (
          <Button
            val={btn.val}
            color={btn.color}
            onBtnClick={onBtnClick}
            onBtnClick2={onBtnClick2}
            calcText={calcText}
          />
        );
      })}
    </div>
  );
}

export default Row;
