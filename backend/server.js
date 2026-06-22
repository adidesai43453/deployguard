const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const AdmZip = require("adm-zip");

const analyzeProject = require("./scanner/analyzeProject");

const app = express();

app.use(cors());
app.use(express.json());

/*
|--------------------------------------------------------------------------
| Create Required Folders
|--------------------------------------------------------------------------
*/

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

if (!fs.existsSync("extracted")) {
  fs.mkdirSync("extracted");
}

/*
|--------------------------------------------------------------------------
| Multer Configuration
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

app.get("/", (req, res) => {
  res.json({
    message: "DeployGuard API Running",
  });
});

app.post(
  "/api/upload",
  upload.single("project"),
  (req, res) => {
    try {
      const zipPath = req.file.path;

      const extractPath = path.join(
        __dirname,
        "extracted",
        Date.now().toString()
      );

      fs.mkdirSync(extractPath, {
        recursive: true,
      });

      const zip = new AdmZip(zipPath);

      zip.extractAllTo(
        extractPath,
        true
      );

      const extractedItems =
        fs.readdirSync(extractPath);

      let scanPath = extractPath;

      /*
      -------------------------------------------------
      Find first repository folder
      -------------------------------------------------
      */

      const firstFolder =
        extractedItems.find((item) =>
          fs
            .statSync(
              path.join(
                extractPath,
                item
              )
            )
            .isDirectory()
        );

      if (firstFolder) {
        scanPath = path.join(
          extractPath,
          firstFolder
        );
      }

      /*
      -------------------------------------------------
      Handle nested portfolio folders
      -------------------------------------------------
      */

      const nestedItems =
        fs.readdirSync(scanPath);

      if (
        nestedItems.length === 1 &&
        fs
          .statSync(
            path.join(
              scanPath,
              nestedItems[0]
            )
          )
          .isDirectory()
      ) {
        scanPath = path.join(
          scanPath,
          nestedItems[0]
        );
      }

      console.log(
        "FINAL SCAN PATH:",
        scanPath
      );

      const report =
        analyzeProject(scanPath);

      res.json(report);
    } catch (error) {
      console.error(error);

      res.status(500).json({
        error:
          "Failed to analyze repository",
      });
    }
  }
);

/*
|--------------------------------------------------------------------------
| Server
|--------------------------------------------------------------------------
*/

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});