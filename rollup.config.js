import node_resolve from 'rollup-plugin-node-resolve';
import path from 'path';
import jscc from 'rollup-plugin-jscc';
import static_files from 'rollup-plugin-static-files';
import typescript from 'rollup-plugin-typescript';
import { terser } from "rollup-plugin-terser";

let config = {
    input: './src/main.tsx',
    output: {
        dir: 'docs',
        format: 'esm',
        entryFileNames: '[name].js',
        assetFileNames: '[name].[extname]',
        chunkFileNames: '[name].js',
        sourcemap: false
    },
    plugins: [
        jscc({
            values: {
                _DEBUG: (process.env.NODE_ENV !== 'production'),
                _PROD: (process.env.NODE_ENV === 'production'),
            }
        }),
        node_resolve(),
        typescript({
            tsconfig: 'tsconfig.json'
        }),
        process.env.NODE_ENV === 'production' && static_files({
            include: ['./public']
        }),

    ],
    manualChunks(id) {
        if (id.includes('node_modules')) {
            const directories = id.split(path.sep);
            const name = directories[directories.lastIndexOf('node_modules') + 1];

            if (name.match(/^preact/)) {
                return 'preactBundle';
            }

            if (name.match(/^@nx-js/) || name.match(/^z-preact-easy-state/)) {
                return 'stateManagement';
            }

            return name;
        }
    }
}

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(terser())
}

export default config