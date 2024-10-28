import React from 'react'
import { RiUploadCloudFill } from "react-icons/ri";

export default function UploadImage() {
  return (
<section
      id="upload-section"
      className="w-full lg:w-[70%] xl:w-[60%] 2xl:w-[60%] min-h-[55vh] mx-auto mb-20 flex flex-col justify-center items-center bg-white dark:bg-gray-900   dark:text-white rounded-3xl border-4 border-dashed border-fuchsia-500 p-2 md:p-6"
    >
      <RiUploadCloudFill className="text-fuchsia-500 w-32 h-32 md:w-40 md:h-40 mb-3 md:mb-5" />
      <h3 className="text-base md:text-lg mb-1 md:mb-2 dark:text-gray-100 " >
        Old / Scratched Photo
      </h3>
      <p className="text-sm md:text-base dark:text-gray-400">
        Drag and drop your image here to upload
      </p>
      <label className="text-xl bg-gradient-to-r from-fuchsia-700 via-fuchsia-600 to-pink-600 text-white px-6 py-3 mt-6 rounded-lg hover:scale-105 transition duration-300 ease-in-out">
        <input type="file" id="file-input" className="hidden" />
        Upload Image
      </label>
      <p className="text-sm md:text-base dark:text-gray-400 mt-5 md:mt-7">
        or drop it here
      </p>
    </section>
  )
}
