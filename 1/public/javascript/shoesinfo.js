const root = $("#root");

function responseHandler(response) {
  let html = "<h1>سبد خرید</h1>";
  for (const key in response) {
    const value = response[key];
    html +=
      key === "image"
        ? `<img class="text-center col-lg-6 col-md-7 col-sm-9 col-12" src="${value}" />`
        : `<p class="col-12 "><span>${value}</span><p>`;
  }
  $(root).html(html);
}

function errorHandler(error) {
  if (!error.responseJSON?.error) {
    return html="<h1 >سبد خالیست</h1>";
  }
}

function sendrequest(id) {
  $.ajax({
    type: "GET",
    url: `/shoes/${id}`,
    success: responseHandler,
    error: errorHandler,
  });
}

(function () {
  let id = window.location.href.replace(
    /^http(s?):\/\/(\w+(:\d+)\/shopping\/)/g,
    ""
  );
  sendrequest(id);
})();
