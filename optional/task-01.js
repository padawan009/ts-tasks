function giveCookie(name) {
    return "One for ".concat(name ? name : 'you', ", one for me.");
}
console.log(giveCookie());
console.log(giveCookie('Asya'));
