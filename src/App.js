
function Food({ love }) {
  return <h3>I love { love }</h3>;
}

function App() {
  return (
    <div className="App">
      <h1>Hell oh!</h1>
      <Food love="Minari" />
      <Food love="Doraji" />
      <Food love="Tofu" />
    </div>
  );
}

export default App;
