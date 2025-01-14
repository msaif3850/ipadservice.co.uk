const categories = [
    {
        id: 2,
        name: "iPhone Repair",
        link: "/iphone-repair",
        image: "/iphones/iphone-15-pro.jpg",
        view: "View Modals"
    },
    {
        id: 1,
        name: "iPad Repair",
        image: "/ipads/ipad-pro.jpg",
        link: "/tablet-repair/ipad-repair-leeds",
        view: "View Modals"
    },
    {
        id: 3,
        name: "Smartphone Repair",
        link: "/smartphone-repair",
        image: "/products/smartphones/nokia.jpg",
        view: "View Modals"
    },
    {
        id: 4,
        name: "Tablet Repair",
        link: "/tablet-repair",
        image: "/products/tablets/other-tablets.jpg",
        view: "View Modals"
    }, {
        id: 5,
        name: "Computer Repair",
        link: "/computer-repair",
        image: "/categories/category-4.jpg",
        view: "View Repairs"
    }, {
        id: 6, name: "Game Console Repair", link: "./", image: "/categories/category-5.jpg",  view: "View Repairs"
    },
    {
        id: 7,
        name: "Watch Repairs",
        link: "/watch-repair",
        image: "/categories/category-6.jpg",
        view: "View Repairs"
    },
];

const products = {
    iphone: [
        {id: 42, name: "iPhone 16 Pro Max", image: "/iphones/iphone-15-pro-max.jpg", link: "/iphone-repair/iphone-16-pro-max-repair", view: "View Repairs"},
        {id: 41, name: "iPhone 16 Pro", image: "/iphones/iphone-15-pro.jpg", link: "/iphone-repair/iphone-16-pro-repair", view: "View Repairs"},
        {id: 40, name: "iPhone 16 Plus", image: "/iphones/iphone-15-plus.jpg", link: "/iphone-repair/iphone-16-plus-repair", view: "View Repairs"},
        {id: 39, name: "iPhone 16", image: "/iphones/iphone-15.jpg", link: "/iphone-repair/iphone-16-repair", view: "View Repairs"},
        {id: 38, name: "iPhone 15 Pro Max", image: "/iphones/iphone-15-pro-max.jpg", link: "/iphone-repair/iphone-15-pro-max-repair", view: "View Repairs"},
        {id: 37, name: "iPhone 15 Pro", image: "/iphones/iphone-15-pro.jpg", link: "/iphone-repair/iphone-15-pro-repair", view: "View Repairs"},
        {id: 36, name: "iPhone 15 Plus", image: "/iphones/iphone-15-plus.jpg", link: "/iphone-repair/iphone-15-plus-repair", view: "View Repairs"},
        {id: 35, name: "iPhone 15", image: "/iphones/iphone-15.jpg", link: "/iphone-repair/iphone-15-repair", view: "View Repairs"},
        {id: 34, name: "iPhone 14 Pro Max", image: "/iphones/iphone-14-pro-max.jpg", link: "/iphone-repair/iphone-14-pro-max-repair", view: "View Repairs"},
        {id: 33, name: "iPhone 14 Pro", image: "/iphones/iphone-14-pro.jpg", link: "/iphone-repair/iphone-14-pro-repair", view: "View Repairs"},
        {id: 32, name: "iPhone 14 Plus", image: "/iphones/iphone-14-plus.jpg", link: "/iphone-repair/iphone-14-plus-repair", view: "View Repairs"},
        {id: 31, name: "iPhone 14", image: "/iphones/iphone-14.jpg", link: "/iphone-repair/iphone-14-repair", view: "View Repairs"},
        {id: 30, name: "iPhone SE (3rd Generation)", image: "/iphones/iphone-se-3rd-gen.jpg", link: "/iphone-repair/iphone-se-3rd-generation", view: "View Repairs"},
        {id: 29, name: "iPhone 13 Pro Max", image: "/iphones/iphone-13-pro-max.jpg", link: "/iphone-repair/iphone-13-pro-max-repair", view: "View Repairs"},
        {id: 28, name: "iPhone 13 Pro", image: "/iphones/iphone-13-pro.jpg", link: "/iphone-repair/iphone-13-pro-repair", view: "View Repairs"},
        {id: 27, name: "iPhone 13", image: "/iphones/iphone-13.jpg", link: "/iphone-repair/iphone-13-repair", view: "View Repairs"},
        {id: 26, name: "iPhone 13 Mini", image: "/iphones/iphone-13-mini.jpg", link: "/iphone-repair/iphone-13-mini-repair", view: "View Repairs"},
        {id: 25, name: "iPhone 12 Pro Max", image: "/iphones/iphone-12-pro-max.jpg", link: "/iphone-repair/iphone-12-pro-max-repair", view: "View Repairs"},
        {id: 24, name: "iPhone 12 Pro", image: "/iphones/iphone-12-pro.jpg", link: "/iphone-repair/iphone-12-pro-repair", view: "View Repairs"},
        {id: 23, name: "iPhone 12", image: "/iphones/iphone-12.jpg", link: "/iphone-repair/iphone-12-repair", view: "View Repairs"},
        {id: 22, name: "iPhone 12 Mini", image: "/iphones/iphone-12-mini.jpg", link: "/iphone-repair/iphone-12-mini-repair", view: "View Repairs"},
        {id: 21, name: "iPhone SE (2nd Generation)", image: "/iphones/iphone-se-2nd-gen.jpg", link: "/iphone-repair/iphone-se-2nd-generation", view: "View Repairs"},
        {id: 20, name: "iPhone 11 Pro Max", image: "/iphones/iphone-11-pro-max.jpg", link: "/iphone-repair/iphone-11-pro-max-repair", view: "View Repairs"},
        {id: 19, name: "iPhone 11 Pro", image: "/iphones/iphone-11-pro.jpg", link: "/iphone-repair/iphone-11-pro-repair", view: "View Repairs"},
        {id: 18, name: "iPhone 11", image: "/iphones/iphone-11.jpg", link: "/iphone-repair/iphone-11-repair", view: "View Repairs"},
        {id: 17, name: "iPhone XS Max", image: "/iphones/iphone-xs-max.jpg", link: "/iphone-repair/iphone-xs-max-repair", view: "View Repairs"},
        {id: 16, name: "iPhone XS", image: "/iphones/iphone-xs.jpg", link: "/iphone-repair/iphone-xs-repair", view: "View Repairs"},
        {id: 15, name: "iPhone XR", image: "/iphones/iphone-xr.jpg", link: "/iphone-repair/iphone-xr-repair", view: "View Repairs"},
        {id: 14, name: "iPhone X", image: "/iphones/iphone-x.jpg", link: "/iphone-repair/iphone-x-repair", view: "View Repairs"},
        {
            id: 13,
            name: "iPhone 8 Plus",
            image: "/iphones/iphone-8-plus.jpg",
            link: "/iphone-repair/iphone-8-plus-repair"
            , view: "View Repairs"
        },
        {
            id: 12,
            name: "iPhone 8",
            image: "/iphones/iphone-8.jpg",
            link: "/iphone-repair/iphone-8-repair",
            view: "View Repairs"
        },
        {
            id: 11,
            name: "iPhone 7 Plus",
            image: "/iphones/iphone-7-plus.jpg",
            link: "/iphone-repair/iphone-7-plus-repair"
            , view: "View Repairs"
        },
        {
            id: 10,
            name: "iPhone 7",
            image: "/iphones/iphone-7.jpg",
            link: "/iphone-repair/iphone-7-repair",
            view: "View Repairs"
        },
        {
            id: 9,
            name: "iPhone 6S Plus",
            image: "/iphones/iphone-6s-plus.jpg",
            link: "/iphone-repair/iphone-6s-plus-repair"
            , view: "View Repairs"
        },
        {
            id: 8,
            name: "iPhone 6S",
            image: "/iphones/iphone-6s.jpg",
            link: "/iphone-repair/iphone-6s-repair",
            view: "View Repairs"
        },
        {
            id: 7,
            name: "iPhone 6 Plus",
            image: "/iphones/iphone-6-plus.jpg",
            link: "/iphone-repair/iphone-6-plus-repair"
            , view: "View Repairs"
        },
        {
            id: 6,
            name: "iPhone 6",
            image: "/iphones/iphone-6.jpg",
            link: "/iphone-repair/iphone-6-repair",
            view: "View Repairs"
        },
        {
            id: 5,
            name: "iPhone SE (1st Generation)",
            image: "/iphones/iphone-se-1st-gen.jpg",
            link: "/iphone-repair/iphone-se-repair"
            , view: "View Repairs"
        },
        /*{
            id: 4,
            name: "iPhone 5S Repair",
            image: "/iphones/iphone-5s.jpg",
            link: "/iphone-repair/iphone-5s-repair"
            , view: "View Repairs"
        },
        {
            id: 3,
            name: "iPhone 5C Repair",
            image: "/products/iphones/iphone5c.jpg",
            link: "/iphone-repair/iphone-5c-repair"
            , view: "View Repairs"
        },
        {
            id: 2,
            name: "iPhone 5 Repair",
            image: "/products/iphones/iphone5.jpg",
            link: "/iphone-repair/iphone-5-repair"
            , view: "View Repairs"
        },
        {
            id: 1,
            name: "iPhone 4 / 4S Repair",
            image: "/products/iphones/iphone4s.jpg",
            link: "/iphone-repair/iphone-4-4s"
            , view: "View Repairs"
        },*/
    ],
    tablet: [
        {
            id: 1, name: "iPad", image: "/products/tablets/ipads/ipad-mini.jpg", link: "/tablet-repair/ipad-repair-leeds",
            view: "View Repairs"
        },
        {
            id: 2,
            name: "Google Nexus Tablet",
            image: "/products/tablets/google-nexus.jpg",
            link: "/tablet-repair/google-tablet-repair",
            view: "View Repairs"
        },
        {
            id: 3,
            name: "Samsung Tablet Repair",
            image: "/products/tablets/samsung-tablet.jpg",
            link: "/tablet-repair/samsung-tablet-repair",
            view: "View Repairs"
        },
        {
            id: 4,
            name: "Other Tablet Repairs",
            image: "/products/tablets/other-tablets.jpg",
            link: "/tablet-repair/",
            view: "View Repairs",
        }
    ],
    smartphone: [
        {
            id: 1, name: "Samsung Repair",
            image: "/samsung/s24.jpg",
            link: "/smartphone-repair/samsung-repair",
            view: "View Repairs"
        },
        {
            id: 2, name: "Sony Repair",
            image: "/products/smartphones/sony.jpg",
            link: "/smartphone-repair/sony-repair",
            view: "View Repairs"
        },
        {
            id: 3, name: "LG Repair",
            image: "/products/smartphones/lg.jpg",
            link: "/smartphone-repair/lg-repair",
            view: "View Repairs"
        },
        {
            id: 4, name: "Nexus Repair",
            image: "/products/smartphones/nexus-6p.jpg",
            link: "/smartphone-repair/nexus-repair",
            view: "View Repairs"
        },
        {
            id: 5, name: "HTC Repair",
            image: "/products/smartphones/htc.jpg",
            link: "/smartphone-repair",
            view: "View Repairs"
        },
        {
            id: 6, name: "Motorola Repair",
            image: "/products/smartphones/motorola.jpg",
            link: "/smartphone-repair",
            view: "View Repairs"
        },
        {
            id: 7, name: "OnePlus Repair",
            image: "/products/smartphones/oneplus.jpg",
            link: "/smartphone-repair",
            view: "View Repairs"
        },
        {
            id: 8, name: "BlackBerry Repair",
            image: "/products/smartphones/blackberry.jpg",
            link: "/smartphone-repair",
            view: "View Repairs"
        },
        {
            id: 9, name: "Nokia Repair",
            image: "/products/smartphones/nokia.jpg",
            link: "/smartphone-repair",
            view: "View Repairs"
        },

    ],
    ipads: [
        {
            id: 1, name: "iPad Pro", image: "/ipads/ipad-pro.jpg",
            link: "/tablet-repair/ipad-repair-leeds/ipad-pro", view: "View Modals"
        },
        {
            id: 2, name: "iPad Air", image: "/ipads/ipad-air/air-5.jpg",
            link: "/tablet-repair/ipad-repair-leeds/ipad-air", view: "View Modals"
        },
        {
            id: 3, name: "iPad", image: "/ipads/ipad/10th-gen.jpg",
            link: "/tablet-repair/ipad-repair-leeds/ipad", view: "View Modals"
        },
        {
            id: 4, name: "iPad Mini", image: "/ipads/ipad-mini/mini-6.jpg",
            link: "/tablet-repair/ipad-repair-leeds/ipad-mini", view: "View Modals"
        },
    ],
    ipadClassic: [
        {
            id: 1,
            name: "iPad (4th Generation) Repair",
            image: "/products/tablets/ipads/ipad-mini.jpg",
            link: "/tablet-repair/ipad-repair/ipad-4th-generation-repair",
            view: "View Repairs"
        },
        {
            id: 2,
            name: "iPad (3rd Generation) Repair",
            image: "/products/tablets/ipads/ipad-mini.jpg",
            link: "/tablet-repair/ipad-repair/ipad-3rd-generation-repair",
            view: "View Repairs"
        },
        {
            id: 3,
            name: "iPad 2 Repair",
            image: "/products/tablets/ipads/ipad-mini.jpg",
            link: "/tablet-repair/ipad-repair/ipad-2-repair",
            view: "View Repairs"
        },
        {
            id: 4,
            name: "iPad (1st Generation) Repair",
            image: "/products/tablets/ipads/ipad-mini.jpg",
            link: "/tablet-repair/ipad-repair-leeds",
            view: "View Repairs"
        },
    ],
    ipadPro12Inch: [
        {
            id: 6, name: "12.9-inch 6th Generation",
            image: "/ipads/ipad-pro/12.9-inch/6th-gen.jpg",
            link: "/tablet-repair/ipad-repair-leeds/ipad-pro/12-9-inch-6th-generation",
            view: "View Repairs"
        },
        {
            id: 5, name: "12.9-inch 5th Generation",
            image: "/ipads/ipad-pro/12.9-inch/5th-gen.jpg",
            link: "/tablet-repair/ipad-repair-leeds/ipad-pro/12-9-inch-5th-generation",
            view: "View Repairs"
        },
        {
            id: 4, name: "12.9-inch 4th Generation",
            image: "/ipads/ipad-pro/12.9-inch/4th-gen.jpg",
            link: "/tablet-repair/ipad-repair-leeds/ipad-pro/12-9-inch-4th-generation",
            view: "View Repairs"
        },
        {
            id: 3, name: "12.9-inch 3rd Generation",
            image: "/ipads/ipad-pro/12.9-inch/3rd-gen.jpg",
            link: "/tablet-repair/ipad-repair-leeds/ipad-pro/12-9-inch-3rd-generation",
            view: "View Repairs"
        },
        {
            id: 2, name: "12.9-inch 2nd Generation",
            image: "/ipads/ipad-pro/12.9-inch/2nd-gen.jpg",
            link: "/tablet-repair/ipad-repair-leeds/ipad-pro/12-9-inch-2nd-generation",
            view: "View Repairs"
        },
        {
            id: 1, name: "12.9-inch 1st Generation",
            image: "/ipads/ipad-pro/12.9-inch/1st-gen.jpg",
            link: "/tablet-repair/ipad-repair-leeds/ipad-pro/12-9-inch-1st-generation",
            view: "View Repairs"
        },
    ],
    ipadPro11Inch: [
        {
            id: 4, name: "11-inch 4th Generation",
            image: "/ipads/ipad-pro/11-inch/4th-gen.jpg",
            link: "/tablet-repair/ipad-repair-leeds/ipad-pro/11-inch-4th-generation",
            view: "View Repairs"
        },
        {
            id: 3, name: "11-inch 3rd Generation",
            image: "/ipads/ipad-pro/11-inch/3rd-gen.jpg",
            link: "/tablet-repair/ipad-repair-leeds/ipad-pro/11-inch-3rd-generation",
            view: "View Repairs"
        },
        {
            id: 2, name: "11-inch 2nd Generation",
            image: "/ipads/ipad-pro/11-inch/2nd-gen.jpg",
            link: "/tablet-repair/ipad-repair-leeds/ipad-pro/11-inch-2nd-generation",
            view: "View Repairs"
        },
        {
            id: 1, name: "11-inch 1st Generation",
            image: "/ipads/ipad-pro/11-inch/1st-gen.jpg",
            link: "/tablet-repair/ipad-repair-leeds/ipad-pro/11-inch-1st-generation",
            view: "View Repairs"
        },
    ],
    ipadProOtherModals: [
        {
            id: 2, name: "10.5-inch",
            image: "/ipads/ipad-pro/other/10.5-inch.jpg",
            link: "/tablet-repair/ipad-repair-leeds/ipad-pro/10-5-inch",
            view: "View Repairs"
        },
        {
            id: 1, name: "9.7-inch",
            image: "/ipads/ipad-pro/other/9.7-inch.jpg",
            link: "/tablet-repair/ipad-repair-leeds/ipad-pro/9-7-inch",
            view: "View Repairs"
        },
    ],
    ipadAir: [
        {id: 5, name: "Air 5", image: "/ipads/ipad-air/air-5.jpg", link: "/tablet-repair/ipad-repair/ipad-air-5-repair", view: "View Repairs"},
        {id: 4, name: "Air 4", image: "/ipads/ipad-air/air-4.jpg", link: "/tablet-repair/ipad-repair/ipad-air-4-repair", view: "View Repairs"},
        {id: 3, name: "Air 3", image: "/ipads/ipad-air/air-3.jpg", link: "/tablet-repair/ipad-repair/ipad-air-3-repair", view: "View Repairs"},
        {id: 2, name: "Air 2", image: "/ipads/ipad-air/air-2.jpg", link: "/tablet-repair/ipad-repair/ipad-air-2-repair", view: "View Repairs"},
        {id: 1, name: "Air 1", image: "/ipads/ipad-air/air-1.jpg", link: "/tablet-repair/ipad-repair/ipad-air-1-repair", view: "View Repairs"},
    ],
    ipadMini: [
        {
            id: 6, name: "Mini 6", image: "/ipads/ipad-mini/mini-6.jpg",
            link: "/tablet-repair/ipad-repair/ipad-mini-6-repair",
            view: "View Repairs"
        },
        {
            id: 5, name: "Mini 5", image: "/ipads/ipad-mini/mini-5.jpg",
            link: "/tablet-repair/ipad-repair/ipad-mini-5-repair",
            view: "View Repairs"
        },
        {
            id: 4, name: "Mini 4", image: "/ipads/ipad-mini/mini-4.jpg",
            link: "/tablet-repair/ipad-repair/ipad-mini-4-repair",
            view: "View Repairs"
        },
        {
            id: 3, name: "Mini 3",
            image: "/ipads/ipad-mini/mini-3.jpg",
            link: "/tablet-repair/ipad-repair/ipad-mini-3-repair",
            view: "View Repairs"
        },
        {
            id: 2, name: "Mini 2",
            image: "/ipads/ipad-mini/mini-2.jpg",
            link: "/tablet-repair/ipad-repair/ipad-mini-2-repair",
            view: "View Repairs"
        },
        {
            id: 1,
            name: "Mini 1",
            image: "/ipads/ipad-mini/mini-1.jpg",
            link: "/tablet-repair/ipad-repair/ipad-mini-1st-generation-repair",
            view: "View Repairs"
        },
    ],
};
export {categories, products};
