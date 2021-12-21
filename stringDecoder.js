const decoder = code => {
    let numRegX = /\d+/g;
    let nums = code.match(numRegX);
    let chars = code.split(numRegX);
    chars.shift();

    var word = ""
    for(let i = 0; i < chars.length; i++){
        word += chars[i].charAt(nums[i]);
    }
    return word;
}

const testCases = ['0h2xce5ngbrdy', '3vdfn', '0r', '2bna0p1mp2osl0e', '0y4akjfe0s']

for(let i=0; i<testCases.length; i++){
    console.log(decoder(testCases[i]));
}