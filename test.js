let chai = require('chai')
let expect = chai.expect

let CopyMachine = require('./index.js')

describe('.copy()', () => {
    it('makes a deep copy of any object', (done) => {
        let objectToCopy = { someString: "Certainly a string.", horse: true, potion: 1 }
        let newObject = CopyMachine.copy(objectToCopy)
        
        expect(newObject).to.deep.equal(objectToCopy)
        done()
    })
        
    it('explodes when passed something that is not an object', (done) => {
        let numbertoCopy = 20
        expect(CopyMachine.copy).to.throw(Error, 'Item to copy must be an object.')
        done()
        
    })
        
    it('passes back a new object that has no reference to the old object', (done) => {
        let objectToCopy = { someString: "Certainly a string.", horse: true, potion: 1 }
        let newObject = CopyMachine.copy(objectToCopy)
        
        newObject.horse = false
        expect(newObject.horse).to.not.equal(objectToCopy.horse)
        done()
    })
})