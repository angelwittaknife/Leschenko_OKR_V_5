function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = {};
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count[str[i]] = (count[str[i]] || 0) + 1;
        }
    }
    return count;
}

console.log(countVowels('hello world'));