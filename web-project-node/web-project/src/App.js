import React, { useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table'

const App = () => {

  let [data, setData] = useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:3000/api/data").then((result) => {
      // this.state.data = result.data.data;
      setData(
        result.data.data
      )
      console.log(result.data.data);
       
    }, (error) => {
      console.log("error");
    })
  }, [])

  return (
    <div className="App">
    {/* <h1>HELLO WORLD!!!</h1> */}
    {/* <h1>{ getRequest() }</h1> */}
    {/* <button onClick={ this.getRequest }>get</button> */}
    {/* style={{'border': '1px solid'}} */}
  <Table striped bordered hover size="sm">
      <thead>
              <tr>
                <th>Name</th>
                <th>Order From Sun</th>
                <th>Has Rings</th>
                <th>Main Atmosphere</th>
                <th>Surface Temperature</th>
              </tr>
            </thead>
            <tbody>
            
             {data.map((element,index) => {
                return (
                 <tr key={index}>
                  <td>{ element.name }</td>
                  <td>{ element.orderFromSun }</td>
                  <td>{ element.hasRings }</td>
                  <td>{ element.mainAtmosphere }</td>
                  <td>{ element.surfaceTemperature }</td>
                </tr>
              )
              })} 
            </tbody>
          </Table>
          </div>
        );
}

export default App;



// import React, { Component } from 'react'
// import axios from 'axios';

// export default class App extends Component {

//   state = {
//     data : []
//   }

//   getRequest()
//   {
//     axios.get("http://localhost:3000/api/data").then((result) => {
//       this.state.data = result.data.data;
//       console.log(this.state.data);
//       this.state.data.map((ele,ind)=>{
//         console.log(ele);
//       })
//       // console.log(result.data);
//     }, (error) => {
//       console.log("error");
//     })
//   }
  
//   render() {
//     return (
//       <div className="App">
//         <h1>HELLO WORLD!!!</h1>
//       {/* <h1>{ getRequest() }</h1> */}
//       {/* <button onClick={ this.getRequest }>get</button> */}
//       <>{ this.getRequest() }</>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Order From Sun</th>
//             <th>Has Rings</th>
//             <th>Main Atmosphere</th>
//             <th>Surface Temperature</th>
//           </tr>
//         </thead>
//         <tbody>
        
//          {this.state.data.map((element,index) => {
//             return (
//              <tr>
//               <td>{ element.name }</td>
//               <td>{ element.orderFromSun }</td>
//               <td>{ element.hasRings }</td>
//               <td>{ element.mainAtmosphere }</td>
//               <td>{ element.surfaceTemperature }</td>
//             </tr>
//           )
//           })} 
//         </tbody>
//       </table>
//       </div>
//     );
//   }
// }




// import './App.css';
// import axios from '/axios'

// function App() {
//   getRequest()
//   {
//     axios.get("localhost:3000/").then((result) => {
//       console.log(result);
//     }, (error) => {
//       console.log(error);
//     })
//   }
//   return (
//     <div className="App">
//       {/* <h1>{ getRequest() }</h1> */}
//       <button onClick="getRequest">get</button>
//     </div>
//   );
// }

// export default App;
