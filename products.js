const categories = [
    {id: 1, name: "iPhone Repair", link: "/iphone-repair", image: "/iphones/iphone-15-pro.jpg", view: "View Modals"},
    {
        id: 2, name: "iPad Repair", image: "/ipads/ipad-pro.jpg",
        link: "/tablet-repair/ipad-repair-leeds", view: "View Modals"
    },
    {
        id: 3, name: "Smartphone Repair", link: "/smartphone-repair",
        image: "/products/smartphones/nokia.jpg", view: "View Modals"
    },
    {
        id: 4, name: "Tablet Repair", link: "/tablet-repair",
        image: "/products/tablets/other-tablets.jpg", view: "View Modals"
    }, {
        id: 5, name: "Computer Repair", link: "/computer-repair",
        image: "/categories/category-4.jpg", view: "View Repairs"
    },
    {
        id: 6, name: "Game Console Repair", link: "./", image: "/categories/category-5.jpg", view: "View Repairs"
    },
    {id: 7, name: "Watch Repairs", link: "/watch-repair", image: "/categories/category-6.jpg", view: "View Repairs"},
    {id: 8, name: "Mac Repairs", link: "/mac-repairs", image: "/products/macbook-pro.jpg", view: "View Repairs"},
];

const products = {
    iphone: [
        {
            id: 42,
            name: "iPhone 16 Pro Max",
            image: "/iphones/iphone-15-pro-max.jpg",
            link: "/iphone-repair/iphone-16-pro-max-repair",
            view: "View Repairs"
        },
        {
            id: 41,
            name: "iPhone 16 Pro",
            image: "/iphones/iphone-15-pro.jpg",
            link: "/iphone-repair/iphone-16-pro-repair",
            view: "View Repairs"
        },
        {
            id: 40,
            name: "iPhone 16 Plus",
            image: "/iphones/iphone-15-plus.jpg",
            link: "/iphone-repair/iphone-16-plus-repair",
            view: "View Repairs"
        },
        {
            id: 39,
            name: "iPhone 16",
            image: "/iphones/iphone-15.jpg",
            link: "/iphone-repair/iphone-16-repair",
            view: "View Repairs"
        },
        {
            id: 38,
            name: "iPhone 15 Pro Max",
            image: "/iphones/iphone-15-pro-max.jpg",
            link: "/iphone-repair/iphone-15-pro-max-repair",
            view: "View Repairs"
        },
        {
            id: 37,
            name: "iPhone 15 Pro",
            image: "/iphones/iphone-15-pro.jpg",
            link: "/iphone-repair/iphone-15-pro-repair",
            view: "View Repairs"
        },
        {
            id: 36,
            name: "iPhone 15 Plus",
            image: "/iphones/iphone-15-plus.jpg",
            link: "/iphone-repair/iphone-15-plus-repair",
            view: "View Repairs"
        },
        {
            id: 35,
            name: "iPhone 15",
            image: "/iphones/iphone-15.jpg",
            link: "/iphone-repair/iphone-15-repair",
            view: "View Repairs"
        },
        {
            id: 34,
            name: "iPhone 14 Pro Max",
            image: "/iphones/iphone-14-pro-max.jpg",
            link: "/iphone-repair/iphone-14-pro-max-repair",
            view: "View Repairs"
        },
        {
            id: 33,
            name: "iPhone 14 Pro",
            image: "/iphones/iphone-14-pro.jpg",
            link: "/iphone-repair/iphone-14-pro-repair",
            view: "View Repairs"
        },
        {
            id: 32,
            name: "iPhone 14 Plus",
            image: "/iphones/iphone-14-plus.jpg",
            link: "/iphone-repair/iphone-14-plus-repair",
            view: "View Repairs"
        },
        {
            id: 31,
            name: "iPhone 14",
            image: "/iphones/iphone-14.jpg",
            link: "/iphone-repair/iphone-14-repair",
            view: "View Repairs"
        },
        {
            id: 30,
            name: "iPhone SE (3rd Generation)",
            image: "/iphones/iphone-se-3rd-gen.jpg",
            link: "/iphone-repair/iphone-se-3rd-generation",
            view: "View Repairs"
        },
        {
            id: 29,
            name: "iPhone 13 Pro Max",
            image: "/iphones/iphone-13-pro-max.jpg",
            link: "/iphone-repair/iphone-13-pro-max-repair",
            view: "View Repairs"
        },
        {
            id: 28,
            name: "iPhone 13 Pro",
            image: "/iphones/iphone-13-pro.jpg",
            link: "/iphone-repair/iphone-13-pro-repair",
            view: "View Repairs"
        },
        {
            id: 27,
            name: "iPhone 13",
            image: "/iphones/iphone-13.jpg",
            link: "/iphone-repair/iphone-13-repair",
            view: "View Repairs"
        },
        {
            id: 26,
            name: "iPhone 13 Mini",
            image: "/iphones/iphone-13-mini.jpg",
            link: "/iphone-repair/iphone-13-mini-repair",
            view: "View Repairs"
        },
        {
            id: 25,
            name: "iPhone 12 Pro Max",
            image: "/iphones/iphone-12-pro-max.jpg",
            link: "/iphone-repair/iphone-12-pro-max-repair",
            view: "View Repairs"
        },
        {
            id: 24,
            name: "iPhone 12 Pro",
            image: "/iphones/iphone-12-pro.jpg",
            link: "/iphone-repair/iphone-12-pro-repair",
            view: "View Repairs"
        },
        {
            id: 23,
            name: "iPhone 12",
            image: "/iphones/iphone-12.jpg",
            link: "/iphone-repair/iphone-12-repair",
            view: "View Repairs"
        },
        {
            id: 22,
            name: "iPhone 12 Mini",
            image: "/iphones/iphone-12-mini.jpg",
            link: "/iphone-repair/iphone-12-mini-repair",
            view: "View Repairs"
        },
        {
            id: 21,
            name: "iPhone SE (2nd Generation)",
            image: "/iphones/iphone-se-2nd-gen.jpg",
            link: "/iphone-repair/iphone-se-2nd-generation",
            view: "View Repairs"
        },
        {
            id: 20,
            name: "iPhone 11 Pro Max",
            image: "/iphones/iphone-11-pro-max.jpg",
            link: "/iphone-repair/iphone-11-pro-max-repair",
            view: "View Repairs"
        },
        {
            id: 19,
            name: "iPhone 11 Pro",
            image: "/iphones/iphone-11-pro.jpg",
            link: "/iphone-repair/iphone-11-pro-repair",
            view: "View Repairs"
        },
        {
            id: 18,
            name: "iPhone 11",
            image: "/iphones/iphone-11.jpg",
            link: "/iphone-repair/iphone-11-repair",
            view: "View Repairs"
        },
        {
            id: 17,
            name: "iPhone XS Max",
            image: "/iphones/iphone-xs-max.jpg",
            link: "/iphone-repair/iphone-xs-max-repair",
            view: "View Repairs"
        },
        {
            id: 16,
            name: "iPhone XS",
            image: "/iphones/iphone-xs.jpg",
            link: "/iphone-repair/iphone-xs-repair",
            view: "View Repairs"
        },
        {
            id: 15,
            name: "iPhone XR",
            image: "/iphones/iphone-xr.jpg",
            link: "/iphone-repair/iphone-xr-repair",
            view: "View Repairs"
        },
        {
            id: 14,
            name: "iPhone X",
            image: "/iphones/iphone-x.jpg",
            link: "/iphone-repair/iphone-x-repair",
            view: "View Repairs"
        },
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
            id: 1,
            name: "iPad",
            image: "/products/tablets/ipads/ipad-mini.jpg",
            link: "/tablet-repair/ipad-repair-leeds",
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
            link: "/smartphone-repair/htc-repair",
            view: "View Repairs"
        },
        {
            id: 6, name: "Motorola Repair",
            image: "/products/smartphones/motorola.jpg",
            link: "/smartphone-repair/motorola-repair",
            view: "View Repairs"
        },
        {
            id: 7, name: "OnePlus Repair",
            image: "/products/smartphones/oneplus.jpg",
            link: "/smartphone-repair/oneplus-repair",
            view: "View Repairs"
        },
        {
            id: 8, name: "BlackBerry Repair",
            image: "/products/smartphones/blackberry.jpg",
            link: "/smartphone-repair/blackberry-repair",
            view: "View Repairs"
        },
        {
            id: 9, name: "Nokia Repair",
            image: "/products/smartphones/nokia.jpg",
            link: "/smartphone-repair/nokia-repair",
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
        {
            id: 5,
            name: "Air 5",
            image: "/ipads/ipad-air/air-5.jpg",
            link: "/tablet-repair/ipad-repair-leeds/ipad-air/ipad-air-5-repair",
            view: "View Repairs"
        },
        {
            id: 4, name: "Air 4", image: "/ipads/ipad-air/air-4.jpg",
            link: "/tablet-repair/ipad-repair-leeds/ipad-air/ipad-air-4-repair",
            view: "View Repairs"
        },
        {
            id: 3, name: "Air 3", image: "/ipads/ipad-air/air-3.jpg",
            link: "/tablet-repair/ipad-repair-leeds/ipad-air/ipad-air-3-repair",
            view: "View Repairs"
        },
        {
            id: 2, name: "Air 2", image: "/ipads/ipad-air/air-2.jpg",
            link: "/tablet-repair/ipad-repair-leeds/ipad-air/ipad-air-2-repair",
            view: "View Repairs"
        },
        {
            id: 1, name: "Air 1", image: "/ipads/ipad-air/air-1.jpg",
            link: "/tablet-repair/ipad-repair-leeds/ipad-air/ipad-air-1-repair",
            view: "View Repairs"
        },
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
    ipods: [
        {id: 1, name: "iPod Touch", image: "/products/ipod-touch.jpg", link: "/ipod-repairs/ipod-touch", view: "View Modals"},
        {id: 2, name: "iPod Classic", image: "/products/ipod-classic.jpg", link: "/ipod-repairs/ipod-classic", view: "View Modals"},
        {id: 2, name: "iPod Nano", image: "/ipods/ipod-nano/6th-gen.jpg", link: "/ipod-repairs/ipod-nano", view: "View Modals"},
    ],
    ipodTouch: [
        {
            id: 1, name: "iPod Touch 7th Generation", image: "/ipods/ipod-touch/7th-gen.jpg",
            link: "/ipod-repairs/ipod-touch/ipod-touch-7th-generation-repair", view: "View Repairs"
        },
        {
            id: 2, name: "iPod Touch 6th Generation", image: "/ipods/ipod-touch/6th-gen.jpg",
            link: "/ipod-repairs/ipod-touch/ipod-touch-6th-generation-repair", view: "View Repairs"
        },
        {
            id: 3, name: "iPod Touch 5th Generation", image: "/ipods/ipod-touch/5th-gen.jpg",
            link: "/ipod-repairs/ipod-touch/ipod-touch-5th-generation-repair", view: "View Repairs"
        },
        {
            id: 4, name: "iPod Touch 4th Generation", image: "/ipods/ipod-touch/4th-gen.jpg",
            link: "/ipod-repairs/ipod-touch/ipod-touch-4th-generation-repair", view: "View Repairs"
        },
        {
            id: 5, name: "iPod Touch 3rd Generation", image: "/ipods/ipod-touch/3rd-gen.jpg",
            link: "/ipod-repairs/ipod-touch/ipod-touch-3rd-generation-repair", view: "View Repairs"
        },
        {
            id: 6, name: "iPod Touch 2nd Generation", image: "/ipods/ipod-touch/2nd-gen.jpg",
            link: "/ipod-repairs/ipod-touch/ipod-touch-2nd-generation-repair", view: "View Repairs"
        },
    ],
    ipodClassic: [
        {
            id: 1, name: "iPod Classic 7th Generation", image: "/ipods/ipod-classic/7th-gen.jpg",
            link: "/ipod-repairs/ipod-classic/ipod-classic-7th-generation-repair", view: "View Repairs"
        },
        {
            id: 2, name: "iPod Classic 6th Generation", image: "/ipods/ipod-classic/6th-gen.jpg",
            link: "/ipod-repairs/ipod-classic/ipod-classic-6th-generation-repair", view: "View Repairs"
        },
        {
            id: 3, name: "iPod Video 5th Generation", image: "/ipods/ipod-classic/5th-gen.jpg",
            link: "/ipod-repairs/ipod-classic/ipod-video-5th-generation-repair", view: "View Repairs"
        },
        {
            id: 4, name: "iPod 4th Generation", image: "/ipods/ipod-classic/4th-gen.jpg",
            link: "/ipod-repairs/ipod-classic/ipod-4th-generation-repair", view: "View Repairs"
        },
    ],
    ipodNano: [
        {
            id: 1, name: "iPod Nano 6th Generation", image: "/ipods/ipod-nano/6th-gen.jpg",
            link: "/ipod-repairs/ipod-nano/ipod-nano-6th-generation-repair", view: "View Repairs"
        },
        {
            id: 2, name: "iPod Nano 5th Generation", image: "/ipods/ipod-nano/5th-gen.jpg",
            link: "/ipod-repairs/ipod-nano/ipod-nano-5th-generation-repair", view: "View Repairs"
        },
        {
            id: 3, name: "iPod Nano 4th Generation", image: "/ipods/ipod-nano/4th-gen.jpg",
            link: "/ipod-repairs/ipod-nano/ipod-nano-4th-generation-repair", view: "View Repairs"
        },
        {
            id: 4, name: "iPod Nano 3rd Generation", image: "/ipods/ipod-nano/3rd-gen.jpg",
            link: "/ipod-repairs/ipod-nano/ipod-nano-3rd-generation-repair", view: "View Repairs"
        },
        {
            id: 5, name: "iPod Nano 2nd Generation", image: "/ipods/ipod-nano/2nd-gen.jpg",
            link: "/ipod-repairs/ipod-nano/ipod-nano-2nd-generation-repair", view: "View Repairs"
        },
    ],
    AppleWAtches: [
        {id: 10, name: "Series 10", image: "/watches/series-10.jpg", link: "/watch-repair/series-10", view: "View Repairs"},
        {id: 9, name: "Series 9", image: "/watches/series-9.jpg", link: "/watch-repair/series-9", view: "View Repairs"},
        {id: 1, name: "Series 8", image: "/watches/series-8.jpg", link: "/watch-repair/series-8", view: "View Repairs"},
        {id: 2, name: "SE (2nd Generation)", image: "/watches/se-2nd-gen.jpg", link: "/watch-repair/se-2nd-generation", view: "View Repairs"},
        {id: 3, name: "Series 7", image: "/watches/series-7.jpg", link: "/watch-repair/series-7", view: "View Repairs"},
        {id: 4, name: "Series 6", image: "/watches/series-6.jpg", link: "/watch-repair/series-6", view: "View Repairs"},
        {id: 5, name: "SE (1st Generation)", image: "/watches/se-1st-gen.jpg", link: "/watch-repair/se-1st-generation", view: "View Repairs"},
        {id: 6, name: "Series 5", image: "/watches/series-5.jpg", link: "/watch-repair/series-5", view: "View Repairs"},
        {id: 7, name: "Series 4", image: "/watches/series-4.jpg", link: "/watch-repair/series-4", view: "View Repairs"},
        {id: 8, name: "Series 3", image: "/watches/series-3.jpg", link: "/watch-repair/series-3", view: "View Repairs"},
    ],

    macModals: [
        {id: 1, name: "MacBook Air", image: "/products/macbook-air.jpg", link: "/mac-repairs/macbook-air", view: "View Modals"},
        {id: 2, name: "MacBook Pro", image: "/products/macbook-pro.jpg", link: "/mac-repairs/macbook-pro", view: "View Modals"},
        {id: 3, name: "iMac", image: "/products/imac.jpg", link: "/mac-repairs/imac", view: "View Modals"},
        {id: 4, name: "Mac mini", image: "/products/mac-mini.jpg", link: "/mac-repairs/mac-mini", view: "View Modals"},
    ],
    MacBookAir11Inch: [
        {id: 1, name: "MacBook Air (11-inch, 13-15)", image: "/mac/macbook-air/11-inch/11-inch-13-15.jpg", link: "/mac-repairs/macbook-air/macbook-air-11-inch-13-15", view: "View Repairs"},
    ],
    MacBookAir13Inch: [
        {id: 1, name: "MacBook Air (13-inch, M2, 2022)", image: "/mac/macbook-air/13-inch/13-inch-m2.jpg", link: "/mac-repairs/macbook-air/macbook-air-13-inch-m2", view: "View Repairs"},
        {id: 2, name: "MacBook Air (13-inch, M1, 2020)", image: "/mac/macbook-air/13-inch/13-inch-m1.jpg", link: "/mac-repairs/macbook-air/macbook-air-13-inch-m1", view: "View Repairs"},
        {id: 3, name: "MacBook Air (13-inch, Intel, 18-20)", image: "/mac/macbook-air/13-inch/13-inch-retina.jpg", link: "/mac-repairs/macbook-air/macbook-air-13-inch-retina", view: "View Repairs"},
        {id: 4, name: "MacBook Air (13-inch, 13-17)", image: "/mac/macbook-air/13-inch/13-inch-13-17.jpg", link: "/mac-repairs/macbook-air/macbook-air-13-inch-13-17", view: "View Repairs"},
    ],
    MacBookAir15Inch: [
        {id: 1, name: "MacBook Air (15-inch, M2, 2023)", image: "/mac/macbook-air/15-inch/15-inch-m2.jpg", link: "/mac-repairs/macbook-air/macbook-air-15-inch-m2", view: "View Repairs"},
    ],
    MacBookPro13Inch: [
        {id: 1, name: "MacBook Pro (13-inch, M2, 2022)", image: "/mac/macbook-pro/13-inch/13-inch-m2.jpg", link: "/mac-repairs/macbook-pro/macbook-pro-13-inch-m2", view: "View Repairs"},
        {id: 2, name: "MacBook Pro (13-inch, M1, 2020)", image: "/mac/macbook-pro/13-inch/13-inch-m1.jpg", link: "/mac-repairs/macbook-pro/macbook-pro-13-inch-m1", view: "View Repairs"},
        {id: 3, name: "MacBook Pro (13-inch, Intel, 2020)", image: "/mac/macbook-pro/13-inch/13-inch-intel-2020.jpg", link: "/mac-repairs/macbook-pro/macbook-pro-13-inch-intel-2020", view: "View Repairs"},
        {id: 4, name: "MacBook Pro (13-inch, 2019)", image: "/mac/macbook-pro/13-inch/13-inch-2019.jpg", link: "/mac-repairs/macbook-pro/macbook-pro-13-inch-2019", view: "View Repairs"},
        {id: 5, name: "MacBook Pro (13-inch, 2018)", image: "/mac/macbook-pro/13-inch/13-inch-2018.jpg", link: "/mac-repairs/macbook-pro/macbook-pro-13-inch-2018", view: "View Repairs"},
        {id: 6, name: "MacBook Pro (13-inch, 2017)", image: "/mac/macbook-pro/13-inch/13-inch-2017.jpg", link: "/mac-repairs/macbook-pro/macbook-pro-13-inch-2017", view: "View Repairs"},
        {id: 7, name: "MacBook Pro (13-inch, Retina, 12-15)", image: "/mac/macbook-pro/13-inch/13-inch-retina.jpg", link: "/mac-repairs/macbook-pro/macbook-pro-13-inch-retina", view: "View Repairs"},
        {id: 8, name: "MacBook Pro (13-inch, Unibody, 09-12)", image: "/mac/macbook-pro/13-inch/13-inch-unibody.jpg", link: "/mac-repairs/macbook-pro/macbook-pro-13-inch-unibody", view: "View Repairs"},
    ],
    MacBookPro14Inch: [
        {id: 1, name: "MacBook Pro (14-inch, M3 Pro/Max, 2023)", image: "/mac/macbook-pro/14-inch/14-inch-2023-m3-pro-max.jpg", link: "/mac-repairs/macbook-pro/macbook-pro-14-inch-2023-m3-pro-max", view: "View Repairs"},
        {id: 2, name: "MacBook Pro (14-inch, M3, 2023)", image: "/mac/macbook-pro/14-inch/14-inch-m3-2023.jpg", link: "/mac-repairs/macbook-pro/macbook-pro-14-inch-m3-2023", view: "View Repairs"},
        {id: 3, name: "MacBook Pro (14-inch, M2, 2023)", image: "/mac/macbook-pro/14-inch/14-inch-m2-2023.jpg", link: "/mac-repairs/macbook-pro/macbook-pro-14-inch-m2-2023", view: "View Repairs"},
        {id: 4, name: "MacBook Pro (14-inch, 2021)", image: "/mac/macbook-pro/14-inch/14-inch-2021.jpg", link: "/mac-repairs/macbook-pro/macbook-pro-14-inch-2021", view: "View Repairs"},
    ],
    MacBookPro15Inch: [
        {id: 1, name: "MacBook Pro (15-inch, 2019)", image: "/mac/macbook-pro/15-inch/15-inch-2019.jpg", link: "/mac-repairs/macbook-pro/macbook-pro-15-inch-2019", view: "View Repairs"},
        {id: 2, name: "MacBook Pro (15-inch, 2018)", image: "/mac/macbook-pro/15-inch/15-inch-2018.jpg", link: "/mac-repairs/macbook-pro/macbook-pro-15-inch-2018", view: "View Repairs"},
        {id: 3, name: "MacBook Pro (15-inch, 2017)", image: "/mac/macbook-pro/15-inch/15-inch-2017.jpg", link: "/mac-repairs/macbook-pro/macbook-pro-15-inch-2017", view: "View Repairs"},
        {id: 4, name: "MacBook Pro (15-inch, 2016)", image: "/mac/macbook-pro/15-inch/15-inch-2016.jpg", link: "/mac-repairs/macbook-pro/macbook-pro-15-inch-2016", view: "View Repairs"},
        {id: 5, name: "MacBook Pro (15-inch, Retina, 12-15)", image: "/mac/macbook-pro/15-inch/15-inch-retina.jpg", link: "/mac-repairs/macbook-pro/macbook-pro-15-inch-retina", view: "View Repairs"},
        {id: 6, name: "MacBook Pro (15-inch, Unibody, 09-12)", image: "/mac/macbook-pro/15-inch/15-inch-unibody.jpg", link: "/mac-repairs/macbook-pro/macbook-pro-15-inch-unibody", view: "View Repairs"},
    ],
    MacBookPro16Inch: [
        {id: 1, name: "MacBook Pro (16-inch, M3, 2023)", image: "/mac/macbook-pro/16-inch/16-inch-m3-2023.jpg", link: "/mac-repairs/macbook-pro/macbook-pro-16-inch-m3-2023", view: "View Repairs"},
        {id: 2, name: "MacBook Pro (16-inch, M2, 2023)", image: "/mac/macbook-pro/16-inch/16-inch-m2-2023.jpg", link: "/mac-repairs/macbook-pro/macbook-pro-16-inch-m2-2023", view: "View Repairs"},
        {id: 3, name: "MacBook Pro (16-inch, 2021)", image: "/mac/macbook-pro/16-inch/16-inch-2021.jpg", link: "/mac-repairs/macbook-pro/macbook-pro-16-inch-2021", view: "View Repairs"},
        {id: 4, name: "MacBook Pro (16-inch, 2019)", image: "/mac/macbook-pro/16-inch/16-inch-2019.jpg", link: "/mac-repairs/macbook-pro/macbook-pro-16-inch-2019", view: "View Repairs"},
    ],

    iMac21Inch: [
        {id: 1, name: "iMac 21.5-inch (4k, 17-19)", image: "/mac/imac/21.5-inch/21-5-inch-4k-17-19.jpg", link: "/mac-repairs/imac/imac-21-5-inch-4k-17-19", view: "View Repairs"},
        {id: 2, name: "iMac 21.5-inch (14-17)", image: "/mac/imac/21.5-inch/21-5-inch-14-17.jpg", link: "/mac-repairs/imac/imac-21-5-inch-14-17", view: "View Repairs"},
        {id: 3, name: "iMac 21.5-inch (4k, 2015)", image: "/mac/imac/21.5-inch/21-5-inch-4k-2015.jpg", link: "/mac-repairs/imac/imac-21-5-inch-4k-2015", view: "View Repairs"},
        {id: 4, name: "iMac 21.5-inch (12-13)", image: "/mac/imac/21.5-inch/21-5-inch-12-13.jpg", link: "/mac-repairs/imac/imac-21-5-inch-12-13", view: "View Repairs"},
    ],
    iMac27Inch: [
        {id: 1, name: "iMac 27-inch (5k, 2020)", image: "/mac/imac/27-inch/27-inch-5k-2020.jpg", link: "/mac-repairs/imac/imac-27-inch-5k-2020", view: "View Repairs"},
        {id: 2, name: "iMac 27-inch (5k, 2019)", image: "/mac/imac/27-inch/27-inch-5k-2019.jpg", link: "/mac-repairs/imac/imac-27-inch-5k-2019", view: "View Repairs"},
        {id: 3, name: "iMac 27-inch (5k, 2017)", image: "/mac/imac/27-inch/27-inch-5k-2017.jpg", link: "/mac-repairs/imac/imac-27-inch-5k-2017", view: "View Repairs"},
        {id: 4, name: "iMac 27-inch (5k, 14-15)", image: "/mac/imac/27-inch/27-inch-5k-14-15.jpg", link: "/mac-repairs/imac/imac-27-inch-5k-14-15", view: "View Repairs"},
        {id: 5, name: "iMac 27-inch (12-13)", image: "/mac/imac/27-inch/27-inch-12-13.jpg", link: "/mac-repairs/imac/imac-27-inch-12-13", view: "View Repairs"},
    ],
    MacMini: [
        {id: 1, name: "Mac mini 2018", image: "/mac/mac-mini/mac-mini-2018.jpg", link: "/mac-repairs/mac-mini/mac-mini-2018", view: "View Repairs"},
        {id: 2, name: "Mac mini 2014", image: "/mac/mac-mini/mac-mini-2014.jpg", link: "/mac-repairs/mac-mini/mac-mini-2014", view: "View Repairs"},
        {id: 3, name: "Mac mini 2012", image: "/mac/mac-mini/mac-mini-2012.jpg", link: "/mac-repairs/mac-mini/mac-mini-2012", view: "View Repairs"},

    ],

};
export {categories, products};
