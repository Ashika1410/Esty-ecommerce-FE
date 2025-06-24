/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function Country() {
  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState("US");
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("en");

  return (
    <>
      <section>
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg ">
            <h2 className="text-xl font-semibold mb-4"> Update your Settings </h2>
            <p className="text-md mb-4">Set where you live, what language you speak and the currency you use. </p>
            <div className="mb-4">
              <label className="block text-xl font-medium"> Region </label>
              <select value={country} onChange={(e) => setCountry(e.target.value)} className="w-full p-2 border rounded" >
                <option value="US"> United States (US) </option>
                <option value="UK"> United Kingdom (GB) </option>
                <option value="IN"> India (IN) </option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-xl font-medium">Currency</label>
              <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="w-full p-2 border rounded" >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="INR">INR (₹)</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-xl font-medium"> Language</label>
              <select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full p-2 border rounded" >
                <option value="en"> English (US) </option>
                <option value="fr"> French (FR) </option>
                <option value="hi"> Hindi </option>
                <option value="tm"> Tamil </option>
                <option value="sp"> Spanish </option>
                <option value="gr"> German </option>
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <span className="px-4 py-2 border border-2 border-black text-black rounded-full"> Cancel </span>
              <span onClick={() => setIsOpen(false)} className="px-4 py-2 bg-black text-white rounded-full"> Save </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

