const sliderMenu = [
    { // 一级切换tab
        list: [
            {
                name: '工程标准',
                na: '人',
                link: `/Engineering/Personnel`,
                menuFlag: 0
            },
            {
                name: '工程招聘',
                na: '招',
                link: `/Engineering/trick`,
                menuFlag: 1
            },
            {
                name: '工程培训',
                na: '培',
                link: `/Engineering/train`,
                menuFlag: 2
            },
            {
                name: '工程标准',
                na: '留',
                link: `/Engineering/Stay`,
                menuFlag: 3
            },
            {
                name: '工程评估',
                na: '用',
                link: `/Engineering/Use`,
                menuFlag: 4
            },
            {
                name: '薪酬发放',
                na: '薪',
                link: `/Engineering/Salary`,
                menuFlag: 5
            },
            {
                name: '新闻采集',
                na: '新',
                link: `/Engineering/News`,
                menuFlag: 6
            },
            {
                name: '司管理',
                na: '司',
                link: `/Engineering/Division`,
                menuFlag: 7
            },
            {
                name: '工程资料',
                na: '资',
                link: `/Engineering/Engineering`,
                menuFlag: 8
            }
            // {
            //     name: '财务接口',
            //     na: '财',
            //     link: `/Engineering/Salarys`,
            //     menuFlag: 8
            // }
            // {
            //     link: `/Engineering/Area`,
            //     menuFlag: 7
            // }
        ]
    }
]

export {
    sliderMenu
}
