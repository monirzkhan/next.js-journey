export type NavChild = {
  label: string
  href: string
  description?: string
}

export type NavLink = {
  label: string
  href?: string
  children?: NavChild[]
}

export const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    children: [
      { label: "Analytics", href: "/products/analytics", description: "Track your metrics in real time" },
      { label: "Automation", href: "/products/automation", description: "Automate repetitive workflows" },
      { label: "Integrations", href: "/products/integrations", description: "Connect your favorite tools" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Documentation", href: "/resources/docs", description: "Guides and API references" },
      { label: "Blog", href: "/resources/blog", description: "Latest news and updates" },
      { label: "Community", href: "/resources/community", description: "Join the conversation" },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "About",
    href: "/about",
  },
]
