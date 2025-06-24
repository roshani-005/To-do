function Todoitem2() {
  let name = "Buy Milk";
  let date = "05/10/2004";

  return (
    <div className="container  ">
      <div className="row kg-row">
        <div className="col-6">{name}</div>
        <div className="col-4 text-centre">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger
          kg-button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem2;
