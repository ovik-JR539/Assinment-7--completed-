
import Link from "next/link";
import React from "react";

const DetailPage = async ({ params }) => {
    const { slug } = await params;

    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");

    const data = await res.json();

    const product = Array.isArray(data)
        ? data.find((item) => item.id === Number(slug) || item.slug === slug)
        : null;

    if (!product) {
        return (
            <div className='w-full max-w-7xl mx-auto px-2 py-10 text-center'>
                <div className='bg-white border rounded-[15px] shadow p-10 max-w-lg mx-auto'>
                    <div className='text-6xl mb-4'>🔍</div>
                    <h2 className='text-2xl font-bold mb-2'>পণ্যটি পাওয়া যায়নি</h2>
                    <p className='text-gray-500 mb-6'>
                        অনুরোধকৃত পণ্যটি খুঁজে পাওয়া যায়নি।
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

  



    const Word = (product) => {
        if (product.change.dir === "up") {
            return "বেড়েছে";
        } else if (product.change.dir === "down") {
            return "কমেছে";
        } else {
            return "অপরিবর্তিত";
        }
    };



    const price = (product) => {
        return (


            Math.round(product.yesterday * (product.change.pct / 100))

        )
    };

    const lowPrice = (product) => {
        return Math.min(...product.markets.map((item) => item.min));
    };

    const HighPrice = (product) => {
        return Math.max(...product.markets.map((item) => item.max));
    };


    const AveragePrice = (product) => {
        const averageMin = product
            .map((item) => item.min)
            .reduce((sum, num) => sum + num, 0) / product.length;

        const averageMax = product
            .map((item) => item.max)
            .reduce((sum, num) => sum + num, 0) / product.length;



        const procuct = Math.round((averageMax + averageMin) / 2)

        return procuct;
    };





    return (


        <div className="w-full max-w-7xl mx-auto px-2 py-5">

            <div className="bg-white border rounded-[15px] shadow-md p-5 m-10">


                <div className=" flex justify-between">

                    <div className="flex items-center  gap-6">


                        <p className="text-[48px] bg-gray-300 p-2 rounded-[20px]">{product.categoryIcon}</p>

                        <div>

                            <p className="font-bold text-[32px]">{product.nameBn}</p>

                            <p>প্রতি ({product.unit}). {product.categoryNameBn}</p>

                            <p> গতকালের তুলনায় আজ দাম <span className="font-bold text-[18px]">{Word(product)}
                            </span> . <span className="font-bold text-[18px] ">{price(product)} </span> </p>

                        </div>

                    </div>

                    <div className=" bg-gray-100 p-3 rounded-[20px] ">


                        <div className="text-center">



                            <p className="font-bold text-[18px]">আজকের দাম </p>

                            <p className="font-bold text-[22px]">{product.today}</p>

                            <p>টাকা/( {product.unit} )</p>

                            <p>

                                {product.change.dir === "up" ? (
                                    <span className="text-red-600">▲</span>
                                ) : product.change.dir === "down" ? (
                                    <span className="text-green-600">▼</span>
                                ) : null} {product.change.pct}% </p>


                        </div>




                    </div>



                </div>


            </div>









            <div className="bg-white border rounded-[15px] shadow-md p-7 m-10">

                <p className="font-bold text-[24px] my-7">দামের  সারসংক্ষেপ</p>


                <div className="grid grid-cols-3 my-5 ">


                    <div className=" bg-gray-100 p-5 rounded-[20px]  mr-6">
                        <p>সর্বনিম্ন দাম</p>
                        <p className="font-bold text-[48px] text-green-500"> {lowPrice(product)} <span className="text-[24px]">টাকা</span>  </p>
                        <p>সবচেয়ে কম দামের বাজার</p>
                    </div>



                    <div className=" bg-gray-100 p-5 rounded-[20px]  mx-3">
                        <p>সর্বাধিক দাম</p>
                        <p className="font-bold text-[48px] text-red-500">{HighPrice(product)} <span className="text-[24px]">টাকা</span>  </p>
                        <p>সবচেয়ে বেশি দামের বাজার</p>
                    </div>


                    <div className=" bg-gray-100 p-5 rounded-[20px]  ml-6">
                        <p>গড় দাম</p>
                        <p className="font-bold text-[48px] text-green-500">{AveragePrice(product.markets)} <span className="text-[24px]"> টাকা</span>  </p>
                        <p>প্রতি কেজি-এর হিসাবে</p>
                    </div>




                </div>



                <p className="font-bold text-[24px] mt-15 mb-10">বাজারভিত্তিক আজকের দাম</p>



                <div className="bg-white border border-gray-200 rounded-[16px]  text-gray-800 text-[15px]">

                    {/* Heading */}
                    <div className="grid grid-cols-5 gap-4 p-4 font-bold border-b text-center">
                        <p>বাজার</p>
                        <p>বিভাগ</p>
                        <p>সর্বনিম্ন</p>
                        <p>সর্বাধিক</p>
                        <p>গড়</p>
                    </div>

                    {/* Market List */}
                    {product.markets.map((item, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-5 gap-4 p-4 border-b items-center text-center ${index % 2 === 0 ? "bg-white" : "bg-gray-100"
                                }`}
                        >
                            <p>{item.market}</p>
                            <p>{item.division}</p>
                            <p>{item.min} টাকা</p>
                            <p>{item.max} টাকা</p>
                            <p className="font-bold">
                                {Math.round((item.min + item.max) / 2)} টাকা
                            </p>
                        </div>
                    ))}

                </div>









            </div>

        </div>






    );
};

export default DetailPage;











