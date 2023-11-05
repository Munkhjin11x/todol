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
  function createcards(progress) {
    let { title } = progress;
    return `<div>
    <h1>${title}</h1>
     <div class="card"></div>
    <button id ="addcard">+addcard</button> 
    </div>`;
  }
  
  function listItem(props) {
    let { title, desc } = props;
    return `<div>
    <h3>${title}</h3>
    <p>${desc}</p>
    </div
    `;
  }
  
  let body = document.querySelector("body");
  let container = document.querySelector(".container");
  let cards = document.querySelector(".cards");
  let openModal = document.querySelector('.openContainer');
  let addCardOpen = document.getElementById("addcardsnu");
  let inputTitle = document.getElementById('InpTitle')

  console.log(addCardOpen);
  function openmodal() {
    return `
    <div class="openmodal">
    <h2>Add task</h2>
    <h3>Title</h3>
    <input type="" id = "InpTitle">
    <h3>description</h3>
    <input type="" id="InpDesc">
    <h3>status</h3>
    <select id="status">
  <option value="todo">todo</option>
  <option value="inprogress">inprogress</option>
  <option value="stuck">stuck</option>
  <option value="done">done</option>
     </select>
     <p>priority</p>
     <select id="priority">
     <option value="high">high</option>
     <option value="low">low</option>
        </select>
        <button id ='closeBtn'>Addcard</button>
    </div>`
   
  }  
  let data = [
    {
      title: "Todo",
      desc: "123",
      status: "done"
    },
    {
      title: "Todo",
      desc: "123",
      status: "inprogress"
    },
    {
      title: "Todo",
      desc: "123",
      status: "stuck"
    },
    {
      title: "todo",
      desc: "123",
      status: "todo"
  
    },
  ];
  progress.map((a) => {
    cards.innerHTML += createcards(a);
  });

  
  data.map((e) => {
    let card = document.querySelectorAll('.card');
    if(e.status === "todo") {
      card[0].innerHTML += listItem(e);
    } else if(e.status === "inprogress"){
      card[1].innerHTML += listItem(e);
    }
    else if(e.status === "stuck"){
      card[2].innerHTML += listItem(e);
    }
    else if(e.status === "done"){
      card[3].innerHTML += listItem(e);
    }
  });
  openModal.innerHTML += openmodal()
  addCardOpen.addEventListener("click", () => (openModal.style.display ='flex'))