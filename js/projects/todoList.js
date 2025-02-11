export const todoList = {
    title: 'Todo List 📃',
    code: `
        const todoForm = document.querySelector('.todo-form');
        const todoOutput = document.querySelector('.todo-output');
        
        document.addEventListener('DOMContentLoaded', loadTodos);
        todoForm.addEventListener('submit', addTodo);

        function addTodo (e) {
            e.preventDefault();
            const title = document.getElementById('todotitle').value;
            const description = document.getElementById('tododescription').value;
            const date = new Date().toLocaleDateString();
            const todo = { title, description, date };
            localStorage.setItem(title, JSON.stringify(todo));
            loadTodos();
        }

        function loadTodos () {
            todoOutput.innerHTML = '';
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const todo = JSON.parse(localStorage.getItem(key));
                todoOutput.innerHTML += \`
                    <tr>
                        <td>\${todo.title}</td>
                        <td>\${todo.description}</td>
                        <td>\${todo.date}</td>
                        <td>
                            <button class="btn btn-danger btn-sm" onclick="deleteTodo('\${todo.title}')">Delete</button>
                        </td>
                    </tr>
                \`;
            }
        }

        function deleteTodo (title) {
            localStorage.removeItem(title);
            loadTodos();
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
