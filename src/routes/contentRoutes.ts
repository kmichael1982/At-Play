import { lazy } from 'react'

const AUTH = {
    PAGE_404: lazy(() => import('pages/auth/page404/Page404')),
}

const LANDING = {
    DASHBOARD: lazy(() => import('pages/home/Home')),
    ABOUT: lazy(() => import('pages/about/About')),
    SERVICES: lazy(() => import('pages/services/Services')),

    OUR_PROJECTS: lazy(() => import('pages/projects/OurProjects')),
    PROJECT_DETAILS: lazy(() => import('pages/projects/children/ProjectDetails')),

    PAGES: lazy(() => import('pages/services/Services')),
    CONTACT: lazy(() => import('pages/contact-us/ContactUs')),

    BLOG: lazy(() => import('pages/blog/Blog')),
    BLOG_DETAILS: lazy(() => import('pages/blog/children/BlogDetails')),
}

export const publicPages = [
    {
        id: 'Page404',
        text: '404 Page',
        path: '404',
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
                path: '/blog-details',
                icon: '',
                element: LANDING.BLOG_DETAILS,
                exact: true,
            },
        ]
    }
]

const contents = { publicPages }
export default contents