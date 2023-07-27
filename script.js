let myLibrary = [];

function createTable() {
  const tableContainer = document.getElementById("tableContainer");
  const table = document.createElement("table");
  table.innerHTML = `
    <tr>
      <th>Author</th>
      <th>Title</th>
      <th>Pages</th>
    </tr>
  `;

  myLibrary.forEach((data) => {
    const [author, title, pages] = data;
    const row = table.insertRow();
    const authorCell = row.insertCell();
    const titleCell = row.insertCell();
    const pagesCell = row.insertCell();

    authorCell.textContent = author;
    titleCell.textContent = title;
    pagesCell.textContent = pages;
  });

  tableContainer.innerHTML = ""; // Clear existing table, if any
  tableContainer.appendChild(table);
}

function storeFormData() {
  const author = document.getElementById("author").value;
  const title = document.getElementById("title").value;
  const pages = document.getElementById("pages").value;

  const formData = [author, title, pages];
  myLibrary.push(formData);

  console.log(formData);
  console.log(myLibrary);
  createTable();
}

function validateAndStoreForm() {
  if (validateForm()) {
    storeFormData();
    return false; // Prevent form submission
  } else {
    return false;
  }
}

function validateForm() {
  const author = document.getElementById("author").value;
  const title = document.getElementById("title").value;
  const pages = document.getElementById("pages").value;

  if (author === "" || title === "" || pages === "") {
    alert("Please fill in all the required fields.");
    return false;
  }
  return true;
}
