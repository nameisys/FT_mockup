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
    mb_menuitem_update_image($menu_wrap)

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
    var $color_target = $el.find('.card-wrapper')
    $color_target.css('background-color', color)
}

function mb_menuitem_update_image($el) {
    var path = _seq_imagepath()
    console.log(path)
    var $target = $el.find('.card-image > img').first()
    $target.attr('src', path)
}
var temp_image_index = 0;
function _seq_imagepath() {
    var paths = [
        '../src/img/menu1.jpg',
        '../src/img/menu2.jpg',
        '../src/img/menu3.jpg',
        '../src/img/menu4.jpg',
        '../src/img/menu5.jpg'
    ]
    var idx = (temp_image_index++) % paths.length;
    var path = paths[idx]
    return path
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
