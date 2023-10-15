import Entry from '../models/test'

export const getEntries = (count) => {
return Entry.find().sort().limit(count);
}

export const addEntry = (entry) => {
return Entry.create(entry);
}