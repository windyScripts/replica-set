import Entry from '../models/test.js'

export const findEntries = (count) => {
return Entry.find().sort().limit(count);
}

export const createEntry = (entry) => {
return Entry.create(entry);
}