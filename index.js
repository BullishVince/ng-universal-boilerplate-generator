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

console.log(`- Generating application ⌛`);

//Generate ng-application using the angular CLI
cp.execSync(`npx -p @angular/cli ng n ${argv.name} --minimal --routing --skip-install --style=scss --force --directory=${argv.output}`);
console.log(`Application created in ${argv.output}`);

