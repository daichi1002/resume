module.exports = {
  stylesheet: ["./pdf-configs/style.css", "./pdf-configs/profile-style.css"],
  body_class: "markdown-body",
  marked_options: {
    headerIds: false,
    smartypants: true,
  },
  pdf_options: {
    "format": "A4",
    "margin": "15mm 15mm",
    "printBackground": true,
  },
  stylesheet_encoding: "utf-8",
};
