const https = require("https");
const fs = require("fs");
const path = require("path");

// Icons you want to download
const icons = [
  "logos:aws",
  "logos:apache-airflow",
  "logos:apache-kafka",
  "logos:docker-icon",
  "logos:git-icon",
  "logos:jupyter",
  "logos:python",
  "logos:r-lang",
  "logos:tensorflow",
  "logos:snowflake-icon",
  "logos:grafana",
  "logos:tableau-icon",
  "logos:microsoft-power-bi",
  "logos:microsoft-azure",
  "logos:google-cloud",
  "logos:databricks",
  "simple-icons:apachespark"
];

const outputDir = path.join(__dirname, "..", "public", "icons");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function downloadIcon(name) {
  const encoded = encodeURIComponent(name);
  const url = `https://api.iconify.design/${encoded}.svg`;
  const fileName = name.replace(/[:\/]/g, "-") + ".svg";
  const filePath = path.join(outputDir, fileName);

  https.get(url, (res) => {
    if (res.statusCode !== 200) {
      console.log(`❌ Failed to download: ${name}`);
      return;
    }

    const fileStream = fs.createWriteStream(filePath);
    res.pipe(fileStream);
    fileStream.on("finish", () => {
      fileStream.close();
      console.log(`✅ Downloaded: ${name}`);
    });
  }).on("error", (err) => {
    console.log(`❌ Error downloading ${name}: ${err.message}`);
  });
}

icons.forEach(downloadIcon);
