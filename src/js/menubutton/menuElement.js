//
// menu element
//

function mb_create_$menu(id, data) {
    data = data || {}

    var $menu_wrap = $('#dummy-menu').children().first().clone()

    mb_menuitem_update_text($menu_wrap, data)
    if (data.color) {
        mb_menuitem_update_color($menu_wrap, data.color)
    }

    return $menu_wrap
}

function mb_create_empty$menu(id, data) {
    data = data || {}

    var $menu_wrap = $('#dummy-menu').children().last().clone()

    if (data.color) {
        mb_menuitem_update_color($menu_wrap, data.color)
    }

    return $menu_wrap
}

function mb_menuitem_update_color($el, color) {
    var $color_target = $el.find('.caption')
    $color_target.css('background-color', color)
}

function mb_menuitem_update_text($el, data) {
    var $lines = $el.find('.food-info')

    if (data.name) {
        var $name_span = $lines.first()
        $name_span.text(data.name)
    }

    if (data.price) {
        var $price_span = $lines.last()
        $price_span.text(data.price+"원")
    }
}
