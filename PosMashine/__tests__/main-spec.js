
var m= require('../main');

//loadAllId()
it ('should return [\'0001\',\'0002\',\'0003\',\'0004\',\'0005\',\'0006\',\'0007\',\'0008\',\'0009\',\'0010\'] ',() => {
    expect(m.loadAllId()).toStrictEqual(['0001','0002','0003','0004','0005','0006','0007','0008','0009','0010']);
});

//isBarcodesValid()
//合法
it ('should return true',() => {
    expect(m.isBarcodesValid(['0001', '0003', '0005', '0003'])).toBe(true);
})
//出现不合法数据
it ('should return false',() => {
    expect(m.isBarcodesValid(['0011', '0003', '0005', '0003'])).toBe(false);
});
//出现空输入
it ('should return false',() => {
    expect(m.isBarcodesValid([])).toBe(false);
});

//getOneCommodityInfo()

it ('should return {"id": "0001", "name" : "Coca Cola", "price": 3,"num":0}',() => {
    expect(m.getOneCommodityInfo('0001')).toStrictEqual({"id": "0001", "name" : "Coca Cola", "price": 3,"num":0});
});

//getCommodityList()

it ('should return [{"id": "0001", "name" : "Coca Cola", "price": 3,"num":1},\n' +
    '        {"id": "0003", "name" : "Pepsi-Cola", "price": 5,"num":2},\n' +
    '        {"id": "0005", "name" : "Dr Pepper", "price": 7,"num":1}]',() => {
    expect(m.getCommodityList(['0001', '0003', '0005', '0003'])).toStrictEqual(
        [{"id": "0001", "name" : "Coca Cola", "price": 3,"num":1},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5,"num":2},
        {"id": "0005", "name" : "Dr Pepper", "price": 7,"num":1}]);
});

//getCommoditySum()

it ('should return 20',() => {
    expect(m.getCommoditySum([{"id": "0001", "name" : "Coca Cola", "price": 3,"num":1},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5,"num":2},
        {"id": "0005", "name" : "Dr Pepper", "price": 7,"num":1}])).toBe(20);
});

//settleReceipt()

it ('should return settleReceipt',() => {
    expect(m.settleReceipt(['0011', '0003', '0005', '0003'])).toStrictEqual({
        commodity:[
            {"id": "0001", "name" : "Coca Cola", "price": 3,"num":1},
            {"id": "0003", "name" : "Pepsi-Cola", "price": 5,"num":2},
            {"id": "0005", "name" : "Dr Pepper", "price": 7,"num":1}
        ],
        sum:20
    });
});
//renderReceipt()

it ('should return renderReceipt',() => {
    expect(m.renderReceipt({
        commodity:[
            {"id": "0001", "name" : "Coca Cola", "price": 3,"num":1},
            {"id": "0003", "name" : "Pepsi-Cola", "price": 5,"num":2},
            {"id": "0005", "name" : "Dr Pepper", "price": 7,"num":1}
        ],
        sum:20
    }))
        .toBe(
`------------------------------------------------------------
Coca Cola 3 1
Pepsi-Cola 5 2
Dr Pepper 7 1
------------------------------------------------------------
Price: 20`
);
});

//printReceipt()

it ('should return printReceipt',() => {
    expect(m.printReceipt(['0001', '0003', '0005', '0003'])).toBe(
`------------------------------------------------------------
Coca Cola 3 1
Pepsi-Cola 5 2
Dr Pepper 7 1
------------------------------------------------------------
Price: 20`
    );
});
