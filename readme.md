# JavaScript Wrapper for Newgrounds.io V3

This is a Javascript Library for use the [Newgrounds.io](https://newgrounds.io) functions for your games, like medals or scoreboards!!!

## Example

```js
const Newgrounds = require("newgrounds.js");

Newgrounds.Init("appID", "Encry Zip");

Newgrounds.UnlockMedal(129521);
Newgrounds.PostScore(12052012, 50);
```

## Functions

`Newgrounds.UnlockMedal(id)`: Get the medal with the `id` <br>
`Newgrounds.PostScores(id, score)`: Post `score` in the scoreboard with the `id` <br>
`Newgrounds.GetScores(id, user, period, social, skip, limit)`: [Score Object](http://www.newgrounds.io/help/objects/#score) - Return a Scores Object] 
`Newgrounds.Username()`: Get the username of the newgrounds session <br>
`Newgrounds.Version()`: Get the version of the newgrounds game <br>
`Newgrounds.IsSupporter()`: Get boolean of supporter user  <br>
`Newgrounds.Call(component, parameters?)`: Call any component of [Newgrounds.io](https://newgrounds.io) 

## Install

npm: `npm i newgrounds.js` <br>
script: `<script src="https://cdn.jsdelivr.net/npm/newgrounds.js@latest/dist/newgrounds.js"></script>` <br>
cdn: [jsdelivr](https://cdn.jsdelivr.net/npm/newgrounds.js@latest/dist/newgrounds.mjs) or [unpkg](https://unpkg.com/newgrounds.js@latest/dist/newgrounds.mjs)

## Credits

[Javascript Wrapper](https://github.com/KilledByAPixel/newgrounds) by [KilledByAPixel](https://github.com/KilledByAPixel) <br>
[Javascript Re-Wrapper](https://github.com/lajbel/reversion-newgrounds) by [Me](https://github.com/lajbel)