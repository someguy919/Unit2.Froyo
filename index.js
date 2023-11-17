
const flavors = window.prompt("enter some flavors", "chocolate, chocolate, vanilla, vanilla, mint, mint, strawberry")


const flavorArr = flavors.split(",")



function numberOfFlavors (flavors) {
    const stats = {};
    for (let i = 0; i < flavorArr.length; i++) {
        const ltr = flavorArr[i].trim()
        if ((stats)[ltr] === undefined) {
            stats[ltr] = 0
        }
        stats[ltr]++
    }
    return stats
}

console.table(numberOfFlavors(flavors));

