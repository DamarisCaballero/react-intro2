import "./CreateTodoButton.css";

/**function CreateTodoButton() {
  const createTodo = (e) => {
    console.log(e.target);
  };

  return (
    <div className="createTodo-container">
      <button onClick={(event) => createTodo(event)}>+</button>
    </div>
  );
}

export { CreateTodoButton }; */

function CreateTodoButton(){
  return (
    <button
    className="CreateTodoButton"
    onClick={
      ( event) => {
        console.log('diste click' )
        console.log('diste 2 veses click' )
    }
    }
    >+</button>
  );
}
export { CreateTodoButton}