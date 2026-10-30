import React from "react";
import useProducts from "../hooks/useProducts";

function UserList() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B0B14] text-xl font-bold text-purple-400">
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B0B14] text-red-400">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B14] px-6 py-12 text-white">
      {/* Header */}
      <div className="mx-auto mb-12 max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-purple-400">
          Our Collection
        </p>

        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Discover <span className="text-purple-500">Products</span>
        </h1>

        <p className="mt-4 max-w-xl text-gray-400">
          Explore our premium collection of products designed to make your
          everyday life better.
        </p>

        <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to- from-purple-500 to-pink-500" />
      </div>

      {/* Products Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#151522] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_10px_40px_rgba(139,92,246,0.15)]"
          >
            {/* Purple Glow */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-600/10 blur-3xl transition-all duration-500 group-hover:bg-purple-600/25" />

            {/* Product Image */}
            <div className="relative flex h-56 items-center justify-center rounded-xl bg-[#1C1C2B] p-5">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
              />

              <span className="absolute left-3 top-3 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium capitalize text-purple-300">
                {product.category}
              </span>
            </div>

            {/* Product Info */}
            <div className="relative mt-5">
              <h2 className="line-clamp-2 min-h-12 text-base font-semibold leading-6 text-gray-100 transition-colors group-hover:text-purple-300">
                {product.title}
              </h2>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">Price</p>

                  <p className="mt-1 text-2xl font-bold text-purple-400">
                    ${product.price}
                  </p>
                </div>

                <button
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-600 text-xl text-white transition-all duration-300 hover:scale-110 hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95"
                  title="Add to cart"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mx-auto mt-16 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        Crafted with <span className="text-purple-500">♥</span> for your
        lifestyle
      </div>
    </div>
  );
}

export default UserList;
