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
      filename: 'root.js',
      exposes: {},
      // remotes: importmap[mode],
      shared: {
        react: {
          requiredVersion: '17.0.2'
        },
        'react-dom': {
          requiredVersion: '17.0.2'
        },
        'react-router-dom': {
          requiredVersion: '5.3.4'
        },
        '@emotion/react': {
          requiredVersion: '11.10.5'
        },
        '@emotion/styled': {
          requiredVersion: '11.10.5'
        },
        '@mui/material': {
          requiredVersion: '5.11.0'
        }
      }
    })
  ]

  if (command === 'serve') {
    return {
      // dev specific config
      mode: 'development',
      plugins: [...plugins]
    }
  } else {
    // command === 'build'
    return {
      // build specific config
      mode: 'production',
      plugins: [...plugins]
    }
  }
})
