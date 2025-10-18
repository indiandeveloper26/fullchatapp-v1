import React from 'react'

function layoutbar() {

    let dta = [

        { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" }, { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" }, { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" }, { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" }, { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" },
        { "name": "sahil" },


    ]


    return (
        <div className=' w-md bg-red-500'>layoutbar


            {
                dta.map((item) => {
                    return (
                        <>
                            <h1>
                                {item.name}
                            </h1>
                        </>
                    )
                })
            }
        </div>
    )
}

export default layoutbar