document.getElementById('mood-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const mood= document.getElementById('mood').value;
    const note= document.getElementById('note').value;

    //send to backend
    console.log(`Mood: ${mood}, Note: ${noye}`);

    //Display in the enteries list
    const entriesList= document.getElementById('enteries-list');
    const entry = document.createElement('div');
   entry.innerHTML = `<strong>Mood:</strong> ${mood} <br> <strong>Note:</strong> ${note} <hr>`;
   entriesList.appendChild(entry);
});