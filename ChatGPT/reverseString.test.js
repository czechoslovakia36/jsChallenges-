const reverse = require('./reverseString')




test('Reverse a string', () => {
    expect(reverse('vivek')).toBe('keviv')
    expect(reverse("    ")).toBe("    ")
})