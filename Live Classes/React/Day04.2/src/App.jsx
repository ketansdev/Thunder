import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState([]);
  const [count, setCount] = useState(10);

  useEffect(() => {
    async function githubUsers() {
      const response = await fetch(
        `https://api.github.com/users?per_page=${count}`,
      );
      const data = await response.json();
      setUser(data);
      console.log(data);
    }

    githubUsers();
  }, [count]);

  return (
    <>
      <h1>Github Users</h1>
      <input
        type="number"
        value={count}
        style={{ fontSize: "20px", padding: "5px", margin: "10px" }}
        onChange={(e) => setCount(e.target.value)}
      />
      <div>
        {user.map((u) => (
          <img src={u.avatar_url} alt="" height={"250px"} width={"250px"} />
        ))}
      </div>
    </>
  );
}

export default App;
