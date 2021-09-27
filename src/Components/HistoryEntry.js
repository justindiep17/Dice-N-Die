function HistoryEntry({ roll, index }) {
  return (
    <div className="history-entry">
      <div className="history-index">{`${index}`}</div>
      <div className="history-roll">{`${roll}`}</div>
    </div>
  );
}
export default HistoryEntry;
