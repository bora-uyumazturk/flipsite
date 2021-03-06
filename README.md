# [Flipsite](https://flipsite.netlify.app/)

A business-card inspired personal website design. Visitors can navigate by clicking, dragging, and swiping the mouse. Note: Currently this runs best on 
Safari, and unfortunately is a bit of a mess on Chrome and Firefox.

## Tools

In addition to the usual (TypeScript, React, and TailwindCSS), I used [react-use-gesture](https://github.com/pmndrs/react-use-gesture) for handling swipes and [react-spring](https://github.com/pmndrs/react-spring)
for animations. [React-detect-device](https://github.com/duskload/react-device-detect) also ended up being very helpful.

## Directions

To run locally, clone the repo and run `yarn install && yarn start`.

## Caveats

Currently Firefox is unsupported due to issues involving the css `backface-visibility` property and scroll views. 
