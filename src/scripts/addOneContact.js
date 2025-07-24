import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
    const dataArray = await readContacts();
    const newData = createFakeContact();
    const newDataArray = [...dataArray, newData];
    return await writeContacts(newDataArray);
 };

addOneContact();
