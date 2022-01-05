import { timeTableData } from './timeTableData'
import createNotification from './Notification'

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
	setTimeout(() => {
		const classs = currentClass();
		if (classs)
			createNotification({
				title: "Current Class",
				message: `${currentClass()}`,
				type: "success",
				position: "top-right",
			})
		else
			createNotification({
				message: "No class for now",
				type: "info",
				position: "top-right",
			})

	}, 100)
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
			<tbody>
				{/* <tr className="d-1">
					<td>Monday</td>
					<td></td>
					<td className="l">L : CS 308</td>
					<td></td>
					<td></td>
					<td className="l">L : CS 304</td>
					<td className="lunch"></td>
					<td colSpan="3" className="p">P: CS 352</td>
					<td></td>
				</tr>
				<tr className="d-2">
					<td>Tuesday</td>
					<td></td>
					<td className="l">L : CS 308</td>
					<td className="l">L : CS 306</td>
					<td className="l">L : CS 302</td>
					<td></td>
					<td className="lunch"></td>
					<td className="l">L : ES 302</td>
					<td colSpan="3" className="p">P: CS 358</td>
				</tr>
				<tr className="d-3">
					<td>Wednesday</td>
					<td></td>
					<td className="t">T : CS 306</td>
					<td></td>
					<td></td>
					<td className="l">L : CS 304</td>
					<td className="lunch"></td>
					<td colSpan="3" className="p">P: CS 354</td>
					<td></td>
				</tr>
				<tr className="d-4">
					<td>Thursday</td>
					<td></td>
					<td></td>
					<td className="l">L : CS 306</td>
					<td className="l">L : CS 302</td>
					<td className="t">T : CS 304</td>
					<td className="lunch"></td>
					<td className="l">L:HS302</td>
					<td className="a">P : CS 425</td>
					<td></td>
					<td></td>
				</tr>
				<tr className="d-5">
					<td>Friday</td>
					<td></td>
					<td className="t">T : CS 308</td>
					<td></td>
					<td className="t">T : CS 302</td>
					<td></td>
					<td className="lunch"></td>
					<td colSpan="3" className="p">P: CS 356</td>
					<td></td>
				</tr>
				<tr className="d-6">
					<td>Saturday</td>
					<td></td>
					<td className=""></td>
					<td></td>
					<td></td>
					<td></td>
					<td className="lunch"></td>
					<td className="l">L : ES 302</td>
					<td colSpan="2" className="a">L : CS 425</td>
					<td></td>
				</tr> */}
			</tbody>
		</table>
	);
}

export default TimeTable;