export default defineConfig({
  site: "https://art-jacobg.com",
  integrations: [mdx(), sitemap()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});