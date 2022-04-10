export const today = new Date().toISOString().slice(0, 10);

let checkEnd = new Date(today);
checkEnd = new Date(checkEnd.setDate(checkEnd.getDate() + 1));
checkEnd = checkEnd.toISOString().slice(0, 10);

export const defaultCheckOut = checkEnd;
