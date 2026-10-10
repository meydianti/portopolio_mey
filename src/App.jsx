import "./App.css";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <>
       <Navbar />
       <main className="place-items-center grid grid-cols-2 w-full h-dvh">
        <div className="flex-col max-w-2x1 space-y-5 p-4">
          <h1 className="text-4x1 font-bold text-neutral-900">
            Halo,saya mey dianti
          </h1>
          <p className="text-lg text-neutral-700">
            lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores
            pariatur, quibusdam provident veniam neque aut soluta optio vel.
            Incidunt, quos.
          </p>
          <div>
            <button className="bg-neutral-800 text-neutral-200 py-1.5 px-4
            rounded lg">
              Dowload
            </button>
            <button className="bg-neutral-200 text-neutral-800 py-1.5 px-4
            rounded-lg">
              kontak saya
            </button>
          </div>
        </div>

        {/"Sisi Kanan "/}
        <div className="w-full flex justify-center items-center"/>
          <div className="relative bg-neutral"/>

      </main>
      </>
     );
    }

    export default App;
