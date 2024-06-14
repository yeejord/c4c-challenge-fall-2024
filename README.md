This is the starter code for Code4Community's technical challenge for Fall 2024. 
For more detailed information about each of the parts of this starter code, check out the [`INFO.md`](INFO.md) file

## Prerequisites

If you don't have them already, you'll need to install Node.js/NPM and Git:
- Node.js + NPM - install [here](https://nodejs.org/en/download/package-manager) (we highly recommend using at least Node 18.0.0 + NPM 8.6.0)
   - You can choose to install via the command line under "Package Manager", or download an installer under "Prebuilt Installer"
   - Node and NPM are installed together
- Git - install [here](https://git-scm.com/downloads)

## Setup Instructions

1. Clone this repo on to your computer. You can do so with the [desktop app](https://desktop.github.com/), or in a terminal with the following:
```
git clone https://github.com/huang0h/c4c-challenge-fall-2024.git
```
2. In a terminal, run `npm install` **at the root of this project** to install the required packages
3. Run `npm run dev` **at the root of this project** to start the app locally
4. Visit `http://localhost:3000` to view the website
    
    4a. The backend will be available at `http://localhost:4000`


High-level overview:
   Aside from the given starter code, I also added an AddData file that takes in the inputs used to make a PartnerTile for each partner. The PartnerTile function takes in PartnerData and then displays that data on a tile. Both AddData and PartnerTitle are implemented in the Dashboard. I edited App.css to asthetically edit each tile/component of the page. In the backend, I got up to the point of implementing post to use when adding the AddData to the partners array that stores all of the data that will then be made into their respective PartnerTiles. I didn't get to this point but also would have done the same for delete.

Reflection:
   In doing this project I honestly had very little time compared to the amount of time I would have liked to put in. I was on a DOC until June 12th and had work on the June 13th so I was unable to complete everything that I wanted to do for this project. Given more time I would have worked on understanding and implementing the backend more thoroughly. After making the buttons, my understanding of JavaScript and Express wasn't to the standard of being able to properly implement them and store the data. Currently, I'm also showing the functionality of my PartnerTitle through hardcode. These were the main issues I was having, as I understood the majority of the frontend. With this being the first time I've worked on a project alone, I was really able to learn more about Git, VScode, and all the languages used at my own pace. Despite this project not passing all of the standards needed, it pushed me out of my comfort zone to a point where I'm going to work on it after submitting in an effort to make it completely functional and to the point where I'm satisfied with my work.
