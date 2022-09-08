import { v4 as uuidV4 } from 'uuid';

type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

const list = document.querySelector<HTMLUListElement>('#list');
const form = document.querySelector<HTMLFormElement>('#new-task-form');
const input = document.querySelector<HTMLInputElement>('#new-task-title');

form?.addEventListener('submit', (e) => {
  e.preventDefault(); //evita que 'submit' refresque la p{agina y desaparezca todo.

  if (input?.value == '' || input?.value == null) {
    //evita que se agreguen tareas vacias.
    return;
  }

  const newTask: Task = {
    id: uuidV4(),
    title: input?.value,
    completed: false,
    createdAt: new Date(),
  };

  addListItem(newTask);

  // input.value = ''; //Vacia el campo del input cuando se envia.
  form.reset(); // En caso de querer resetear varios inputs se usaria este.
});

function addListItem(task: Task) {
  const label = document.createElement('label');
  const item = document.createElement('li');
  const checkbox = document.createElement('input');

  checkbox.type = 'checkbox';

  list?.append(item);
  item.append(label);
  label.append(checkbox, task.title);
}
