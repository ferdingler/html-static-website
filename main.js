let i = 0;

function fizzBuzz() {
  if (i % 2 === 0) {
    appendListItem("Foo");
    appendListItem("fernando");
  } else {
    appendListItem("Bar");
    appendListItem("dingler");
  }

  i += 1;
}

function appendListItem(content) {
  const item = document.createElement("li");
  item.innerHTML = content;

  const list = document.getElementById("fooBarList");
  list.appendChild(item);
}
