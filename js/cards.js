$(document).ready( () => {
    const names = ['Nitin Ranganath','Souza, Matheus','Drew Pellum','Iacovos Constantinou','CodeWatchers','Dima Grossman','Dorthy Thielsen','Lambda Technology Inc','ADESANYA JOSHUA AYODEJI','Nitin Ranganath','Souza, Matheus','Drew Pellum','Iacovos Constantinou','CodeWatchers','Dima Grossman','Dorthy Thielsen','Lambda Technology Inc','ADESANYA JOSHUA AYODEJI','Nitin Ranganath','Souza, Matheus','Drew Pellum','Iacovos Constantinou','CodeWatchers','Dima Grossman','Dorthy Thielsen','Lambda Technology Inc','ADESANYA JOSHUA AYODEJI','Nitin Ranganath','Souza, Matheus','Drew Pellum','Iacovos Constantinou','CodeWatchers','Dima Grossman','Dorthy Thielsen','Lambda Technology Inc','ADESANYA JOSHUA AYODEJI','Nitin Ranganath','Souza, Matheus','Drew Pellum','Iacovos Constantinou','CodeWatchers','Dima Grossman','Dorthy Thielsen','Lambda Technology Inc','ADESANYA JOSHUA AYODEJI'];
  
    //Builds a card in DOM
    const createCard = (index,id,title,url,tags,likes,date) =>{
        const father = $('.main__body');
        //console.log(father);
        //img
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card rounded-3 mb-2';
        cardContainer.id = id;
        //console.log(cardContainer);
        const cardImage = document.createElement('img');
        //Display url image only if index = 0
        if(index === 0){
            cardImage.src = url;
            cardImage.className = 'img-fluid';
        }
        //avatar
        const cardHeader = document.createElement('article');
        cardHeader.className = 'card-body';
        const containerAvatar = document.createElement('div');
        containerAvatar.className = 'd-flex';
        const avatar = document.createElement('div');
        const linkAvatar = document.createElement('a');
        linkAvatar.href = '#';
        linkAvatar.className = 'row p-0 m-0 w-75';
        const imgAvatar = document.createElement('img');
        imgAvatar.className = 'rounded-circle p-1';
        imgAvatar.width='140';
        imgAvatar.height='50';
        imgAvatar.src = `./img/people${index}.png`;
        $(linkAvatar).append(imgAvatar);
        $(avatar).append(linkAvatar);
        $(containerAvatar).append(avatar);
        //Names
        const nameAvatar = document.createElement('div');
        nameAvatar.className = 'row pe-0 mb-3 lh-sm" style="margin-left:-10px;'
        const linkName = document.createElement('a');
        linkName.href = '#';
        linkName.className = 'text-dark';
        linkName.textContent = names[index];
        const linkCard = document.createElement('a');
        linkCard.href = '#';
        linkCard.className = 'text-black-50';
        linkCard.textContent = date;
        $(nameAvatar).append(linkName);
        $(nameAvatar).append(linkCard);
        $(containerAvatar).append(nameAvatar);
        //Card
        const cardBody = document.createElement('div');
        cardBody.className = 'ms-5';
        //Card title
        const cardTitle = document.createElement('div');
        cardTitle.className = 'card-title mb-3';
        const h2Title = document.createElement('h2');
        const linkTitleBold = document.createElement('a');
        linkTitleBold.href = './pages/post.html';
        linkTitleBold.className = 'text-dark fw-bolder';
        linkTitleBold.textContent = title;
        $(h2Title).append(linkTitleBold);
        $(cardTitle).append(h2Title);
        $(cardBody).append(cardTitle);
        //tags
        const tagContainer = document.createElement('div');
        tagContainer.className = 'mb-3 text-black-50';
        //tag 0
        const linkTag0 = document.createElement('a');
        linkTag0.className = 'text-black-50 me-3';
        linkTag0.href = '#';
        const spanTag0 = document.createElement('span');
        spanTag0.className = 'text-black-50';
        spanTag0.textContent = tags[0];
        linkTag0.textContent = '#';
        $(linkTag0).append(spanTag0);
        //tag 1
        const linkTag1 = document.createElement('a');
        linkTag1.className = 'text-black-50 me-3';
        linkTag1.href = '#';
        const spanTag1 = document.createElement('span');
        spanTag1.className = 'text-black-50';
        spanTag1.textContent = tags[1];
        linkTag1.textContent = '#';
        $(linkTag1).append(spanTag1);
        //tag 2
        const linkTag2 = document.createElement('a');
        linkTag2.className = 'text-black-50 me-3';
        linkTag2.href = '#';
        const spanTag2 = document.createElement('span');
        spanTag2.className = 'text-black-50';
        spanTag2.textContent = tags[2];
        linkTag2.textContent = '#';
        $(linkTag2).append(spanTag2);
        //tag 3
        const linkTag3 = document.createElement('a');
        linkTag3.className = 'text-black-50 me-3';
        linkTag3.href = '#';
        const spanTag3 = document.createElement('span');
        spanTag3.className = 'text-black-50';
        spanTag3.textContent = tags[3];
        linkTag3.textContent = '#';
        $(linkTag3).append(spanTag3);
        $(tagContainer).append(linkTag0);
        $(tagContainer).append(linkTag1);
        $(tagContainer).append(linkTag2);
        $(tagContainer).append(linkTag3);
        $(cardBody).append(tagContainer);
        //Card Footer
        const footerContainer = document.createElement('div');
        footerContainer.className = 'd-flex justify-content-between';
        const elementContainer = document.createElement('div');
        elementContainer.className = 'd-flex align-items-center ps-5';
        //Reactions
        const linkReaction = document.createElement('div');
        linkReaction.href = '#';
        linkReaction.className = 'me-3';
        const iconReactions = document.createElement('img');
        iconReactions.src = './img/like.png';
        iconReactions.width = '20';
        iconReactions.height = '20';
        const paragraphReactions = document.createElement('p');
        paragraphReactions.className = 'd-inline-block text-dark m-2';
        paragraphReactions.textContent = likes;
        const spanReactions = document.createElement('span');
        spanReactions.className = 'text-dark';
        spanReactions.textContent = 'reactions';
        $(linkReaction).append(iconReactions);
        $(linkReaction).append(paragraphReactions);
        $(linkReaction).append(spanReactions);
        //Comment
        const linkComment = document.createElement('div');
        linkComment.href = '#';
        linkComment.className = 'me-3';
        const iconComment = document.createElement('img');
        iconComment.src = './img/comment.png';
        iconComment.width = '20';
        iconComment.height = '20';
        const paragraphComment = document.createElement('p');
        paragraphComment.className = 'd-inline-block text-dark m-2';
        paragraphComment.textContent = Math.floor((Math.random() * (25 + 1 -0)) + 0);
        const spanComment = document.createElement('span');
        spanComment.className = 'text-dark';
        spanComment.textContent = 'comment';
        $(linkComment).append(iconComment);
        $(linkComment).append(paragraphComment);
        $(linkComment).append(spanComment);
        //Buttons
        const timeRead = document.createElement('div');
        const timeText = document.createElement('small');
        timeText.className = 'me-1';
        timeText.textContent = '6 min read';
        $(timeRead).append(timeText);
        const buttonDelete = document.createElement('button');
        buttonDelete.className = 'btn btn-light border border-danger';
        buttonDelete.textContent = 'Delete'
        $(timeRead).append(buttonDelete);
        //Appends
        $(elementContainer).append(linkReaction);
        $(elementContainer).append(linkComment);
        $(footerContainer).append(elementContainer);
        $(footerContainer).append(timeRead);//
        $(cardContainer).append(cardImage);
        $(cardHeader).append(containerAvatar);
        $(cardHeader).append(cardBody);
        $(cardHeader).append(footerContainer);
        $(cardContainer).append(cardHeader);
        $(father).append(cardContainer);
    }

    const URL = 'localhost:8080/post'
    const getInfoPost = () => {
        $.ajax({
            method: 'GET',
            // url: 'https://js-challenge-a0b1c-default-rtdb.firebaseio.com/.json',
            // url: `https://localhost:8080/post/mongodb+srv://rafael:kodemia123@$cluster0.mohlf.mongodb.net/kodemia?retryWrites=true&w=majority`,
                url: URL,
            
            success: (response) =>{
                console.log('successful request')
                // callback cuando la petición es exitosa
                console.log(response)
                const person = JSON.parse(response)
                console.log(person)
                const arrayPost = Object.entries(response);
                //console.log(arrayPost);

                arrayPost.forEach((item,index)=>{
                    const postIndex = index;
                    const postId = item[0];
                    const postTitle = item[1].title;
                    const postUrl = item[1].url;
                    const postTags = item[1].tags.map(tag=>{
                        return tag;
                    });
                    const postLikes = item[1].likes;
                    const protoDate = item[1].date;
                    createCard(postIndex,postId,postTitle,postUrl,postTags,postLikes,protoDate);
                });
            },
            error: (error) => {
                // callback para cuando hay un error
                console.log(error)
            },
            async: true,
        });
        
    }
    getInfoPost();
    
});


