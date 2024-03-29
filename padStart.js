String.prototype.padStart = null;
Object.defineProperty(String.prototype, 'padStart', {
    value: function (length, fillString) {
        if (length <= this.length || fillString === '') return this.toString();
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
        return filler.concat(this.toString());
    }
})

let animal = 'cat';
console.log(animal.padStart(1, '1'));