module.exports = function reverse (n) {
    const toString = n.toString()
    const toArray = [...toString]

    console.log(toArray)

    if(toArray[0] === "-"){
        return toArray.slice(1).reverse().join("")
    }else
        return toArray.reverse().join("")
}
