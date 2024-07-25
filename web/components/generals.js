function upperLetter(words = ""){
    return words.length != 0 ? words.charAt(0).toUpperCase() + words.slice(1) : words;
}

module.exports = {
	upperLetter,
}

