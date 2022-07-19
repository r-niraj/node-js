process.stdout.write('Enter your name: ');
process.stdin.on('data', (answer)=>{
    process.stdout.write(answer);
    process.exit();
})