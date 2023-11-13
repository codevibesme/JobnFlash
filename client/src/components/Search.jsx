import React from "react";
import {IoSearchOutline} from 'react-icons/io5'

const Search = () => {
    return(
        <div className="w-full mt-10 p-4">
            <form className="flex">
                <input placeholder="Search Job, title or location" className="rounded-lg text-3xl py-2 px-4 w-2/3 border focus:outline-none border-red-400 me-6"/>
                <button className="rounded-lg text-4xl text-white bg-red-400 p-2 hover:scale-105 hover:shadow-md hover:shadow-red-500">
                    <IoSearchOutline />
                </button>
            </form>
        </div>
    )
}

export default Search;