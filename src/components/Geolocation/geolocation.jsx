import React from "react";
import "../Geolocation/geolocation.css";

export const Geolocation = () => {
	return (
		<div className="geolocation">
			<div className="geolocation__container">
				<h2> Podes encontrarnos en : </h2>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.558725369872!2d-58.403630685088004!3d-34.5647265629424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe0dd52383dcb975b!2zMzTCsDMzJzUzLjAiUyA1OMKwMjQnMDUuMiJX!5e0!3m2!1ses-419!2sar!4v1666112110441!5m2!1ses-419!2sar"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	);
};

export default Geolocation;

// import React from 'react';
// import { useEffect, useState } from 'react';
// import '../Geolocation/geolocation.css';

// const Geolocation = () => {
//     const [location, setLocation] = useState({});

//     useEffect(() => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition((position) => {
//                 setLocation({
//                     latitude: position.coords.latitude,
//                     longitude: position.coords.longitude,
//                 });
//             });
//         } else {
//             console.log('Geolocation is not supported by this browser.');
//         }
//     }, []);

//     return (
//         <div className="geolocation">
//             <h1>Geolocation</h1>
//             <p>Latitude: {location.latitude}</p>
//             <p>Longitude: {location.longitude}</p>
//         </div>
//     );
// };

// export default Geolocation;
