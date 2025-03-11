function uppercaseLetter(str) {  
    let result = '';  
    let shouldCapitalize = true; 

    for (let i=0; i<str.length; i++) {  
        let char = str[i];  
        if (shouldCapitalize && char !== ' ') {  
            result += char.toUpperCase(); 
            shouldCapitalize = false; 
        } else {  
            result += char; 
        }  
        if (char === ' ') {  
            shouldCapitalize = true;  
        }  
    }  
    return result;
}  

console.log(uppercaseLetter("hello WORLD")); 
console.log(uppercaseLetter("rIKKei acaDEMy"));