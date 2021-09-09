const userFirsName = prompt('Please enter your first name');
const userLastName = prompt('Please enter your last name');
const user = `Hello ${userFirsName} ${userLastName} !`;

if (confirm('Are you 18 or older')) {
    alert(user);
} else {
    alert('What do your parents think about that?');
}