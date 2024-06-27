export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 w-full text-white h-16 bg-slate-800">
      <ul className="inline-flex items-center justify-around h-full w-full">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#department">DoMSC</a>
        </li>
        <li>
          <a href="#register">Register</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
