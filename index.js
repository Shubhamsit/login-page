
const mainContainer = document.querySelector('.main-container');
const computedStyle = window.getComputedStyle(mainContainer);
const backgroundColor = computedStyle.backgroundColor;




function login(event) {
    event.preventDefault();
    console.log("shubham");
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');
    
   
    

    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    mainContainer.style.backgroundColor = '#139cb8';   

}

function signup(event) {
    event.preventDefault();
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');

    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    mainContainer.style.backgroundColor = '	#063dff'; 
}

