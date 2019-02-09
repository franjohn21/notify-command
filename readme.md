# `notify-command`

Tired of waiting on slow CLI commands to finish like `npm install`, `webpack`, etc? This tool is here too help by setting up with a notification when slow commands finish.

You can manually specify the command you want to be notified about on the command line, but I recommend using an alias in your shell config file to automatically notify you by default.

### Installation
```console
foo@bar:~$ npm install -g notify-command
```

Now you can run it manually via `notify <your command here>`:
```console
foo@bar:~$ notify sleep 5
```

![screen shot 2019-02-08 at 4 56 29 pm](https://user-images.githubusercontent.com/7452924/52513883-8a923c00-2bc2-11e9-8b80-ba10aefd66ba.png)


### Recommended Usage
I recommend you use an `alias` for things that generally take a long time, such as `npm`, such that all `npm` commands now trigger a notification automatically

Example `.zshrc`:
```
# Check whether the `notify` command exists
[ -x "$(command -v notify)" ] && alias npm="notify npm"
```

```console
foo@bar:~$ npm install
```

Now go do something else for a bit...

![screen shot 2019-02-08 at 4 58 10 pm](https://user-images.githubusercontent.com/7452924/52513932-ea88e280-2bc2-11e9-81e2-91e210c5cc98.png)


