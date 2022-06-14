module.exports = {
  stylesheet: "./pdf/style.css",
  body_class: "markdown-body",
  marked_options: {
    headerIds: false,
    smartypants: true,
  },
  pdf_options: {
    format: "A4",
    margin: "30mm 20mm",
    printBackground: true,
    headerTemplate:
      "<style> section {margin: 0 auto; font-family: system-ui; font-size: 11px;}</style>",
    footerTemplate:
      "<section><div><span class='pageNumber'></span> / <span class='totalPages'></span></div></section>",
  },
  stylesheet_encoding: "utf-8",
};
