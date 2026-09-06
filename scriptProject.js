const form = document.getElementById("loginForm");
const namaInput = document.getElementById("namaInput");
const passwordInput = document.getElementById("passwordInput");
const emailInput = document.getElementById("emailInput");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = namaInput.value.trim();
  const password = passwordInput.value;
  const email = emailInput.value.trim();

  
  if (name === "" || password === "" || email === "") {
    console.log("Semua field wajib diisi");
    return;
  }

  if (password.length < 8) {
    console.log("Password minimal 8 karakter");
    return;
  }

  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

  if (!hasLetter || !hasNumber || !hasSymbol) {
    console.log("Password harus mengandung minimal 1 huruf, 1 angka, dan 1 simbol");
    return;
  }


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log("Format email tidak valid (contoh: nama@domain.com)");
    return;
  }


  console.log("Nama:", name);
  console.log("Password:", password);
  console.log("Email:", email);
});