function perimeter(n) {
    x = [...Array(n + 1).keys()]
    x
    if (x.length < 3)
        return 4
    x[0] = 1
    x[1] = 1
    for (let i = 2; i < n + 1; i++) {
        x[i] = x[i - 1] + x[i - 2]
    }

    return x = x.map(x => 4 * x).reduce((a, c) => a + c)
}

