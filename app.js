let taskInput = document.getElementById("taskInput");
let tastkList = document.getElementById("taskList");

let user = []
load()

function addTask() {
  if(taskInput.value == ''){
    alert('Pleasr Write some task')
  }else{
     let object = {
    task: taskInput.value
  }
  user.push(object)
  localStorage.setItem('user', JSON.stringify(user))
  taskInput.value = ''
  load()
  }


}

 
function load (){
  tastkList.innerHTML = '';
  let data = JSON.parse(localStorage.getItem("user")) || [];

  for (let i = 0; i < data.length; i++) {
  tastkList.innerHTML += `<li><input type="text" value="${data[i].task}" disabled></li>`
}

 }

 