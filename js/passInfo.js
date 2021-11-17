$(document).ready( () => {

    //next lines are hard code
    const names = ['Nitin Ranganath','Souza, Matheus','Drew Pellum','Iacovos Constantinou','CodeWatchers','Dima Grossman','Dorthy Thielsen','Lambda Technology Inc','ADESANYA JOSHUA AYODEJI','Nitin Ranganath','Souza, Matheus','Drew Pellum','Iacovos Constantinou','CodeWatchers','Dima Grossman','Dorthy Thielsen','Lambda Technology Inc','ADESANYA JOSHUA AYODEJI','Nitin Ranganath','Souza, Matheus','Drew Pellum','Iacovos Constantinou','CodeWatchers','Dima Grossman','Dorthy Thielsen','Lambda Technology Inc','ADESANYA JOSHUA AYODEJI','Nitin Ranganath','Souza, Matheus','Drew Pellum','Iacovos Constantinou','CodeWatchers','Dima Grossman','Dorthy Thielsen','Lambda Technology Inc','ADESANYA JOSHUA AYODEJI','Nitin Ranganath','Souza, Matheus','Drew Pellum','Iacovos Constantinou','CodeWatchers','Dima Grossman','Dorthy Thielsen','Lambda Technology Inc','ADESANYA JOSHUA AYODEJI'];
  
    //Builds a card in DOM
    const createCard = (index,id,title,url,tags,likes,date) =>{
        //next line is for rendering in index.html"
        // const father = $('.main__body');

        const father = $(".tab-content");
        //console.log(father);
        //img
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card rounded-3 mb-2';
        // cardContainer.className = 'card';
        cardContainer.id = id;
        //console.log(cardContainer);
        const cardImage = document.createElement('img');
        //Display url image only if index = 0
        // if(index === 0){
        //     cardImage.src = url;
        //     cardImage.className = 'img-fluid';
        // }
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
        imgAvatar.src = `../img/people${index}.png`;
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
        // linkTitleBold.href = './pages/post.html';
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
        elementContainer.className = 'd-flex align-items-center ps-10';
        //Reactions
        const linkReaction = document.createElement('div');
        linkReaction.href = '#';
        linkReaction.className = 'me-3';
        const iconReactions = document.createElement('img');
        iconReactions.src = '../img/like.png';
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
        iconComment.src = '../img/comment.png';
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
        // const buttonDelete = document.createElement('button');
        // buttonDelete.className = 'btn btn-light border border-danger';
        // buttonDelete.textContent = 'Delete'
        // $(timeRead).append(buttonDelete);
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

        // identifying search-bar (input-form)

// next line defines object where string is typed
const searchBar = $(".form-control_bar");
// next line is to get the string typed
// const searchValue = searchBar.val();
// console.log("prueba searchValue: ", searchValue);


//identifying search.button (button-object)
const searchButton = $(".icon-container");
// console.log(searchButton);


// next two lines are for changing search page results of search
// const searchResultsNotif = $(".txtNotif");
// console.log(searchResultsNotif); 


// let inputRegExp = new RegExp(searchValue, 'gi');
// console.log(inputRegExp)


//adding listener to button
// searchButton.click(event => {
//     event.preventDefault()
//     console.log(searchValue)
// })

// regular expression ready!
// let re1 = /`${searchValue}`/gi

// console.log(re1)

// let re3 = /adasdfas/gi
// console.log(re3, typeof(r2))

// test array for testing


//function for fix response to a new form
// this function works well!
const getPostArrayStructure = (array) => {
    const postArrayStructure = [];
    array.forEach((post) => {
        postArray = [];
        postArray.push(post[0], post[1]["body"]);
        post[1]["tags"].forEach((tag) => postArray.push(tag))
        postArray.push(post[1]["title"], post[1]["url"]);
        postArrayStructure.push(postArray);
    })
    return postArrayStructure;
}

// next three lines are for testing getPostArrayStructure function
// let arrayTest = getPostArrayStructure(testObjectsArray)
// console.log(arrayTest)
// console.log(arrayTest[0])


const ocurrences = (post, searchValue) => {
    let filteredIDs = [];
    let inputRegExp = new RegExp(searchValue, 'gi');
    const ocurreNum = post.reduce((counter, field) =>{
        if((field.match(inputRegExp)) != null){
            counter += (field.match(inputRegExp)).length
        }else if(field.matchAll(inputRegExp) == null){
            counter += 0
        }
        //  next commented line is for testing
        //  console.log(field, field.match(inputRegExp), counter)
         return counter
        },0)
        
        // next commented line is for testing
        // console.log(ocurreNum)
        if(ocurreNum !== 0){
            filteredIDs.push(post[0])
        }
        return filteredIDs;
    } 
    
    
    // next line is for testing ocurrences function
    // console.log((ocurrences(arrayTest[2])))
    
    
    
    const getMatchedIDsArray = (array, searchValue) => {
        let idsArray = [];
        let formattedArray = getPostArrayStructure(array)
        formattedArray.forEach((post) => {
            idsArray.push(...ocurrences(post, searchValue ))
        })
        return idsArray
    }
    
    
    // next line is for testing getMatchedIDsArray function
    // console.log(getMatchedIDsArray(testObjectsArray))



    //function to storage matchedIDs Array

    const storeData = (array) => {

        // store array or variable
        sessionStorage.setItem("matchedIDs", JSON.stringify(array));

        //redirect (insert a string)
        // .location.href = newPage

    }


    //function to get data in the redirected page

    const getPassedData = () => {
        let passedData = JSON.parse(sessionStorage.getItem("matchedIDs"))
        return passedData
    }

    //the next function is for make match between matched IDs and all the response

    // const getFilteredArrayPost = (response, IDsArray) => {
      
    // const filteredArrayPost = (response, IDsArray) => {
    //         let postsToRender = response.filter((post) => {
    //             if(IDsArray.includes(post[0]))
    //             return post
    //         })

    //         return postsToRender
    // } 

    //     return filteredArrayPost(response, IDsArray)
        
    // } 



    //this is not a function. You must pass it to getResponse
    
    
    
    
    const getResponse = (searchValue) => {
        
        const requestInfo = {
            method: 'GET',
            url: 'https://js-challenge-a0b1c-default-rtdb.firebaseio.com/.json',
            success: (response) => {
                
                //next line is for testing //
                console.log(response)  //ok
                let objectedResponse = Object.entries(response); //ok
                
                //next lines is for testing //
            console.log(objectedResponse); //ok
            
            /* next process (next two line) is included in the matchedIDsArray (delete next line)
            when testing finish */
            // let postStructure = getPostArrayStructure(objectedResponse);
            
            //next line is for testing //
            // console.log(postStructure);
            
            let matchedIDs = getMatchedIDsArray(objectedResponse, searchValue);
            //next line is for testing
            console.log(matchedIDs);
            
            storeData(matchedIDs)

            window.open("./pages/search.html")
            window.location.href ="./pages/search.html"

            console.log(window.location)

            //---------- here begins content of search-page ---

            $(document).ready(()=>{



                console.log(`in ${window.location} now`)

                const passedData = getPassedData()
                console.log(passedData)
    
                const filteredArrayPost = objectedResponse.filter((post) => {
                    if(passedData.includes(post[0]))
                    return post
                })
    
                console.log(filteredArrayPost)
                
                // const postsToRender = filteredArrayPost(objectedResponse, passedData)
                // console.log(postsToRender[0])
                


                //render 
                // filteredArrayPost.forEach((item,index)=>{
                //     const postIndex = index;
                //     const postId = item[0];
                //     const postTitle = item[1].title;
                //     console.log(postTitle)
                //     const postUrl = item[1].url;
                //     const postTags = item[1].tags.map(tag=>{
                //         return tag;
                //     });
                //     console.log(postTags)
                //     const postLikes = item[1].likes;
                //     const protoDate = item[1].date;
                //     createCard(postIndex,postId,postTitle,postUrl,postTags,postLikes,protoDate);
                // });



            })

            
            // console.log("in search.html now")

            // const passedData = getPassedData()
            // console.log(passedData)

            // const filteredArrayPost = objectedResponse.filter((post) => {
            //     if(passedData.includes(post[0]))
            //     return post
            // })

            // console.log(filteredArrayPost)
            
            // // const postsToRender = filteredArrayPost(objectedResponse, passedData)
            // // console.log(postsToRender[0])
            
            // filteredArrayPost.forEach((item,index)=>{
            //     const postIndex = index;
            //     const postId = item[0];
            //     const postTitle = item[1].title;
            //     console.log(postTitle)
            //     const postUrl = item[1].url;
            //     const postTags = item[1].tags.map(tag=>{
            //         return tag;
            //     });
            //     console.log(postTags)
            //     const postLikes = item[1].likes;
            //     const protoDate = item[1].date;
            //     createCard(postIndex,postId,postTitle,postUrl,postTags,postLikes,protoDate);
            // });


            // --------- here finishes the content of search-page ----------------
        },

        error: (error) => {
            console.log(error)
        },
        async: true,
    }
    
    return $.ajax(requestInfo)
    
}

//next line is for testing
// console.log(getResponse())

//next line is for testing. Don't delete it!
// let effectiveIDs = getResponse();
// console.log(effectiveIDs)

const lupita = $("#lupa")
//url:= ` ./index.html?nombre_De_variable = ${searchValue}`



//---------------------------- ESTE BLOQUE ESTÁ BIEN. REGRESAR A ÉL SI EL PARAMS FALLA ------------
searchButton.click(event => {
    const searchValue = searchBar.val();
    if(searchValue.length !== 0){
        event.preventDefault() 
        console.log(searchValue)
        getResponse(searchValue)
        // $(location).attr("href", `./pages/search.html?search = ${searchValue}`)
        
    }
})


// searchButton.click(event => {
//     const searchValue = searchBar.val();
//     if(searchValue.length !== 0){      
//         event.preventDefault() 
//         console.log(searchValue)
//         getResponse(searchValue)

//         const queryString = `search = ${searchValue}`
//         $(location).attr("href", `./pages/search.html?queryString`)
//         // const queryString = window.location.search;
//         console.log(queryString)
//         const urlParams = new URLSearchParams(queryString)
        
//     }
// })

// searchBar.keypress(event => {
    
//     const searchValue = searchBar.val();
//     if(event.which == 13 && searchValue.length !== 0){

//         // let inputRegExp = new RegExp(searchValue, 'gi');
//         event.preventDefault() 
//         // $(searchValue).attr('value', searchBar.val())
//         // console.log(searchValue)
//         // let inputRegExp = new RegExp(searchValue, 'gi');    // this works good!
//         // console.log(searchValue);
//         // console.log(inputRegExp)
//         console.log(searchValue)
//         getResponse(searchValue)
//         $(location).attr("href","../pages/search.html")

//     }


    
// })




    // NEXT LINES ARE FROM SEARCH.JS FUNCTIONS MADE BY RAFA

    // const testMatchArray = [
    //     "-Mnl7ZyN_jO3woEF9HMf",
    //     "-MnmO_B4RVqw3iul2z-L",
    //     "-Mnsgm3rkguLvwPrY9NC",
    //     "-MnswDFNaIBwaOKYAumm"
    //     // "-MnsvvqFeKybw1nrmNl0"
    //   ]

    // const getInfoPost = () => {
    //     $.ajax({
    //         method: 'GET',
    //         url: 'https://js-challenge-a0b1c-default-rtdb.firebaseio.com/.json',
            
    //         success: (response) =>{
    //             // callback cuando la petición es exitosa
    //             console.log(response)
    //             //const person = JSON.parse(response)
    //             const arrayPost = Object.entries(response);
    //             const filteredArrayPost = arrayPost.filter((post) => {
    //                 if(testMatchArray.includes(post[0]))
    //                 return post
    //             })
    //             console.log(filteredArrayPost)
    //             //console.log(arrayPost);


    //             filteredArrayPost.forEach((item,index)=>{
    //                 const postIndex = index;
    //                 const postId = item[0];
    //                 const postTitle = item[1].title;
    //                 const postUrl = item[1].url;
    //                 const postTags = item[1].tags.map(tag=>{
    //                     return tag;
    //                 });
    //                 const postLikes = item[1].likes;
    //                 const protoDate = item[1].date;
    //                 createCard(postIndex,postId,postTitle,postUrl,postTags,postLikes,protoDate);
    //             });
    //         },
    //         error: (error) => {
    //             // callback para cuando hay un error
    //             console.log(error)
    //         },
    //         async: true,
    //     });
        
    // }
    // getInfoPost();
    
});