import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="App flex flex-col items-center justify-center gap-7 h-screen bg-gray-100">
        <h1 className="text-5xl font-bold underline text-green-500">
          Hello World
        </h1>
        <div
          className="radial-progress text-green-500"
          style={{ "--value": 70 }}
          aria-valuenow={70}
          role="progressbar"
        >
          70%
        </div>
      </div>
    </>
  );
};

export default App;
