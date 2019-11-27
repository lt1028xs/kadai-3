const str1 = "abc"
const str2 = "'abc'"
const str3 = '"anc"'
const str4 = '{"a": undefined}'
const str5 = '{"a": 123}'
const str6 = '{a: 123}'

// str1　のパース結果
try {
    console.log(JSON.parse(str1))
} catch (error) {
    console.log(error)
    // abc　という文字列は正しい　JSON　ではないから。
    //　正しくは　"abc"
}

// str2　のパース結果
try {
    console.log(JSON.parse(str2))
} catch (error) {
    console.log(error)
    // 'abc' という文字列は正しい　JSON ではないから。
    // 正しくは "abc"
}

// str3 のパース結果
try {
    console.log(JSON.parse(str3))
} catch (error) {
    console.log(error)
    // "abc" は正しい　JSON　なのでパースできる
}

// str4　のパース結果
try {
    console.log(JSON.parse(str4))
} catch (error) {
    console.log(error)
　　 // {"a": undefined}　は正しい　JSON　なのでパースできる
}

// str5　のパース結果
try {
    console.log(JSON.parse(str5))
} catch (error) {
    console.log(error)
    // {"a": 123} は正しい　JSON　なのでパースできる
}

// str6 のパース結果
try {
    console.log(JSON.parse(str6))
} catch (error) {
    console.log(error)
    // {a: 123} は正しい　JSON ではないから。
    // 正しくは　{"a": 123}
}
