digital_root = (n) => {
    let root = Array.from(n.toString()).map(Number).reduce((a, c) => a + c)
    return root.toString().length === 1 ? root : digital_root(root)
}