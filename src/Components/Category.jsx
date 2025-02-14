export default function Category() {
    return (
        <>
            <section>
                <div className="text-2xl font-bold">
                    <h1>Shop our popular gift categories</h1>
                </div>

                {/* First Products Section */}
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-3 sm:py-16 lg:max-w-7xl lg:px-8">
                        <div className="mt-1 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:grid-cols-5">
                            {/* Anniversary Gifts */}
                            <a href="/anniversary" className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border b-8 rounded-lg bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                        src="https://i.etsystatic.com/51757054/r/il/725b8e/6241710457/il_794xN.6241710457_pbfd.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center">
                                        Anniversary Gifts
                                    </h3>
                                </div>
                            </a>

                            {/* Gifts for Him */}
                            <a href="/hisgifts" className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border b-8 rounded-lg bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt="Olive drab green insulated bottle with flared screw lid and flat top."
                                        src="https://i.etsystatic.com/28180041/r/il/2f3a61/5466266289/il_794xN.5466266289_9uyu.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center">
                                        Gifts for Him
                                    </h3>
                                </div>
                            </a>

                            {/* Gifts for Her */}
                            <a href="/hergifts" className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border b-8 rounded-lg bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt="Person using a pen to cross a task off a productivity paper card."
                                        src="https://i.etsystatic.com/51464338/r/il/99f64f/6638267541/il_794xN.6638267541_hupq.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center">
                                        Gifts for Her
                                    </h3>
                                </div>
                            </a>

                            {/* Personalised Gift Ideas */}
                            <a href="/personal" className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border b-8 rounded-lg bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                                        src="https://i.etsystatic.com/20595428/r/il/7d6737/4040126572/il_794xN.4040126572_akxy.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center">
                                        Personalised Gift Ideas
                                    </h3>
                                </div>
                            </a>

                            {/* Wedding Gifts */}
                            <a href="/wedding" className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border b-8 rounded-lg bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                                        src="https://i.etsystatic.com/51351279/r/il/ce3703/6305195807/il_794xN.6305195807_9a6b.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center">
                                        Wedding Gifts
                                    </h3>
                                </div>
                            </a>
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

                            {/* ThreadsofindiaArt */}
                            <div className="group relative border b-4 rounded-md font-medium text-lg">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        alt="Front of men's Basic Tee in black."
                                        src="https://i.etsystatic.com/49172423/r/il/ea6a3b/6221926698/il_300x300.6221926698_j1d6.jpg"
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-3 flex justify-start p-2">
                                    <a href="/art">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <img
                                                    alt="art"
                                                    src="https://i.etsystatic.com/isla/542c4d/72515898/isla_200x200.72515898_bbvxwclh.jpg?version=0"
                                                    className="h-12 w-12 rounded-full object-cover object-center lg:h-12 lg:w-12"
                                                />
                                            </h3>
                                        </div>
                                        <span
                                            aria-hidden="true"
                                            className="text-sm font-medium text-gray-900"
                                        />
                                        ThreadsofindiaArt
                                    </a>
                                </div>
                            </div>

                            {/* Thefantasystitch */}
                            <div className="group relative border b-4 rounded-md font-medium text-lg">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        alt="Front of men's Basic Tee in black."
                                        src="https://i.etsystatic.com/49172423/c/2518/1999/0/0/il/30ee5e/6241561307/il_300x300.6241561307_lgef.jpg"
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-3 flex justify-start p-2">
                                    <a href="/stitch">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <img
                                                    alt="stitch"
                                                    src="https://i.etsystatic.com/isla/31627d/72644713/isla_200x200.72644713_rigo6vy7.jpg?version=0"
                                                    className="h-12 w-12 rounded-full object-cover object-center lg:h-12 lg:w-12"
                                                />
                                            </h3>
                                        </div>
                                        <span
                                            aria-hidden="true"
                                            className="text-sm font-medium text-gray-900"
                                        />
                                        Thefantasystitch
                                    </a>
                                </div>
                            </div>

                            {/* ShivaniPatelArt */}
                            <div className="group relative border b-4 rounded-md font-medium text-lg">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        alt="Front of men's Basic Tee in black."
                                        src="https://i.etsystatic.com/43072277/r/il/99d127/5410012265/il_794xN.5410012265_dycx.jpg"
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-3 flex justify-start p-2">
                                    <a href="/patel">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <img
                                                    alt="patel"
                                                    src="https://i.etsystatic.com/isla/952df9/61013826/isla_200x200.61013826_kffxu9bn.jpg?version=0"
                                                    className="h-12 w-12 rounded-full object-cover object-center lg:h-12 lg:w-12"
                                                />
                                            </h3>
                                        </div>
                                        <span
                                            aria-hidden="true"
                                            className="text-sm font-medium text-gray-900"
                                        />
                                        ShivaniPatelArt
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}