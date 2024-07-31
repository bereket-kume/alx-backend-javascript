interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentsList: Student[] = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 20,
        location: 'New York'
    },
    {
        firstName: 'Smith',
        lastName: 'Dan',
        age: 23,
        location: 'Abuja'
    }
];

function renderTable(students: Student[]) {
    const table = document.createElement('table');
    table.style.width = '100%';
    table.setAttribute('border', '1');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const nameHeader = document.createElement('th');
    nameHeader.textContent = 'First Name';
    const locationHeader = document.createElement('th');
    locationHeader.textContent = 'Location';
    headerRow.appendChild(nameHeader);
    headerRow.appendChild(locationHeader);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    students.forEach(student => {
        const row = document.createElement('tr');
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    document.body.appendChild(table);
}

renderTable(studentsList);
