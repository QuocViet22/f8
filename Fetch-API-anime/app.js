var filmApi = "https://api.aniapi.com/v1/anime";
//
start();
function start() {
    getFilms(function (film) {
        console.log(film);
    })
}
//
function getFilms(callback) {
    fetch(filmApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
        .catch(function (err) {
            alert("Server error!!!!");
        });
}
function renderCourses(films) {
    var listCourseBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function (film) {
        return `
                <li class="course-item-${course.id}">
                    <h2>${course.name}</h2>
                    <p>${course.description}</p>
                    <button onclick="handleDeleteCourse(${course.id})">Delete</button>
                </li>
                `;
    });
    listCourseBlock.innerHTML = htmls.join('');
}