
var m= require('../main');


it ('should return true ', () => {
    expect(m.loadAllBarcodes()).toBe(['0001','0002','0003','0004',]);
});
