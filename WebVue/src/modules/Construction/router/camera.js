// 集团端-采购管理
import PhotographChildren from '../projectFiles/clique/Photograph/Resources/Router/index' // 集团端-摄

// 分司端-财务
import DepartmentChildren from '../projectFiles/branches/Department/Resources/Router/index' // 分司端-司

// 项目端-实用
import TermChildren from '../projectFiles/Item/Term/Resources/Router/index' // 项目端-项

export default [
    {
        path: 'Photograph',
        component: () => import('../projectFiles/clique/Photograph/Index.vue'),
        children: PhotographChildren
    },
    {
        path: 'Department',
        component: () => import('../projectFiles/branches/Department/Index.vue'),
        children: DepartmentChildren
    },
    {
        path: 'Term',
        component: () => import('../projectFiles/Item/Term/Index.vue'),
        children: TermChildren
    }
]
