#!/usr/bin/node
const args = process.argv;
if (args.length > 3) { console.log('Arguments found'); } else if (args.length <= 2) { console.log('No argument'); } else { console.log('Argument found'); }
