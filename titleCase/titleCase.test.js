const titleCase = require('./titleCase');


test("title case the string",()=>{
    expect(titleCase('hello world')).toBe("Hello World");
    expect(titleCase('javascript programming')).toBe('Javascript Programming');
    expect(titleCase('openai chatbot')).toBe('Openai Chatbot');
})