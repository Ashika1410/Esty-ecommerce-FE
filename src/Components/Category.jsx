import { useState, useEffect } from "react";

export default function Category() {
    const [data, setData] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:7702/category");
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
                <div className="text-2xl font-bold mx-12">
                    <h1>Shop our popular gift categories</h1>
                </div>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-3 sm:py-16 lg:max-w-7xl lg:px-8">
                        <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:grid-cols-5">
                            {data && data.length > 0 ? (
                                data.slice(6, 11).map((category) => (
                                    <div key={category.categoryID} className="categoryID">
                                        <a href={`/category/1?id=${category.categoryID}`} className="group">
                                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border b-8 rounded-lg bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                                                <img
                                                    alt={category.category_name}
                                                    src={category.category_imgSrc}
                                                    className="h-full w-full object-cover object-center group-hover:opacity-65"
                                                />
                                                <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center">
                                                    {category.category_name}
                                                </h3>
                                            </div>
                                        </a>
                                    </div>
                                ))
                            ) : (
                                <p>Loading Category....</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Second Products Section */}
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            <div className="space-y-5 flex flex-col justify-center w-72 ">
                                <p className="text-sm">Local finds? Etsy has it.</p>
                                <h1 className="text-xl font-bold">Discover shops in India</h1>
                                <button type="submit" className="rounded-lg border-2 border-black">
                                    Shop from local makers
                                </button>
                            </div>
                            {data && data.length > 0 ? (
                                data.slice(11, 14).map((category) => (
                                    <div key={category.categoryID} className="group relative border b-4 rounded-md font-medium text-lg">
                                    <a href={`/category/1?id=${category.categoryID}`}>
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                            <img
                                                alt={category.category_name}
                                                src={category.category_imgSrc}
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-3 flex justify-center p-3">
                                            <h3 className="text-2xl font-normal text-gray-600"> {category.category_name} </h3>
                                        </div>
                                    </a>
                                </div>
                                ))
                            ) : (
                                <p>Loading Category....</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}