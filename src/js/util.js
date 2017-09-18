function u_range(i, max) {
    i = i || 0
    max = max || 0
    var rs = []
    for(; i < max; ++i) {
        rs.push(i)
    }
    return rs
}
function u_random_int(min, max) {
    return  Math.floor(Math.random() * (max - min + 1) + min);
}

function u_is_chart() {
    return /index.html/.test(document.location.href)
}

function u_is_menubutton() {
    return /menubutton.html/.test(document.location.href)
}
