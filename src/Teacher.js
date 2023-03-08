import { useState } from "react"

let Teacher=()=>{
  //1. Hooks Area
  const [teacher,setTeacher]=useState('')
  //2. definition area
  let getNameInput=(event)=>{
    setTeacher(event.target.value)
  }
  //console.log(teacher)
  let data={
              "data": {
                "name": teacher
              }
            }

  let submitData=()=>{
    fetch(`http://localhost:1337/api/teachers`,{
      method:"POST",
      headers:{
        'accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
        })
    .then()
    .then()
    .catch()
  }
  //3. return Statement
  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" onChange={getNameInput} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="button" className="btn btn-primary" onClick={submitData}>Submit</button>
        </form>
        <br />
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">First</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Teacher;
