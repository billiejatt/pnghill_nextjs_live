// components/SearchBar.js
import React from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import PHDropdown from "./Dropdown";
import { Button } from "@nextui-org/react";



const Search = () => {
    const items = [
        {
            key: "new",
            label: "New file",
        },
        {
            key: "copy",
            label: "Copy link",
        },
        {
            key: "edit",
            label: "Edit file",
        },
        {
            key: "delete",
            label: "Delete file",
        }
    ];
    return (
        <>
            <div className="mx-auto text-center container">
                <h1 className="text-4xl mb-2 font-bold text-neela">Millions of free Graphics with source</h1>
                <p className="">Royalty Free PNG Images, Vectors, Backgrounds, Templates, Text Effect</p>
            </div>
            <div className="flex items-center shadow-sm border border-gray-200 rounded-lg w-full max-w-2xl px-2 py-1 my-6 mx-auto bg-white hover:outline">
                <PHDropdown />
                <input
                    type="text"
                    placeholder="Search PNG Images"
                    className="flex-grow p-2 outline-none bg-transparent"
                />
                <button className="group rounded-md px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-neela text-white no-underline active:scale-95 scale-100 duration-75">
                    <MagnifyingGlassIcon className="h-5 w-5 text-white" />
                </button>
            </div>
        </>
    );
}

export default Search;
