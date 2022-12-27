import "./index.css";
function ConfirmDelete(props) {
  return (
    <div className="question">
      <div className="container">
        <h3 className="header">Delete this ? </h3>
        <button className="yesBtn" onClick={() => props.question(true)}>
          Yes
        </button>
        <button className="noBtn" onClick={() => props.question(false)}>
          No
        </button>
      </div>
    </div>
  );
}
export default ConfirmDelete;
