//
// groupItem
//

// create
// ---

function mb_create_groupItem(id, data, index) {
    // NOTE: <button 앞에 공백 들어가면 parseHTML 결과로 name, button 이런형태가됨
    var $el = $($.parseHTML([
        '<button class="btn btn-default menu-btn" type="button">',
        data.name,
        '</button>'
    ].join(''))[0])

    var inst = {
        id: id,
        data: data,
        $el: $el,

        index: index
    }

    // bind listeners
    mb_groupitem_bind_listeners(inst)

    //
    //
    //
    return inst
}

// listeners
// ---

function mb_groupitem_bind_listeners(inst) {
    var $el = inst.$el
    var index = inst.index

    // event
    $el.on('click', function () {
        // 효과간단히
        $('#mb-groupview > .btn').removeClass('active')
        $(this).addClass('active')

        // 클릭한 그룹의 메뉴를 그려줌
        var data = mb_menu_data_list[index]
        if (data) {
            var menuItems = mb_create_menuItems(data)
            var m_$els = menuItems.map(function(item) {
                return item.$el
            })

            $('#mb-menuview').empty().append(m_$els)

            // 후처리
            mb_menuitem_append_emptyitem_if_last_is_not_emptyitem()
        }
    });
}
