export default {
  optimizeDeps: {
    include: ["jquery"],
  },
  build: {
    rollupOptions: {
      input: {
        index: "/main.js", // Common entry point for shared modules
        indexPage: "index.html", // Entry point for index.html
        aboutPage: "/pages/About.html", // Entry point for about.html
        servicePage: "/pages/Service.html",
        contactPage: "/pages/Contact.html",
        storyPage: "/pages/Story.html",
        carrerPage: "/pages/Carrers.html",
      },
    },
  },
};
