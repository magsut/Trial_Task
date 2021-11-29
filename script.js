let wordsValue = [];
let numbValue = [];
let otherValue = [];

class Value {

    constructor(value, count) {
        this.value = value;
        this.count = count;
    }

    incCount(){this.count++}
}

function checkValueOnSubmit(e){
    e.preventDefault();
    checkValue();
}

function checkValue(){
    let value = document.getVal.val.value;

    let isWord = /^[A-Za-zА-Яа-яёЁ]+$/.test(value);
    let isNumber = /^\d+$/.test(value);

    let newItem = true;

    if(isNumber){
        for(let i = 0; i < numbValue.length; i++){
            if(value === numbValue[i].value){
                numbValue[i].incCount();
                newItem = false;
                break;
            }
        }
        if(newItem){
            numbValue.push(new Value(value, 1));
        }
        print(numbValue,"number");
    } else if(isWord){
        for(let i = 0; i < wordsValue.length; i++){
            if(value === wordsValue[i].value){
                wordsValue[i].incCount();
                newItem = false;
                break;
            }
        }
        if(newItem){
            wordsValue.push(new Value(value, 1));
        }
        print(wordsValue,"word");
    } else{
        for(let i = 0; i < otherValue.length; i++){
            if(value === otherValue[i].value){
                otherValue[i].incCount();
                newItem = false;
                break;
            }
        }
        if(newItem){
            otherValue.push(new Value(value, 1));
        }
        print(otherValue,"other");
    }
}

function print(elements, id){
    if(elements.length > 0){
        let resultString = elements[0].value;
        if(elements[0].count > 1){
            resultString += " (" + elements[0].count + ")";
        }
        for(let i = 1; i < elements.length; i++){
            resultString += "<br>" + elements[i].value.toString();
            if(elements[i].count > 1){
                resultString += " (" + elements[i].count + ")";
            }
        }
        document.getElementById(id).innerHTML = resultString.toString();
    }
}


