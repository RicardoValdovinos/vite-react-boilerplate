# src/components/layout

Components relating to layouts should be placed in this directory.

Consider using additional subdirectories with the same format (component + story + unit test) for subcomponents to aid in organization.

Example:

- layout/Sidebar/
  - SidebarItem/
    - SidebarItem.tsx
    - SidebarItem.stories.tsx
    - SidebarItem.test.tsx
  - SidebarSection/
    - SidebarSection.tsx
    - SidebarSection.stories.tsx
    - SidebarSection.test.tsx
  - Sidebar/
    - Sidebar.tsx
    - Sidebar.stories.tsx
    - Sidebar.test.tsx
  - index.ts
