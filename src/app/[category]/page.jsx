import Link from 'next/link';
import React from 'react';


const CategoryPage = async ({ params }) => {

    const { category } = await params;
    const decodedCategory = decodeURIComponent(category || "");

    const res = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/products"
    );

    const data = await res.json();

    const products = Array.isArray(data)
        ? data.filter(function (item) {
            return (
                item.category === category ||
                item.category?.toLowerCase() === decodedCategory.toLowerCase()
            );
        })
        : [];

    if (products.length === 0) {
        return (
            <div className='w-full max-w-7xl mx-auto px-2 py-10 text-center'>
                <div className='bg-white border rounded-[15px] shadow p-10 max-w-lg mx-auto'>
                    <div className='text-6xl mb-4'>🛒</div>
                    <h2 className='text-2xl font-bold mb-2'>কোনো পণ্য পাওয়া যায়নি</h2>
                    <p className='text-gray-500 mb-6'>
                        "{decodedCategory}" ক্যাটাগরিতে এই মুহূর্তে কোনো পণ্য তালিকাভুক্ত নেই।
                    </p>
                    <Link
                        href="/"
                        className='bg-green-700 text-white px-5 py-2.5 rounded-xl font-medium inline-block hover:bg-green-800 transition'
                    >
                        হোম পেজে ফিরে যান
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className='w-full max-w-7xl mx-auto px-2 py-5'>

            <div className='bg-white border rounded-[15px] shadow p-5 mb-5'>

                <div className='flex items-center gap-4 p-3'>

                    <div className='text-5xl '>
                        {products[0]?.categoryIcon}
                    </div>

                    <div>

                        <h2 className='text-[32px] font-bold'>
                            {products[0]?.categoryNameBn}
                        </h2>

                        <p className='text-[24px]'>
                            {products.length} পণ্যের আজকের দাম ও পরিবর্তন
                        </p>

                    </div>

                </div>

            </div>

            <p className='font-bold text-[32px] mx-5 mt-18'>মোট  {products.length}  পণ্য দেখানো হচ্ছে</p>

            {/* CARDS BELOW */}
            <div className='grid grid-cols-3 gap-2'>

                {products.map((product) => {
                    return (
                        <Link key={product.id} href={`/productDetail/${product.id}`} >



                                <div key={product.id} className="bg-white border rounded-[15px] shadow-md p-5 m-5">

                                    <div className="flex gap-2 py-5">
                                        <p className="bg-gray-300 border rounded-[15px] w-12 h-12 flex justify-center items-center">
                                            {product.image}
                                        </p>

                                        <div>
                                            <p className='font-bold text-[18px]'>{product.nameBn}</p>
                                            <p>প্রতি ({product.unit})</p>
                                        </div>
                                    </div>



                                    <div className="flex justify-between gap-2">


                                        <div >

                                            <p>আজকের দাম</p>
                                            <p className='font-bold text-[32px]'>{product.today} টাকা</p>


                                        </div>

                                        <p className="flex justify-center items-center  ">


                                            <span className="bg-gray-200 border rounded-[25px] mt-4 py-2 px-3 inline-flex items-center">

                                                <span className="w-5 text-center">
                                                    {product.change?.dir === "up" ? (
                                                        <span className="text-red-600">▲</span>
                                                    ) : product.change?.dir === "down" ? (
                                                        <span className="text-green-600">▼</span>
                                                    ) : null}
                                                </span>

                                                {product.change?.pct}%

                                            </span>



                                        </p>


                                    </div>






                                </div>

                            </Link>
                    );

                })}

            </div>

        </div>
    );
};

export default CategoryPage;