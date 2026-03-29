import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { codeInspectorPlugin } from "code-inspector-plugin";

export default defineConfig(({ command }) => ({
    plugins: [
        command === "serve" &&
            codeInspectorPlugin({
                bundler: "vite",
            }),
        tailwindcss(),
        react(),
    ],
}));
