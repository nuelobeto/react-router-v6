import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <div className="page_container home">
        <h2 style={{ margin: "0 0 20px 0" }}>Home Page</h2>
        <button
          style={{ padding: "10px", borderRadius: "5px", cursor: "pointer" }}
          onClick={() => navigate("order-summary")}
        >
          Place Order
        </button>
      </div>
    </main>
  );
}

export default Home;
