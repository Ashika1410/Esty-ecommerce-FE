import React from "react";

const Checkout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold text-orange-500 mb-6">Checkout</h1>
      <p className="text-lg text-gray-700">
        Thank you for shopping with us! Please complete your payment.
      </p>
      <button
        className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
        onClick={() => alert("Payment feature coming soon!")}
      >
        Pay Now
      </button>
    </div>
  );
};

export default Checkout;
