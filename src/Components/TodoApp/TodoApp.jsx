import React, {Component} from 'react'
import '../TodoApp.css'
class TodoApp extends Component{
    render(){
        return (
            <div className="TodoApp">
               <LoginComponent/>
            </div>
        )
    }
}
class LoginComponent extends Component{
    render(){
        return(
           <div>
               User Name: <input type="text" name="username"/>
               Password: <input type="password" name="password"/>
               <button class="button">Login</button>
           </div> 
        )
    }
}
export default TodoApp