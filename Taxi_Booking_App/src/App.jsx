import Navbar from "./components/Navbar";
import BookingForm from "./components/BookingForm";
import RideHistory from "./components/RideHistory";
import MapView from "./components/MapView";
import DriverTracking from "./components/DriverTracking";
import MobileNav from "./components/MobileNav";
import SplashScreen from "./components/SplashScreen";
import {useState, useEffect} from 'react';


function App() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            {loading && <SplashScreen />}
            {!loading && (
                <>
                    <Navbar />

                    {/*<div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">*/}
                    <div className="container mx-auto p-2 md:p-4 grid grid-cols-1 gap-4">
                        <BookingForm />
                        <MapView />
                        <RideHistory />
                        <DriverTracking />
                    </div>
                    <MobileNav />
                </>
            )}
        </div>
    );
}


export default App;