document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-button').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('initial-screen').classList.add('hidden');
        document.getElementById('login-screen').classList.remove('hidden');
    });

    document.getElementById('signup-button').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('initial-screen').classList.add('hidden');
        document.getElementById('signup-screen').classList.remove('hidden');
    });

    document.getElementById('signup-button-login').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('signup-screen').classList.remove('hidden');
    });

    document.getElementById('login-button-signup').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('signup-screen').classList.add('hidden');
        document.getElementById('login-screen').classList.remove('hidden');
    });
});