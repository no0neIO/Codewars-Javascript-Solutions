function alphabetPosition(text) {
    text = text.toLowerCase()
    str = text.replace(/[^a-z]/g, '').split('').map((x => {
        return x.charCodeAt(0) - 97 + 1
    })).join(' ').trim()
    return str
}