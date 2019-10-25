import React, {Component} from 'react';


class TasksPage extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-5">
                    <h3>Add New Task</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="taskTitle">Task name</label>
                            <input type="email" className="form-control" id="taskTitle" placeholder="Task name" required/>
                            <small className="form-text">Введите название задачи</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="taskDescription">Task description</label>
                            <textarea className="form-control" id="taskDescription" rows="3"></textarea>
                            <small className="form-text">Введите описание задачи</small>
                        </div>

                        <label htmlFor="date">Date</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" role="img" aria-label="Date">📆</span>
                            </div>
                            <input type="date" className="form-control" id="date"/>
                        </div>

                        <label htmlFor="taskStatus">Task name</label>
                        <select id="taskStatus" className="custom-select">
                            <option value="toDo">К исполнению</option>
                            <option value="done">Сделано</option>
                            <option value="inProcess">В процессе</option>
                            <option value="awaited">Отложено</option>
                        </select>
                    </form>
                </div>

                <div className="col-5">
                One of two columns
                </div>

            </div>
        );
    }
}

export default TasksPage;