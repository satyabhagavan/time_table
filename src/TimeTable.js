function TimeTable() {
	return (
		<table>
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
			<tr class="d-1">
				<td>Monday</td>
				<td></td>
				<td class="l">L : CS 308</td>
				<td></td>
				<td></td>
				<td class="l">L : CS 304</td>
				<td class="lunch"></td>
				<td colspan="3" class="p">P: CS 352</td>
				<td></td>
			</tr>
			<tr class="d-2">
				<td>Tuesday</td>
				<td></td>
				<td class="l">L : CS 308</td>
				<td class="l">L : CS 306</td>
				<td class="l">L : CS 302</td>
				<td></td>
				<td class="lunch"></td>
				<td class="l">L : ES 302</td>
				<td colspan="3" class="p">P: CS 358</td>
			</tr>
			<tr class="d-3">
				<td>Wednesday</td>
				<td></td>
				<td class="t">T : CS 306</td>
				<td></td>
				<td></td>
				<td class="l">L : CS 304</td>
				<td class="lunch"></td>
				<td colspan="3" class="p">P: CS 354</td>
				<td></td>
			</tr>
			<tr class="d-4">
				<td>Thursday</td>
				<td></td>
				<td></td>
				<td class="l">L : CS 306</td>
				<td class="l">L : CS 302</td>
				<td class="t">T : CS 304</td>
				<td class="lunch"></td>
				<td class="l">L:HS302</td>
				<td class="a">P : CS 425</td>
				<td></td>
				<td></td>
			</tr>
			<tr class="d-5">
				<td>Friday</td>
				<td></td>
				<td class="t">T : CS 308</td>
				<td></td>
				<td class="t">T : CS 302</td>
				<td></td>
				<td class="lunch"></td>
				<td colspan="3" class="p">P: CS 356</td>
				<td></td>
			</tr>
			<tr class="d-6">
				<td>Saturday</td>
				<td></td>
				<td class=""></td>
				<td></td>
				<td></td>
				<td></td>
				<td class="lunch"></td>
				<td class="l">L : ES 302</td>
				<td colspan="2" class="a">L : CS 425</td>
				<td></td>
			</tr>
		</table>
	);
}

export default TimeTable;