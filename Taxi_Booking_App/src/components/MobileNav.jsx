export default function MobileNav() {
    return (
        <div className="fixed bottom-3 left-3 right-3 bg-white shadow-2xl rounded-full p-3 flex justify-around md:hidden border border-gray-200">
            <button className="text-gray-700 font-semibold">🏠 Home</button>
            <button className="text-gray-700 font-semibold">📜 History</button>
            <button className="text-gray-700 font-semibold">🗺 Map</button>
            <button className="text-gray-700 font-semibold">👤 Profile</button>
        </div>
    );
}