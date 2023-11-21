import { lazy } from 'react'

const AUTH = {
    PAGE_404: lazy(() => import('pages/auth/page404/Page404')),
}

const LANDING = {
    DASHBOARD: lazy(() => import('pages/home/Home')),
    ABOUT: lazy(() => import('pages/about/About')),
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
        id: 'HomePage',
        text: 'Home Page',
        path: '/',
        icon: '',
        element: LANDING.DASHBOARD,
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