
export const create_array = () => {

let array: number[] = []

for (let i = 0; i < 1000; i++) {

let number: number = Math.random() * Math.floor(1000);

let finalNum:string =  number.toFixed(0);

array.push(Number.parseInt(finalNum));
    
}

return array;
}
