// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dx8lkxjh7',
    api_key: '182237475199693',
    api_secret: '1piGHhDhHsI2o6Khq3K2jqWKGBw',
    secure: true
})

export default  async function handler(req:any, res: any) {
    const { image } = JSON.parse(req.body);

    const results = await cloudinary.uploader.upload(image);

    res.status(200).json({ ...results })
}
  