import { useEffect, useRef,useState } from "react";


export default function BookingForm() {
    const [pickup, setPickup] = useState("");
    const [drop, setDrop] = useState("");
    const [errors, setErrors] = useState({ pickup: "", drop: "" });

    const pickupRef = useRef(null);
    const dropRef = useRef(null);

    // VALIDATION FUNCTION
const validateFields = () => {
    let valid = true;
    let newErrors = { pickup: "", drop: "" };
    
    if (!pickup.trim() && !drop.trim())  {
        newErrors.pickup = "Pickup and Drop location is required";
        alert(newErrors.pickup);
        valid = false;
        }
    
    else if (!pickup.trim()) {
    newErrors.pickup = "Pickup location is required";
    alert(newErrors.pickup);
    valid = false;
    }
    else if (!drop.trim()) {
    newErrors.drop = "Drop location is required";
    alert(newErrors.drop);
    valid = false;
    }
    if (pickup.trim() && drop.trim() && pickup.trim() === drop.trim()) {
    newErrors.drop = "Pickup and drop cannot be the same";
    alert(newErrors.drop);
    valid = false;
    }
    
    
    setErrors(newErrors);
    return valid;
    };
/*
    useEffect(() => {
        if (window.google) {
        const pickupAutocomplete = new window.google.maps.places.Autocomplete(
        pickupRef.current
        );
        const dropAutocomplete = new window.google.maps.places.Autocomplete(
        dropRef.current
        );
        
        
        pickupAutocomplete.addListener("place_changed", () => {
        const place = pickupAutocomplete.getPlace();
        setPickup(place.formatted_address || "");
        });
        
        
        dropAutocomplete.addListener("place_changed", () => {
        const place = dropAutocomplete.getPlace();
        setDrop(place.formatted_address || "");
        });
        }
        }, []);
*/
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateFields()) return;
        alert(`Ride booked from ${pickup} to ${drop}`);
    };


    return (
        /*<div className="bg-white p-4 rounded-xl shadow-lg">*/
        <div className="bg-white/90 rounded-2xl shadow-xl p-5 border border-gray-100 backdrop-blur-sm">
            <h2 className="text-lg font-bold mb-3">Book a Ride</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    ref={pickupRef}
                    type="text"
                    placeholder="Pickup Location"
                    /*className="w-full p-2 border rounded"
                    className="w-full p-3 border rounded-lg text-base"*/
                    className="w-full p-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                />


                <input
                    type="text"
                    ref={dropRef}
                    placeholder="Drop Location"
                    /*className="w-full p-2 border rounded"
                    className="w-full p-3 border rounded-lg text-base"*/
                    className="w-full p-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    value={drop}
                    onChange={(e) => setDrop(e.target.value)}
                />


                {/*<button className="fixed bottom-4 right-4 bg-yellow-500 text-black p-4 rounded-full shadow-xl md:hidden">
                    className="bg-yellow-500 w-full p-2 rounded font-bold">*/}
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 transition text-black p-3 rounded-xl font-bold shadow-md">
                    Book Ride  
                </button>
            </form>
        </div>
    );
}