const form = document.getElementById('form');
const cell = document.getElementById('cell');
const input = document.getElementById('color-picker');

const colorGenerator = () => `#${Math.floor(100000 + Math.random() * 600000)}`;

const hoverHandler = () => {
  cell.style.backgroundColor = colorGenerator();
};

const mouseLeaveHandler = () => {
  cell.style.backgroundColor = '';
};

const clickHandler = () => {
  cell.style.backgroundColor = `${input.value}`;
}

const dblclickHandler = () => {
   const rows = document.querySelectorAll('table tr');
  
  let counter = 0;
  
  for (let index = 0; index < rows.length; index++) {
    const row = rows[index];
    const cells = row.children;

    
    if (counter < 6) {
      const cell = cells[counter];

      cell.style.backgroundColor = `${input.value}`;
      counter += 1;
    } else {
      counter = 0;
    }
  }
}

const handleSubmit = (e) => {
  e.preventDefault();
  const elements = document.getElementById('form').elements;
  const obj ={};
  
  for(let i = 0 ; i < elements.length ; i++){
    const item = elements.item(i);
    obj[item.name] = item.value;
  }

  document.getElementById("demo").innerHTML = JSON.stringify(obj);
};

cell.addEventListener('mouseover', hoverHandler);
cell.addEventListener('mouseleave', mouseLeaveHandler);

cell.addEventListener('mouseleave', mouseLeaveHandler);

input.addEventListener('input', clickHandler);
cell.addEventListener('dblclick', dblclickHandler);
form.addEventListener('submit', handleSubmit)