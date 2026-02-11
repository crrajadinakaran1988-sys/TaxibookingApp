import Navbar from "./components/Navbar";
import BookingForm from "./components/BookingForm";
import RideHistory from "./components/RideHistory";
import MapView from "./components/MapView";
import DriverTracking from "./components/DriverTracking";
import MobileNav from "./components/MobileNav";

function App() {
return (
<div className="min-h-screen bg-gray-100">
<Navbar />
<MobileNav />
{/*<div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">*/}
<div className="container mx-auto p-2 md:p-4 grid grid-cols-1 gap-4">
<BookingForm />
<MapView />
<RideHistory />
<DriverTracking />
</div>
</div>
);
}


export default App;