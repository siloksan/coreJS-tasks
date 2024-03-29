String.prototype.padStart = null;
String.prototype.padStart = function (length, fillString) {
    if (length <= this.length || fillString === '') return this;
    let fillerLength = length - this.length;
    let filler = '';
    while(fillerLength > 0) {
        for(let i = 0; i < fillString.length; i += 1) {
            if (fillerLength > 0) {
                filler += fillString.charAt(i);
                fillerLength -= 1;
            } else {
                break;
            }
        }
    }
    return filler.concat(this);
}

let fruit = '1';
console.log(fruit.padStart(1, '1'));