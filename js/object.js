"use sctrict"

const options = {

    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'white',
    },
    makeTest: function(){
        console.log('Test')
    }
};

const {border, bg} = options.colors
console.log({border, bg})

options.makeTest();
console.log(Object.keys(options).length);

delete options.name;

console.log(options);

for (let key in options){

    console.log(key);
    console.log(options[key])

}