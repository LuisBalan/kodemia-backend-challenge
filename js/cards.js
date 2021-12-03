$(document).ready( () => {
    const names = ['Nitin Ranganath','Souza, Matheus','Drew Pellum','Iacovos Constantinou','CodeWatchers','Dima Grossman','Dorthy Thielsen','Lambda Technology Inc','ADESANYA JOSHUA AYODEJI','Nitin Ranganath','Souza, Matheus','Drew Pellum','Iacovos Constantinou','CodeWatchers','Dima Grossman','Dorthy Thielsen','Lambda Technology Inc','ADESANYA JOSHUA AYODEJI','Nitin Ranganath','Souza, Matheus','Drew Pellum','Iacovos Constantinou','CodeWatchers','Dima Grossman','Dorthy Thielsen','Lambda Technology Inc','ADESANYA JOSHUA AYODEJI','Nitin Ranganath','Souza, Matheus','Drew Pellum','Iacovos Constantinou','CodeWatchers','Dima Grossman','Dorthy Thielsen','Lambda Technology Inc','ADESANYA JOSHUA AYODEJI','Nitin Ranganath','Souza, Matheus','Drew Pellum','Iacovos Constantinou','CodeWatchers','Dima Grossman','Dorthy Thielsen','Lambda Technology Inc','ADESANYA JOSHUA AYODEJI'];
  
    //Builds a card in DOM
    const createCard = (index,id,title,url,tags,likes,date) =>{
        const father = $('.main__body');
        //console.log(father);
        //img
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card rounded-3 mb-2 elementToRemove';
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
        buttonDelete.className = 'btn btn-light border border-danger deleteCard';
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

    const URL = 'http://localhost:8080/post'
    const getInfoPost = () => {
        $.ajax({
            method: 'GET',
            // url: 'https://js-challenge-a0b1c-default-rtdb.firebaseio.com/.json',
            // url: `https://localhost:8080/post/mongodb+srv://rafael:kodemia123@$cluster0.mohlf.mongodb.net/kodemia?retryWrites=true&w=majority`,
                url: URL,

                success: (response) =>{
            // FIRST TEST
            //     // callback cuando la petición es exitosa
            //     console.log('successful request')
            //     console.log(response)
            //     // const posta = JSON.parse(response)
            //     // console.log(person)
            //     const arrayPost = Object.entries(response);
            //     console.log(arrayPost);
            //     const [sucess, message, data] = arrayPost
            //     console.log(data)
            //     const singlePostArray = Object.entries(data[1])
            //     console.log(singlePostArray)
            //     console.log(singlePostArray[0])

                console.log(response.data.post)
                const arrayPost = response.data.post;

                //Read array
                checkArray(arrayPost);
                //Delete Cards
                deleteCard(arrayPost);
                 //Title effects of filters Feed/Latest
                efectsTitles(arrayPost);
                //filter by search criteria
                filterBySearchButton(arrayPost);
            },
            error: (error) => {
                console.log(error)
            },
            async: true,
        });
    }
    getInfoPost();

    const deletePost = (id) => {

        $.ajax({
            type: "DELETE",
            url: `https://js-challenge-a0b1c-default-rtdb.firebaseio.com/${id}.json`,
            success: (response) => {
                console.log(response)
                location.reload();
            },
            error: (error) => {
                console.log(error)
            }
        });   
    }
    
    // const checkArray = (arrayPost) => {
    //     arrayPost.map((item,index)=>{
    //         const postIndex = index;
    //         const postId = item[0];
    //         const postTitle = item[1].title;
    //         const postUrl = item[1].url;
    //         const postTags = item[1].tags.map(tag=>{
    //             return tag;
    //         });
    //         const postLikes = item[1].likes;
    //         const protoDate = item[1].date;
    //         createCard(postIndex,postId,postTitle,postUrl,postTags,postLikes,protoDate);
    //         return;
    //     })
    //     return;
    // }
    //checkArray modified for rendering posts
    
    const checkArray = (arrayPost) => {
        arrayPost.map((item,index)=>{

            const postIndex = index;
            const postId = item._id;
            const postTitle = item.title;
            const postUrl = item.url;
            const postTags = item.tags.map(tag => {
                return tag;
            });
            const postLikes = item.likes;
            const protoDate = item.date;

            createCard(postIndex,postId,postTitle,postUrl,postTags,postLikes,protoDate);
            return;
        })
        return;
    }

    const filterBySearchButton = (arrayPost) =>{
        $('.button-container').click((e) => { 
            const criteriaSearch = $.trim($('.form-control_bar').val().toLowerCase())
            let counter = 0;
            if(criteriaSearch != ''){
                $('.main__body').children().not(':first').remove();
            }
            arrayPost.forEach(item=>{
                if(criteriaSearch != ''){
                    let titlePost = item.title.toLowerCase();
                    if(titlePost.includes(criteriaSearch)){
                        
                        const postIndex = counter;
                        counter ++
                        const postId = item._id;
                        const postTitle = item.title;
                        const postUrl = item.url;
                        const postTags = item.tags.map(tag=>{
                            return tag;
                        });
                        const postLikes = item.likes;
                        const protoDate = item.date;
                        createCard(postIndex,postId,postTitle,postUrl,postTags,postLikes,protoDate);
                    }
                }
            })
            if(counter===0 && criteriaSearch != ''){
                console.log('No hay coincidencias');
                alert('There are no post with that criteria, try with other word')
                location.reload()
            }
        });
    }
    

    const deleteCard = () => {
        $('.deleteCard').click((e) => { 
            console.log(e)
            const parentNode = e.target.parentNode.parentNode.parentNode.parentNode
            alert('El Post será eliminado');
            //console.log(parentNode.id)
            parentNode.remove();
            deletePost(parentNode.id);
         });
    }

    const efectsTitles = (array) => {
         //Title effects of filters Feed/Latest
         $('.headFilter').click((e) => {
            e.preventDefault();
            const classLeft = '.headFilter'
            $(classLeft).removeClass("headSelected");
            const itemSelected = e.target
            //console.log(itemSelected.id);

            if(itemSelected.id==='latest'){
                filterByCriteria(array,'latest')
            }else if(itemSelected.id==='feed'){
                location.reload()
            }

            $(itemSelected).addClass("headSelected")

            if(itemSelected.id==='top' || itemSelected.id==='week' || itemSelected.id==='month' || itemSelected.id==='year'){
                $('.topLinked').css('visibility','visible');
                filterByCriteria(array,'week');
            }else{
                $('.topLinked').css('visibility','hidden');
            }                  
         });
        //Title effects of filters Week/Month/Year
        $('.headFilterByTime').click((e) => {
           e.preventDefault();
           const classRight = '.headFilterByTime'
           $(classRight).removeClass("headSelected");
           const itemSelectedRight = e.target
           //console.log(itemSelectedRight.id);
           $(itemSelectedRight).addClass("headSelected");

           if(itemSelectedRight.id==='week'){
                filterByCriteria(array,'week');
           }else if(itemSelectedRight.id==='month'){
                filterByCriteria(array,'month');
           }else if(itemSelectedRight.id==='year'){
                filterByCriteria(array,'year');
           }
                
        });
    }

    const filterByCriteria = (array,criteria) => {
        //Clean DOM except first child
        $('.main__body').children().not(':first').remove();
        const arrLikes = sortByLikes();
        switch (criteria) {
            case 'latest':
                checkArray(sortByTime());
                break;
            case 'week':                    
                filterByRange(7);
                break;
            case 'month':
                filterByRange(31);
                break;
            case 'year':
                filterByRange(365);
                break;
        }

        deleteCard();
     
        function sortByTime() {
            return array.sort((post, otherPost) => {
                if (post.date > otherPost.date) {
                  return -1;
                }
                if (post.date < otherPost.date) {
                  return 1;
                }
                return 0;
            });
        }

        function sortByLikes() {
            return array.sort((post, otherPost) => {
                if (post.likes > otherPost.likes) {
                  return -1;
                }
                if (post.likes < otherPost.likes) {
                  return 1;
                }
                return 0;
            });
        }

        function filterByRange(range) {
            const actualDate = new Date();
            actualDate.setDate(actualDate.getDate() - range);

            const referenceDate = actualDate.toISOString().split('T')[0];
            let counter = 0;
            arrLikes.forEach((post)=>{
                
                if(post.date >= referenceDate){
                    const postIndex = counter;
                    counter ++
                    const postId = post;
                    const postTitle = post.title;
                    const postUrl = post.url;
                    const postTags = post.tags.map(tag=>{
                        return tag;
                    });
                    const postLikes = post.likes;
                    const protoDate = post.date;
                    createCard(postIndex,postId,postTitle,postUrl,postTags,postLikes,protoDate);
                }
            });
        }
    }
});

