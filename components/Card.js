// components/ImageCard.js
export default function ImageCard() {
    return (
        <div className="bg-white p-4 shadow-lg rounded-lg overflow-hidden">
            <div className="relative mx-2 mt-2">
                <a href="https://pnghill.com/freepng/merry-christmas-balls-and-grass-color-green-background-free-png-download-40.html">
                    <img
                        src="https://pnghill.com/uploads/x24/Dupb8AWNmUO35lrHZiGFCaxjJtP2IY.jpg"
                        alt="Merry Christmas Balls And Grass"
                        className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                </a>
                <div className="absolute top-2 right-2 flex space-x-1 z-10">
                    <a href="#" className="bg-gray-700 text-white px-2 py-1 text-xs rounded">AI</a>
                    <a href="#" className="bg-blue-500 text-white px-2 py-1 text-xs rounded">JPG</a>
                </div>
            </div>
            <div className="px-2 py-4">
                <h3 className="text-lg font-semibold truncate">
                    <a href="https://pnghill.com/freepng/merry-christmas-balls-and-grass-color-green-background-free-png-download-40.html" className="text-blue-600">
                        Merry Christmas Balls And Grass Color Green Background Free PNG Download
                    </a>
                </h3>
                <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600">4961*3543</p>
                    <div className="flex items-center">
                        <img src="https://pnghill.com/assets/icon-see.png" alt="Views" className="w-4 h-4 mr-1" />
                        <span>557</span>
                        <img src="https://pnghill.com/assets/icon-pctdown.png" alt="Downloads" className="w-4 h-4 mx-3" />
                        <span>2</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
