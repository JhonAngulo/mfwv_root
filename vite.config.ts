import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'
import tsconfigPaths from 'vite-tsconfig-paths'

// import { importmap } from './importmap'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const plugins = [
    tsconfigPaths(),
    react(),
    federation({
      name: 'root-module',
      remotes: {
        // remoteApp: {
        //   external: 'http://localhost:5001/remoteEntry.js',
        //   from: 'vite',
        //   format: 'esm'
        // }
        commons_module: 'http://localhost:5001/assets/commons_module.js'
      },
      shared: ['react', 'react-dom']
    })
  ]

  if (command === 'serve') {
    return {
      // dev specific config
      mode: 'development',
      server: {
        port: 5000
      },
      preview: {
        port: 5000
      },
      plugins: [...plugins]
    }
  } else {
    // command === 'build'
    return {
      // build specific config
      build: {
        target: 'esnext'
      },
      mode: 'production',
      plugins: [...plugins]
    }
  }
})
