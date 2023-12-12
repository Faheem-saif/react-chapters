

export default function TodosList() {
  // ti
// this have to measure the things
    var name1 = "Faheem";
    var name2 = "Sami";
    var date = "12/10/23"

  return (
  <div>
      <div className="container ">
  
    <div className="row kg-row">
    <div className="col-6">
   {name1}
    </div>
    <div className="col-4">
   {date}
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-danger kg-button">Success</button>
    </div>
  </div>
  <div className="row kg-row">
    <div className="col-6">
   {name2}
    </div>
    <div className="col-4">
   {date}
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-danger kg-button">Success</button>
    </div>
  </div>
</div>
</div>
  )
}
