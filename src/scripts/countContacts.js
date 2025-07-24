import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
    const dataArray = await readContacts();
    return dataArray.length;
};

console.log(await countContacts());
