export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Anakin",
  lastName: "Oreffo",
  age: 18,
  location: "RCCG, God's Hands",
};

const student2: Student = {
  firstName: "Obinna",
  lastName: "Obidaddy",
  age: 35,
  location: "Meca, Tomana",
};

const studentsList: Student[] = [student1, student2];

const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background: #f2f2f2;
    font-family: Arial, sans-serif;
  }
  table {
    border-collapse: collapse;
    width: 400px;
    margin-top: 20px;
  }
  thead {
    background: #f5f5f5;
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
  }
  td:first-child {
    text-align: center;
  }
  tbody tr:hover {
    background: #eaeaea;
  }
`;

export const displayStudents = (students: Student[]): void => {
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const headRow = document.createElement("tr");
  const tableBody = document.createElement("tbody");

  headRow.insertAdjacentHTML("beforeend", "<td>First Name</td>");
  headRow.insertAdjacentHTML("beforeend", "<td>Location</td>");
  tableHead.insertAdjacentElement("beforeend", headRow);

  for (const student of students) {
    const bodyRow = document.createElement("tr");
    bodyRow.insertAdjacentHTML("beforeend", `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML("beforeend", `<td>${student.location}</td>`);
    tableBody.insertAdjacentElement("beforeend", bodyRow);
  }

  table.insertAdjacentElement("beforeend", tableHead);
  table.insertAdjacentElement("beforeend", tableBody);

  document.body.innerHTML = "";
  document.body.appendChild(table);
};

displayStudents(studentsList);

const styleSheetElement = document.createElement("style");
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement("beforeend", styleSheetElement);
document.title = "Task 0";
