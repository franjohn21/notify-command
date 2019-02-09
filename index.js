#!/usr/bin/env node
const cp = require('child_process');
const path = require('path');
const notifier = require('node-notifier');
const MAX_TITLE_LENGTH = 35;

const cmd = process.argv[2];
const args = process.argv.slice(3);
const before = Date.now();
const { status } = cp.spawnSync(cmd, args, {
  stdio: 'inherit',
  shell: true,
});
const after = Date.now();
const timeInSeconds = ((after - before) / 1000).toFixed(2);

let commandTitle = cmd;

Array.from(args).some(arg => {
  if (commandTitle.length + arg.length > MAX_TITLE_LENGTH) {
    commandTitle += '...';
    return true;
  } else {
    commandTitle = `${commandTitle} ${arg}`;
  }
});

notifier.notify({
  title: `'${commandTitle}' ${status === 0 ? 'finished' : 'errored'}`,
  message: `Took ${timeInSeconds}s in ${process.cwd()}`,
  icon: path.join(__dirname, status === 0 ? 'checkmark.png' : 'x-icon.png'),
});

process.exit(0);
