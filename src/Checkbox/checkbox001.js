import { useState, useEffect} from 'react';
import '../Home/Home.css';
import './checkbox1.css';
const Checkbox001 = () => {
  const [todo, setTodo] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => setTodo(json))
    .catch(error => console.log(error))
   },[todo])
  const handleSubmit = (event,id,title) => {
    event.preventDefault();
    console.log(userInfo);
    setUserInfo({ id:id, title: title, completed: isChecked });
 
  };
  const [isChecked, setIsChecked] = useState(true);

  const [userInfo, setUserInfo] = useState([])
return (
      <>
        {todo.map(({id, title}, index)=> {
          return <div id='check-boxes' key={index} onChange={(event) => handleSubmit(event,id,title)}   >
            <input type="checkbox" id="check-box" value={id}  onChange={(e) =>setIsChecked(!isChecked)}  />
            <label className='checkbox-label' htmlFor="id" value={title}>{title}</label><br />
          </div> })}
      </>
    )
  };
  export default Checkbox001;