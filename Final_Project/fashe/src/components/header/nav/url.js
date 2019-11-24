import * as URL from '../../../router/url';

export default [
    {
        title:'Home',
        href: URL.HOME,
    },
    {
        title:'Shop',
        href: URL.SHOP,
        children:[
            {
                title: 'Tables',
                href:URL.TABLES,
            },
            {
                title: 'Chairs',
                href:URL.CHAIRS,
            },
            {
                title: 'Arm chairs',
                href:URL.ARM_CHAIRS,
            },
            {
                title: 'Sofas',
                href:URL.SOFAS,
            },
            {
                title: 'Lamps',
                href:URL.LAMPS,
            },
        ],
    },
    {
        title:'Sale',
        href:URL.SHOP,
    },
    {
        title:'Features',
        href: URL.FEATURES,
    },
    {
        title:'Blog',
        href:URL.BLOG,
    },
    {
        title:'About',
        href:URL.ABOUT,
    },
    {
        title:'Contact',
        href:URL.CONTACT,
    },
]



