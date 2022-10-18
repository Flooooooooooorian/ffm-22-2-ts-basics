var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function renameMutable(students, oldName, newName) {
    var foundStudent = students.find(function (student) { return student.name === oldName; });
    if (foundStudent) {
        foundStudent.name = newName;
    }
    return students;
}
function renameImmutable(students, oldName, newName) {
    return students.map(function (student) {
        if (student.name === oldName) {
            return __assign(__assign({}, student), { name: newName });
        }
        return student;
    });
}
var aStudent = {
    name: 'Paul',
    id: 'student#1'
};
var students = [
    aStudent,
    {
        name: 'Gwen',
        id: 'student#2'
    },
    {
        name: 'Lucy',
        id: 'student#3'
    },
];
// console.log(renameMutable(students, "Paul", "Tim"))
// console.log(aStudent)
// console.log(students)
// console.log(renameImmutable(students, "Paul", "Tim"))
// console.log(aStudent)
// console.log(students)
