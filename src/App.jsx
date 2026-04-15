import { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    {name: "Pratheepa", email: "pratheepa@gmail.com", phone: "1234567890", company: "ABC Ltd"},
    {name: "Lakshmi", email: "lakshmi@gmail.com", phone: "9876543210", company: "XYZ Ltd"},
    {name: "Ramar", email: "ramar@gmail.com", phone: "1112223333", company: "Tech Corp"},
    {name: "Suganthi Raj", email: "suganthiraj@gmail.com", phone: "4445556666", company: "Soft Inc"}
  ]);

  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortAZ = () => {
    setUsers([...users].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const sortZA = () => {
    setUsers([...users].sort((a, b) => b.name.localeCompare(a.name)));
  };

  return (
    <div className="App">
      <h1>User Directory</h1>

      <input
        type="text"
        placeholder="Search user"
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      <button onClick={sortAZ}>Sort A-Z</button>
      <button onClick={sortZA}>Sort Z-A</button>

      <div className="container">
        {filteredUsers.map((user, index) => (
          <div className="card" key={index}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Company: {user.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;