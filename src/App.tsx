import './App.css';
import TodoApp from "./Todos_Context/TodoApp"
import ParentComponent from './ForwardRefEx/ParentComp';
import MainRouter from './RoutesExample/MainRouter';
import { ReactNode } from 'react';

type Props={
  children?:ReactNode;
}
function App(props:Props) {
  return (
    <div id="main-content">
      {props?.children}
    </div>
  );
}

export default App;
