

const products = [
    {
      id: "fc-1888",
      name: "Iphone 15",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "MacBook Air",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "Airpods",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "Apple Watch",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "Airtag",
      averagerating: 5.0
    }
  ];

products.forEach(product => {
  let productHTML = document.createElement("option");
  productHTML.setAttribute("value", `${product.name}`);
  productHTML.innerHTML = product.name;
  document.getElementById("prodName").appendChild(productHTML);
});

let numberReviews = Number(window.localStorage.getItem("numberReviews-ls"));
numberReviews.textContent = `Number of reviews submitted: ${numberReviews}`;

numberReviews++;
localStorage.setItem("numberReviews-ls", numberReviews);