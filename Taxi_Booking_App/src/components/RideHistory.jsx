export default function RideHistory() {
    const rides = [
    { id: 1, pickup: "City Center", drop: "Airport", date: "2026-02-10" },
    { id: 2, pickup: "Mall", drop: "Station", date: "2026-02-11" },
    ];
    
    
    return (
    /*<div className="bg-white p-4 rounded-xl shadow-lg">*/
    <div className="bg-white/90 rounded-2xl shadow-xl p-5 border border-gray-100 backdrop-blur-sm">
    
    <h2 className="text-lg font-bold mb-3">Ride History</h2>
    <ul className="space-y-3">
    {rides.map((ride) => (
    <li key={ride.id} className="bg-gray-50 p-3 rounded-xl shadow-sm border border-gray-200">
    {/*<li key={ride.id} className="border p-2 rounded mb-2">*/}
    <p className="font-semibold">{ride.pickup} → {ride.drop}</p>
    <p className="text-sm text-gray-500"> ({ride.date})</p>
    </li>
    ))}
    </ul>
    </div>
    );
    }