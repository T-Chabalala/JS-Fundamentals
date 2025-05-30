const arg = process.argv[2];
const num = parseInt(arg);
if (!isNan(num)) {
    console.log('my number: ${parseInt(num)}');
}else {
    console.log('Not a number');
}