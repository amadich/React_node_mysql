import {useState} from 'react';
import './App.css';
import Axios from 'axios';
function App() {
  const [name,setName] = useState("");
  const [country,setCountry] = useState("");

  const [accunets,setAccunets] = useState([]);
  const [deluser,setDeluser] = useState(0);
  const addaccunet = () => {
    Axios.post("http://localhost:3001/create", {name: name ,  country: country}).then(() => console.log("Success"))
  }

  const getaccunets = () => {
    Axios.get("http://localhost:3001/accunets").then((response) => setAccunets(response.data))
  }


  const delaccunets = () => {
    Axios.post("http://localhost:3001/delme", {id: deluser}).then(() => console.log("Accunet Removed"))
  }
 
  

  return (
    <div className="App">
        <h1>Hello Mohamed Try Rejister accunets</h1>
        <hr />
        <label>Name : </label>
        <input type="text" placeholder="Your Name" onChange={
          (e) => {
            setName(e.target.value);
          }
        }/>
        <br />
        <label>Country : </label>
        <input type="text" placeholder="Your Country" onChange={
          (event) => {
            setCountry(event.target.value);
          }
        }/>
        <br />
        <button onClick={addaccunet}>Create new</button>
        <hr />
        <div>
          <button onClick={getaccunets}>Show Accunets</button>

                  <center style={{color: "darkred"}}>Your Accunets</center>

                  {
                    accunets.map((val,key) => {
                      key = val.id
                      return(
                        <div className='employee' key={key}> 
                          <h3>{val.name}</h3>
                         </div>
                      )
                    })
                  }

        </div>

        <hr />
        <h1>Welcome ADMIN Please Remove your Accunets Here</h1>
        <label>id</label>
        <input type="text" placeholder='ID USER' onChange={(e) => {
              setDeluser(e.target.value);
        }}/> 
        <button onClick={delaccunets}>Remove This User</button>
    </div>
  );
}

export default App;
