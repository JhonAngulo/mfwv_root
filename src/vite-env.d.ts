// <reference types="vite/client" />

declare module '*.svg' {
  const content: never
  export default content
}

declare module '*.png' {
  const content: never
  export default content
}

declare module 'commons_module' {
  const DefaultTheme: () => unknown
}
