//
// dummy data
//

// 데이터는 그냥하드코딩
var mb_group_data = [
    { name: '1인세트'},
    { name: '패밀리세트'},
    { name: '음료'}
]
var mb_menu_data_list = [
    [
        { name: '1인세트_메뉴1', price: '10000', color: 'red'},
        { name: '1인세트_메뉴2', price: '10000' },
        {},
        { name: '1인세트_메뉴3', price: '10000' },
        { name: '1인세트_메뉴4', price: '10000' }
    ],
    [
        { name: '패밀리세트1', price: '10000' },
        { name: '패밀리세트1', price: '10000' },
        { name: '패밀리세트1', price: '10000' },
        { name: '패밀리세트1', price: '10000' },
    ],
    [
        { name: '음료1', price: '10000' },
        { name: '음료2', price: '10000' },
        { name: '음료3', price: '10000' },
        { name: '음료4', price: '10000' },
        { name: '음료5', price: '10000' },
        { name: '음료6', price: '10000' },
        { name: '음료7', price: '10000' },
        { name: '음료8', price: '10000' },
        { name: '음료9', price: '10000' },
    ]
]

// 추가데이터
u_range(0, 10).forEach(function (v, i) {
    mb_group_data.push({ name: 'othergroup' + i})
})
mb_group_data.forEach(function (group_data, i) {
    if (i < 3) return
    
    var data = u_range(0, 10).map(function (v, i) {
        return { name: group_data.name + 'menu' + v, price: '10000' }
    })
    mb_menu_data_list.push(data)
})
