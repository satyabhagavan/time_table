import { coursesData } from './coursesData'

function Courses({ onGoingClass }) {
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
						Object.keys(coursesData).map(function (courseCode, index) {
						})
					}
					<tr>
						<td>CS 302</td>
						<td>Computer Graphics and Visualization</td>
						<td>Dr. Somnath Dey </td>
					</tr>
					<tr>
						<td>CS 304</td>
						<td>Computer Intelligence</td>
						<td>Dr. Aruna Tiwari</td>
					</tr>
					<tr>
						<td>CS 306</td>
						<td>Computer Networks</td>
						<td>Dr. Ayan Mundal</td>
					</tr>
					<tr>
						<td>CS 308</td>
						<td>Compiler Techniques</td>
						<td>Dr. Nagendra Kumar</td>
					</tr>
					<tr>
						<td>CS 352</td>
						<td>Computer Graphics and Visualization Lab</td>
						<td>Dr. Somnath Dey </td>
					</tr>
					<tr>
						<td>CS 354</td>
						<td>Computer Intelligence Lab</td>
						<td>Dr. Aruna Tiwari</td>
					</tr>
					<tr>
						<td>CS 356</td>
						<td>Computer Networks Lab</td>
						<td>Dr. Ayan Mundal</td>
					</tr>
					<tr>
						<td>CS 358</td>
						<td>Compiler Techniques Lab</td>
						<td>Dr. Nagendra Kumar</td>
					</tr>
					<tr>
						<td>HS 302</td>
						<td>Environmental Studies: Social Aspects</td>
						<td>Dr. Neeraj Mishra</td>
					</tr>
					<tr>
						<td>ES 302</td>
						<td>Environmental Studies: Scientific and Engineering Aspects</td>
						<td>Dr. Ashootosh Sakharam Mandpe</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Courses;