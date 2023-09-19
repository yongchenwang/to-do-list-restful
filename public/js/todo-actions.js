document.getElementById('postBtn').addEventListener('click', function(e) {
    e.preventDefault();
    let description = document.getElementById('description').value;
    fetch('/task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({description: description}),
    });
    window.location.reload();
});

document.querySelectorAll('[id^="delBtn"]').forEach(function(delBtn) {
    delBtn.addEventListener('click', function(e) {
        e.preventDefault();
        let id = this.getAttribute('task-id');
        fetch(`/task/${id}`, {
            method: 'DELETE'
        })
        window.location.reload();
    });
});

document.querySelectorAll('[id^="patchBtn"]').forEach(function(patchBtn) {
    patchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        let id = this.getAttribute('task-id');
        let completed = this.getAttribute('completed-status') === 'true' ? true : false;
        console.log(!completed);
        fetch(`/task/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({completed: !completed}),
        })
        window.location.reload();
    });
});