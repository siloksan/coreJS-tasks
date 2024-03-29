String.prototype.padStart = null;
Object.defineProperty(String.prototype, 'padStart', {
    value: function (length, fillString) {
        if (length <= this.length || fillString === '') return this.toString();//если заданная длинна меньше исходной или строка заполнитель пустая строка мы возвращаем исходную строку
        let fillerLength = length - this.length;//определяем сколько симолов нам нужно добавить
        let filler = '';// наш будущий заполнитель
        while(fillerLength > 0) {//если необходимое число символов добавлено мы выходим из цикла
            for(let i = 0; i < fillString.length; i += 1) {//вложенный цикл необходим если длинна которую нужно добавить к нашей строке больше длинны заполнителя мы заново добавляем символы заполнителя
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
