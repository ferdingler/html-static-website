let i = 0;

function fizzBuzz() {
  if (i % 2 === 0) {
    appendListItem("foo");
  } else {
    appendListItem("bar");
  }

  i += 1;
}

function appendListItem(content) {
  const item = document.createElement("li");
  item.innerHTML = content;

  const list = document.getElementById("fooBarList");
  list.appendChild(item);
}
