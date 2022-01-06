import { courseLinks } from './courseLinks'
export const timeTableData = {
	"Monday": {
		// Time: [CourseCode, colSpan, Class Link, Material Link]
		8: null,
		9: ["L:CS308", 1, courseLinks["L:CS308"].classLink, courseLinks["L:CS308"].materialLink],
		10: null,
		11: null,
		12: ["L:CS304", 1, courseLinks["L:CS304"].classLink, courseLinks["L:CS304"].materialLink],
		13: null,
		14: ["P:CS352", 3, courseLinks["P:CS352"].classLink, courseLinks["P:CS352"].materialLink],
	},
	"Tuesday": {
		8: null,
		9: ["L:CS308", 1, courseLinks["L:CS308"].classLink, courseLinks["L:CS308"].materialLink],
		10: ["L:CS306", 1, courseLinks["L:CS306"].classLink, courseLinks["L:CS306"].materialLink],
		11: ["L:CS302", 1, courseLinks["L:CS302"].classLink, courseLinks["L:CS302"].materialLink],
		12: null,
		13: null,
		14: ["L:ES302", 1, courseLinks["L:ES302"].classLink, courseLinks["L:ES302"].materialLink],
		15: ["P:CS358", 3, courseLinks["P:CS358"].classLink, courseLinks["P:CS358"].materialLink],
	},
	"Wednesday": { // Wednesday 
		8: null,
		9: ["T:CS306", 1, courseLinks["T:CS306"].classLink, courseLinks["T:CS306"].materialLink],
		10: null,
		11: null,
		12: ["L:CS304", 1, courseLinks["L:CS304"].classLink, courseLinks["L:CS304"].materialLink],
		13: null,
		14: ["P:CS354", 3, courseLinks["P:CS354"].classLink, courseLinks["P:CS354"].materialLink],
	},
	"Thursday": { // Thursday
		8: null,
		9: null,
		10: ["L:CS306", 1, courseLinks["L:CS306"].classLink, courseLinks["L:CS306"].materialLink],
		11: ["L:CS302", 1, courseLinks["L:CS302"].classLink, courseLinks["L:CS302"].materialLink],
		12: ["T:CS304", 1, courseLinks["T:CS304"].classLink, courseLinks["T:CS304"].materialLink],
		13: null,
		14: ["L:HS302", 1, courseLinks["L:HS302"].classLink, courseLinks["L:HS302"].materialLink],
		15: ["P:CS425", 1, courseLinks["P:CS425"].classLink, courseLinks["P:CS425"].materialLink]
	},
	"Friday": { // Friday 
		8: null,
		9: ["T:CS308", 1, courseLinks["T:CS308"].classLink, courseLinks["T:CS308"].materialLink],
		10: null,
		11: ["T:CS302", 1, courseLinks["T:CS302"].classLink, courseLinks["T:CS302"].materialLink],
		12: null,
		13: null,
		14: ["P:CS356", 3, courseLinks["P:CS356"].classLink, courseLinks["P:CS356"].materialLink]
	},
	"Saturday": { // Saturday
		8: null,
		9: null,
		10: null,
		11: null,
		12: null,
		13: null,
		14: ["L:ES302", 1, courseLinks["L:ES302"].classLink, courseLinks["L:ES302"].materialLink],
		15: ["L:CS425", 2, courseLinks["L:CS425"].classLink, courseLinks["L:CS425"].materialLink]
	},
}