const helloWorld = require('./hello');

test("Returning 'Hello World' as a string",()=> {
    const result= helloWorld();
    expect(result).toBe('hello world');
})