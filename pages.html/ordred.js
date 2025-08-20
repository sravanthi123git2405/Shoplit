 document.addEventListener("DOMContentLoaded", function () {
      const orders = JSON.parse(localStorage.getItem("orders")) || [];
      const container = document.getElementById("ordered-list");

      if (orders.length === 0) {
        container.innerHTML = "<p style='text-align:center;'>You haven't ordered anything yet.</p>";
        return;
      }

      orders.forEach((item) => {
        const div = document.createElement("div");
        div.className = "ordered-item";
        div.innerHTML = `
          <img src="${item.img}" class="ordered-img" />
          <div>
            <h4>${item.name}</h4>
            <p>Qty: ${item.qty}</p>
            <p>Price: ₹${item.price}</p>
            <p>Items Ordered: ${item.count}</p>
          </div>
        `;
        container.appendChild(div);
      });
    });