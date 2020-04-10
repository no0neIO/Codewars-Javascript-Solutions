function sumStrings(a, b) {
    let alen = a.length
    let blen = b.length

    a = a.split('').reverse()
    b = b.split('').reverse()

    let tmp
    alen > blen ? (tmp = b, b = a, a = tmp, tmp = blen, blen = alen, alen = tmp) : a

    let carry = 0
    let res = 0
    let str = ''
    for (let i = 0; i < alen; i++) {
        sum = (parseInt(a[i]) + parseInt(b[i]) + carry)
        carry = Math.floor(sum / 10)
        sum = sum % 10
        str += sum
    }

    for (let i = alen; i < blen; i++) {
        sum = (parseInt(b[i]) + carry)
        carry = Math.floor(sum / 10)
        sum = sum % 10
        str += sum
    }

    if (carry)
        str += carry

    str = str.split('').reverse().join('')
    str = str.replace(/\b0+/g, '')
    return str
}