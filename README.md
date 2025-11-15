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

## Dynamic Routing

- It is a route where a part of the URL can change based on user input.
- Wrap the changing part in square brackets to do this. 
- At this stage, we make ```user``` dynamic by creating an ```[id]``` inside its directory.

```
const UserDetails = async({ params }: { params: Promise<{ id: string }>}) => {
    const { id } = await params;
    return (
        <div>
            <h1>Showing details for User #{id}</h1>
        </div>
    )
}
export default UserDetails
```

- Using ```async``` means the component will run on the server, not the browser.
- You are expecting the component to receive parameters
- The ```Promise ```will eventually resolve to an object with ```id: string```
- ```await params``` pauses execution until the ```Promise``` is resolved.
- ```params = Promise.resolve({ id : "123" })```
- After ```await```you get ```{ id: "123" }```