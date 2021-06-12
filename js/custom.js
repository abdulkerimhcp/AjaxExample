$(function () {
    const apiKey = "6091431b34a224acec720aed";

    $.ajax({
        type: 'GET',
        url: 'https://dummyapi.io/data/api/user',
        headers: {
            'app-id': apiKey
        },
        success: function (response) {
            response.data.forEach(user => {
                $('#data').append(
                    `<tr>
                <td>${user.id}</td>
                <td>${user.title}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.email}</td>
                <td>
                    <img src="${user.picture}" alt="">
                </td>
                <td>
                    <button type="button" class="btn btn-primary detail" data-toggle="modal" data-target="#${user.id}">
                        Detay
                    </button>
                </td>
            </tr>`
                );
            });
            let detailButtons = $('.detail');
            detailButtons.each(function () {
                $(this).click(function () {
                    let userId = $(this).attr("data-target");
                    $.ajax({
                        type: 'GET',
                        url: `https://dummyapi.io/data/api/user/${userId.replace('#', "")}`,
                        headers: {
                            'app-id': apiKey
                        },
                        success: function (response) {
                            console.log(response)
                            let modal = `<div class="modal fade" id="${userId}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                    <div id="detail" class="row">
                                    <div id="userPhoto" class="col-5">
                                    <img src="${response.picture}" alt="">
                                </div>
                                <div class="col-7">
                                    <div class="firsName">${response.firstName}</div>
                                    <div class="lastName">${response.lastName}</div>
                                    <div class="phone">${response.phone}</div>
                                </div>
                                </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" onclick="close()" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>`

                            $('#modal').html(modal);
                            $('.modal').modal("show");

                        },
                    });
                });
            });

        },

    });

});

