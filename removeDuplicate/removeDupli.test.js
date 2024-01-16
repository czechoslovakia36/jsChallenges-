const removedDuplicate= require('./removeDupli')


test('Remove duplicate from the array', () => {

    expect(removedDuplicate([1,1,1,3,4])).toStrictEqual([1,3,4])
})