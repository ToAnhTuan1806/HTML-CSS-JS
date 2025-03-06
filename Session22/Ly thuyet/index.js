let students = ["tat", "aat", "tta", "ata"];
console.log(students)

let randomArr = [1, "World hello" , true, false, []];
console.log(randomArr);

students[0];
console.log(`moi di ve`);

// for(let i=0; i<student.length; i=i+1) {
//     console.log(student[i]);
// }

// for(let i >=0; i<student.length-1; i=i+1) {
//     console.log(student[i]);
// }

// for(let student of students) {
//     console.log(student)
// }

// for(let index in students) {
//     console.log(index);
// }

// Create
// Them dau
students.unshift("NVA");
console.log(students);
// Them cuoi
students.push("NVB");
console.log(students);
// Them giua
students.splice(1, 0, "NVC");
console.log(students);

// Update
students[6] = "NPC"
console.log(students)

// Delete
students.shift();
console.log(students)

students.pop();
console.log(students);

students.splice(0, 1);
console.log(students);
