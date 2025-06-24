/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const PlaceOrder = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    uname: "",
    email: "",
    phoneno: "",
    address: "",
  });

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user")); 
    if (!loggedInUser) {
      navigate("/login"); // Redirect to login if no user
    } else {
      setUser(loggedInUser);
      setFormData({
        uname: loggedInUser.uname || "",
        email: loggedInUser.email || "",
        phoneno: loggedInUser.phoneno || "",
        address: "",
      });
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrder = async (e) => {
    e.preventDefault(); // Prevent form from reloading

    try {
      const response = await fetch(`${baseUrl}/order/all`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Order placed successfully!");
        navigate("/order-summary"); // Redirect to order summary page
      } else {
        console.error("Failed to place order");
      }
    } catch (error) {
      console.error("Error in proceeding order:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold text-orange-500 mb-6">Place Order</h1>
      <form className="bg-white p-6 shadow-md rounded-lg w-80" onSubmit={handleOrder}>
        <input
          type="text"
          name="uname"
          placeholder="User Name"
          value={formData.uname}
          className="w-full p-2 border rounded mb-3"
          required
          disabled
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          className="w-full p-2 border rounded mb-3"
          required
          disabled
        />
        <input
          type="tel"
          name="phoneno"
          placeholder="Phone Number"
          value={formData.phoneno}
          className="w-full p-2 border rounded mb-3"
          required
          disabled
        />
        <textarea
          name="address"
          placeholder="Enter Shipping Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default PlaceOrder;

