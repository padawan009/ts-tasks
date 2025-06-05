function giveCookie<Type>(name?: Type): string {
    return `One for ${name ? name : 'you'}, one for me.`
}


console.log(giveCookie());
console.log(giveCookie('Asya'));