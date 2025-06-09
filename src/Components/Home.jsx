import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

export default function HomePage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:7702/category");
        const result = await response.json();
        
        if (result && Array.isArray(result.result)) {
          setCategories(result.result);
        } else {
          console.error("Unexpected API response format:", result);
          setCategories([]);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories([]);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <section>
        <div className="text-2xl flex justify-center mt-6">
          <h1>Shop from talented creators and curators!</h1>
        </div>
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-8 py-16">
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {categories.length > 0 ? (
                categories.slice(0, 6).map((category) => (
                  <div key={category.categoryID} className="text-center">
                    <Link to={`/category/1?id=${category.categoryID}`} className="group block">
                      <div className="w-32 h-32 overflow-hidden rounded-full bg-gray-100 mx-auto">
                        <img
                          alt={category.category_name}
                          src={category.category_imgSrc}
                          className="h-full w-full object-cover group-hover:opacity-75 transition"
                        />
                      </div>
                      <h3 className="mt-2 text-lg font-semibold text-gray-900 group-hover:underline">
                        {category.category_name}
                      </h3>
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-full">Loading categories...</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
