const fs = require('fs-extra');
const cp = require('child_process');
const yargs = require('yargs');

//Parse CLI parameters
const argv = yargs
    .option('name', {
        alias: 'n',
        description: 'Name of your website',
        type: 'string',
        demandOption: true,
    })
    .option('output', {
        alias: 'o',
        description: 'Output directory',
        type: 'string',
        demandOption: false,
        default: 'output'
    })
    .help()
    .alias('help', 'h').argv

console.log(`- Running the script... 🕙 \n`);

try {
    console.log(`Navigating to ${argv.output} 🏃`);
    process.chdir(`${argv.output}`);
} catch (err) { 
    console.log(`- Directory doesn't exist. Creating the directory ${argv.output} and navigating to it 🏃`);
    fs.mkdirSync(argv.output);
    process.chdir(`${argv.output}`);
}

//Generate ng-application using the angular CLI
console.log(`\n- Generating application ⌛`);
cp.execSync(`npx -p @angular/cli ng n ${argv.name} --minimal --routing --skip-install --style=scss --force`);
console.log(`Application created in ${argv.output}/${argv.name} ✅`);

console.log(`Navigating to project folder, ${argv.name} 🏃`);
process.chdir(`${argv.name}`);

//Install ng-universal
console.log(`\n- Enabling ng-universal (can take a couple of minutes) ⌛`);
cp.execSync(`npx -p @angular/cli ng add @nguniversal/express-engine@14.2.3 --defaults --skip-confirmation`);

console.log(`Application created successfully 🏁`);
console.log('Check that nguniversal works by running the following command: npm run prerender');

// Clean up unnecessary generated stuff here


// Setup folder-structure here


// Add a shared http-service and a test-api service here


// Add some basic routing here