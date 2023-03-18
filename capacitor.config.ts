import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "dev.cureofthelost.app",
  appName: "cure-of-the-lost",
  webDir: "out",
  bundledWebRuntime: false,
  server: {
    url: process.env.IP_ADDR || "",
    cleartext: true,
  },
};

export default config;
