
IsValid = (val) => {
	return val != '' && val != undefined && val != null ? 1 : 0;
}
SomeTinghLost = (val) => {
	console.error("==============");
	console.table(val);
}

module.exports = {
	IsValid,
	SomeTinghLost,
}