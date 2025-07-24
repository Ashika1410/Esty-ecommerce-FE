import Navbar from "../../Components/Header";
import { useState } from "react";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

const baseurl = import.meta.env.VITE_API_BASE_URL;

export default function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    usernameOrEmailOrPhone: "",
    uname: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneno: "",
    address: "",
  });
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

    const handleLogin = async () => {
      try {
        const response = await fetch(`${baseurl}api/user/check`, {
          method: "POST",
          credentials: "include", 
        });
  
        if (response.ok) {
          // eslint-disable-next-line no-undef
          setUserLoggedIn(true); 
        } else {
          console.error("Login failed");
        }
      } catch (error) {
        console.error("Error logging in:", error);
      }
    };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Processing...");
    setError("");
    if (isSignUp && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const userData = isSignUp
        ? {
            uname: formData.uname, 
            fname: formData.fname,  
            lname: formData.lname,
            email: formData.email,
            password: formData.password,
            phoneno: formData.phoneno, 
            address: formData.address,
          }
        : {
            usernameOrEmailOrPhone: formData.usernameOrEmailOrPhone,
            password: formData.password,
          };

      console.log("Sending data to API:", userData);

      const response = await fetch(
        isSignUp ? `${baseurl}api/user/newuser` : `${baseurl}api/user/check`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();
      console.log("API Response:", data);

      if (response.ok) {
        setMessage(isSignUp ? "Signup successful!" : "Login successful!");
        setFormData({
          usernameOrEmailOrPhone: "",
          uname: "",
          fname: "",
          lname: "",
          email: "",
          password: "",
          confirmPassword: "",
          phoneno: "",
          address: "",
        });
      } else {
        setError(data.errormessage || "Signup/Login failed");
      }
    } catch (error) {
      console.error("Cannot Fetch Data", error);
      setError("Fill details correctly, please try again.");
    }
  };
  return (
    <>
      <Navbar />
      <section className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md lg:max-w-lg bg-white p-8 lg:p-12 rounded-2xl shadow-lg">
          <h1 className="text-4xl text-center lg:text-5xl font-bold text-orange-600 italic">Etsy</h1>
          <h2 className="text-2xl font-semibold text-center mt-4">
            {isSignUp ? "Create an Account" : "Welcome Back"}
          </h2>
          <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
            {isSignUp ? (
              <>
                <input type="text" name="uname" placeholder="Username" value={formData.uname} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
                <input type="text" name="fname" placeholder="First Name" value={formData.fname} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
                <input type="text" name="lname" placeholder="Last Name" value={formData.lname} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
                <input type="tel" name="phoneno" placeholder="Phone Number" value={formData.phoneno} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
                <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
              </>
            ) : (
              <input type="text" name="usernameOrEmailOrPhone" placeholder="Username, Email, or Phone Number" value={formData.usernameOrEmailOrPhone} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
            )}

            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" required />

            {isSignUp && (
              <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
            )}

            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" onClick={handleLogin} className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          </form>

          <div className="text-center my-4 text-gray-500">or</div>

          <div className="space-y-2">
            <button className="flex items-center justify-center w-full p-3 border rounded-lg hover:bg-gray-100 transition">
              <FaGoogle className="mr-2 text-red-500" /> Continue with Google
            </button>
            <button className="flex items-center justify-center w-full p-3 border rounded-lg hover:bg-gray-100 transition">
              <FaGithub className="mr-2 text-gray-800" /> Continue with GitHub
            </button>
            <button className="flex items-center justify-center w-full p-3 border rounded-lg hover:bg-gray-100 transition">
              <FaFacebook className="mr-2 text-blue-600" /> Continue with Facebook
            </button>
          </div>

          <p className="text-center mt-4 text-gray-600">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <span className="text-blue-600 cursor-pointer font-semibold hover:underline ml-1"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError("");
                setFormData({
                  usernameOrEmailOrPhone: "",
                  uname: "",
                  fname: "",
                  lname: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                  phoneno: "",
                  address: "",
                });
              }}>
              {isSignUp ? "Login" : "Sign Up"}
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
