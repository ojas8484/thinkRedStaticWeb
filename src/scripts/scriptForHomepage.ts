

console.log('testing script');
console.log('testing script two');
console.log('testing script three');

let isBoolean : boolean = true;
console.log(isBoolean);
  if (typeof document !== 'undefined') {
    // will run in client's browser only
    let input  = document.getElementById('email') as HTMLInputElement | null;
    input?.addEventListener('input', function (event) {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
});
}