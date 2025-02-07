const submitFeedback = (event) => {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const userExperince = document.getElementById('userExperinceText').value;

    alert('Thank you for your valuable feedback')

    document.getElementById('userName').textContent = username;
    document.getElementById('userAge').textContent = age;
    document.getElementById('userEmail').textContent = email;
    document.getElementById('userJob').textContent = job;
    document.getElementById('userDesignation').textContent = designation;
    document.getElementById('userProductChoice').textContent = productType;
    document.getElementById('userFeedback').textContent = feedback;
    document.getElementById('userExperince').textContent = userExperince;

    document.getElementById('userInfo').style.display = 'block';

}


const resetFeedback = (event) => {

    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('email').value = '';
    document.getElementById('job').value = '';
    document.getElementById('designation').value = '';
    document.getElementById('productType').value = '';
    document.getElementById('feedbackText').value = '';
    document.getElementById('userExperinceText').value = '';

    document.getElementById('userName').textContent = "";
    document.getElementById('userAge').textContent = "";
    document.getElementById('userEmail').textContent = "";
    document.getElementById('userJob').textContent = "";
    document.getElementById('userDesignation').textContent = "";
    document.getElementById('userProductChoice').textContent = "";
    document.getElementById('userFeedback').textContent = "";
    document.getElementById('userExperince').textContent = "";


    document.getElementById('userInfo').style.display = 'none';
}


const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

const resetButton = document.getElementById('resetBtn');
resetButton.onclick = resetFeedback;


document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});