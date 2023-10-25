import Card from "./components/Card";

function App() {
  
  // let myObject = {
  //   name: "Edson",
  //   age: 21
  // }

  return (
    <>
      <h1 className="text-3xl text-red-700 text-center">React Props</h1>
      <Card username="Edson" btnText = "Dekho Profile" />
      <Card username="Eden" btnText = "Explore Profile" />
    </>
  );
}

export default App;
