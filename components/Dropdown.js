'use client'
import React, { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Dropdown isOpen={isOpen} style={{ marginLeft: '10px', borderRadius: '10px' }}>
            <DropdownTrigger>
                <Button
                    disableRipple
                    variant=""
                    onMouseEnter={() => {
                        setIsOpen(true);
                    }}
                // onMouseLeave={() => {
                //     setIsOpen(false);
                // }}
                >
                    PNG Images
                    <ChevronDownIcon className={`h-6 w-6 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions"
                onMouseLeave={() => {
                    setIsOpen(false);
                }}
            >
                <DropdownItem key="new">Backgrounds</DropdownItem>
                <DropdownItem key="copy">Templates</DropdownItem>
                <DropdownItem key="edit">Illustrations</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}