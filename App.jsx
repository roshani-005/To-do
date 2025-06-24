import "./App.css";

import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Todoitem1 from "./components/Addtodoitem1";
import Todoitem2 from "./components/Addtodoitem2";
//import "./App.css";

function App() {
  return (
    <div
      style={{ textAlign: "center", marginTop: "20px" }}
      className="todo-container"
    >
      <Appname />
      <Addtodo />
      <Addtodo></Addtodo>
      <Addtodo></Addtodo>
      <Addtodo></Addtodo>
      <Addtodo></Addtodo>
      <div class="items-container">
        <Todoitem1 />
        <Todoitem2></Todoitem2>
      </div>
    </div>
  );
}

export default App;
