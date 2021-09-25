import Row from "./Row";

function BtnsBar({ onBtnClick, onBtnClick2, calcText }) {
  const RED = "#D32F2F";
  const GREEN = "#689F38";
  const AMBER = "#FFA000";
  const ORANGE = "#f57200";
  const INDIGO = "#303F9F";
  const BLUE = "#0288D1";
  const TEAL = "#00796B";
  const PINK = "#C2185B";
  const PURPLE = "#630b8c";
  return (
    <div id="btns-bar">
      <Row
        buttons={[
          { val: "d100", color: TEAL },
          { val: "d20", color: AMBER },
          { val: "d12", color: INDIGO },
          { val: "6", color: RED },
          { val: "7", color: AMBER },
          { val: "8", color: INDIGO },
          { val: "9", color: TEAL },
        ]}
        onBtnClick={onBtnClick}
        onBtnClick2={onBtnClick2}
        calcText={calcText}
      />
      <Row
        buttons={[
          { val: "d10", color: PURPLE },
          { val: "d8", color: ORANGE },
          { val: "d6", color: GREEN },
          { val: "2", color: TEAL },
          { val: "3", color: BLUE },
          { val: "4", color: PINK },
          { val: "5", color: ORANGE },
        ]}
        onBtnClick={onBtnClick}
        onBtnClick2={onBtnClick2}
        calcText={calcText}
      />
      <Row
        buttons={[
          { val: "d4", color: RED },
          { val: "d3", color: BLUE },
          { val: "d2", color: PINK },
          { val: "0", color: AMBER },
          { val: "1", color: PURPLE },
          { val: "+", color: GREEN },
          { val: "-", color: INDIGO },
        ]}
        onBtnClick={onBtnClick}
        onBtnClick2={onBtnClick2}
        calcText={calcText}
      />
    </div>
  );
}

export default BtnsBar;
