// === Add to Cart functionality (for product pages) ===
document.addEventListener("DOMContentLoaded", function () {
  const addButtons = document.querySelectorAll(".add-btn");

  if (addButtons.length > 0) {
    addButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const card = btn.closest(".product-card");
        const imgSrc = card.querySelector("img").src;
        const name = card.querySelector("p").innerText;
        const qty = card.querySelector("small").innerText;
        const priceText = card.querySelector(".price").innerText;
        const price = parseInt(priceText.replace("₹", ""));

        const item = {
          img: imgSrc,
          name: name,
          qty: qty,
          price: price,
          count: 1,
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existing = cart.find((p) => p.name === item.name);
        if (existing) {
          existing.count += 1;
        } else {
          cart.push(item);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        showToast(`${item.name} added to cart!`);
      });
    });
  }

  // === Cart Page Display ===
  const cartContainer = document.getElementById("cart-items");
  if (cartContainer) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      cartContainer.innerHTML = "<p style='text-align:center;'>Your cart is empty.</p>";
    } else {
      cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
          <img src="${item.img}" class="cart-img" />
          <div>
            <h4>${item.name}</h4>
            <p>Qty: ${item.qty}</p>
            <p>Price: ₹${item.price}</p>
            <div class="qty-controls">
              <button class="decrease-btn" data-index="${index}">−</button>
              <span class="item-count">${item.count}</span>
              <button class="increase-btn" data-index="${index}">+</button>
            </div>
            <p>Total: ₹<span class="item-total">${item.price * item.count}</span></p>
            <button class="remove-btn" data-index="${index}">Remove</button>
             <button class="buy-one-btn" data-index="${index}">Buy Now</button>
          </div>
        `;
        cartContainer.appendChild(div);
      });

      updateGrandTotal();

      // Quantity −
      document.querySelectorAll(".decrease-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          const index = this.getAttribute("data-index");
          if (cart[index].count > 1) {
            cart[index].count -= 1;
            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload();
          }
        });
      });

      // Quantity +
      document.querySelectorAll(".increase-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          const index = this.getAttribute("data-index");
          cart[index].count += 1;
          localStorage.setItem("cart", JSON.stringify(cart));
          location.reload();
        });
      });

      // Remove buttons
      document.querySelectorAll(".remove-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          const index = this.getAttribute("data-index");
          cart.splice(index, 1);
          localStorage.setItem("cart", JSON.stringify(cart));
          location.reload();
        });
      });
      document.querySelectorAll(".buy-one-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const index = this.getAttribute("data-index");
    const orderedItem = cart[index];

    if (orderedItem) {
     // Save to orders
let orders = JSON.parse(localStorage.getItem("orders")) || [];
orders.push(orderedItem);
localStorage.setItem("orders", JSON.stringify(orders));

// Remove from cart
cart.splice(index, 1);
localStorage.setItem("cart", JSON.stringify(cart));
alert(`✅ Order placed for ${orderedItem.name}!`);
location.reload();

    }
  });
});

      
    }
  }
});

// === Grand Total Calculation ===
function updateGrandTotal() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);
  const totalContainer = document.getElementById("cart-total");
  if (totalContainer) {
    totalContainer.innerHTML = `<h3>Grand Total: ₹${total}</h3>`;
  }
}

// === Toast Message ===
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "cart-toast";
  toast.innerText = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2000);
}
