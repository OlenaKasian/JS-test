// first task
for (let i = 1; i <= 100; i++) {
    console.log("The number is " + i);

    if (i % 3 === 0) {
        console.log("This is divisible by 3");
    }
    if (i % 5 === 0) {
        console.log("This is divisible by 5")
    }
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Jackpot!");
    }
}

// second task
const addCreateImagesButton = function () {
    const button = document.createElement('button');
    button.innerHTML = 'Add image';
    button.onclick = function () {
        const image = document.createElement('img');
        image.src = 'https://picsum.photos/200/200';
        document.body.appendChild(image);
    };
    document.body.appendChild(button);
};
addCreateImagesButton();

// third task
async function showFirstThreeUsers() {
    const fetchData = await fetch('https://reqres.in/api/users');
    const jsonData = await fetchData.json();
    const firstThreeUsers = jsonData.data.slice(0, 3)
    firstThreeUsers.forEach(user => {
        const userDivSection = document.createElement('div');
        userDivSection.innerText = user.first_name;
        document.body.appendChild(userDivSection);
    });
}
showFirstThreeUsers();