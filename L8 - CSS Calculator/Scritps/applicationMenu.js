const openMenu = () => {
  console.log("Menu otwarte!");
  menuContainer.style.display = "block";
};

const closeMenu = () => {
  console.log("Menu zamknięte!");
  menuContainer.style.display = "none";
};

menu.addEventListener("click", () => {
  openMenu();
});

menuClose.addEventListener("click", () => {
  closeMenu();
});

// Pobierz wszystkie przyciski o klasie 'buy-button'
const buyButtons = document.querySelectorAll(".buy-button");

const cartMessage = document.getElementById("cart-message");

buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.parentElement.querySelector("h1").innerText; //nazwa produktu bierze sie z h1

    // Ustaw tekst wiadomości
    cartMessage.innerText = `Produkt ${productName} został dodany do koszyka.`;
    cartMessage.style.display = "block";

    // Ukryj wiadomość po 3 sekundach
    setTimeout(() => {
      cartMessage.style.display = "none";
    }, 3000);
  });
});
