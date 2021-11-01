const filterBtn = document.querySelector("#filterBtn");
const filterBtn2 = document.querySelector("#filterBtn2");
const searchFilter = document.querySelector("#searchFilter");
const searchedWord = document.querySelector("#searchWord");

let objectArray = [
    {
        id: 0,
        name: 'Coffee Soap',
        info: `Serenity's home-made coffee extract soap`,
        type: 'product',
        productType: 'soap',
        photo: './images/coffee-soap.jpg',
        tags: ['soap', 'coffee soap']
    },
    {
        id: 1,
        name: 'Body Serum',
        info: 'Hydrating & rejuvinative body serum',
        type: 'product',
        productType: 'serum',
        photo: './images/body-serum.jpg',
        tags: ['serum', 'body serum']
    },
    {
        id: 2,
        name: 'Soothing Serum',
        info: 'Organic soothing facial serum',
        type: 'product',
        productType: 'serum',
        photo: './images/soothing-serum.jpg',
        tags: ['serum', 'facial serum', 'facial']
    },
    {
        id: 3,
        name: 'Arm Massage',
        info: 'Relaxing hand & arm massage',
        type: 'service',
        photo: './images/arm-massage.jpg',
        tags: ['massage', 'arm massage']
    },
    {
        id: 4,
        name: 'Facial',
        info: 'Mud bath facial & facial massage',
        type: 'service',
        photo: './images/facial.jpg',
        tags: ['massage', 'facial massage', 'facial']
    },
    {
        id: 5,
        name: 'Sesame Soap',
        info: `Serenity's home-made sesame-seed extract soap`,
        type: 'product',
        productType: 'soap',
        photo: './images/sesame-soap.jpg',
        tags: ['soap', 'sesame', 'sesame soap']
    },
    {
        id: 6,
        name: 'Hot Stone Massage',
        info: 'Unwind with a hot stone massage',
        type: 'service',
        photo: './images/hot-stone.jpg',
        tags: ['massage', 'hot stone', 'stone', 'hot stone massage']
    },
    {
        id: 7,
        name: 'Cbd Serum',
        info: 'cannabidol extract serum ',
        type: 'product',
        productType: 'serum',
        photo: './images/cbd-serum.jpg',
        tags: ['serum', 'cbd', 'cbd serum']
    },
    // {
    //     id: 8,
    //     name: 'Lavendar Soap',
    //     info: `Serenity's home-made lavendar extract soap`,
    //     photo: './images/lavendar-soap.jpg',
    //     tags: ['soap', 'lavendar soap', 'lavendar']
    // },
];

function modal(){
    $(".moreInformation").click(function(){
        for(let i = 0; i < objectArray.length; i++){
            if(parseInt(this.id) === objectArray[i].id){
                console.log ('modal functioning');
                $("#exampleModalLongTitle").empty().append(
                    `
                    <h5 class="modal-title" id="exampleModalLongTitle">${objectArray[i].name}</h5>
                    `
                );
                $("#objectArrayModalInfo").empty().append(
                    `
                        <p>${objectArray[i].info}</p>
                    `
                );
            }
        }
    })
}

function objectsLoop(){
    console.log('objectLoop functioning');
    for(let i = 0; i < objectArray.length; i++){
        generateCard(i);
    };
    modal();
};
objectsLoop();


function filterFunction(event){
    $("#card-container").empty();
    event.preventDefault();
    console.log('clicked');

    let selectedFilter = [];

    // start of value check
    $('input[name="filter"]:checked').each( function(){
        selectedFilter.push(this.value);
    });
    // end of value check

    //start of selected filters loop
    for(let i = 0; i < objectArray.length; i++){
        if(selectedFilter[i] === 'product'){
            console.log('product');
            for(let i = 0; i < objectArray.length; i++){
                if(objectArray[i].type === 'product'){
                    generateCard(i);
                };
            };
        };

        if(selectedFilter[i] === 'service'){
            console.log('service');
            for(let i = 0; i < objectArray.length; i++){
                if(objectArray[i].type === 'service'){
                    generateCard(i);
                };
            };
        };

        if(selectedFilter.length === 0){
            $("#card-container").empty();
            objectsLoop();
        };
    };
    modal();
};

function filterRadio(event){
    $("#card-container").empty();
    event.preventDefault();

    const radioData = document.querySelector('input[name="productType"]:checked').value;

    console.log(radioData);
    for(let i = 0; i < objectArray.length; i++){
        if(radioData === objectArray[i].productType){
            generateCard(i);
        };
    };
};


function filterSearchWord(){
    $("input[type=checkbox]").prop("checked", false);

    let searchWord = $('#searchWord').val();
    console.log(searchWord);
    filterByWord(searchWord);

    $('input[name=search]').val('');

    modal();
};

function filterByWord(e){
    $('#card-container').empty();

    for(let i = 0; i < objectArray.length; i++){
        for(let j = 0; j < objectArray[i].tags.length; j++){
            if(e.toLowerCase() === objectArray[i].tags[j]){
                generateCard(i);
            };
        };
    };

    if(e == ""){
        noInput();
    };

    modal();
};

function noInput(){
    for(let i = 0; i < objectArray.length; i++){
        generateCard(i);
    };
};

function generateCard(x){
    $("#card-container").append(
        `
        <div class="card" id="card" style="width:18rem;">
        <img class="top-img" id="top-img" src=${objectArray[x].photo} alt="${objectArray[x].name}" />
        <div class="card-text">
            <h1 class="card-h1" id="card-h1">${objectArray[x].name}</h1>
            <button id=${objectArray[x].id} type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
            Quick view
            </button>
        </div>
        `
    );

    // $("#card-container").append(
    //     `
    //     <div class="card" id="card" style="width:18rem;">
    //     <img class="top-img" id="top-img" src=${objectArray[x].photo} alt="${objectArray[x].name}" />
    //     <h1 class="card-h1" id="card-h1">${objectArray[x].name}</h1>
    //     <p class="card-p" id="card-p">${objectArray[x].info}</p>
    //     <button id=${objectArray[x].id} type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
    //     Quick view
    //     </button>
    //     `
    // );
};


// alphabet search start
$("#sortBtn").change(function(){
    console.log('sort is clicked');

    let sortValue = ($("#sortBtn").val()).toLowerCase();

    if(sortValue === 'name'){
        console.log('is equal');
        sortByAscending(sortValue);
    };
});
// alphabet search end

function sortByAscending(sortOrder){
    console.log(sortOrder);

    objectArray.sort(function(a, b){
        switch(sortOrder){
            case 'name':
                var itemA = a.name.toLowerCase();
                var itemB = b.name.toLowerCase();
                break;
        };

        if(itemA < itemB){
            return -1;
        }
        if(itemA > itemB){
            return 1;
        }
    });
    allCards();
    modal();
};

$("#refresh").click(function(){
    $("#card-container").empty();
    $('input[type=checked]').prop('checked', false);
    allCards();
});

function allCards(){
    $('#card-container').empty();
    for(let i = 0; i < objectArray.length; i++){
        generateCard(i);
    };
};



filterBtn.addEventListener("click", filterFunction);
filterBtn2.addEventListener("click", filterRadio);
searchFilter.addEventListener("click", filterSearchWord);
searchedWord.addEventListener("keyup", function(runSearch){
    if(runSearch.keyCode === 13){
        runSearch.preventDefault();
        filterSearchWord();
    };
});