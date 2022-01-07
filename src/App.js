import Links from './Links'
import TimeTable from './TimeTable'
import Courses from './Courses'
import { timeTableData } from './timeTableData'
import { courseLinks } from './courseLinks'

import { useEffect, useState } from 'react'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component'

function currentClass(day) {
	if (day === "Sunday") return ""
	const time = new Date().getHours()
	if (time < 9 || time > 17) return ""
	const data = timeTableData[day];
	for (var i in data) {
		if (data[i]) {
			if ((parseInt(i) <= time) && (time <= (parseInt(i) + data[i][1] - 1))) return data[i][0]
		}
	}
	return ""
}

function App() {
	const viewport = document.querySelector('meta[name="viewport"]');

	if (viewport) {
		viewport.content = 'initial-scale=1';
		viewport.content = 'width=device-width';
	}

	const today = new Date().toLocaleString('en-us', { weekday: 'long' })
	const [onGoingClass, setOnGoingClass] = useState(null)

	const joinClass = () => {
		const curr = currentClass(today)
		if (curr) {
			window.open(courseLinks[curr].classLink)
		}
	}

	const openStudyMaterial = () => {
		const curr = currentClass(today)
		if (curr) {
			window.open(courseLinks[curr].materialLink)
		}
	}

	useEffect(() => {
		const classs = currentClass(today);
		if (classs) {
			setOnGoingClass(classs)
			store.addNotification({
				message: "click to join class",
				type: "warning",
				insert: "top",
				container: "top-right",
				onRemoval: () => joinClass()
			})
			store.addNotification({
				message: "click to open study material",
				type: "info",
				insert: "top",
				container: "top-right",
				onRemoval: () => openStudyMaterial()
			})
			store.addNotification({
				title: "Ongoing Class",
				message: `${classs}`,
				type: "success",
				insert: "top",
				container: "top-right",
			});
		}
		else
			store.addNotification({
				message: "No class for now",
				type: "info",
				insert: "top",
				container: "top-right",
			});
	}, [])

	return (
		<div id='app'>
			<ReactNotification />
			<div id="content">
				<Links />
				<TimeTable today={today} onGoingClass={onGoingClass} />
				<Courses onGoingClass={onGoingClass} />
			</div>
		</div>
	);

}

export default App