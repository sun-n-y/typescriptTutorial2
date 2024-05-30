//select elements

const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLFormElement>('.form-input');
const list = document.querySelector<HTMLUListElement>('.list');

//shape of data
type Task = {
  description: string;
  isCompleted: boolean;
};

//store tasks
const tasks: Task[] = loadTasks();

tasks.forEach((task) => renderTask(task));

//event listeners
taskForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskDescription = formInput?.value;
  if (taskDescription) {
    const task: Task = { description: taskDescription, isCompleted: false };
    //
    addTask(task);
    //
    renderTask(task);
    //
    updateStorage();
    //
    formInput.value = '';
    return;
  }
  alert('enter task ');
});

//functions
function addTask(task: Task): void {
  tasks.push(task);
  console.log(tasks);
}

function renderTask(task: Task): void {
  const taskElement = document.createElement('li');
  taskElement.textContent = task.description;

  const taskCheckBox = document.createElement('input');
  taskCheckBox.type = 'checkbox';
  taskCheckBox.checked = task.isCompleted;
  taskElement.appendChild(taskCheckBox);

  taskCheckBox.addEventListener('change', () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });

  list?.appendChild(taskElement);
}

function updateStorage(): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
}
