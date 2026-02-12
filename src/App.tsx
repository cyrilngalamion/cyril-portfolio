import profile from "./assets/wolfe.jpg";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black gap-6 px-4">
  
  {/* Image */}
  <img
    src={profile}
    alt="Cyril"
    className="
      w-full 
      max-w-xs 
      sm:max-w-sm 
      md:max-w-md 
      lg:max-w-lg 
      h-auto 
      object-cover 
      border-4 
      border-white
    "
  />

  {/* Name */}
  <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight">
    <span className="text-gray-300">JOHNDEL </span>
    <span className="text-red-600">WOLFE</span>
  </h1>

</div>

  );
}

export default App;


