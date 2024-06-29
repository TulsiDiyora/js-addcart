let products = [
    {
      id: 1,
      imgSrc: './img/iphone.webp',
      title: "iPhone 15 Pro Max",
      price: 150000,
     
    },
    {
      id: 2,
      imgSrc: './img/boat.jpg',
      title: "Boat Airpod",
      price: 5000,
    
    },
    {
      id: 3,
      imgSrc: './img/boat2.png',
      title: "Rockerz 450 Pro",
      price: 15000,
     
    },
    {
      id: 4,
      imgSrc: './img/smartwatch.webp',
      title: "Boat Smart Watch",
      price: 44500,
     
    },
  ];

let row = document.getElementById("viewData");

let cardStorege = JSON.parse(localStorage.getItem("card")) || [];

let cartId = document.getElementById("cartId");

const updateCartCount = () => {
    let totalItems = cardStorege.reduce((sum, item) => sum + item.qty, 0);
    cartId.innerHTML = totalItems;
}

const displayData = () => {   
    row.innerHTML = '';

    products.forEach((ele) => {
        row.innerHTML += ` <div class="col-3">
                              <div class="card" style="width: 18rem;">
                                  <img src="${ele.imgSrc}" class="card-img-top p-0" alt="..." style =" height: 350px" >
                                  <div class="card-body">
                                  <h5 class="card-title">${ele.title}</h5>
                                  <p class="card-text">$${ele.price}</p>
                                  <a href="#" style="width: 100%;  padding: 8px; 5px" class="btn btn-primary" onclick="addData(${ele.id})">Add to cart</a>
                                  </div>
                               </div>
                          </div>`;
    });
}

displayData();

const addData = (id) => {
    let editData = products.find((d) => d.id === id);
    
    let exitData = cardStorege.find((item) => item.id === id);

    if (exitData) {
        exitData.qty += 1;
    } else {
        let updataRec = { ...editData, qty: 1 };
        cardStorege.push(updataRec);
    }

    updateCartCount();

    console.log("product", editData);
    console.log("cardStorege", cardStorege);

    localStorage.setItem("card", JSON.stringify(cardStorege));
}

// Initialize cart count on page load
updateCartCount();