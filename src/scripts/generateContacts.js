import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
    try {
  const dataArray = await readContacts();
    for (let i = 1; i <= number; i++) {
        dataArray.push(createFakeContact());
    }
        await writeContacts(dataArray);
     }
    catch (error) {
        console.log('error generating contacts', error);
        
    }
  
 };

generateContacts(5);
