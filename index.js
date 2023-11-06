const id = () => {
  return "id-" + Math.random();
};
let progress = [
  {
    title: "Todo",
  },
  {
    title: "in progress",
  },
  {
    title: "stuck",
  },
  {
    title: "done",
  },
];
let data = [
  {
    done: "done",
    title: "Todo",
    desc: "123",
    status: "inprogress",
    id: id(),
  },
  { id: id(), done: "done", title: "todo", desc: "123", status: "todo" },
];
function listItem(props) {
  let { title, desc, id } = props;
  return `<div class="cardElement flex">
    <div class=" doneBtn "><i class="gg-check"></i></div>
    <div class="detail flex directionColumn " >
    <h3>${title}</h3>
    <p>${desc}</p>
    </div>
    <button class="closeX" id="${id}">

    <i class="gg-close"></i>
    </button>

    </div
    `;
}

let body = document.querySelector("body");
let openModal = document.querySelector(".modal");
let addCardOpen = document.querySelectorAll("#addcard");
let closeBtn = document.getElementById("closeBtn");
let card = document.querySelectorAll(".card");

let cardElement = document.querySelector("cardElement");

const remove = (element) => {
  console.log(element.id);
  const newarry = data.filter((item) => item.id !== element.id);

  data = newarry;

  render(newarry);
};

for (const card of addCardOpen) {
  card.addEventListener("click", () => openModalTrigger());
}

function addTask() {
  let title = document.getElementById("title").value;
  let desc = document.getElementById("desc").value;
  let status = document.getElementById("status").value;
  data.push({ title, desc, status });
  render(data);
  closeModalTrigger();
}
closeBtn.onclick = addTask;

function render(array) {
  card.forEach((card) => (card.innerHTML = ""));

  array.map((e) => {
    if (e.status === "todo") card[0].innerHTML += listItem(e);
    if (e.status === "inprogress") card[1].innerHTML += listItem(e);
    if (e.status === "stuck") card[2].innerHTML += listItem(e);
    if (e.status === "done") card[3].innerHTML += listItem(e);
  });

  let closeX = document.querySelectorAll(".closeX");
  closeX.forEach((element) => {
    element.onclick = () => remove(element);
  });
}
render(data);
function openModalTrigger() {
  openModal.style.display = "flex";
}
function closeModalTrigger() {
  openModal.style.display = "none";
}
