# frontPageToMyLife

## This is an attempt to build a webpage for myself


## Trello

https://trello.com/b/4LnutwPb/frontpagetomylife

## Musings and requirements:

### What front end
would rather not do react... because im stubborn

choosing svelte because it's brand new. lettttssss ggggooooo

### About svelte
- svelte 
    - svelte.dev

looks like a pretty cool front end. seems like a powerful scripting and gui

#### svelte requriments
- rollup
- degit

#### Running svelte
using their template:
```
npm run dev
```
results in run at http://localhost8080

This uses rollup somehow? 
TODO: learn rollup
rollup- `https://rollupjs.org/guide/en/#creating-your-first-bundle`

```
  "scripts": {
    "build": "rollup -c",
    "dev": "rollup -c -w",
    "start": "sirv public --no-clear"
  },
```
rollup config sets main.js as file that runs.

#### Installing svelte
I ran this command to clone the template:
```
npx degit sveltejs/template front_page
```

#### Project structure
`https://kit.svelte.dev/docs/project-structure#project-files`