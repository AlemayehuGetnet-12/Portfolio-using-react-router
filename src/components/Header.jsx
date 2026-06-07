import Navbar from "./Navbar";
function Header({ darkMode, setDarkMode }) {
  const today = new Date();
  return (
    <header className="header">
      <h4 className="h4"> Today is {today.toDateString()} 
         at {today.toLocaleTimeString()} !!</h4>
        < marquee  direction="right" scrollamount="10" >
    <h1 className="hi"> Well Come to See My portfolio!!! </h1> 
     </marquee>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </header>
  );
}

export default Header;