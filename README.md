# React Native Learning Lab

This repository is my public notebook for exploring React Native concepts, animations, and UI practices. Instead of keeping all the experiments local, I am sharing what I build so other developers can pick up ideas, learn from my mistakes, and remix the patterns for their own projects.

## Why this exists

- **Teach by doing** – each feature is a hands-on experiment that documents what I learned while building it.
- **Share practical snippets** – real project structure, not isolated gists, so you can see how everything fits together.
- **Create a reference** – future implementations will live here too, giving me (and you) a growing library of React Native techniques.

## Getting started locally

1. Install dependencies  
   ```sh
   yarn install
   ```
   (or `npm install` if you prefer npm)

2. Start Metro  
   ```sh
   yarn start
   ```

3. Run on a device or simulator  
   ```sh
   yarn android   # Android
   yarn ios       # iOS (remember to run pod install first)
   ```

## Learning snapshots

### ScrollSynced Tab Bar (v1)

- **What it is**  
  A vertically scrolling city guide where the tab bar stays in sync with the content. Selecting a tab scrolls to the matching section, and manual scrolling updates the active tab in real time.

- **Why I built it**  
  I wanted to understand how to coordinate complex gestures and scrolling with modern animation libraries. It is a common pattern in polished apps, and recreating it from scratch teaches a lot about layout measurement and shared state.

- **How it works**  
  - `Animated.FlatList` renders the sections so I can subscribe to native scroll events.  
  - `react-native-reanimated` (v4) powers the shared values and provides smooth indicator transitions in the tab bar.  
  - `scheduleOnRN` from `react-native-worklets` bridges updates back to the JS thread when I need to trigger imperative scrolling.  
  - Layout measurements (`onLayout`) collect the height of each section to map scroll offsets accurately.

- **Assets**  
  City images come from Unsplash with lightweight `?w=800&q=45` parameters to keep bundle sizes friendly while still showcasing each location.

  ### 🎥 ScrollSynced Tab Bar Demo
  <img src="./assets/scroll-synced-tabbar-demo.gif" width="400" />


### Scroll-Adaptive Sticky Footer (v1)

- **What it is**  
  A Myntra-inspired product detail page where the pricing CTA hugs the bottom of the screen until you reach the native "Add to Bag" section, then seamlessly promotes that section into view.

- **Why I built it**  
  Sticky purchase affordances are everywhere in commerce apps. Recreating the adaptive behavior helped me understand how big retailers keep the CTA visible without compromising long-form content.

- **How it works**  
  - `Animated.FlatList` renders the PDP sections so I can measure layout and track scroll progress in one place.  
  - `react-native-reanimated` shared values (`useAnimatedScrollHandler`, `useAnimatedStyle`) decide when to dock or release the footer based on the measured y-offset of the "Add to Cart" block.  
  - `onLayout` captures section heights once everything renders, letting me map list indices to cumulative offsets and mimic Myntra’s precise reveal timing.  
  - A dedicated `theme` + rich `product` data set in `constants.ts` keep typography, colors, and copy consistent with the Myntra aesthetic.

- **Assets**  
  Product photography and related styles are sourced from Unsplash (with resizing query params) and stitched into a lightweight gallery + related carousel.

  ### 🎥 Scroll-Adaptive Sticky Footer Demo
  <img src="./assets/stickyFooterDemo.gif" width="400" />


---
