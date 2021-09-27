function HistoryEntry({ roll, index }) {
  return (
    <div className="history-entry">
      <div className="history-index">
        <div>{`${index}`}</div>
      </div>
      <div className="history-roll">
        <div>{`${roll}`}</div>
      </div>
    </div>
  );
}
export default HistoryEntry;
