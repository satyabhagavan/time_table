import Links from './Links'
import TimeTable from './TimeTable'
import Courses from './Courses'
import { timeTableData } from './timeTableData'

import { useEffect, useState } from 'react'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component'

function currentClass(day) {
	if (day === "Sunday") return ""
	// const time = new Date().getHours()
	const time = 10
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
	const today = new Date().toLocaleString('en-us', { weekday: 'long' })
	const [onGoingClass, setOnGoingClass] = useState(null)

	useEffect(() => {
		const classs = currentClass(today);
		if (classs) {
			setOnGoingClass(classs)
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
		<>
			<ReactNotification />
			<Links />
			<TimeTable today={today} onGoingClass={onGoingClass} />
			<Courses />
		</>
	);

}

export default App