// TODO LIST:
// 0. ui수정인데
// 1. update, add 검색창..
// 2. 메뉴를 page단위 분리?
// 
// 
//
// TODO 실제사용안함(sortablejs때문)
// global state
//
var STATE = {}
function init_state() {
    STATE.dragged = null
}


//
// create lists
//
function mb_create_groupItems() {
    return mb_group_data.map(function (v, i) {
        var id = 'groupbutton-' + i
        var item = mb_create_groupItem(id, v, i)
        return item
    })
}

function mb_create_menuItems(data) {
    return data.map(function (v, i) {
        var id = 'menubutton-' + i
        var item = mb_create_menuItem(id, v, i)
        return item
    })
}



//
// init
// 
function mb_init() {
    console.log('mb_init')
    var $mb_groupview = $('#mb-groupview')
    var $mb_menuview = $('#mb-menuview')

    // init
    // ---

    // state
    init_state()

    // element
    $mb_groupview.empty()
    $mb_menuview.empty()

    // group
    var groupItems = mb_create_groupItems()
    var $groupEls = groupItems.map(function(item) {
        return item.$el
    })
    $mb_groupview.append($groupEls)


    // init action
    // ---

    // 첫번째 그룹 클릭해서 메뉴만듬
    $groupEls[0].trigger('click')
    
}
$(document).ready(function() {
    if ( !u_is_menubutton() ) return;

    mb_init();
});
// setTimeout(function() {
    // if ( !u_is_menubutton() ) return;

    // mb_init();
// }, 500)
