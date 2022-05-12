interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const Student1: Student = {
	firstName: "Tim",
	lastName: "Simms",
	age: 37,
	location: "Tulsa"
}

const Studnet2: Student = {
	firstName: "BetterTim",
	lastName: "Simms",
	age: 37,
	location: "BetterTulsa"
}


const studentsList: Array<Student> = [Student1, Studnet2];

const table = document.createElement('table');
studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstname = row.insertCell();
  const location = row.insertCell();
  firstname.innerHTML = student.firstName;
  location.innerHTML = student.location;
});

document.body.appendChild(table);
