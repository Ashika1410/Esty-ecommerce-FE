export default function HomePage() {
  return (
    <>
      <section>
        <div className="text-2xl flex justify-center mt-6">
          <h1>Shop from talented creators and curators!</h1>
        </div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-3 sm:py-16 lg:max-w-7xl lg:px-8">
            <div className="mt-2 ml-20 mr-20 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 lg:grid-cols-5 lg:grid-cols-6">
              {/* Creative Potraites */}
              <a href="/potraites" className="group">
                <div className="aspect-h-1 aspect-w-1 w-32 overflow-hidden rounded-full bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    src="/src/assets/cd-1.PNG"
                    className="h-32 w-32 object-cover object-center group-hover:opacity-65"
                  />
                </div>
                <h3 className="mt-2 text-lg text-gray-900 p-2 font-semibold flex justify-center hover:underline">
                  Creative Potraites
                </h3>
              </a>

              {/* Birthday Gifts */}
              <a href="/birthday" className="group">
                <div className="aspect-h-1 aspect-w-1 w-32 overflow-hidden rounded-full bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt="Olive drab green insulated bottle with flared screw lid and flat top."
                    src="/src/assets/cd-2.PNG"
                    className="h-32 w-32 object-cover object-center group-hover:opacity-65"
                  />
                </div>
                <h3 className="mt-2 text-lg text-gray-900 p-2 font-semibold flex justify-center hover:underline">
                  Birthday Gifts
                </h3>
              </a>

              {/* Wedding Gifts */}
              <a href="/wedding" className="group">
                <div className="aspect-h-1 aspect-w-1 w-32 overflow-hidden rounded-full bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt="Person using a pen to cross a task off a productivity paper card."
                    src="/src/assets/cd-3.PNG"
                    className="h-32 w-32 object-cover object-center group-hover:opacity-65"
                  />
                </div>
                <h3 className="mt-2 text-lg text-gray-900 p-2 font-semibold flex justify-center hover:underline">
                  Wedding Gifts
                </h3>
              </a>

              {/* Home Gifts */}
              <a href="/house" className="group">
                <div className="aspect-h-1 aspect-w-1 w-32 overflow-hidden rounded-full bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                    src="/src/assets/cd-4.PNG"
                    className="h-32 w-32 object-cover object-center group-hover:opacity-65"
                  />
                </div>
                <h3 className="mt-2 text-lg text-gray-900 p-2 font-semibold flex justify-center hover:underline">
                  Home Gifts
                </h3>
              </a>

              {/* Garden and Floral Gifts */}
              <a href="/garden" className="group">
                <div className="aspect-h-1 aspect-w-1 w-32 overflow-hidden rounded-full bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                    src="/src/assets/cd-5.PNG"
                    className="h-32 w-32 object-cover object-center group-hover:opacity-65"
                  />
                </div>
                <h3 className="mt-2 text-lg text-gray-900 p-2 font-semibold flex justify-center hover:underline">
                  Garden and Floral Gifts
                </h3>
              </a>

              {/* Baby Gifts */}
              <a href="/baby" className="group">
                <div className="aspect-h-1 aspect-w-1 w-32 overflow-hidden rounded-full bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                    src="./src/assets/cd-6.PNG"
                    className="h-32 w-32 object-cover object-center group-hover:opacity-65"
                  />
                </div>
                <h3 className="mt-2 text-lg text-gray-900 p-2 font-semibold flex justify-center hover:underline">
                  Baby Gifts
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}