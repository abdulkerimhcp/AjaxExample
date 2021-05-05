$(document).ready(function () {
    const apiKey = "6091431b34a224acec720aed";

    $.ajax({
        type: 'GET',
        url: 'https://dummyapi.io/data/api/user',
        headers: {
            'app-id': apiKey
        },
        success: function (response) {
            let users = response.data;
            for (let user of users) {
                $('#data').append('<tr>\n' +
                    '        <td>' + user.id + '</td>\n' +
                    '        <td>' + user.title + '</td>\n' +
                    '        <td>' + user.firstName + '</td>\n' +
                    '        <td>' + user.lastName + '</td>\n' +
                    '        <td>' + user.email + '</td>\n' +
                    '        <td><img src="' + user.picture + '" alt=""></td>\n' +
                    '        <td><button type="button" class="btn btn-info detay" data-toggle="modal" data-target="#exampleModalCenter">deneme</button></td>\n' +
                    '    </tr>')
            }
        },
        complete: function () {
            let buttons = document.querySelectorAll('.detay')
            buttons.forEach(function (button) {
                'use strict';
                button.onclick = function () {
                    let userId = button.parentNode.parentNode.childNodes[1].textContent;
                    $.ajax({
                        type: 'GET',
                        url: 'https://dummyapi.io/data/api/user/' + userId + '',
                        headers: {
                            'app-id': apiKey
                        },
                        success: function (response) {
                            $('#userPhoto').empty().append('<img src="'+ response.picture +'" alt=""/>');
                            $('.firsName').empty().append('<p>'+ response.firstName +'</p>');
                            $('.lastName').empty().append('<p>'+ response.lastName +'</p>');
                            $('.phone').empty().append('<p>'+ response.phone +'</p>');
                        },
                    });
                };
            });
        }
    });
});