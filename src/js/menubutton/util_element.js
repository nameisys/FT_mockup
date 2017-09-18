//
// util_element
//

// https://stackoverflow.com/questions/698301/is-there-a-native-jquery-function-to-switch-elements/698440#698440
function u_swapNodes(a, b) {
    var aparent = a.parentNode;
    var asibling = a.nextSibling === b ? a : a.nextSibling;
    b.parentNode.insertBefore(a, b);
    aparent.insertBefore(b, asibling);
}
