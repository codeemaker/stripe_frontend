import logo from './logo.svg';
import './App.css';

function App() {

  const checkout = () => {
      fetch("http://localhost:5000/api/create-payment-intent", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          items:[
            {id:1,quantity:1,price:(200.00 * 100),name:"Test"}
          ]
        })
      })
      .then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
      })
      .then(({url})=>{
        console.log(url)
        window.location = url
      })
      .catch(e => {
        console.log(e.error)
      })
    }

  return (
    <div>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}

export default App;
