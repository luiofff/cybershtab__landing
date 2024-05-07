document.getElementById('selectAllCheckbox').addEventListener('change', function() {
    var checkboxes = document.getElementsByClassName('input__who');
    for(var i=0; i<checkboxes.length; i++) {
        checkboxes[i].checked = this.checked;
    }
});

document.getElementById('selectAllCheckboxTopic').addEventListener('change', function() {
    var checkboxes = document.getElementsByClassName('input__topic');
    for(var i=0; i<checkboxes.length; i++) {
        checkboxes[i].checked = this.checked;
    }
});