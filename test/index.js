import { secretFunction, secretLongRunningFunction } from '../src/index'
import { expect } from 'chai'

describe('Fancy functions', function() {
  describe('When running secretFunction', function() {
    before(function() {
      this.result = secretFunction(1, 2)
    })
    it('should add numbers', function() { expect(this.result).to.equal(3) })
  })

  describe('When running secretLongRunningFunction', function() {
    this.timeout(5000)

    before(async function() {
      this.result = await secretLongRunningFunction(2, 3)
    })
    it('should add numbers', function() { expect(this.result).to.equal(5) })
  })
})
