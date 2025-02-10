export const todoList = {
    title: 'Todo List 📃',
    code: `
        const todoForm = document.querySelector('.todo-form');
        const todoOutput = document.querySelector('.todo-output');
        
        document.addEventListener('DOMContentLoaded', loadTodos);
        todoForm.addEventListener('submit', addTodo);

        function addTodo(e) {
            e.preventDefault();
            const title = document.querySelector('#title').value;
            const description = document.querySelector('#tododescription').value;

            if (!title || !description) {
                alert('Please fill in both fields');
                return;
            }

            const todo = {
                title,
                description,
                date: new Date().toLocaleString(),
            };

            const todos = getTodos();
            todos.push(todo);
            localStorage.setItem('todos', JSON.stringify(todos));

            displayTodos(todos);
            todoForm.reset();
        }

        function loadTodos() {
            const todos = getTodos();
            displayTodos(todos);
        }

        function getTodos() {
            const todos = localStorage.getItem('todos');
            return todos ? JSON.parse(todos) : [];
        }

        function displayTodos(todos) {
            todoOutput.innerHTML = '';

            todos.forEach((todo, index) => {
                const tr = document.createElement('tr');
                
                tr.innerHTML = \`
                    <td>\${todo.title}</td>
                    <td>\${todo.description}</td>
                    <td>\${todo.date}</td>
                    <td>
                        <button class="btn btn-danger btn-sm delete-btn" data-index="\${index}">Delete</button>
                    </td>
                \`;
                
                todoOutput.appendChild(tr);
            });

            document.querySelectorAll('.delete-btn').forEach(button => {
                button.addEventListener('click', deleteTodo);
            });
        }

        function deleteTodo() {
            const index = this.getAttribute('data-index');
            const todos = getTodos();
            todos.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
            displayTodos(todos);
        }
    `,
    html: `
    <div class="rounded alert alert-warning">
        <p class="lead">TODO List</p>
        <form class="todo-form form-group">
            <label for="todotitle">Title</label>
            <input type="text" class="form-control" id="todotitle" placeholder="Enter title">
            <label for="description">Description</label>
            <textarea class="form-control" id="tododescription" rows="3" placeholder="Enter description"></textarea>
            <button type="submit" class="btn btn-primary mt-2">Add</button>
        </form>
    </div>

    <div class="todooutput mt-3 alert alert-info">
        <p class="lead"> Your TODO's</p>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody class="todo-output">
            </tbody>
        </table>
    </div>
    `,
};
