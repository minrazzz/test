const dashboardMenu = [
  {
    label: "योेजना",
    link: "/dashboard/finance",
    icon: "ri-pie-chart-2-line",
  },
  {
    label: "Events Management",
    link: "/dashboard/events",
    icon: "ri-calendar-todo-line",
  },
  {
    label: "Sales Monitoring",
    link: "/dashboard/sales",
    icon: "ri-shopping-bag-3-line",
  },
  {
    label: "Website Analytics",
    link: "/dashboard/analytics",
    icon: "ri-bar-chart-2-line",
  },
  {
    label: "Cryptocurrency",
    link: "/dashboard/crypto",
    icon: "ri-coin-line",
  },
  {
    label: "Helpdesk Service",
    link: "/dashboard/helpdesk",
    icon: "ri-service-line",
  },
  {
    label: "Storage Management",
    link: "/dashboard/storage",
    icon: "ri-hard-drive-2-line",
  },
  {
    label: "Product Management",
    link: "/dashboard/product",
    icon: "ri-suitcase-2-line",
  },
];

const applicationsMenu = [
  {
    label: "File Manager",
    link: "/apps/file-manager",
    icon: "ri-folder-2-line",
  },
  {
    label: "Email",
    link: "/apps/email",
    icon: "ri-mail-send-line",
  },
  {
    label: "Calendar",
    link: "/apps/calendar",
    icon: "ri-calendar-line",
  },
  {
    label: "Chat",
    link: "/apps/chat",
    icon: "ri-question-answer-line",
  },
  {
    label: "Contacts",
    link: "/apps/contacts",
    icon: "ri-contacts-book-line",
  },
  {
    label: "Task Manager",
    link: "/apps/tasks",
    icon: "ri-checkbox-multiple-line",
  },
  {
    label: "Media Gallery",
    icon: "ri-gallery-line",
    submenu: [
      {
        label: "Music Stream",
        link: "/apps/gallery-music",
      },
      {
        label: "Video Stream",
        link: "/apps/gallery-video",
      },
    ],
  },
];

const pagesMenu = [
  {
    label: "User Pages",
    icon: "ri-account-circle-line",
    submenu: [
      {
        label: "User Profile",
        link: "/pages/profile",
      },
      {
        label: "People & Groups",
        link: "/pages/people",
      },
      {
        label: "Activity Log",
        link: "/pages/activity",
      },
      {
        label: "Events",
        link: "/pages/events",
      },
      {
        label: "Settings",
        link: "/pages/settings",
      },
    ],
  },
  {
    id: 27,
    label: "Authentication",
    icon: "ri-lock-2-line",
    submenu: [
      {
        label: "Sign In Basic",
        link: "/pages/signin",
      },
      {
        label: "Sign In Cover",
        link: "/pages/signin2",
      },
      {
        label: "Sign Up Basic",
        link: "/pages/signup",
      },
      {
        label: "Sign Up Cover",
        link: "/pages/signup2",
      },
      {
        label: "Verify Account",
        link: "/pages/verify",
      },
      {
        label: "Forgot Password",
        link: "/pages/forgot",
      },
      {
        label: "Lock Screen",
        link: "/pages/lock",
      },
    ],
  },
  {
    label: "Error Pages",
    icon: "ri-error-warning-line",
    submenu: [
      {
        label: "Page Not Found",
        link: "/pages/error-404",
      },
      {
        label: "Internal Server Error",
        link: "/pages/error-500",
      },
      {
        label: "Service Unavailable",
        link: "/pages/error-503",
      },
      {
        label: "Forbidden",
        link: "/pages/error-505",
      },
    ],
  },
  {
    label: "Other Pages",
    icon: "ri-file-text-line",
    submenu: [
      {
        label: "Pricing",
        link: "/pages/pricing",
      },
      {
        label: "FAQ",
        link: "/pages/faq",
      },
    ],
  },
];

const services = [
  {
    label: "योेजना",
    icon: "ri-pencil-ruler-2-line",
    submenu: [
      {
        label: "Grid System",
        link: "/docs/layout/grid",
      },
      {
        label: "Columns",
        link: "/docs/layout/columns",
      },
      {
        label: "Gutters",
        link: "/docs/layout/gutters",
      },
    ],
  },
  {
    label: "Education",
    icon: "ri-suitcase-line",
    submenu: [
      {
        label: "Accordion",
        link: "/docs/com/accordions",
      },
      {
        label: "Alerts",
        link: "/docs/com/alerts",
      },
      {
        label: "Avatars",
        link: "/docs/com/avatars",
      },
      {
        label: "Badge",
        link: "/docs/com/badge",
      },
      {
        label: "Breadcrumbs",
        link: "/docs/com/breadcrumbs",
      },
      {
        label: "Buttons",
        link: "/docs/com/buttons",
      },
      {
        label: "Cards",
        link: "/docs/com/cards",
      },
      {
        label: "Carousel",
        link: "/docs/com/carousel",
      },
      {
        label: "Dropdown",
        link: "/docs/com/dropdown",
      },
      {
        label: "Images",
        link: "/docs/com/images",
      },
      {
        label: "List Group",
        link: "/docs/com/listgroup",
      },
      {
        label: "Markers",
        link: "/docs/com/markers",
      },
      {
        label: "Modal",
        link: "/docs/com/modal",
      },
      {
        label: "Nav & Tabs",
        link: "/docs/com/navtabs",
      },
      {
        label: "Offcanvas",
        link: "/docs/com/offcanvas",
      },
      {
        label: "Pagination",
        link: "/docs/com/pagination",
      },
      {
        label: "Placeholders",
        link: "/docs/com/placeholders",
      },
      {
        label: "Popovers",
        link: "/docs/com/popovers",
      },
      {
        label: "Progress",
        link: "/docs/com/progress",
      },
      {
        label: "Spinners",
        link: "/docs/com/spinners",
      },
      {
        label: "Toast",
        link: "/docs/com/toasts",
      },
      {
        label: "Tooltips",
        link: "/docs/com/tooltips",
      },
      {
        label: "Tables",
        link: "/docs/com/tables",
      },
    ],
  },
  {
    label: "Janata",
    icon: "ri-list-check-2",
    submenu: [
      {
        label: "Text Elements",
        link: "/docs/form/elements",
      },
      {
        label: "Selects",
        link: "/docs/form/selects",
      },
      {
        label: "Checks & Radios",
        link: "/docs/form/checksradios",
      },
      {
        label: "Range",
        link: "/docs/form/range",
      },
      {
        label: "Pickers",
        link: "/docs/form/pickers",
      },
      {
        label: "Layouts",
        link: "/docs/form/layouts",
      },
    ],
  },
  {
    label: "OBPS",
    icon: "ri-bar-chart-2-line",
    submenu: [
      {
        label: "ApexCharts",
        link: "/docs/chart/apex",
      },
      {
        label: "Chartjs",
        link: "/docs/chart/chartjs",
      },
    ],
  },
  {
    label: "Organization",
    icon: "ri-stack-line",
    submenu: [
      {
        label: "Leaflet Maps",
        link: "/docs/map/leaflet",
      },
      {
        label: "Vector Maps",
        link: "/docs/map/vector",
      },
      {
        label: "Remixicon",
        link: "/docs/icon/remix",
      },
      {
        label: "Feathericons",
        link: "/docs/icon/feather",
      },
    ],
  },
  {
    label: "Property",
    icon: "ri-briefcase-4-line",
    submenu: [
      {
        label: "Sifaris",
        link: "/safari/list/details",
      },
      {
        label: "Information",
        link: "/docs/util/border",
      },
      {
        label: "Sifaris Lists",
        link: "/docs/util/colors",
      },
      {
        label: "Payment",
        link: "/docs/util/divider",
      },
    ],
  },
];

const settings = [
  {
    label: "सामान्य",
    icon: "ri-pencil-ruler-2-line",
    submenu: [
      {
        label: "Grid System",
        link: "/docs/layout/grid",
      },
      {
        label: "Columns",
        link: "/docs/layout/columns",
      },
      {
        label: "Gutters",
        link: "/docs/layout/gutters",
      },
    ],
  },
  {
    label: "कार्यालयहरू",
    icon: "ri-suitcase-line",
    submenu: [
      {
        label: "Accordion",
        link: "/docs/com/accordions",
      },
      {
        label: "Alerts",
        link: "/docs/com/alerts",
      },
      {
        label: "Avatars",
        link: "/docs/com/avatars",
      },
      {
        label: "Badge",
        link: "/docs/com/badge",
      },
      {
        label: "Breadcrumbs",
        link: "/docs/com/breadcrumbs",
      },
      {
        label: "Buttons",
        link: "/docs/com/buttons",
      },
      {
        label: "Cards",
        link: "/docs/com/cards",
      },
      {
        label: "Carousel",
        link: "/docs/com/carousel",
      },
      {
        label: "Dropdown",
        link: "/docs/com/dropdown",
      },
      {
        label: "Images",
        link: "/docs/com/images",
      },
      {
        label: "List Group",
        link: "/docs/com/listgroup",
      },
      {
        label: "Markers",
        link: "/docs/com/markers",
      },
      {
        label: "Modal",
        link: "/docs/com/modal",
      },
      {
        label: "Nav & Tabs",
        link: "/docs/com/navtabs",
      },
      {
        label: "Offcanvas",
        link: "/docs/com/offcanvas",
      },
      {
        label: "Pagination",
        link: "/docs/com/pagination",
      },
      {
        label: "Placeholders",
        link: "/docs/com/placeholders",
      },
      {
        label: "Popovers",
        link: "/docs/com/popovers",
      },
      {
        label: "Progress",
        link: "/docs/com/progress",
      },
      {
        label: "Spinners",
        link: "/docs/com/spinners",
      },
      {
        label: "Toast",
        link: "/docs/com/toasts",
      },
      {
        label: "Tooltips",
        link: "/docs/com/tooltips",
      },
      {
        label: "Tables",
        link: "/docs/com/tables",
      },
    ],
  },
  {
    label: "कर शीर्षकहरू",
    icon: "ri-list-check-2",
    submenu: [
      {
        label: "Text Elements",
        link: "/docs/form/elements",
      },
      {
        label: "Selects",
        link: "/docs/form/selects",
      },
      {
        label: "Checks & Radios",
        link: "/docs/form/checksradios",
      },
      {
        label: "Range",
        link: "/docs/form/range",
      },
      {
        label: "Pickers",
        link: "/docs/form/pickers",
      },
      {
        label: "Layouts",
        link: "/docs/form/layouts",
      },
    ],
  },
  {
    label: "सेवा करको दर",
    icon: "ri-bar-chart-2-line",
    submenu: [
      {
        label: "ApexCharts",
        link: "/docs/chart/apex",
      },
      {
        label: "Chartjs",
        link: "/docs/chart/chartjs",
      },
    ],
  },
  {
    label: "सम्पत्ति करको दर",
    icon: "ri-stack-line",
    submenu: [
      {
        label: "Leaflet Maps",
        link: "/docs/map/leaflet",
      },
      {
        label: "Vector Maps",
        link: "/docs/map/vector",
      },
      {
        label: "Remixicon",
        link: "/docs/icon/remix",
      },
      {
        label: "Feathericons",
        link: "/docs/icon/feather",
      },
    ],
  },
];

export { dashboardMenu, applicationsMenu, pagesMenu, services, settings };
