function pigIt(str) {
    return str.split(' ').map((word => !(/[,.!?\-]/.test(word)) ? word.slice(1) + word.slice(0, 1) + 'ay' : word)).join(' ')
}