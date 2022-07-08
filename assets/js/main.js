const output = document.querySelector('#copy');
const block = document.querySelector('.block')

document.querySelectorAll('input').forEach((input) => {
  input.addEventListener('input', () => {
    const borderParam1 = document.querySelector('#top-left > input').value;
    const borderParam2 = document.querySelector('#top-right > input').value;
    const borderParam3 = document.querySelector('#bottom-right > input').value;
    const borderParam4 = document.querySelector('#bottom-left > input').value;

    const data = `${Number(borderParam1)}% ${Number(borderParam2)}% ${Number(borderParam3)}% ${Number(borderParam4)}%`;
    output.textContent = data;
    block.style.borderRadius = data;
  });
});

document.querySelector('#clipboard').addEventListener('click', () => {
  navigator.clipboard.writeText(`border-radius: ${block.style.borderRadius};`);
});