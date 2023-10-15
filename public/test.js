const domain = 'http://localhost:3000';

const entryInputForm = document.getElementById('form');

const entryCountForm = document.getElementById('entriesPerPageForm');

const tableBody = document.getElementById('items')

entryInputForm.addEventListener('submit',entrySubmitter)

async function entrySubmitter(e) {
e.preventDefault();
const entryInput = document.getElementById('entry');
const entry = entryInput.value;
const result = await axios.post(domain+`/test/`,entry);
console.log(result);

}

entryCountForm.addEventListener('submit',getEntries)

async function getEntries(e) {
    e.preventDefault();
    const entryCount = document.getElementById('entriesPerPageSelect');
    const count = entryCount.value;
    const result = await axios.get(domain+`/test/${count}`);
    console.log(result);
}