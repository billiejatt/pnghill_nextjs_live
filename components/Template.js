'use client'
import React, { useEffect, useState } from 'react';
import NextImage from "next/legacy/image"; // Rename the import to avoid conflicts

const imagesArray = [
    {
        alt: "Image1's alt text",
        caption: "Image1's description",
        src: "https://png.pngtree.com/png-vector/20240723/ourlarge/pngtree-jashn-e-azadi-mubarak-hoo-caligraphy-vector-png-image_13183159.png",
    },
    {
        alt: "Image2's alt text",
        caption: "Image2's description",
        src: "https://w7.pngwing.com/pngs/698/812/png-transparent-download-save-save-on-computer-upload-file-guardar-audio-controls-ui-icons-free-icon-thumbnail.png",
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: "https://png.pngtree.com/png-vector/20220814/ourmid/pngtree-jashn-e-azadi-mubarak-png-image_6110029.png",
    },

    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: "https://png.pngtree.com/png-clipart/20230913/original/pngtree-14-august-pakistan-independence-day-vector-png-image_11080110.png"
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: "https://png.pngtree.com/png-vector/20230814/ourmid/pngtree-hut-ri-79-official-logo-in-2024-vector-png-image_9181623.png"
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: "https://png.pngtree.com/png-vector/20230814/ourmid/pngtree-hut-ri-79-official-logo-in-2024-vector-png-image_9181623.png"
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: "https://png.pngtree.com/element_our/png/20180928/beautiful-hologram-water-color-frame-png_119551.jpg"
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: "https://png.pngtree.com/png-clipart/20190918/ourmid/pngtree-pink-watercolor-brushes-171474-png-image_1733978.jpg"
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: "https://png.pngtree.com/element_our/sm/20180323/sm_5ab4a26e8d73b.jpg"
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: "https://png.pngtree.com/element_our/sm/20171126/sm_5a1ad63f21109.jpg"
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: "https://png.pngtree.com/png-clipart/20190116/ourmid/pngtree-rose-chalk-and-gold-brush-texture-decorative-elements-png-image_354691.jpg"
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png"
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: "https://png.pngtree.com/png-clipart/20220620/ourmid/pngtree-arrow-shape-red-simple-direction-png-image_5215909.png"
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png"
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: "https://png.pngtree.com/element_our/sm/20171126/sm_5a1ad63f21109.jpg"
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: "https://png.pngtree.com/png-clipart/20190116/ourmid/pngtree-rose-chalk-and-gold-brush-texture-decorative-elements-png-image_354691.jpg"
    },
    {
        alt: "Image1's alt text",
        caption: "Image1's description",
        src: "https://png.pngtree.com/png-vector/20240723/ourlarge/pngtree-jashn-e-azadi-mubarak-hoo-caligraphy-vector-png-image_13183159.png",
    },
    {
        alt: "Image2's alt text",
        caption: "Image2's description",
        src: "https://w7.pngwing.com/pngs/698/812/png-transparent-download-save-save-on-computer-upload-file-guardar-audio-controls-ui-icons-free-icon-thumbnail.png",
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: "https://png.pngtree.com/png-vector/20220814/ourmid/pngtree-jashn-e-azadi-mubarak-png-image_6110029.png",
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: "https://png.pngtree.com/png-clipart/20230913/original/pngtree-14-august-pakistan-independence-day-vector-png-image_11080110.png"
    },
];

const Template = () => {
    const [imagesWithDimensions, setImagesWithDimensions] = useState([]);

    useEffect(() => {
        const loadImages = async () => {
            const imagePromises = imagesArray.map(image => {
                return new Promise(resolve => {
                    const img = new window.Image(); // Use window.Image to avoid conflict
                    img.src = image.src;
                    img.onload = () => {
                        resolve({
                            ...image,
                            width: img.naturalWidth,
                            height: img.naturalHeight,
                        });
                    };
                });
            });

            const loadedImages = await Promise.all(imagePromises);
            setImagesWithDimensions(loadedImages);
        };

        loadImages();
    }, []);

    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-4">
                {imagesWithDimensions.map((image, index) => {
                    const aspectRatio = image.width / image.height;
                    const flexBasis = `${240 * aspectRatio}px`;
                    const flexGrow = aspectRatio;

                    return (
                        <div
                            key={index}
                            className="flex-grow-0 flex-shrink"
                            style={{
                                flexBasis: flexBasis,
                                flexGrow: flexGrow,
                            }}
                        >
                            <NextImage
                                src={image.src}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                                className="object-contain bg-gray-100 rounded shadow-sm border"
                                layout="responsive"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Template;
