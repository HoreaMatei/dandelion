import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "./components/StoryblokProvider";

import "./globals.css";
import ContactBar from "./components/ContactBar";
storyblokInit({
  accessToken: process.env.STORYBLOK_API_KEY,
  use: [apiPlugin],
});
export const metadata = {
  title: "Dandelion",
  description: "Dandelion",
};
export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en" className="!scroll-smooth">
        <body>
          <div className="main_content_div">{children}</div>
          <ContactBar />
        </body>
      </html>
    </StoryblokProvider>
  );
}
