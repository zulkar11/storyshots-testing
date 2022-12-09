# How to check where it is working or not?

Step:
1. Dowload this reposatory 
2. `npm install`
3. `npm test`

it will be pass as there have no change there.

Now go to this `/src/Button/Button.stories.tsx` path and make any change, the run `npm test` again, it will show you the change different with the help of diffing algorithm behind the scenes.
