document.addEventListener('DOMContentLoaded', function () {
    const taskMessages = {
        "card-btn-1": "You have Completed The Task Fix Mobile Button Issue at",
        "card-btn-2": "You have Completed The Task Add Dark Mode at",
        "card-btn-3": "You have Completed The Task Optimize Home page at",
        "card-btn-4": "You have Completed The Task Add new emoji 🤲 at",
        "card-btn-5": "You have Completed The Task Integrate OpenAI API at",
        "card-btn-6": "You have Completed The Task Improve Job searching at"
    };

    const buttons = document.querySelectorAll('.btn.bg-blue-600');

    const completedTasksElement = document.getElementById('head-sum'); 
    const taskAssignedElement = document.querySelector('.font-bold.text-2xl'); 
    const activityLog = document.querySelector('.activity-log'); 
    const clearLogButton = document.getElementById('clear-log'); 

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const parentCard = button.closest('div[id]');
            if (!parentCard) return; 
            
            const buttonId = parentCard.id; 
            const message = taskMessages[buttonId]; 

            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

            let currentTasks = parseInt(taskAssignedElement.innerText);
            if (currentTasks > 0) {
                taskAssignedElement.innerText = currentTasks - 1;
            }

            let completedTasks = parseInt(completedTasksElement.innerText);
            completedTasksElement.innerText = completedTasks + 1;

            button.disabled = true;
            button.classList.add('opacity-50', 'cursor-not-allowed'); 
            if (message) {
                const logEntry = document.createElement('p');
                logEntry.textContent = `${message} ${timeString}`;
                logEntry.classList.add('p-2', 'bg-gray-200', 'rounded-lg', 'mt-2', 'text-sm');

                activityLog.prepend(logEntry);
            }

            alert("Board Added Successfully!");
        });
    });

    clearLogButton.addEventListener('click', function () {
        activityLog.innerHTML = 'All history clear';
    });
});
