let cupcakeProject = document.getElementById('cupcake-project');
let teaProject = document.getElementById('tea-project');
let jammmingProject = document.getElementById('jammming-project');

//This function displays or hides information about a given project upon being clicked.
function displayData () {
    let hiddenContent = this.getElementsByClassName('description');

    if (hiddenContent[0].style.display == 'none' || hiddenContent[0].style.display == '')
    {
        hiddenContent[0].style.display = 'inline-block';
        this.style.width = '40%';
    }
    else
    {
        hiddenContent[0].style.display = 'none';
        this.style.width = '20%';
    }
}

//Obtain projects from website
let projects = document.getElementsByClassName('project');

//Add event listeners
cupcakeProject.addEventListener('click', displayData);
teaProject.addEventListener('click', displayData);
jammmingProject.addEventListener('click', displayData);
