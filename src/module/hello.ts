export const helloName = (name?: string): string => {
  return `Hello, ${name || 'World'}!`
}
