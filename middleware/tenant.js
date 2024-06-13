// server-middleware/tenant.js
export default function (req, res, next) {
    const hostname = req.headers.host; // Ambil hostname dari request
  
    if (hostname.includes('news.unpam.local') || hostname.includes('news.unpam.ac.id')) {
      req.url = `/site/news${req.url}`; // Ubah URL untuk subdomain 'news'
    }
  
    next(); // Lanjutkan ke middleware berikutnya
  }
  