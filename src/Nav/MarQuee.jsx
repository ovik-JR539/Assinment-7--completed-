import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
import React from 'react';

const MarQuee = async () => {

    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products")
    const data = await res.json()

    // https://api.api-store.workers.dev/api/bazardor/products


    console.log(data)

    return (
        
        <div className="border bg-gray-300">


            <MarqueeText behavior="scroll" loop="-1" direction="right" duration={20} className="py-2">

             {data.map(h => <span key={`repeat-${h.id}`}><span>{h.image}  {h.nameBn} {h.today}  টাকা /{h.unit}
            {h.change.dir === "up" ? <span className="text-red-600  "> ▲ </span> : <span className="text-green-600 "> ▼ </span> } {h.change.pct}% 
            </span> <span className='mx-7'>●</span></span>)}

             




           </MarqueeText>


        </div>
    );
};

export default MarQuee;