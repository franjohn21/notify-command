# `notify-command`

Tired of waiting on slow CLI commands to finish like `npm install`, `webpack`, etc? This tool is here too help by setting up with a notification when slow commands finish.

You can manually specify the command you want to be notified about on the command line, but I recommend using an alias in your shell config file to automatically notify you by default.

### Installation
```console
foo@bar:~$ npm install -g notify-command
```

Now you can run it via the `notify` command:
```console
foo@bar:~$ notify sleep 5
```

### Recommended Usage
I recommend you use an `alias` for things that generally take a long time, such as `npm`, such that all `npm` commands now trigger a notification automatically

Example `.zshrc`:
```
alias npm="notify npm"
```

```console
foo@bar:~$ notify npm install
```
