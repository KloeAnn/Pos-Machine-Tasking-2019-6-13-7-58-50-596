const dataBase=[
                   {"id": "0001", "name" : "Coca Cola", "price": 3},
                   {"id": "0002", "name" : "Diet Coke", "price": 4},
                   {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
                   {"id": "0004", "name" : "Mountain Dew", "price": 6},
                   {"id": "0005", "name" : "Dr Pepper", "price": 7},
                   {"id": "0006", "name" : "Sprite", "price": 8},
                   {"id": "0007", "name" : "Diet Pepsi", "price": 9},
                   {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
                   {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
                   {"id": "0010", "name" : "Fanta", "price": 12}
               ]
function printReceipt(barcodes){
    if(!isBarcodesValid(barcodes))
    return "[ERROR]"
    else{

    return renderReceipt(settleReceipt(barcodes))
    }
}

function isBarcodesValid(barcodes){
    let allId=loadAllId()
    if(barcodes.length==0)
        return false
    for(let i=0;i<barcodes.length;i++){
        for(let j=0;j<allId.length;j++){
            if(barcodes[i]==allId[j])
            break;
            if(j==allId.length-1)
            return false
        }
        if(i==barcodes.length-1)
        return true
    }
}

function loadAllId(){
    let allId=[]
    for(let i=0;i<dataBase.length;i++){
        allId.push(dataBase[i].id)
    }
    return allId
}



function getCommodityList(barcodes){
    let commodityList=[]

    for(let i=0;i<barcodes.length;i++){
        if(i==0)commodityList.push(getOneCommodityInfo(barcodes[i]))
        for(let j=0;j<commodityList.length;j++){
            if(barcodes[i]==commodityList[j].id&&commodityList[j].id){
                commodityList[j].num++
                break
            }else{
                if(j==commodityList.length-1)
                commodityList.push(getOneCommodityInfo(barcodes[i]))
            }
        }
    }

    return commodityList
}

function settleReceipt(barcodes){
    let receipt={}
    receipt.commodity=getCommodityList(barcodes)
    let sum=getCommoditySum(receipt.commodity)
    receipt.sum=sum
    console.log(receipt)
    return receipt
}

function getOneCommodityInfo(barcode){
    let commodityInfo={}
    for(let i=0;i<dataBase.length;i++){
        if(barcode==dataBase[i].id){
            let res=dataBase[i]
            commodityInfo.id=res.id
            commodityInfo.name=res.name
            commodityInfo.price=res.price
            commodityInfo.num=0
            return commodityInfo
        }
    }
}

function getCommoditySum(commodityList){
    let sum=0
    for(let i=0;i<commodityList.length;i++){
        sum+=commodityList[i].price*commodityList[i].num
    }
    return sum
}

function renderReceipt(receipt){
    let receiptString=
`Receipts
------------------------------------------------------------
`
    for(let i=0;i<receipt.commodity.length;i++){
            receiptString+=
`${receipt.commodity[i].name} ${receipt.commodity[i].price} ${receipt.commodity[i].num}
`
        }
    receiptString+=
`------------------------------------------------------------
Price: ${receipt.sum}`

    return receiptString
}


module.exports = {
    printReceipt,
    isBarcodesValid,
    loadAllId,
    settleReceipt,
    getCommodityList,
    getOneCommodityInfo,
    getCommoditySum,
    renderReceipt
}
