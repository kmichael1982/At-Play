export const menuItems = [
    {
        label: 'Home',
        
        ]
    },
    { label: 'About Us', link: '/about-us' },
    { label: 'Services', subItems: [{ label: 'Our Services', link: '/our-services' }, { label: 'Service Details', link: '/service-details?query=UX%20Design' }] },
    { label: 'Projects', subItems: [{ label: 'Our Projects', link: '/our-projects' }, { label: 'Project Details', link: '/project-details' }] },
    {
        label: 'Pages',
        subItems: [
            {
                label: 'Faq',
                link: '/faq'
            },

            {
                label: 'Error',
                link: '/error'
            },

            {
                label: 'Our Story',
                link: '/our-story'
            },

            {
                label: 'Portfolio',
                link: '/portfolio'
            },

            // { label: 'Team', subItems: [{ label: 'Our Teams', link: '' }, { label: 'Team Details', link: '' }] },

            {
                label: 'Testimonials',
                link: '/testimonials'
            },

            {
                label: 'Contact us',
                link: '/contact-us'
            },
        ]
    },
    { label: 'Journal', subItems: [{ label: 'Journal', link: '/blog' }, { label: 'Journal Details', link: '/blog-single' }] },
]
