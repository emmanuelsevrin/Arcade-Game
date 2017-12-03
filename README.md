#frontend-nanodegree-arcade-game
===============================

This programme runs a small game enabling players to simulate a challenging road crossing

##How to run the game:
To run the game, simply click on index.html

##How to play the game:
1. First, you will be invited to select the character you would like to play by pressing 1 to 4. 
2. Then, you will enter the game itself. The rules are simple: 
	- You can move by pressing the 4 arrows in your keyboard; up, down, left, right 
	- The green area at the bottom of the space is safe. You character won't be in danger there
	- When you step into the road (the paved space), you need to avoid the ladybugs that cross the street
	- If you hit a ladybug, you will restart in the green area
	- You win by reaching the blue space at the very top. Try to reach it with as few death as possible!

##How the game is programmed: 
The game has a few key functions: 
1. CSS has the code with all the CSS (display code)
2. Images is the repository for all images in the game (tiles, character, ladybugs)
3. Js contains the javascript code of the application. It has three files: 
	- Engine provides the game loop functionality (the loop that updates entities and render). It also draws the initial game board on the screen, and then calls the update and render methods on your player and enemy objects (defined in your app.js).
	- App builds the enemy and player objects, and includes the functions that govern the interaction between them (e.g., collision, victory)
	- Resources is an image loading utility. It enables the image loading functionality

##Potential improvements
Multiple improvements can be considered on the application: 
- Time limit
- Smoother player selection screen
- Victory screen