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

    const completedTasksElement = document.getElementById('head-sum'); // Total completed count
    const taskAssignedElement = document.querySelector('.font-bold.text-2xl'); // Total tasks remaining
    const activityLog = document.querySelector('.activity-log'); // Activity log container
    const clearLogButton = document.getElementById('clear-log'); // Clear log button

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const parentCard = button.closest('div[id]');
            if (!parentCard) return; // Safety check
            
            const buttonId = parentCard.id; // Get button ID
            const message = taskMessages[buttonId]; // Get the corresponding message

            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

            let currentTasks = parseInt(taskAssignedElement.innerText);
            if (currentTasks > 0) {
                taskAssignedElement.innerText = currentTasks - 1;
            }

            let completedTasks = parseInt(completedTasksElement.innerText);
            completedTasksElement.innerText = completedTasks + 1;

            button.disabled = true;
            button.classList.add('opacity-50', 'cursor-not-allowed'); // Style change for disabled state

            if (message) {
                const logEntry = document.createElement('p');
                logEntry.textContent = `${message} ${timeString}`;
                logEntry.classList.add('p-2', 'bg-gray-200', 'rounded-lg', 'mt-2', 'text-sm');

                activityLog.prepend(logEntry);
            }

            alert("Board Added Successfully!");

            if (parseInt(taskAssignedElement.innerText) === 0) {
                setTimeout(() => {
                    alert(" Congratulations!!! You have completed all tasks");
                }, 500); 
            }
        });
    });

    clearLogButton.addEventListener('click', function () {
        activityLog.innerHTML = ''; 
    });
});
