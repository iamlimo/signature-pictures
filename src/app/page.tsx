import React from "react";
import { HeadingNav } from "@/once-ui/components";
import { MegaMenu } from "@/once-ui/components/MegaMenu";
import { Metadata } from "next";
import { HiCog8Tooth } from "react-icons/hi2";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
const Home = () => {
  return (
    <div>
      <MegaMenu
        menuGroups={[
          {
            label: "Products",
            sections: [
              {
                links: [
                  {
                    description: "Get insights into your data",
                    href: "/analytics",
                    icon: "HiOutlineDocumentChartBar",
                    label: "Analytics",
                  },
                  {
                    description: "Protect your assets",
                    href: "/security",
                    icon: "HiOutlineShieldCheck",
                    label: "Security",
                  },
                ],
                title: "Featured",
              },
              {
                links: [
                  {
                    description: "Monitor your metrics",
                    href: "/dashboard",
                    icon: "HiOutlineSquares2X2",
                    label: "Dashboard",
                  },
                  {
                    description: "Configure your preferences",
                    href: "/settings",
                    icon: "HiCog8Tooth",
                    label: "Settings",
                  },
                ],
                title: "Tools",
              },
            ],
            suffixIcon: "chevron-down",
          },
          {
            label: "Solutions",
            sections: [
              {
                links: [
                  {
                    description: "Solutions for large organizations",
                    href: "/enterprise",
                    icon: "cube",
                    label: "Enterprise",
                  },
                  {
                    description: "Perfect for growing companies",
                    href: "/startups",
                    icon: "rocket",
                    label: "Startups",
                  },
                ],
                title: "By industry",
              },
              {
                links: [
                  {
                    description: "Tools and APIs",
                    href: "/developers",
                    icon: "code",
                    label: "Developers",
                  },
                  {
                    description: "Creative solutions",
                    href: "/design",
                    icon: "sparkle",
                    label: "Design teams",
                  },
                ],
                title: "By team",
              },
            ],
            suffixIcon: "chevron-down",
          },
          {
            label: "Resources",
            sections: [
              {
                links: [
                  {
                    description: "Learn how to use our platform",
                    href: "/guides",
                    icon: "book",
                    label: "Guides",
                  },
                  {
                    description: "Technical documentation",
                    href: "/api",
                    icon: "code",
                    label: "API reference",
                  },
                ],
                title: "Documentation",
              },
              {
                links: [
                  {
                    description: "Get your questions answered",
                    href: "/help",
                    icon: "infoCircle",
                    label: "Help center",
                  },
                  {
                    description: "Connect with other users",
                    href: "/community",
                    icon: "people",
                    label: "Community",
                  },
                ],
                title: "Support",
              },
            ],
            suffixIcon: "chevron-down",
          },
          {
            label: "Company",
            sections: [
              {
                links: [
                  {
                    description: "Learn about our journey",
                    href: "/about",
                    icon: "book",
                    label: "Our story",
                  },
                  {
                    description: "Join our team",
                    href: "/careers",
                    icon: "rocket",
                    label: "Careers",
                  },
                ],
                title: "About",
              },
              {
                links: [
                  {
                    description: "Latest updates and news",
                    href: "/blog",
                    icon: "document",
                    label: "Blog",
                  },
                  {
                    description: "Get in touch with us",
                    href: "/contact",
                    icon: "email",
                    label: "Contact",
                  },
                ],
                title: "Connect",
              },
            ],
            suffixIcon: "chevron-down",
          },
        ]}
      />
    </div>
  );
};

export default Home;
