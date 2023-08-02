const CONFIG = {
  // profile setting (required)
  profile: {
    name: "jungwoo koo",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "data scientist",
    bio: "Data Scientist, deciphering the world through data.",
    email: "jungwoo.koo@student.manchester.ac.uk",
    linkedin: "jungwookoo",
    github: "jungwoo9",
    instagram: "",
  },
  projects: [
    {
      name: `food classifier`,
      href: "https://huggingface.co/spaces/jungwoo9/foodvision_big",
    },
  ],
  // blog setting (required)
  blog: {
    title: "jungwoo9",
    description: "hello world!",
  },

  // CONFIG configration (required)
  link: "https://jungwoo9.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "jungwoo9/jungwoo9",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
