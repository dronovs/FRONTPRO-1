const userFirsName = prompt('Please enter your first name');
const userLastName = prompt('Please enter your last name');
const confirming = confirm('Are you 18 or older?');
const user = `Welcome, ${userFirsName} ${userLastName}! We have some cocaine for you)`;

if (confirming) {
    alert(user);
} else {
    alert('What do your parents think about that?');
}