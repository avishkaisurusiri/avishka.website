const welcomeBtn = document.getElementById("welcomeBtn") as HTMLButtonElement | null;

if (welcomeBtn) {
  welcomeBtn.addEventListener("click", () => {
    alert("Welcome to my TypeScript website!");
  });
}