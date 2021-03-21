import logo from "./logo.svg";
import "./App.css";
import Card from "./card";

function App() {
  let products =[
    {productName : "iphone", price :"$10000", description : "nice mobile"},
    {productName : "moto e", price :"$2000", description : "nice mobile"},
    {productName : "nokia", price :"$4000", description : "nice mobile"},
    {productName : "samsung", price :"$1000", description : "nice mobile"},
    {productName : "huwaei", price :"$8000", description : "nice mobile"}    
  ]
  return (
    <>
      <div className="container">
        <div className="row">
          {
            products.map((product) =>{
              return <Card data={product}></Card>

            })
          }

          </div>
      </div>
    </>
  );
}

export default App;
