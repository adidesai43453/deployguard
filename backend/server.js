const multer = require("multer");
const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
  
    filename: function (req, file, cb) {
      cb(
        null,
        Date.now() + path.extname(file.originalname)
      );
    },
  });
  
  const upload = multer({
    storage,
  });

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "DeployGuard API Running",
  });
});

const AdmZip = require("adm-zip");

const fs = require("fs");

const analyzeProject = require("./scanner/analyzeProject");

app.post(
  "/api/upload",
  upload.single("project"),
  (req, res) => {

    const zipPath = req.file.path;

    const extractPath =
      path.join(
        __dirname,
        "extracted",
        Date.now().toString()
      );

    fs.mkdirSync(extractPath, {
      recursive: true,
    });

    const zip = new AdmZip(zipPath);

    zip.extractAllTo(extractPath, true);

    const extractedItems =
    fs.readdirSync(extractPath);
  
  let scanPath = extractPath;
  
  // find first directory
  
  const firstFolder =
    extractedItems.find(item =>
      fs
        .statSync(
          path.join(extractPath, item)
        )
        .isDirectory()
    );
  
  if (firstFolder) {
    scanPath = path.join(
      extractPath,
      firstFolder
    );
  }
  
  const nestedItems =
    fs.readdirSync(scanPath);
  
  if (
    nestedItems.length === 1 &&
    fs.statSync(
      path.join(scanPath, nestedItems[0])
    ).isDirectory()
  ) {
    scanPath = path.join(
      scanPath,
      nestedItems[0]
    );
  }
console.log("FINAL SCAN PATH:", scanPath);
const report =
  analyzeProject(scanPath);

res.json(report);

  }
);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});