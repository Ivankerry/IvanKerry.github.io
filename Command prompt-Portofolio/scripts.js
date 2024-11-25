const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input');
const typeSound = document.getElementById('type-sound');

// Boot Messages
const bootMessages = [
    "Initializing system...",
    "Loading personal portfolio modules...",
    "Connecting to creativity engine...",
    "Boot complete. Welcome to Kerry's Terminal Portfolio!"
];

function bootUp() {
    let index = 0;
    const interval = setInterval(() => {
        if (index < bootMessages.length) {
            output(bootMessages[index]);
            index++;
        } else {
            clearInterval(interval);
            output("Type `help` to get started.");
        }
    }, 1000);
}

window.onload = bootUp;

// Command Execution
inputElement.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const input = inputElement.value.trim();
        inputElement.value = '';
        executeCommand(input);
        playSound();
    }
});

function executeCommand(command) {
    const response = commands[command] || `Command not found: ${command}`;
    if (typeof response === 'function') {
        output(response());
    } else {
        output(response);
    }
}

function output(text) {
    // Add extra line breaks for spacing between each command output
    outputElement.innerHTML += `<div class="command-output">${text}</div><br><br>`;
    outputElement.scrollTop = outputElement.scrollHeight;
}

function switchTheme(theme) {
    document.body.className = theme;
    output(`Switched to ${theme || 'default'} theme!`);
}

function playSound() {
    typeSound.currentTime = 0;
    typeSound.play();
}
