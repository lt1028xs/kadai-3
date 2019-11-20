const profile = {
    firstName: 'Hanako',
    familyName: 'Tanaka',
    age: 20,
    major: 'Art',
    hobby: 'Listen to music',
    job: 'teacher',
    families: 'Dad Mam Dog'
};

const keys = Object.keys(profile);

for (let i = 0; i < keys.length; i = i + 1) {
    const key = keys[i];
    const value = profile[key];
    const text = '私の' + key + 'は、'　+ value + 'です。'
    console.log(text);
}

for (let key of keys){
    const value = profile[key];
    const text = "私の" + key + "は、" + value + "です。";
    console.log(text);
}

