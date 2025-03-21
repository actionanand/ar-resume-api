# TS Server 

>This is the local backend API Application, written in typescript, to server the JSON response.


## Development server

Run `npm run server` for a dev server. Navigate to `http://localhost:5201/`. 


## Troubleshooting
### How to kill server when seeing `EADDRINUSE: address already in use`

1. To find the process id (PID) associated with the port

```shell
lsof -i tcp:1668
```

It'll display as below. Please note down the PID from that

```bash
COMMAND PID   USER  FD  TYPE DEVICE                SIZE/OFF NODE NAME
node   44475 chen5 31u IPv4 0x8b1721168764e4bf 0t0 TCP *:strexec-s (LISTEN)
```

2. Then to kill the process by PID

```bash
kill -9 44475
```

-[source](https://levelup.gitconnected.com/how-to-kill-server-when-seeing-eaddrinuse-address-already-in-use-16c4c4d7fe5d "How to kill server when seeing \"EADDRINUSE: address already in use\"")

## Extra help

### Creating `tsconfig.json` file

- if typescript is added globally
`tsc --init`
- if not added globally
`npx tsc --init`

### If you wish to run angular and backend simultaneously,

Add the following to the `package.json` file of angular

```json
"scripts": {
    ...
    "server": concurrently \"ng serve\" \"ar-resume-api/node_modules/.bin/ts-node-dev server/server.ts\"
}
```
By using `concurrently`, whenever we run `npm serve` we'll get both the backend and front-end spun up and live reloading whenever we make any changes to the application.

## Test that CORS is working

Please try to run the following cURL command simulation in your terminal:

```bash
curl -H "Origin: http://localhost:3000" --head http://localhost:5201/api/v1/your-name

```
If you check the response, you'll notice that there is now an `Access-Control-Allow-Origin` header with the origin `http://localhost:3000`. This means that when you run your client-side app on `http://localhost:3000` , the app will be able to retrieve resources from your server.

```bash
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:3000
Vary: Origin
server: ar-resume-api
Author: Anand Raja
Content-Type: application/json; charset=utf-8
Content-Length: 48
ETag: W/"30-wCFITczWLjOV7yt7leOshObdFG4"
Date: Wed, 09 Jun 2021 15:05:10 GMT
Connection: keep-alive
```

## How to Add All Files to a Git Commit Except Some?

You can use any command to add all files you wish to stage (like git add . for example), followed by git reset to unstage the ones you want to exclude: 

```ignore
git add .

# excluding file:
git reset -- path/to/file.txt

# excluding folder:
git reset -- path/to/folder/*
```

For this repo, Please add the following command after staging all the files to exclude the file `db-data-extra.ts`

```git
git reset -- src/db/db-data-extra.ts
```

## Cloning Guide

### clone only the remote primary HEAD (default: origin/master)
```bash
git clone <url> --single-branch
```

### Only specific branch

```bash
git clone <url> --branch <branch> --single-branch [<folder>]
```

```bash
git clone <url> --branch <branch> 
```

### Cloning repositories using degit

```bash
npx degit github:user/repo#branch-name <folder-name>
```
- master branch is default.

```sh
npx degit github:actionanand/ar-resume-api#1-skeleton ts-server-prj
```

## Terminal and Commands 

* [Linux - I am Love with Terminal](https://dev.to/imabtiwari/linux-i-am-love-with-terminal-2n7p)
* [The linux commands that help me work](https://dev.to/skorotkiewicz/the-linux-commands-that-help-me-work-2o99)
* [Top 15 Linux Networking tools that you should know!](https://devdojo.com/serverenthusiast/top-15-linux-networking-tools-that-you-should-know)
* [101 Bash Commands and Tips for Beginners to Experts](https://dev.to/awwsmm/101-bash-commands-and-tips-for-beginners-to-experts-30je)
* [16 Must-Know Bash Commands for Data Scientists](https://towardsdatascience.com/16-must-know-bash-commands-for-data-scientists-d8263e990e0e)
* [Bash cheat sheet: Top 25 commands and creating custom commands](https://www.educative.io/blog/bash-shell-command-cheat-sheet)
* [Getting Started with Vim Editor in Linux](https://www.geeksforgeeks.org/getting-started-with-vim-editor-in-linux/)
* [Linux vim command](https://www.computerhope.com/unix/vim.htm)

## Other resources

* [Replacement for git clone - degit](https://dev.to/vuelancer/replacement-for-git-clone-degit-3lf1)

## Other Projects

* [JSON Server - github](https://github.com/actionanand/json-server)
* [TS Server - github](https://github.com/actionanand/ts-server)
