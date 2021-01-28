import React, { useState } from 'react'
import MetodList from "./Metod/MetodList"
import Context from "./context"



function App() {
  const [addInput, setInput] = useState(true);
  const [naddInput, setnInput] = useState("salarymonth");

  const [metods, setMetods] = useState([
    { id: 1, completed: true, title: 'Оклад за месяц', addinput: "salarymonth" },
    { id: 2, completed: false, title: 'МРОТ', addinput: "MROT" },
    { id: 3, completed: false, title: 'Оплата за день', addinput: 'salaryday' },
    { id: 4, completed: false, title: 'Оплата за час', addinput: 'salarytime' }
  ]);

  function toggleMetod(id) {

    setMetods(
      metods.map(metod => {
        if (id === 1) {
          setInput(true);
          
        } else {
          setInput(false);
        }
        if (metod.id === id) {
          metod.completed = !metod.completed
          setnInput(metod.addinput);

        }
        else {
          metod.completed = false;
        }
        return metod
      })
    )
  }
  function removeTodo(id) {

    console.log(id);
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <form className="wrapper">
          <h1>Сумма</h1>
          <MetodList metods={metods} onToggle={toggleMetod} showInfo={addInput} showInput={naddInput} />

          {/* <AddText onCreate={addTodo}/> */}
        </form>
      </div>
    </Context.Provider>


  )
}

export default App;
