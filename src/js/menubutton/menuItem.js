//
// menuItemList
//

// create
// ---

// TODO id 의미없음
function mb_create_menuItem(id, data, index) {
    var $menu = data.name ? mb_create_$menu(id, data) : mb_create_empty$menu(id, data)

    var inst = {
        id: id,
        data: data,
        $el: $menu,

        index: index,
    }

    // bind listeners
    mb_menuitem_bind_listeners(inst)

    //
    //
    //
    return inst
}

// 
// ---

// 마지막것이 emptyitem이 아니면 생성해줌
function mb_menuitem_append_emptyitem_if_last_is_not_emptyitem() {
    console.log('ww')
    var $mb_menuview = $('#mb-menuview')
    var $menuitems = $mb_menuview.children()

    if ( $menuitems.last().data('type') !== 'empty' ) {
        var index = $menuitems.length
        var item = mb_create_menuItem('', {}, index)
        $mb_menuview.append(item.$el)
    }
}

// listeners
// ---


function mb_menuitem_bind_listeners(inst) {

    mb_submenu(inst)

    mb_menuitem_bind_mobile_draganddrop_listener(inst)
}

function mb_submenu(inst) {
    var $color_btn = inst.$el.find('.tools').find('> a').first()
    var $color_dropdown = $color_btn.next('ul')

    var $cmd_btn = inst.$el.find('.tools').find('> a').last()
    var $cmd_dropdown = $cmd_btn.next('ul')

    // show dropdown 
    $color_btn.on('click', function (e) {
        e.preventDefault()

        $cmd_dropdown.hide()
        $color_dropdown.toggle()
    })
    $cmd_btn.on('click', function (e) {
        e.preventDefault()

        $color_dropdown.hide()
        $cmd_dropdown.toggle()
    })


    // change color
    $color_dropdown.find('li').on('click', function (e) {
        e.preventDefault()

        var color_str = $(this).find('a').css('backgroundColor')
        mb_menuitem_update_color(inst.$el, color_str)

        // 후처리
        $color_dropdown.hide()
    })

    // delete
    $cmd_dropdown.find('li[data-type="delete"]').on('click', function (e) {
        e.preventDefault()

        inst.$el.remove()

        // 후처리
        $cmd_dropdown.hide()
        mb_menuitem_append_emptyitem_if_last_is_not_emptyitem()
    })

    // update
    $cmd_dropdown.find('li[data-type="update"]').on('click', function (e) {
        e.preventDefault()

        // TODO popup
        var data = {
            name: 'updatename',
            price: 'updaetprice'
        }
        mb_menuitem_update_text(inst.$el, data)

        // 후처리
        $cmd_dropdown.hide()
    })

    // add
    $cmd_dropdown.find('li[data-type="add"]').on('click', function (e) {
        e.preventDefault()

        // TODO popup
        var data = {
            name: 'addname',
            price: 'addprice',
            color: inst.data.color
        }
        var item = mb_create_menuItem(inst.id, data, inst.index)
        inst.$el.replaceWith(item.$el)

        // 후처리
        $cmd_dropdown.hide()
        mb_menuitem_append_emptyitem_if_last_is_not_emptyitem()
    })
}

function mb_menuitem_bind_mobile_draganddrop_listener(inst) {
    var el = document.getElementById('mb-menuview');
    Sortable.create(el, {
        sort: true,  // sorting inside list

        onEnd: mb_menuitem_append_emptyitem_if_last_is_not_emptyitem
    })
}


//
// TODO sortablejs 덕분에, 사용하지않을것같다.
// 만약 사용한다면 아래로변경
// <div class="thumbnail draganddrop" draggable="true">
//
function mb_menuitem_bind_pc_draganddrop_listener(inst) {
    var $menu = inst.$el.children().first()

    $menu.bind('dragstart', function (e) {
        var event = e.originalEvent
        event.dataTransfer.setData("Text", null);
        // make it half transparent
        event.target.style.opacity = .5;

        STATE.dragged = event.target;

        // NOTE: draganddrop의 자식 이벤트 무시위해 css줘야함  .draganddrop * {pointer-events: none;}
        $('.draganddrop').addClass('draganddrop-active')
    })
    $menu.bind('dragend', function (e) {
        var event = e.originalEvent
        event.target.style.opacity = ""

        STATE.dragged = null;

        $('.draganddrop').removeClass('draganddrop-active')
    })

    /* events fired on the drop targets */
    $menu.bind('dragover', function (e) {
        e.preventDefault()
    })

    $menu.bind('dragenter', function (e) {
        var event = e.originalEvent
        if ( event.target.className && event.target.className.indexOf("draganddrop") != -1 ) {
            event.target.style.background = "purple";
        }
    })

    $menu.bind('dragleave', function (e) {
        var event = e.originalEvent
        if ( event.target.className && event.target.className.indexOf("draganddrop") != -1 ) {
            event.target.style.background = "";
        }
    })

    $menu.bind('drop', function (e) {
        var event = e.originalEvent
        // prevent default action (open as link for some elements)
        e.preventDefault();

        // move dragged elem to the selected drop target
        if ( event.target.className && event.target.className.indexOf("draganddrop") != -1 ) {
            event.target.style.background = "";

            if (STATE.dragged) {
                // swap
                var target = event.target.parentElement
                var source = STATE.dragged.parentElement
                u_swapNodes(target, source)

                //
                STATE.dragged = null;
            }
        }
    })

}
