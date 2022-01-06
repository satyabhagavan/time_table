import { coursesData } from './coursesData'

function Courses({ onGoingClass }) {
	console.log(onGoingClass)
	return (
		<div className="courses">
			<table>
				<thead>
					<tr>
						<th>Course Code</th>
						<th>Course Name</th>
						<th>Instructor</th>
					</tr>
				</thead>
				<tbody>
					{
						Object.keys(coursesData).map(function (course, index) {
							var currentClass = null;
							if (onGoingClass) currentClass = onGoingClass.split(":")[1]
							return (
								<tr key={`${course}-key`} className={currentClass === course ? "today ongoing" : ""}>
									<td>{course}</td>
									<td>{coursesData[course]["Name"]}</td>
									<td>{coursesData[course]["Instructor"]}</td>
								</tr>
							);
						})
					}
				</tbody>
			</table>
		</div>
	);
}

export default Courses;