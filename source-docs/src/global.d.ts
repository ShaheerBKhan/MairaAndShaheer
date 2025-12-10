// Minimal JSX typing fallback to avoid editor errors before dependencies are installed.
// Remove this file once `@types/react` is installed and the project dependencies are installed.
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any
  }
}
