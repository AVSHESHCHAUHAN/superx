// Section switch
function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

/* ================= STUDENTS ================= */

function addStudent() {
  const name = document.getElementById("studentName").value;
  const email = document.getElementById("studentEmail").value;
  const id = document.getElementById("studentId").value;

  const table = document.getElementById("studentTable");

  const row = table.insertRow();

  row.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${id}</td>
    <td>
      <button onclick="deleteRow(this)" class="delete">Delete</button>
    </td>
  `;
}

function deleteRow(btn) {
  btn.parentElement.parentElement.remove();
}

/* ================= SUBJECTS ================= */

function addSubject() {
  const code = document.getElementById("subCode").value;
  const name = document.getElementById("subName").value;

  const table = document.getElementById("subjectTable");

  const row = table.insertRow();

  row.innerHTML = `
    <td>${code}</td>
    <td>${name}</td>
    <td>
      <button onclick="deleteRow(this)" class="delete">Delete</button>
    </td>
  `;
}

/* ================= MARKS ================= */

function addMarks() {
  const id = document.getElementById("markStudentId").value;
  const subject = document.getElementById("markSubject").value;
  const marks = document.getElementById("markValue").value;

  const table = document.getElementById("marksTable");

  const row = table.insertRow();

  row.innerHTML = `
    <td>${id}</td>
    <td>${subject}</td>
    <td>${marks}</td>
    <td>
      <button onclick="deleteRow(this)" class="delete">Delete</button>
    </td>
  `;
}
/*--------------------admin-login-------------*/
async function adminLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const res = await fetch("https://superx-production-2b1d.up.railway.app/admin-login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();

  if (data.success) {
    localStorage.setItem("admin", true);
    window.location.href = "admin-dashboard.html";
  } else {
    document.getElementById("error").innerText = "Invalid Credentials";
  }
}
