import React, {Component} from 'react';
import TasksPage from '../taskPage';
import MainPage from '../mainPage';
import DragNDropPage from '../dragNDrop';

class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {
            main: {status: false, page: <MainPage />},
            task: {status: true, page: <TasksPage />},
            dragNDrop: {status: false, page: <DragNDropPage/>}
        }

    }
    handleClick = (e) =>{
        let curLink = e.target;
        let page = curLink.dataset.page;
        let curState = Object.assign({}, this.state);
        this.setActiveLink(curLink);

        for(let key in curState){
            if(key === page){
                curState[key] = Object.assign(curState[key], {status: true});
            }else{
                curState[key] = Object.assign(curState[key], {status: false});
            }
        }
        this.setState(curState);
    }
    getPage(){
        for(let key in this.state){
            if(this.state[key].status){
                return this.state[key].page;
            }
        }
    }
    setActiveLink(link){
        let links = document.querySelectorAll('.nav-link');
        for(let i = 0; i < links.length; i++){
            if(link === links[i]){
                links[i].classList.add('active');
            }else{
                links[i].classList.remove('active');
            }
        }
    }
    render(){
        return(
            <React.Fragment>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link" href="#main" data-page="main" onClick = { this.handleClick }>Главная</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#task" data-page="task"  onClick = { this.handleClick }>Тask Form</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#drag&drop" data-page="dragNDrop"  onClick = { this.handleClick }>Drag&Drop</a>
                    </li>
                </ul>
                <div className="container">
                    {this.getPage()}
                </div>

            </React.Fragment>
        );
    }
}

export default Nav;