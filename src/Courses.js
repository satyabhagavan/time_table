import { coursesData } from './coursesData'

function Courses({ onGoingClass }) {
	return (
		<table id="courses">
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
	);
}

export default Courses;