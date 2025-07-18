import React from "react";
export default function Carta({prevProduct, setProduct, filter}) {

    const filtreredProduct = prevProduct.filter((item) => {
        if(filter === 'available') return item.available;
        return true
    })

    return (
        <>
        {filtreredProduct.map((item,index) => {
            return(
            <div key={index} className="rounded-2xl flex flex-col gap-y-3">
                <a href="#" className="overflow-hidden relative h-54 rounded-2xl">
                    {item.popular ? <span className="bg-[#f5c769] text-gray-800 text-xs p-1 px-3 rounded-full text-center absolute left-2 top-2 z-10 font-semibold">Popular</span>: ''}
                    <img src={item.image} alt={item.name} className="h-64 md:h-60 lg:h-60 w-auto z-0 duration-300 hover:opacity-75 hover:-translate-y-3" />
                </a>
                <div className="flex flex-row justify-between gap-2">
                    <p className="text-white text-xl font-bold">{item.name}</p>
                    <p className="bg-[#b7dbc5] text-gray-800 text-sm p-1 px-3 rounded-md text-center font-semibold flex flex-col items-center justify-center">{item.price}</p>
                </div>
                <div className="flex flex-row justify-between gap-2">
                    <div className="flex flex-row gap-2">
                        <img src={`/img/Star${item.votes > 0 ? '_fill' : ''}.svg`} className="h-6" alt={item.name} />
                        {item.votes > 0 ? <span className="text-white text-md font-semibold">{item.rating}</span> : ''}
                        <span className="text-gray-500 text-md font-semibold">{item.votes > 0 ? `(${item.votes} votes)` : 'No ratings'}</span>
                    </div>
                    {!item.available ? <span className="text-red-400 text-md font-semibold">Sold out</span> : ''}
                </div>
            </div>
            )
        })}
        </>
    );
}