const text = document.getElementById('Text')
const Investorspage = document.getElementById('Investor-page')
const add = document.getElementById('add-Investor')
const investor = document.getElementById('investors')
const create = document.getElementById('create')
const overlay = document.getElementById('overlay')
const maxInvestment = document.getElementById('max')
const minInvestment = document.getElementById('min')
const surname = document.getElementById('surname')
const names = document.getElementById('name')
const row = document.querySelector('.row')
const Fundpage = document.getElementById('Fund-page')
const form2 = document.getElementById('createfund')
const fundName = document.getElementById('fundName')
const fundAmount = document.getElementById('fundAmount')

const Dashboard = () => {
    text.classList.remove('hidden')
    Investorspage.classList.add('hidden')
    text.innerHTML = 'Welcome to the Dashboard'
}

const ShowCreateForm = () => {
    create.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const ShowCreateFundForm = () => {
    form2.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const CreateFund = () => {
    form2.classList.add('hidden');
    overlay.classList.add('hidden');

    const tr = document.createElement('tr');
    tr.innerHTML = `
                    <td>${fundName}</td>
                    <td>$${fundAmount}</td>
                    <td>
                        <button class="edit" onclick="Edit(this)">Edit</button>
                        <button class="delete" onclick="Del(this)">Delete</button>
                    </td>`;
    document.getElementById('fund-list').appendChild(tr);
}

const Close = () => {
    create.classList.add('hidden')
    overlay.classList.add('hidden')
    names.value = ''
    surname.value = ''
    minInvestment.value = ''
    maxInvestment.value = ''
}
const Investor = () => {
    text.classList.add('hidden')
    Investorspage.classList.remove('hidden')
    Fundpage.classList.add('hidden')
}
const Funds = () => {
    text.classList.remove('hidden')
    Investorspage.classList.add('hidden')
    Fundpage.classList.remove('hidden')
    text.classList.add('hidden')
}

const CreateInvestor = () => {
    create.classList.remove('hidden')
    overlay.classList.remove('hidden')
    const tr = document.createElement('tr')
    tr.id = 'row';
    tr.innerHTML = `
                    <td>${names.value}</td>
                    <td>${surname.value}</td>
                    <td>$${minInvestment.value}</td>
                    <td>$${maxInvestment.value}</td>
                    <td>
                        <button class="edit" onclick="Edit(this)">Edit</button>
                        <button class="delete" onclick="Del(this)">Delete</button>
                    </td>`
    investor.appendChild(tr)
    Close()
}

let editingRow = null;

const Edit = (btn) => {
    document.getElementById('h2').textContent = 'Edit Investor'
    create.classList.remove('hidden');
    overlay.classList.remove('hidden');
    editingRow = btn.closest('tr');
    names.value = editingRow.children[0].textContent;
    surname.value = editingRow.children[1].textContent;
    minInvestment.value = editingRow.children[2].textContent.replace('$', '');
    maxInvestment.value = editingRow.children[3].textContent.replace('$', '');
    investor.removeChild(editingRow);
    editingRow = null;
}

const Del = (btn) => {
    const tr = btn.closest('tr');
    if (tr && tr.parentNode) {
        tr.parentNode.removeChild(tr);
    }
}