function NavBar() {
  return (
    <nav className="w-full bg-[#002844] border-b border-gray-700 px-6 py-4 fixed top-0 z-50">
      <div className="max-w-xl flex flex-col sm:flex-row items-start lg:mx-20 justify-between gap-4">
        
        {/* Logo/Brand */}
        <div className="text-md lg:text-2xl font-bold">
          <span className="text-gray-300">CYRIL JED KYLE </span>
          <span className="text-red-600">ESTRELLADA</span>
        </div>
        
      </div>
    </nav>
  );
}

export default NavBar;