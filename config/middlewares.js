module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "jipl-strapi-aws-s3-images-bucket.s3.us-east-1.amazonaws.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "jipl-strapi-aws-s3-images-bucket.s3.us-east-1.amazonaws.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  // [
  //   {
  //     "AllowedHeaders": ["*"],
  //     "AllowedMethods": ["GET"],
  //     "AllowedOrigins": ["YOUR STRAPI URL"],
  //     "ExposeHeaders": [],
  //     "MaxAgeSeconds": 3000
  //   }
  // ]
];
