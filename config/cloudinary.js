// config/cloudinary.js

const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const trimExtension = fileName => {
    console.log(fileName);
    return fileName
        .split(".")
        .slice(0, -1)
        .join(".");
};

const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "ironhack-games", // The name of the folder in cloudinary
    transformation: {
        height: 500,
        width: 500,
        crop: "fill_pad",
        gravity: "auto",
        quality: 50
    },
    //transformation: { height: 500, width: 500, crop: "crop", quality: 50 },
    filename: (req, file, cb) => {
        cb(null, trimExtension(file.originalname)); // The file on cloudinary would have the same name as the original file name, and we trim the extension (because cloudinary appends it on top)
    }
});

const uploadCloud = multer({ storage: storage });

module.exports = uploadCloud;
