import { expect } from "chai"
import index from "./index"

describe("sanity check", () => {
  it("should run mocha and chai", () => {
    expect(index).to.exist
  })
})
