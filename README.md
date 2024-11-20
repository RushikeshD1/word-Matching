# Word Connect Game

Welcome to the **Word Connect** game! This is an interactive game where you match related word pairs. The game includes tracking of user attempts, a dynamic grid layout, and a reset feature.

## Demo

You can try the live demo of the Word Connect game here:  
**[Word Connect Demo](https://polite-meringue-241d5b.netlify.app/)**  

## Features

### 1. **Matching Logic**
- **Correct Matches**: When a user selects two related words, they turn **green** and disappear from the grid.
- **Incorrect Matches**: If the words do not match, they turn **red** and remain visible, allowing users to try again.

### 2. **Tracking Attempts**
- The game tracks the total number of **user attempts**. Each time a user clicks on two words, it counts as one attempt. This is updated dynamically using React state.

### 3. **Reset Button**
- The **Reset** button clears the board, resets the attempt count, and reinitializes the game to its starting state.

### 4. **Config Settings Panel**
- **Number of Columns**: The user can customize the grid layout by adjusting the **number of columns**.
- The grid layout adjusts dynamically based on the number of columns specified, ranging from **2 to 8 columns**.

## How to Play

1. **Match Word Pairs**:
   - The game presents a grid with word pairs.
   - Click on two words you think are related (e.g., a country and its capital).
   - If the pair is correct, both words will disappear and turn **green**.
   - If the pair is incorrect, the words will turn **red** and remain visible so you can try again.

2. **Tracking Your Attempts**:
   - Every time you select two words, an **attempt** is recorded and displayed.
   - Your attempts are updated in real-time.

3. **Reset the Game**:
   - Click the **Reset** button anytime to clear the grid, reset the attempt count, and restart the game.

4. **Adjust the Grid**:
   - Open the **Config Panel** by clicking the "Config" button.
   - Use the panel to adjust the **number of columns** (ranging from 2 to 8).
   - The grid will resize dynamically based on the selected number of columns.
