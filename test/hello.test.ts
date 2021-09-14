import { helloName } from '../src/module/hello'

describe("test helloName module", () => {
  it("should return 'Hello, World!' by empty argument for helloName()", () => {
    expect(helloName()).toBe('Hello, World!')
  })

  it("should return 'Hello, CodeSurf!' for helloName('CodeSurf')", () => {
    expect(helloName('CodeSurf')).toBe('Hello, CodeSurf!')
  })
})
