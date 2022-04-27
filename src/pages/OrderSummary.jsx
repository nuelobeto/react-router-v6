import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const navigate = useNavigate();

  return (
    <main>
      <div className="page_container order_summary">
        <h3 style={{ margin: "0 0 20px 0" }}>Order confirmed!</h3>
        <button
          style={{ padding: "10px", borderRadius: "5px", cursor: "pointer" }}
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </main>
  );
}

export default OrderSummary;
