import React, { Component } from 'react';
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
        return(<body>
            <h1>Todo管理アプリ</h1>
            <form name="elem">
            <input type = "text" placeholder='例: 計算機アーキテクチャ' onInput={this.onInput} size='30' />
            </form>
            <button onClick={this.addTodo}>登録</button>
            <ul id='currentTask'>現在のタスク
                {todos.map((todo, index) => 
                    <li key ={index}>
                        {todo}
                        <button onClick={() => {this.removeTodo(index)}}>完了</button>
                    </li>
                )}
            </ul>
            <ul id='finishedTask'>完了タスク
            {finished.map((finished, index) => 
                    <li key ={index}>
                        {finished}
                        <button onClick={() => {this.removefinish(index)}}>削除</button>
                        <button onClick={() => {this.replacetask(index)}}>戻す</button>
                    </li>
                )}
            </ul>
            <h3>あなたは今までに{count}個のタスクを完了しました！</h3>
            <button onClick={() => {this.Allreset()}}>タスクを全てリセット</button>
            </body>
        );
    }
}