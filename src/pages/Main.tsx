import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import CardOne from "../components/CardOne";
import CardTwo from "../components/CardTwo";
import CardThree from "../components/cardThree";

function Main() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#043247]">
      <NavBar />

      <div className="flex flex-1 px-4 mt-30 mb-10 justify-center gap-7">
        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:flex flex-col gap-8">
          <div className="flex items-center justify-end">
            <CardOne />
          </div>
          <div className="flex items-center justify-end">
            <CardTwo />
          </div>
        </div>

        {/* Desktop CardThree */}
        <div className="hidden lg:block">
          <CardThree />
        </div>

        {/* Mobile Layout (below lg) */}
        <div className="flex lg:hidden flex-col items-center gap-8 w-full max-w-md mx-auto">
          {/* Card Three first on mobile */}
          <div className="w-full">
            <CardThree />
          </div>
          
          {/* Then Card One */}
          <div className="w-full">
            <CardOne />
          </div>
          
          {/* Then Card Two */}
          <div className="w-full">
            <CardTwo />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Main;