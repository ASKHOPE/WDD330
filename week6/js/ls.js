export function readFromLS(key) {
    let ls = JSON.parse(localStorage.getItem(key));     //  convert LS text to JSON
    return ls;       
}

export function writeToLS(key, data) {
    
    let text = JSON.stringify(data);        // prepare our data to be saved to LS. Convert it to text
    localStorage.setItem(key, text);       
}