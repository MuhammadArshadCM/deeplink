const express = require("express");
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
      details: [
        { appID: "2L58PD84S5.in.bslearning.ismeb", paths: ["NOT /_/*", "/*"] },
        { appID: "2L58PD84S5.in.bslearning.rgin", paths: ["NOT /_/*", "/*"] },
        {
          appID: "2L58PD84S5.in.bslearning.businessstandard.stage",
          paths: ["NOT /_/*", "/*"],
        },
        { appID: "2L58PD84S5.in.bslearning.pug", paths: ["NOT /_/*", "/*"] },
        {
          appID: "2L58PD84S5.in.bslearning.bk.stage",
          paths: ["NOT /_/*", "/*"],
        },
        {
          appID: "2L58PD84S5.in.bslearning.fbss.stage",
          paths: ["NOT /_/*", "/*"],
        },
        {
          appID: "2L58PD84S5.in.bslearning.veltechc",
          paths: ["NOT /_/*", "/*"],
        },
        {
          appID: "2L58PD84S5.in.bslearning.businessstandard",
          paths: ["NOT /_/*", "/*"],
        },
        { appID: "2L58PD84S5.in.bslearning.gatb", paths: ["NOT /_/*", "/*"] },
        { appID: "2L58PD84S5.in.bslearning.csbch", paths: ["NOT /_/*", "/*"] },
        { appID: "2L58PD84S5.in.bslearning.aibmp", paths: ["NOT /_/*", "/*"] },
        { appID: "2L58PD84S5.in.bslearning.iimsp", paths: ["NOT /_/*", "/*"] },
        { appID: "2L58PD84S5.in.bslearning.isbsp", paths: ["NOT /_/*", "/*"] },
        {
          appID: "2L58PD84S5.in.bslearning.srmrmpch",
          paths: ["NOT /_/*", "/*"],
        },
        { appID: "2L58PD84S5.in.bslearning.somg", paths: ["NOT /_/*", "/*"] },
        { appID: "2L58PD84S5.in.bslearning.nhceb", paths: ["NOT /_/*", "/*"] },
        { appID: "2L58PD84S5.in.bslearning.sjitc", paths: ["NOT /_/*", "/*"] },
        { appID: "2L58PD84S5.in.bslearning.riimp", paths: ["NOT /_/*", "/*"] },
      ],
    },
  };
  return res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
