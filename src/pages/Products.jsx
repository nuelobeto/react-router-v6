import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <main>
      <div className="page_container home">
        <input
          type="text"
          placeholder="Search products"
          style={{
            height: "45px",
            width: "300px",
            borderRadius: "5px",
            padding: "0 0 0 10px",
          }}
        />
        <nav className="products_nav">
          <ul className="links" style={{ margin: "40px 0 0 0" }}>
            <li style={{ margin: "0" }}>
              <Link to="featured">Featured</Link>
            </li>
            <li>
              <Link to="new">New</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </main>
  );
}

export default Products;
