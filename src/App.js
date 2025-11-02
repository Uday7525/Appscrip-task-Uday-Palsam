import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Filters from "./components/Filters";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.error("API error:", err));
  }, []);

  const handleFilter = (cat) => {
    setCategory(cat);
    if (cat === "all") {
      setFiltered(products);
    } else {
      const filteredData = products.filter((item) => item.category === cat);
      setFiltered(filteredData);
    }
  };

  return (
    <>
      <Header />
      <main className="main-section">
        <aside className="sidebar">
          <Filters category={category} onFilter={handleFilter} />
        </aside>
        <section className="content">
          <ProductGrid products={filtered} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
