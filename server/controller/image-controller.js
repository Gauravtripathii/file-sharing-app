import File from "../models/file.js";

export const uploadImage = async (req, res) => {
    const fileObject = {
        path: req.file.path,
        name: req.file.originalname
    }
    try {
        const file = await File.create(fileObject);
        res.status(200).json({ path: `https://server-file-sharing-app.onrender.com/file/${file._id}` })
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export const downloadImage = async (req, res) => {
    try {
        const file = await File.findById(req.params.fileId);

        file.downloadContent++;
        await file.save();

        res.download(file.path, file.name);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}