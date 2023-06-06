import React, { Component } from 'react';
import './todo.css';
export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos:[],
            finished:[],
            name:'',
            count:0
        };
    }

    onInput = (e) =>{
        if(e.target.value.length > 0){
            this.setState({
                name: e.target.value
            });
        }
    }

    addTodo = () =>{
        const {todos, name} = this.state;
        if(name.length > 0){
            this.setState({
                todos: [...todos, name],
                name: ''
            });
            document.elem.reset();
        }
    }

    removeTodo = (index) =>{
        const {todos, finished, count} = this.state;        
        this.setState({
            finished: [...finished, todos[index]],
            todos: [...todos.slice(0, index), ...todos.slice(index+1)],
            count: count+1
        });
    }

    removefinish = (index) =>{
        const {finished} = this.state;
        this.setState({
            finished: [...finished.slice(0, index), ...finished.slice(index+1)]
        });
    }

    replacetask = (index) =>{
        const{todos, finished, count} = this.state;
        this.setState({
            todos: [...todos, finished[index]],
            finished: [...finished.slice(0, index), ...finished.slice(index+1)],
            count: count-1
        });
    }

    Allreset = () =>{
        this.setState({
            todos: [],
            finished:[],
            count: 0
        });
    }

    render(){
        const{todos, finished, count} = this.state;
        
        return(
        <body>
            <h1 className='headtitle'>Todo管理アプリ</h1>
            <form name="elem" className='inputelem'>
                <input type = "text" placeholder='例: 計算機アーキテクチャ' onInput={this.onInput} className='input' />
            </form>
            <div className='addtodo' align="center">
                <button onClick={this.addTodo}>登録</button>
            </div>

            <div className='body-container'>
                <div className='currenttask-container'>
                    <h4 className='currenttask'>現在のタスク</h4>
                    <ul id='currentTask'>
                        {todos.map((todo, index) => 
                         <li key ={index} className='currenttodo'>
                            {todo}
                         <button className='finish' onClick={() => {this.removeTodo(index)}}>完了</button>
                        </li>
                        )}
                    </ul>
                </div>
                <div className='finishedtask-container'>
                    <h4 className='finishedtask'>完了タスク</h4>
                    <ul id='finishedTask'>
                        {finished.map((finished, index) => 
                            <li key ={index}>
                                {finished}
                                <button className='delete' onClick={() => {this.removefinish(index)}}>削除</button>
                                <button onClick={() => {this.replacetask(index)}}>戻す</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            <h3 className='count'>あなたは今までに{count}個のタスクを完了しました！</h3>
            <div className='allreset' align="right">
                <button onClick={() => {this.Allreset()}}>タスクを全てリセット</button>
            </div>

            <footer>
                <p>This page is enPiT2023 production by h-yki.</p>
                <div className='links'>
                    <a href='https://github.com/h-yki/TodoApp.git' target='_blank'>Github</a>
                    <a href='https://scrapbox.io/enpit2023/%E5%8E%9F%E3%81%A1%E3%82%83%E3%82%93' target='_blank'>scrapbox</a>
                </div>
            </footer>
        </body>
        );
    }
}