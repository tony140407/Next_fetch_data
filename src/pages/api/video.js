export default function handler(req, res) {
    res.setHeader('Cache-Control', 'max-age=3600')
    res.status(200).json({ src: 'https://storage.googleapis.com/meshmallow-dev/temp/demo.mp4' })
}
