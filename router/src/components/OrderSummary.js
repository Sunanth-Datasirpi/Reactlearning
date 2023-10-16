import React from "react";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const navigate = useNavigate();
  return (
    <>
      <div>Order Confirmed</div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Click to go back to home
      </button>
    </>
  );
}

export default OrderSummary;
