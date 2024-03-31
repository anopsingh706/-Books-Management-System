function showpopup() {
  document.querySelector(".overlay").classList.add("showoverlay");
  document.querySelector(".popup_form").classList.add("showpopup");
}

function cancle() {
  document.querySelector(".overlay").classList.remove("showoverlay");
  document.querySelector(".popup_form").classList.remove("showpopup");
}

function show_books() {
  document.querySelector(".overlay").classList.add("showoverlay");
  document.querySelector(".table").classList.add("show_books");
}

let library = [];

function addbook(event) {
  let x = document.getElementById("bookname").value;
  let y = document.getElementById("authorname").value;

  if ((x == "" && y == "") || x == "" || y == "") {
    event.priventDefault;
  }

  const book = {
    bookname: x,
    author: y,
  };
  //alert("submit successfully")

  //JSON: becouse we can not set multiple data into localstorage so json help us here.json convert the data into a string
  //and store the data when we fatch data it needs to be converted into orignal object form string

  // console.log(JSON.parse(localStorage.getItem("bookdetail")))
  // console.log( JSON.parse(localStorage.getItem("bookdetail")))

  var library = JSON.parse(localStorage.getItem("bookdetail")) ?? [];
  library.push(book);

  localStorage.setItem("bookdetail", JSON.stringify(library));
  //console.log(library);
}

function close_span() {
  location.reload();
}

function add_data() {
  let x = document.getElementById("bookname").value;
  let y = document.getElementById("authorname").value;

  const book = {
    bookname: x,
    author: y,
  };

  //console.log("hellow")
  library = JSON.parse(localStorage.getItem("bookdetail"));
  //console.log(library.length);

  i = 0;
  for (let k = 0; k < library.length; k++) {
    // console.log(library[k].bookname);

    let newrow = document.createElement("tr");

    var sr_cell = document.createElement("td");
    let bookname_cell = document.createElement("td");
    let author_cell = document.createElement("td");

    let span_2 = document.createElement("span");

    //i = localStorage.getItem("sr")
    //  console.log(i);

    sr_cell.textContent = ++i;
    bookname_cell.textContent = library[k].bookname;
    author_cell.textContent = library[k].author;

    span_2.innerHTML = "&times;";
    span_2.className = "remove_book_span";

    //console.log(span_2.className)

    newrow.appendChild(sr_cell);
    newrow.appendChild(bookname_cell);
    newrow.appendChild(author_cell);

    author_cell.appendChild(span_2);

    //newrow.index= i;

    //console.log(newrow.index);

    let chair = document
      .querySelector("#table ")
      .getElementsByTagName("tbody")[0]
      .appendChild(newrow);
    // console.log(    newrow  );

    //let sr_set = localStorage.setItem("sr",i);
  }

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove_book_span")) {
      var row = event.target.closest("tr");

      //to get the index ofthe row to remove from local stoage
      var row_index = Array.from(row.parentNode.children).indexOf(row) - 1;
      console.log(row_index);

      row.remove();

      //update local storage

      var stored_data = JSON.parse(localStorage.getItem("bookdetail"));
      //remove the coresponding data from localstorage
      console.log(stored_data);
      stored_data.splice(row_index, 1);


      //update the local storage data
      localStorage.setItem("bookdetail", JSON.stringify(stored_data));
    }
  });
}
