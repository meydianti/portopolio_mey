export function Navbar() {
    return (
        <>
        <nav className="bg-neutral-50 flex py-3 items-center
        justify-between px-3 text-neutral-900 border-b-2
        border-black shadow-lg">
         <div className="font-bold">Mey</div>
         <div className="flex gap-S">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
        </div>
        <button className="bg-neutral-200 text-neutral-800 py-1.5
        px-4 rounded-x1">
            telususri
          </button>
         </nav>
        </>
       );
      }