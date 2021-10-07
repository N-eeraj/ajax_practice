$(document).ready(function () {
    
    $.ajax('data.json', {dataType: 'json', cache: false})
    .done(function(response) {
        for(data of response.data){
            let content = `<div class="profile-card">
                                    <img src="${data.img}">
                                    <div>
                                        <h2>${data.name}</h2>
                                        <div>
                                            <h5>${data.role}</h5>
                                            <span>${data.exp} Years</span>
                                        </div>
                                    </div>
                                </div>`;
            $(".profile-container").append(content);
        }
    });
    
    

});