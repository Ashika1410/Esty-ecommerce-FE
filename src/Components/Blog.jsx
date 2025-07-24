import { useState, useEffect } from "react";

const baseurl = import.meta.env.VITE_API_BASE_URL;

export default function Blog() {

    const [data, setData] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${baseurl}api/category`);
            const result = await response.json();
            // console.log("Full API Response:", result);
            if (result && Array.isArray(result.result)) {
                setData(result.result);
            } else {
                console.error("Unexpected API response format:", result);
                setData([]);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            setData([]);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <section>
                <div className="bg-white p-5">
                    <div className="max-w-2xl px-4 py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <div className="text-2xl font-bold flex flex-row space-x-5">
                            <h1>Fresh from the blog</h1>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                        <div className="py-5 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                                {data && data.length > 0 ? (
                                    data.slice(14, 17).map((category) => (
                                        <div key={category.categoryID} className="transition duration-100 ease-in-out w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transform hover:-translate-y-1 hover:scale-110 ...">
                                            <a href={`/category/1?id=${category.categoryID}`}>
                                                <img
                                                    alt={category.category_name}
                                                    src={category.category_imgSrc}
                                                    className="rounded-t-lg object-cover object-center group-hover:opacity-75"
                                                />
                                                <div className="p-3">
                                                    <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900"> {category.category_name} </p>
                                                    <p className="mb-3 font-normal text-gray-700"> {category.category_description} </p>
                                                </div>
                                            </a>
                                        </div>
                                    ))
                                ) : (
                                    <p>Category Loading.....</p>
                                )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}