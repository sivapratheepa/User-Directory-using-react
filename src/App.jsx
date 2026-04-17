import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useLocalStorage("search", "");

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    fetch("/products.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filtered = products.filter(item =>
    item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const clearSearch = () => setSearch("");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Product Search</h1>

      <input
        type="text"
        placeholder="Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={clearSearch}>Clear</button>

      <div className="container">
        {filtered.length > 0 ? (
          filtered.map(item => (
            <div className="card" key={item.id}>
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
            </div>
          ))
        ) : (
          <h2>No Results Found</h2>
        )}
      </div>
    </div>
  );
}

export default App;