import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "./components/StoryblokProvider";
import ContactBar from "./components/ContactBar";
 import './globals.css'
storyblokInit({
  accessToken: "OQ09pa2LLqe7rgabggVtmQtt",
  use: [apiPlugin]
});
 
export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
         <html lang="en" className="!scroll-smooth">
        

         <style>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Domine&family=Karla:wght@200&family=Libre+Baskerville&family=Roboto:wght@100&display=swap')
</style>

     
             <body>{children}
            </body>
             
        </html>
        
    </StoryblokProvider>
  )
}