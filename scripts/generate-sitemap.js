const fs = require("fs")
const path = require("path")

// Configuration
const domain = "https://bytemyresume.tech"
const currentDate = new Date().toISOString().split("T")[0] // YYYY-MM-DD format

// Define your pages and their metadata
const pages = [
  { url: "/", changefreq: "weekly", priority: "1.0" },
  { url: "/about", changefreq: "monthly", priority: "0.8" },
  { url: "/contact", changefreq: "monthly", priority: "0.8" },
  { url: "/how-it-works", changefreq: "monthly", priority: "0.9" },
  { url: "/terms", changefreq: "yearly", priority: "0.5" },
  { url: "/privacy", changefreq: "yearly", priority: "0.5" },
  { url: "/cookies", changefreq: "yearly", priority: "0.5" },
]

// Generate sitemap XML content
let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

// Add each page to the sitemap
pages.forEach((page) => {
  sitemap += "  <url>\n"
  sitemap += `    <loc>${domain}${page.url}</loc>\n`
  sitemap += `    <lastmod>${currentDate}</lastmod>\n`
  sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`
  sitemap += `    <priority>${page.priority}</priority>\n`
  sitemap += "  </url>\n"
})

sitemap += "</urlset>"

// Write the sitemap to a file
const outputPath = path.join(__dirname, "../public/sitemap.xml")
fs.writeFileSync(outputPath, sitemap)

console.log(`Sitemap generated at ${outputPath}`)
