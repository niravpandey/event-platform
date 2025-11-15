Below is my attempt at understanding _Next.js_

Thanks to **Javascript Mastery** on YouTube for providing an excellent walkthrough of all concepts and ideas behind 
Next.js. They have been incredibly helpful. 

I have taken notes on the overarching ideas introduced in the video.

## Client Side Rendering

- ```use client``` is required for any component rendered on the client's side. 
- Server components are rendered only on the server side.
- Client components are pre-rendered on the server to create a static shell and hydrated on the client side.
- The server leaves a few gaps for the browser to fill.
- Usually the code dependent on the browser. 
- Tip: Leave it as SSR, manually change to Client Side.