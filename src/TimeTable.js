import { timeTableData } from './timeTableData'
import { useEffect, useState } from 'react'

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

function TimeTable() {
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
		<table>
			<thead>
				<tr>
					<th>Day</th>
					<th>8 to 9 am</th>
					<th>9 to 10 am</th>
					<th>10 to 11 am</th>
					<th>11 to 12 pm</th>
					<th>12 to 1 pm</th>
					<th>1 to 2 pm</th>
					<th>2 to 3 pm</th>
					<th>3 to 4 pm</th>
					<th>4 to 5pm</th>
					<th>5 to 6 pm</th>
				</tr>
			</thead>
			<tbody>
				{Object.keys(timeTableData).map(function (day, index) {
					return (
						<tr key={`${day}-key`} className={today === day ? "today" : ""}>
							<td key={`${index}-day`}>{day}</td>
							{
								Object.keys(timeTableData[day]).map(function (schedule, idx) {
									if (timeTableData[day][schedule] == null) {
										return <td key={`${idx}-sch`}></td>
									} else {
										const course = timeTableData[day][schedule][0];
										var classColor = ""
										if (course[0] === "L") classColor = "l"
										if (course[0] === "T") classColor = "t"
										if (course[0] === "P") classColor = "p"
										if (course[4] === "4") classColor = "a"
										return <td key={`${idx}-sch`} className={classColor} colSpan={timeTableData[day][schedule][1]}>
											<span className={course === onGoingClass && day === today ? "ongoing" : ""}>
												{timeTableData[day][schedule][0]}
											</span>
										</td>
									}
								})
							}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default TimeTable;