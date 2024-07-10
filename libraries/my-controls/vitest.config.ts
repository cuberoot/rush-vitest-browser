import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["./src/**/*.test.{ts,js}", "./test/**.test.{ts,js}"],
    // browser: {
    //   enabled: false,
    //   name: 'chromium',
    //   headless: false,
    //   provider: 'playwright',
    //   isolate: true,
    //   providerOptions: {
    //     launch: {
    //       args: ['--ignore-certificate-errors'],
    //     },
    //   },
    // },
    browser: {
      provider: "playwright", // or 'webdriverio'
      enabled: true,
      name: "chromium", // browser name is required
    },
  },
});
