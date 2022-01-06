import { timeTableData } from './timeTableData'
import { useEffect } from 'react'

import { store } from 'react-notifications-component'

function currentClass() {
	const day = new Date().toLocaleString('en-us', { weekday: 'long' })
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

function TimeTable() {
	useEffect(() => {
		const classs = currentClass();
		if (classs)
			store.addNotification({
				title: "Current Class",
				message: `${currentClass()}`,
				type: "success",
				insert: "top",
				container: "top-right",
				animationIn: ["animate__animated", "animate__fadeIn"],
				animationOut: ["animate__animated", "animate__fadeOut"],
			});
		else
			store.addNotification({
				message: "No class for now",
				type: "info",
				insert: "top",
				container: "top-right",
				animationIn: ["animate__animated", "animate__fadeIn"],
				animationOut: ["animate__animated", "animate__fadeOut"],
				dismiss: {
					duration: 5000,
					onScreen: true
				}
			});
	}, [])

	return (
		<table>
			<thead>
				<tr>
					<th>Day</th>
					{/* <th>8 to 9 am</th> */}
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
						<tr key={`${index}-key`}>
							<td key={`${index}-day`}>{day}</td>
							{
								Object.keys(timeTableData[day]).map(function (schedule, idx) {
									if (timeTableData[day][schedule] == null) {
										return <td key={`${idx}-sch`}></td>
									} else {
										const course = timeTableData[day][schedule][0];
										var classname = ""
										if (course[0] === "L") classname = "l"
										if (course[0] === "T") classname = "t"
										if (course[0] === "P") classname = "p"
										if (course[4] === "4") classname = "a"
										return <td key={`${idx}-sch`} className={classname} colSpan={timeTableData[day][schedule][1]} > {timeTableData[day][schedule][0]}</td>
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