import { lazy } from 'react'

const AUTH = {
    PAGE_404: lazy(() => import('pages/pages/children/page404/Error')),
}

const LANDING = {
    DASHBOARD: lazy(() => import('pages/home/Home')),
    ABOUT: lazy(() => import('pages/about/About')),

    SERVICES: lazy(() => import('pages/services/Services')),
    // SERVICES_DETAILS: lazy(() => import('pages/services/children/ServicesDetails')),

    OUR_PROJECTS: lazy(() => import('pages/projects/OurProjects')),
    PROJECT_DETAILS: lazy(() => import('pages/projects/children/ProjectDetails')),

    PAGES: lazy(() => import('pages/services/Services')),
    CONTACT: lazy(() => import('pages/contact-us/ContactUs')),
    PORTFOLIO: lazy(() => import('pages/pages/children/portfolio/Portfolio')),

    BLOG: lazy(() => import('pages/blog/Blog')),
    BLOG_DETAILS: lazy(() => import('pages/blog/children/BlogDetails')),

    OUR_SERVICE: lazy(() => import('pages/services/Services')),
    SERVICE_DETAILS: lazy(() => import('pages/services/children/ServiceDetails')),
}

export const publicPages = [
    {
        id: 'Page404',
        text: '404 Page',
        path: 'error',
        icon: '',
        element: AUTH.PAGE_404,
        exact: true,
    },
    {
        id: 'AboutPage',
        text: 'About Page',
        path: '/about-us',
        icon: '',
        element: LANDING.ABOUT,
        header: 'header',
        footer: 'footer',
        exact: true,
    },
    {
        id: 'ContactUsPage',
        text: 'Contact us',
        path: '/contact-us',
        icon: '',
        element: LANDING.CONTACT,
        exact: true,
    },
    {
        id: 'PortfolioPage',
        text: 'Portfolio',
        path: '/portfolio',
        icon: '',
        element: LANDING.PORTFOLIO,
        exact: true,
    },
    {
        id: 'BlogPage',
        text: 'Blog Page',
        path: '/blog',
        icon: '',
        element: LANDING.BLOG,
        exact: true,
        children: [
            {
                id: 'BlogDetailsPage',
                text: 'Blog Details Page',
                path: '/blog-single',
                icon: '',
                element: LANDING.BLOG_DETAILS,
                exact: true,
            }
        ]
    },
    {
        id: 'OurServicesPage',
        text: 'Our Services',
        path: '/our-services',
        icon: '',
        element: LANDING.OUR_SERVICE,
        exact: true,
        children: [
            {
                id: 'OurServicesDetailsPage',
                text: 'Our Services Details Page',
                path: '/service-details',
                icon: '',
                element: LANDING.SERVICE_DETAILS,
                exact: true,
            }
        ]
    },
    {
        id: 'OurProjectsPage',
        text: 'Our Projects',
        path: '/our-projects',
        icon: '',
        element: LANDING.OUR_PROJECTS,
        exact: true,
    },
]

const contents = { publicPages }
export default contents