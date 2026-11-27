import { useEffect, useState } from "react";
// import { Todo } from "./Todo";
// import { Box } from "./Box";

// function App() {
//   return <Todo></Todo>;
// }

// function App() {
//   const [isVisible, setIsVidible] = useState(false)
//   const handleToggleVisibility = () => {
//     setIsVidible(!isVisible)
//   }

//   return (
//     <div>
//       <button onClick={handleToggleVisibility}>Toggle visibility</button>
//       {isVisible && <Box/>}
//     </div>
//   );
// }

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    getUsers();
  }, []);
  console.log(users)
  return <div>
    <h1>Users:</h1>
    <ul>{users.map(user =>{
      return <li key={user.id}>{user.name}, {user.company.name}</li>
    })}</ul>
  </div>;
}

export default App;
