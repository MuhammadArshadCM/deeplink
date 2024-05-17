const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 8000;

app.get("/.well-known/assetlinks.json", (req, res) => {
  const response = [
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "in.bslearning.businessstandard",
        sha256_cert_fingerprints: [
          "97:B6:43:6E:63:E4:90:2A:B0:F3:BB:B6:3E:3A:DA:5B:6E:9F:A3:4A:77:06:2C:48:B9:DD:2E:AC:1F:A9:04:D1",
          "6B:04:80:16:B2:88:BD:00:7B:DF:53:E1:8A:42:EE:40:68:34:44:B5:AB:3B:9B:9A:A5:E6:77:75:F0:5A:76:AA",
          "E7:49:90:D3:5E:C9:9B:73:A5:57:59:8B:13:5F:10:10:CD:17:90:4F:45:0B:51:4E:14:A5:C1:B3:5E:06:C3:4E",
        ],
      },
    },
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "in.bslearning.ximek",
        sha256_cert_fingerprints: [
          "97:B6:43:6E:63:E4:90:2A:B0:F3:BB:B6:3E:3A:DA:5B:6E:9F:A3:4A:77:06:2C:48:B9:DD:2E:AC:1F:A9:04:D1",
          "6B:04:80:16:B2:88:BD:00:7B:DF:53:E1:8A:42:EE:40:68:34:44:B5:AB:3B:9B:9A:A5:E6:77:75:F0:5A:76:AA",
          "E7:49:90:D3:5E:C9:9B:73:A5:57:59:8B:13:5F:10:10:CD:17:90:4F:45:0B:51:4E:14:A5:C1:B3:5E:06:C3:4E",
        ],
      },
    },
  ];
  res.status(200).json(response);
});

app.get("/.well-known/apple-app-site-association", (req, res) => {
  const response = {
    applinks: {
      apps: [],
      details: {
        appID: "2L58PD84S5.in.bslearning.ximek",
        paths: ["/deep-link/ximek*"],
      },
    },
  };
  return res.status(200).json(response);
});

app.get("/deep-link/*", (req, res) => {
  const palyStoreUrl =
    req?.params?.palyStoreUrl ??
    "https://play.google.com/store/apps/details?id=in.bslearning.businessstandard";
  const appStoreUrl =
    req?.params?.appStoreUrl || "https://apps.apple.com/us/app/id6448728806";
  const appId = req?.params?.appId || "in.bslearning.businessstandard";
  const templatePath = path
    .join(__dirname, "./assets/index.html")
    .replaceAll("{{playStoreUrl}}", palyStoreUrl)
    .replaceAll("{{appStoreUrl}}", appStoreUrl)
    .replaceAll("{{appId}}", appId);
  const source = fs.readFileSync(templatePath, { encoding: "utf8" });
  return res.send(source);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
