// var postApi = 'https://api.aniapi.com/v1/anime/1';
// fetch(postApi)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (posts) {
//         console.log(posts);
//         var htmls = posts.map(function (post) {
//             return `<img src="${post.status_code}" alt="">`;
//         });
//         var html = htmls.join('');
//         document.getElementById('post-block').innerHTML = html;
//     })
//     .catch(function (err) {
//         alert("Error!!!!");
//     })
var courseApi = 'http://localhost:3000/course';
start();
function start() {
    getCourses(function (courses) {
        // console.log(courses)
        renderCourses(courses);
        handleCreateForm();
        // handleDeleteCourse();
    });
}
// 
function getCourses(callback) {
    fetch(courseApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
        .catch(function (err) {
            alert("Error!!!!");
        });
}
//
function createCourse(data, callback) {
    var options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    };
    fetch(courseApi, options)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
        .catch(function (err) {
            alert("Error!!!!");
        });
}
// 
function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        // body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    };
    fetch(courseApi + '/' + id, options)
        .then(function (response) {
            return response.json();
        })
        .then(function () {
            var courseItem = document.querySelector('course-item-' + id);
            if (courseItem) {
                courseItem.remove();
            }
        })
        .catch(function (err) {
            alert("Error!!!!");
        });
}
// 
function renderCourses(courses) {
    var listCourseBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function (course) {
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
// 
function handleCreateForm() {
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function () {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        // console.log(name);
        // console.log(description);
        var formData = {
            name: name,
            description: description
        }
        createCourse(formData);
    };
}



