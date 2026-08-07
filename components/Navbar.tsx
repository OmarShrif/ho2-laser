export default function Navbar() {
    return (
        <nav className="bg-slate-900 text-white px-8 py-5 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-yellow-400">
                HO2 Laser
            </h1>

            <ul className="flex gap-8">
                <li className="hover:text-yellow-400 cursor-pointer">Home</li>
                <li className="hover:text-yellow-400 cursor-pointer">About</li>
                <li className="hover:text-yellow-400 cursor-pointer">Services</li>
                <li className="hover:text-yellow-400 cursor-pointer">Portfolio</li>
                <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
            </ul>
        </nav>
    );
}