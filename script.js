const No=document.getElementById('No');
function run_button(){
    y = Math.floor(Math.random()*600);
    x = Math.floor(Math.random()*1800);
    No.style.left = `${x}px`;
    No.style.top = `${x}px`;
}
No.addEventListener('mousemove',run_button);