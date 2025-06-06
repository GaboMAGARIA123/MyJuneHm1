const text = document.getElementById('Text')
const Investorspage = document.getElementById('Investor-page')
const add = document.getElementById('add-Investor')
const investor = document.getElementById('investors')

const Dashboard = () => {
    text.classList.remove('hidden')
    Investorspage.classList.add('hidden')
    text.innerHTML = 'Welcome to the Dashboard'
}
const Investor = () => {
    text.classList.add('hidden')
    Investorspage.classList.remove('hidden')
}
const Funds = () => {
    text.classList.remove('hidden')
    Investorspage.classList.add('hidden')
    text.innerHTML = 'Welcome to Funds'
}

const AddInvestor = () => {

    const div2 = document.createElement('div')
    div2.classList.add('overlay')
    div2.style.position = 'fixed'
    div2.style.top = 0
    div2.style.left = 0
    div2.style.width = '100vw'
    div2.style.height = '100vh'
    div2.style.background = 'rgba(0,0,0,0.7)'
    div2.style.zIndex = 1000

    const div = document.createElement('div')
    div.classList.add('form')
    div.style.position = 'fixed'
    div.style.top = '50%'
    div.style.left = '50%'
    div.style.transform = 'translate(-50%, -50%)'
    div.style.background = '#fff'
    div.style.padding = '20px'
    div.style.borderRadius = '8px'
    div.style.zIndex = 1001

    div.innerHTML = `
        <div>
            <h2>Add Investor</h2>
            <button class="close">x</button>
        </div>
        <input type="text" id="name" placeholder="Name" required>
        <input type="text" id="surname" placeholder="Surname" required>
        <input type="text" id="min" placeholder="Min-Investment" required>
        <input type="text" id="max" placeholder="Max-Investment" required>
        <button id="save" class="save">Save</button>
    `

    div.querySelector('.close').onclick = () => {
        document.body.removeChild(div2)
        document.body.removeChild(div)
    }
    div2.onclick = () => {
        document.body.removeChild(div2)
        document.body.removeChild(div)
    }


    div.querySelector('#save').onclick = (e) => {
        e.stopPropagation();
        createnewInvestor();
        document.body.removeChild(div2);
        document.body.removeChild(div);
    };

    document.body.appendChild(div2)
    document.body.appendChild(div)
}

const createnewInvestor = () => {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const minInvestment = document.getElementById('min').value;
    const maxInvestment = document.getElementById('max').value;

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${name}</td>
        <td>${surname}</td>
        <td>${minInvestment}</td>
        <td>${maxInvestment}</td>
        <td>
            <button class="edit" id="edit">Edit</button>
            <button class="delete" id="del">Delete</button>
        </td>
    `;

    document.getElementById('name').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('min').value = '';
    document.getElementById('max').value = '';

    investor.appendChild(tr);
}

