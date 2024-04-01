import express from "express";
import fs from "fs";
import path from "path";
import Jimp from "jimp";

export const imageRouter = express.Router();

// GET /filteredimage?image_url={{URL}}
// endpoint to filter an image from a public url.
// QUERY PARAMATERS
//    image_url: URL of a publicly accessible image
// RETURNS
//   the filtered image file
imageRouter.get("/filteredimage", async (req, res) => {
    const url = req.query?.image_url;
    //    1. validate the image_url query
    if (!url) {
        res.status(422).send("parameter 'image_url' is required");
        return;
    }
    try {
        //    2. call filterImageFromURL(image_url) to filter the image
        const photo = await Jimp.read(url);
        const tmpfile = path.resolve() + "/tmp/" + "filtered." + Math.floor(Math.random() * 2000) + ".jpg";
        await photo
            .resize(256, 256) // resize
            .quality(60) // set JPEG quality
            .greyscale() // set greyscale
            .writeAsync(tmpfile);
        //    3. send the resulting file in the response
        res.status(200).sendFile(tmpfile, (complete) =>
            //    4. deletes teh tmp file on the server on finish of the response
            fs.unlink(tmpfile, (err) => {
                if (err) {
                    // throw err;
                }
            })
        );
    } catch (e) {
        console.error(e);
        res.status(500).send(e);
    }
});