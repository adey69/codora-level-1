Implementation approach:

I first understood the needs of the task at hand and decided which folder structure I have to follow. This being a smaller project, I didn't need to follow the modular approach and finalized the current approach.

Then I analyzed if the app requires any state management, special themes, translations etc so that I could decide the libraries I have to use. Then I identified the UI components I needed to extract

Folder structure:
src -> The root directory of the application

- assets -> Contains the required images
- components -> The reusable components compose this folder.
- data -> Usually I would store API related stuff in here, but the constants required in this project only.
- navigation -> I keep my navigation files separate from components to isolate it.
- screens -> The actual screens for the application
- strings -> I prefer to keep strings in separate file so that if I need to add localization later, I can do that easily.
- theme -> Any theme related code like colors, fonts etc.
- types -> The .d.ts files for globally reusable types.

I keep the structure where I use `index` files to shorten the export paths.
For components, I keep separate files for component, styles, and logic (using custom hooks). This way I am able to avoid the component files from being too large and can easily find out where do I need to make changes.

Assets: Usually I would use SVG icons to keep the app size short but due to unavailability of free svgs, I used png files.

Screens: I only had to implement one screen as per the requirement but to demonstrate a more realistic experience, I added a list of players on the home screen and upon pressing a list item, you're taken to the required screen.

Optimization: There was no heavy processing in the application but for demo purposes, I used useMemo, useCallback and React.memo() features to make use of memoization where possible and avoided those where I felt that the cost of comparison would exceed the cost of re-rendering.

Animations: I prefer react-native-reanimated to create animations and I tried to create a pleasant looking UI by adding a few animations in this.

Due to lack of some personal errands, I couldn't do absolutely everything correct but hopefully the code structure and the neatness can give you an idea of the way I approach the problems.

Let me know if you have any questions!
