const root = $("#root");

const Card = ({
  id,
  title,
  color,
  description,
  image,
  size,
  price
}) => `<div class="p-2 m-0 col-12 col-sm-6 col-md-4 col-lg-3 " >
    <div class="card bg-dark text-light" style="height: 60vh; border:1px solid white flex-direction-colmun">
        <img src="${image}" class="card-img-top" alt="${image}">
        <div class="card-body">
        <div style="height:30%;">
        <h4 class="card-title text-center">${title}</h4>
        </div>
         
            <div style="position: absolute; bottom: 1px; width:90%;height:20%; ">
            <div class=" d-flex  justify-content-between"  ">
            <p class="card-text">${size}</p>
            <p class="card-text">سایز</p>
            </div>
            <div class=" d-flex  justify-content-between"  ">
            <p class="card-text">${color}</p>
            <p class="card-text">رنگ</p>
            </div>
            <div class=" d-flex  justify-content-between" style=" color:orang;">
            <a href="/shopping/${id}" class="btn btn-primary">خرید</a>
            <p class="card-text" style='color:green'>${price}</p>
            <p class="card-text">قیمت</p>
            </div>
            </div>
        </div>
    </div>
</div>`;

function render(data) {
  let html = "";
  for (const shoes of data) {
    html += Card(shoes);
  }
  $(root).html(html);
}

function responseHandler(response) {
  render(response);
}

function errorHandler() {
  alert("Internal server error.");
}

function fetchShoes() {
  $.ajax({
    type: "GET",
    url: "/shoes",
    success: responseHandler,
    error: errorHandler,
  });
}

fetchShoes();




{/*    <div class="mt-3 d-flex  justify-content-between  flex-direction-column" style="height:30%;">
  <p class="card-text ">${description}</p>
</br>
<p class="card-text m-1">ویژگی</p>
</div> */}