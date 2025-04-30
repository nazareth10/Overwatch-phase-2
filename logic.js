
const consoleOutput = document.getElementById('console');
const input = document.getElementById('input');

function logToConsole(text) {
    consoleOutput.innerHTML += text + "<br>";
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

function processCommand(cmd) {
    if (cmd === '/deploy_phase2') {
        logToConsole("Phase II modules activated. Awaiting input.");
    } else if (cmd.startsWith('/create_ebook')) {
        const topic = cmd.replace('/create_ebook', '').trim();
        logToConsole("EBook created for topic: " + topic);
    } else if (cmd.startsWith('/create_product_page')) {
        const product = cmd.replace('/create_product_page', '').trim();
        logToConsole("Product page created for: " + product);
    } else {
        logToConsole("Unknown command: " + cmd);
    }
}

function handleInput(e) {
    if (e.key === 'Enter') {
        const command = input.value.trim();
        if (command) {
            logToConsole("> " + command);
            processCommand(command);
            input.value = '';
        }
    }
}
