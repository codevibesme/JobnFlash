import React from "react";

const Category = () => {
    const categories = [
        {
            name: "Web Development",
            img: "/assets/webdev_cat2.png"
        },
        {
            name: "Marketing",
            img: "/assets/marketting_cat.png"
        },
        {
            name: "App Development",
            img: "/assets/appdev_cat.png"
        },
        {
            name: "UI/UX Designer",
            img: "/assets/ux_cat.png"
        },
    ]
    return (
        <div className="flex min-h-fit w-full justify-center flex-col md:flex-row">
            {categories.map((item) => { 
                return (
                    <div className="h-full rounded-xl hover:scale-105 me-6">
                        <img src={item.img} className="h-48 md:h-64 mx-auto" />
                        <p className="text-2xl font-semibold mb-6 mt-2 text-center">{item.name}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Category;