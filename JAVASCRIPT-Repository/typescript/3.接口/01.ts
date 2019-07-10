interface LabeledString {
    label: string
}

const printLabel = (labeledObj:LabeledString):void => {
    console.log(labeledObj.label)
}

const obj = {size:10,label:"size 10"}

printLabel(obj)