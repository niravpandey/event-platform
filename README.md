Below is my attempt at understanding _Next.js_

Thanks to **Javascript Mastery** on YouTube for providing an excellent walkthrough of all concepts and ideas behind 
Next.js. They have been incredibly helpful. 

I have taken notes on the overarching ideas introduced in the video.

# Frontend 

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

## Layout 

- The ```layout.tsx``` file is parent to all the pages we've created 
- Adding a component to ```layout.tsx``` adds the component to every other page.
- You can add layouts to multiple pages to customize the elements of the page and its children.

But what if you want the Dashboard Navbar to render separately from the Main? This leads us to 

## Route Groups

- Won't show up in the URL
- Wrapping the folder name inside of parentheses does just this
- ```layout.tsx``` inside ```(dashboard)``` will be specific to only the pages inside that directory
- ```layout.tsx``` inside ```(root)``` will be specific to pages inside it (including the main page)
- Important: Both route groups can't have a ```page.tsx``` lying out and about, as it causes an error
- You cannot have two parallel pages resolve to the same path.

## Error Handling

- We can make a custom error page in our ```(root)``` file
- This is a Client Component.

## Loader 

- ```loader.tsx``` displays the specified content while content is rendering

## ```unauthorized.js```

- This is a new feature in Next.js 16
- Instead of showing an error, tells you that you are unauthorized to view the content.

## Data Fetching

- Server side fetching is easier
- Gives better SEO
- Search Engine Crawlers can more easily index content
- Allows Automatic Request Deduplication (makes sure only one request is sent)
- Still displays results if Javascript is turned off in the browser.

# Backend 

Make a file, then inside it, create another file called ```route.ts```.
