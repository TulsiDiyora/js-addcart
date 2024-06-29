let tbody = document.getElementById("tbody");
let cardStorege = JSON.parse(localStorage.getItem("card")) || [];
let cartId = document.getElementById("cartId");
cartId.innerHTML = cardStorege.length;

console.log("cardStorege", cardStorege);



const removeData = (id) => {

    let exitData = cardStorege.find((item) => item.id === id);
    

    if(exitData.qty > 1){
        
       let updataRec = exitData.qty - 1;
       exitData.qty = updataRec;

    console.log("updataRec", updataRec);
       localStorage.setItem("card", JSON.stringify(cardStorege));
    }
    else{
        console.log("min qty 1");
    }
    
    JSON.parse(localStorage.getItem("exitData"));
    getData();
} 

const edit = (id ) => {

    let exitData = cardStorege.find((item) => item.id === id);

    exitData.qty += 1;

    console.log("exitData", exitData);
    localStorage.setItem("card", JSON.stringify(cardStorege));
    getData();
}

const deleteData = (id) => {
    let data = [...cardStorege];
    
    let deleteData = cardStorege.filter((d) => {
        return d.id != id;
    });

    console.log("deleteData", deleteData);
    cardStorege = deleteData;

    console.log("Data", data);

    localStorage.setItem("card", JSON.stringify(cardStorege));

    getData();
   
}

let getData = () => {

    tbody.innerHTML = '';

    let totalPrice = 0;

  if(cardStorege.length == 0){
        tbody.innerHTML ="<img src= ./img/data.avif width = 800 style = 'margin-left: 20%'></img>" 
    }

    else{
       cardStorege.forEach((ele) => {
        let price = parseFloat(ele.price) * ele.qty;
            totalPrice += price;

        tbody.innerHTML += ` <tr class="align-middle ">
                                <th scope="row">${ele.id}</th>
                                <td><img src = "${ele.imgSrc}" width = "80"></td>
                                <td>${ele.title}</td>
                                <td>$${ele.price}</td>
                                <td><button onclick="removeData(${ele.id})">-</button><span> ${ele.qty} </span><button onclick="edit(${ele.id})">+</button><span></td>
                                <td><button class="btn btn-danger " onclick="return deleteData(${ele.id})" ><i class="bi bi-trash3"></i></button></td>
                            </tr>`
    });
    tbody.innerHTML += `<tr >
            <th colspan = "3">Total Price : </th>
            <th style="vertical-align:middle">$${totalPrice}</th>
              <td></td>
              <td></td>
        </tr>`;
    }

}
getData();

