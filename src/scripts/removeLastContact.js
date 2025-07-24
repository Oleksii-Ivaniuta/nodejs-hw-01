import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => { 
    const dataArray = await readContacts();
    if (dataArray.length === 0) {
        return
    }
    const newDataAray = dataArray.slice(0, (dataArray.length - 1));
    await writeContacts(newDataAray);
    
};
removeLastContact();
