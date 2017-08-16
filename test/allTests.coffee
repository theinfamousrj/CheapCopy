chai = require 'chai'
expect = chai.expect

CopyMachine = require "../index"

describe '.copy()', ->
    it 'makes a deep copy of any object', (done) ->
        objectToCopy = { someString: "Certainly a string.", horse: true, potion: 1 }
        newObject = CopyMachine.copy(objectToCopy)
        
        expect(newObject).to.deep.equal(objectToCopy)
        done()
        
    it 'explodes when passed something that is not an object', (done) ->
        numbertoCopy = 20
        expect(CopyMachine.copy).to.throw(Error, 'Item to copy must be an object.')
        done()
        
    it 'passes back a new object that has no reference to the old object', (done) ->
        objectToCopy = { someString: "Certainly a string.", horse: true, potion: 1 }
        newObject = CopyMachine.copy(objectToCopy)
        
        newObject.horse = false
        expect(newObject.horse).to.not.equal(objectToCopy.horse)
        done()