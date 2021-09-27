import { AiOutlineHome, AiOutlineHistory } from "react-icons/ai";

function TabsBar({ onHistoryTab, setOnHistoryTab }) {
  if (onHistoryTab) {
    return (
      <div id="tabs-bar">
        <button
          class="tab"
          onClick={() => {
            setOnHistoryTab(false);
          }}
        >
          <AiOutlineHome size={25} />
        </button>
        <button id="cur-tab" class="tab">
          <AiOutlineHistory size={25} />
        </button>
      </div>
    );
  } else {
    return (
      <div id="tabs-bar">
        <button id="cur-tab" class="tab">
          <AiOutlineHome size={25} />
        </button>
        <button
          class="tab"
          onClick={() => {
            setOnHistoryTab(true);
          }}
        >
          <AiOutlineHistory size={25} />
        </button>
      </div>
    );
  }
}
export default TabsBar;
