import React from "react";
import { HeadingNav } from "@/once-ui/components";
const Home = () => {
  return (
    <div>
      <p>this is it</p>
      <HeadingNav gap="s" mobileDirection="column">
        <HeadingNav gap="24">
          <HeadingNav as="h2" id="introduction">
            Introduction
          </HeadingNav>
          <HeadingNav>
            The HeadingNav component provides an automatic table of contents
            navigation that highlights the current section as you scroll through
            the page.
          </HeadingNav>
          <HeadingNav as="h2" id="features">
            Features
          </HeadingNav>
          <HeadingNav>Key features of the HeadingNav component:</HeadingNav>
          <HeadingNav>
            • Automatically detects and displays page headings
          </HeadingNav>
          <HeadingNav>
            • Highlights the current section while scrolling
          </HeadingNav>
          <HeadingNav>
            • Smooth scrolling to sections when clicking links
          </HeadingNav>
          <HeadingNav>• Responsive and accessible navigation</HeadingNav>
          <HeadingNav as="h2" id="usage">
            Usage
          </HeadingNav>
          <HeadingNav>
            Simply add the HeadingNav component to your page and use HeadingLink
            components for your section headings.
          </HeadingNav>
          <HeadingNav as="h2" id="customization">
            Customization
          </HeadingNav>
          <HeadingNav>
            The HeadingNav component inherits styles from its parent container
            and can be customized using standard CSS properties.
          </HeadingNav>
        </HeadingNav>
        <HeadingNav
          style={{
            width: "300px",
          }}
        >
          <HeadingNav />
        </HeadingNav>
      </HeadingNav>
    </div>
  );
};

export default Home;
