import { store } from 'react-notifications-component';

export default function createNotification({ title, message, type, position, time, delay }) {
	if (delay) {
		setTimeout(() => {
			store.addNotification({
				title: title,
				message: message,
				type: type || "success",
				insert: "top",
				container: position || "top-right",
				animationIn: ["animate__animated", "animate__fadeIn"],
				animationOut: ["animate__animated", "animate__fadeOut"],
				// dismiss: {
				//     duration: time || 2000,
				//     pauseOnHover: true,
				//     onScreen: true
				// }

			});
		}, delay)
	}
	else {
		store.addNotification({
			title: title,
			message: message,
			type: type || "success",
			insert: "top",
			container: position || "top-right",
			animationIn: ["animate__animated", "animate__fadeIn"],
			animationOut: ["animate__animated", "animate__fadeOut"],
			dismiss: {
				duration: time || 2000,
				pauseOnHover: true,
				onScreen: true
			}

		});
	}

}
