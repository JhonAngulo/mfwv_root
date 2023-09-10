// <reference types="vite/client" />

declare module '*.svg' {
  const content: never
  export default content
}

declare module '*.png' {
  const content: never
  export default content
}

declare module 'commons_module/Componets' {
  import { type FunctionComponent } from 'react'
  const DefaultTheme: () => unknown

  const Button: FunctionComponent
  return {
    Button
  }
}
