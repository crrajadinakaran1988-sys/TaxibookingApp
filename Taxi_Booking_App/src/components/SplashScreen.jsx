import { useEffect, useState } from "react";


export default function SplashScreen() {
const [fadeOut, setFadeOut] = useState(false);


useEffect(() => {
const timer = setTimeout(() => setFadeOut(true), 2000);
return () => clearTimeout(timer);
}, []);


return (
<div
className={`fixed inset-0 flex items-center justify-center bg-yellow-500 z-50 transition-opacity duration-700 ${
fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
}`}
>
<h1 className="text-4xl font-extrabold text-black tracking-wide animate-pulse">
🚖 TaxiGo
</h1>
</div>
);
}