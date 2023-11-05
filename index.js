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
      title: "Todo",
      desc: "123",
      status: "inprogress"
    },
    {
      title: "todo",
      desc: "123",
      status: "todo"
  
    },
  ];
  function listItem(props) {
    let { title, desc } = props;
    return `<div>
    <h3>${title}</h3>
    <p>${desc}</p>
    </div
    `;
  }
  
  let body = document.querySelector("body");
  let openModal = document.querySelector('.modal');
  let addCardOpen = document.querySelectorAll("#addcard");
  let closeBtn =document.getElementById('closeBtn');
  let card = document.querySelectorAll(".card");
      
  for (const card of addCardOpen ){
    card.addEventListener('click', ()=>
    openModalTrigger() 
    )  
  }

  function addTask() {
    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;
    let status = document.getElementById('status').value;
    data.push({title,desc,status})
    render()
    closeModalTrigger();
  }  
  closeBtn.onclick = addTask;
  function render() {
    card.forEach(card =>  card.innerHTML = "");
 
  data.map((e) => {
  if (e.status === 'todo') card[0].innerHTML += listItem(e);
  if (e.status === 'inprogress') card[1].innerHTML += listItem(e);
  if (e.status === 'stuck') card[2].innerHTML += listItem(e);
  if (e.status === 'done') card[3].innerHTML += listItem(e);}
  )};
  render()
  function openModalTrigger() {
    openModal.style.display ='flex'
  };
  function closeModalTrigger() {
    openModal.style.display ='none'
  };
