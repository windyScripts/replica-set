import { findEntries, createEntry } from '../lib/entries.js';

export const getEntries = async (req,res) => {
    try{
const count = req.params.count;
const result =  await findEntries(count);
return res.status(200).json(result);
}catch(err){
    return res.status(500).json(err);
}
}

export const addEntry = async (req,res) => {
    try{
const entry = req.body.entry;
const result = await createEntry(entry);
return res.status(200).json(result);
}catch(err){
    return res.status(500).json(err);
}
}