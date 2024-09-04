import {defineConfig} from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import tsconfigPaths from "vite-tsconfig-paths";

dotenv.config()

const extendedViteDevServerOptions = {}

if (process.env.GITPOD_VITE_URL) {
    extendedViteDevServerOptions.hmr = {
        protocol: 'wss',
        host: new URL(process.env.GITPOD_VITE_URL).hostname,
        clientPort: 443
    }
}

export default defineConfig({
    server: {
        ...extendedViteDevServerOptions
    },
    ssr: {
		noExternal: ['@inertiajs/server'],
    },
    plugins: [
        tsconfigPaths(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        {
            name: "blade",
            handleHotUpdate({ file, server }) {
                if (file.endsWith(".blade.php")) {
                    server.ws.send({
                        type: "full-reload",
                        path: "*",
                    });
                }
            },
        },
        react(),
    ],
})
