//To create a next boilerplate -> npx create-next-app project-name
//To start a next project -> yarn dev

//Page Structure ----------------------------------------------------

//In pages folder, if I add a component,this'll automatically create a route. The name of the route will be same as the file name. For ex: we've created a "about.js" component in the "pages" folder. Now, if we hit http://localhost:3000/about then we can see that component's view. 
//Again, pages->ninjas->test.js....Then, to access the test page -> http://localhost:3000/ninjas/test
//Again, pages->ninjas->index.js....Then, to access the test page -> http://localhost:3000/ninjas/. Cause the name "index" create a root path for that file.

/* So, Next js generates routes automatically */

// We can add components just like react but in separate folder than pages. -------------------------

// We can use <Link href="/"> <a>Home</a> </Link> -> something like that to use client side rendering for the navigation link. All we have to do is to import it like that -> import Link from "next/link" and use that like above. ------------

//Code Splitting --------------------------------
// Layout component -> To use reusable components --------------------------------
//  https://dev.to/ozanbolel/layout-persistence-in-next-js-107g
// 1. _app.js -> Use a Layout component
// 2. Layout component -> children can get by destructuring from the component 

// Global css file 

// 404.js is a special file just like index.js
// To redirect to a different page use, useRouter()

// next head
// next Image 
// Dynamic Routing


// getStaticPaths
// getStaticProps
