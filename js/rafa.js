$(document).ready( ()=>{
//Create Post
    $('#createPost').click( () => {
        const title = $.trim($("#title").val());
        const body = $.trim($("#body").val());
        const url = $.trim($('#url').val());
        const protoTags = $.trim($("#tags").val());
        const tags = protoTags.split(',');
        const date_format = new Date();
        const date = date_format.toISOString().split('T')[0];
        const likes = Math.floor((Math.random() * (100000 + 1 -100)) + 100);

        const postInfo = {title, body, url,tags,date,likes}

        $.ajax({
            method: 'POST',
            url: 'http://localhost:8080/post?' + $.param(postInfo),
        
            success: (response) =>{
                console.log(response);
                alert('Your Post was succesfully added');
                $('#title').val('');
                $('#body').val('');
                $('#url').val('');
                $('#tags').val('');
            } ,
            error: (error) => {
                console.log(error);
                alert('An error occurred while processing your request');
            },
            async: true,
        })

    });


});
