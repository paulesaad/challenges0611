/**
 * return an array of dependencies
 *
 * - puts first level of deps on result[]
 * - then loops over all sub deps and puts those on result[]
 */
function getDependencies(deps){
    var result = []
    result.push(`${deps.name}@${deps.version}`)

    getSubDependencies(deps.dependencies, result)

    return result
}

/**
 * append dependencies to result
 */
function getSubDependencies(deps, result){
    Object.keys(deps).forEach((name) => {
        result.push(`${name}@${deps[name].version}`)

        var subDeps = deps[name].dependencies
        if(subDeps){
            getSubDependencies(subDeps, result)
        }
    })
}

// var deps = {
//     "name": "lorem-ipsum", //--> lorem-ipsum@0.1.1
//     "version": "0.1.1",
//     "dependencies": {
//         "optimist": {
//             "version": "0.3.7",
//             "dependencies": {
//                 "wordwrap": {
//                     "version": "0.0.2",
//                     "dependencies": {
//                         "SUPERSAIYAN": {
//                             "version": "9000"
//                         }
//                     }
//                 }
//             }
//         },
//         "inflection": {
//             "version": "1.2.6"
//         }
//     }
// }