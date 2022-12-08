import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  var products = [
    {name: 'Photoshop', price: '150.99'},
    {name: 'Illustrator', price: '500.99'},
    {name: 'Premier Pro', price: '500.99'},
    {name: 'Pikslab', price: '50.99'},
    {name: 'After effects', price: '400.99'},
    {name: 'Godaddy', price: '5.99'},
    {name: 'React', price: '29.99'},
    {name: 'Native', price: '40.99'},
  ];


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>The React</h1>
        <Users></Users>
        <Count></Count>

        {
          products.map(pro => <Products info = {pro}></Products>)
        }
       
        <a
          className="App-link"
          href="https://joybarman.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit developer site
        </a>
      </header>

      
    </div>
  );
}


function Count(){
  const [count, setCount] = useState(0);
  const handleClick = () =>{
    setCount(count+ 1);
  } 
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div> 
  )
}








function Products(props){
  const pdstyle = {
    width: '200px',
    background: 'red',
    borderRadius: '10px',
    padding: '20px',
    margin: '20px'
  }
  const img = {
    width: '100px',
    padding: '0',
    margin: '0'
  }
  return (
    <div style={pdstyle}>
      <img src={logo} style={img} alt='joy'/>
      <p>{props.info.name}</p>
      <h5>Price: {props.info.price}</h5>
      <button>Buy Now</button>
    </div>
   );
}

function Users(){
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(res => res.json())
    .then(data => setUser(data))
  }, []);

  const img = {
    width: '100px',
    padding: '0',
    margin: '0'
  }
  
  return (
    <div>
      <p> Number of User {user.length}</p>
      {
        user.map(user => (
          <div>
            <p>{user.title}</p>
            <img style={img} src={user.thumbnailUrl} alt="" srcset="" />

          </div>
        ))
      }
    </div>
  )
}


export default App;
