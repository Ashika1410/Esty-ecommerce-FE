export default function Blog() {
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
                            <div className="transition duration-100 ease-in-out w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transform hover:-translate-y-1 hover:scale-110 ...">
                                <a href="/autumn">
                                <img
                                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                        src="https://i.etsystatic.com/inv/f73b3c/5461598354/inv_fullxfull.5461598354_nv8rwpe2.jpg?version=0"
                                        className="rounded-t-lg object-cover object-center group-hover:opacity-75"
                                    />
                                </a>
                                <div className="p-3">
                                    <h5 className="mb-3 font-normal text-gray-700 dark:text-gray-400">Shopping Guides</h5>
                                    <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">9 Comfy Throws for Cosy Autumn Vibes</p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Embrace the snuggling season with stylish throws that will warm your hearts.</p>
                                </div>
                            </div>
                            <div className="transition duration-100 ease-in-out w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transform hover:-translate-y-1 hover:scale-110 ...">
                                <a href="/bags">
                                <img
                                        alt="Olive drab green insulated bottle with flared screw lid and flat top."
                                        src="https://i.etsystatic.com/inv/1b86b2/5514321927/inv_fullxfull.5514321927_50cniifw.jpg?version=0"
                                        className="rounded-t-lg object-cover object-center group-hover:opacity-75"
                                    />
                                </a>
                                <div className="p-3">
                                    <h5 className="mb-3 font-normal text-gray-700 dark:text-gray-400">Shopping Guides</h5>
                                    <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">14 Beautiful Bags That Express Your Unique Style</p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Amp up your fashion game with bags that perfectly match your aesthetic.</p>
                                </div>
                            </div>
                            <div className="transition duration-100 ease-in-out w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transform hover:-translate-y-1 hover:scale-110 ...">
                                <a href="/kids">
                                <img
                                          alt="Person using a pen to cross a task off a productivity paper card."
                                          src="https://i.etsystatic.com/inv/0c0724/5507381345/inv_fullxfull.5507381345_8imomvyj.jpg?version=0"
                                          className="rounded-t-lg object-cover object-center group-hover:opacity-75"
                                    />
                                </a>
                                <div className="p-3">
                                    <h5 className="mb-3 font-normal text-gray-700 dark:text-gray-400">Gift Ideas</h5>
                                    <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Best Gift Ideas for Kids of All Ages</p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Shop the sweetest surprises for all little ones in your family–these gifts for kids will definitely earn you some brownie points.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}