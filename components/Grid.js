'use client'
import React, { useState } from 'react';
import NextImage from "next/legacy/image";

const Grid = (props) => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-4">
                {props.images.map((item, index) => {
                    item = item.node;
                    const image = {};
                    image.src = item.items.png.node.sourceUrl;
                    image.alt = item.items.png.node.altText;
                    image.width = item.items.png.node.mediaDetails.width;
                    image.height = item.items.png.node.mediaDetails.height;
                    const aspectRatio = image.width / image.height;
                    const flexBasis = `${240 * aspectRatio}px`;
                    const flexGrow = aspectRatio;

                    // Local hover state for each image
                    const [isHovered, setIsHovered] = useState(false);

                    return (
                        <div
                            key={index}
                            className="relative flex-grow-0 flex-shrink overflow-hidden cursor-pointer"
                            style={{
                                flexBasis: flexBasis,
                                flexGrow: flexGrow,
                                borderRadius: '10px',
                                backgroundImage: `url('./pngbg.png')`,
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <NextImage
                                src={image.src}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                                className="object-contain bg-transparent rounded shadow-sm border max-h-[350px]"
                                layout="responsive"
                            />
                            {isHovered && (
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-4">
                                    <div className="flex justify-end space-x-2">
                                        <button className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">
                                            {item.items.fileType}
                                        </button>
                                        <button className="text-white bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded">
                                            {item.items.imageType}
                                        </button>
                                    </div>
                                    <div className="text-white text-base font-semibold">
                                        {item.title} {/* Displaying alt text as title */}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Grid;
