const messages = [
    "jesus",
    "Ana",
    "Nicolai",
    "Jessica",
    "Diego",
    "Laura",
    "carolina",
    "paulina",
    "prueba"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };

