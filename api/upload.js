const multiparty = require('multiparty')
const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const form = new multiparty.Form()

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(400).json({ error: 'Failed to parse form' })

    const file = files.file?.[0]
    if (!file) return res.status(400).json({ error: 'No file provided' })

    try {
      const result = await cloudinary.uploader.upload(file.path, {
        upload_preset: 'luxury_bnb',
        folder: 'luxury-bnb'
      })
      res.json({ url: result.secure_url })
    } catch (error) {
      res.status(500).json({ error: 'Upload failed', detail: error.message })
    }
  })
}
