import { FaRobot } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">
        <FaRobot className="text-blue-400 text-3xl" />

        <h1 className="text-2xl font-bold text-blue-400">
          AI Resume Analyzer
        </h1>
      </div>
    </nav>
  );
}

export default Navbar;