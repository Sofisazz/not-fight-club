let fight_section=document.getElementById('fight-section');
let create_section=document.getElementById('create-section');
let character_section=document.getElementById('character-section')
let btn_create=document.getElementById('btn-create');
let battle_section=document.getElementById('battle-section');

function toFight(){
    fight_section.style.display='block';
    create_section.style.display='none';
    character_section.style.display='none';
    battle_section.style.display='none'
    }

function toCharacter(){
    fight_section.style.display='none';
    character_section.style.display='block';
    battle_section.style.display='none'
    let name_character = document.getElementById('character-name');
    document.getElementById('avatar-name').innerText = name_character.value;
}

function editCharacter(){
    let edit=document.getElementById('edit-character');
    edit.style.display='flex';
}

function closeEditCharacter(){
    let edit=document.getElementById('edit-character');
    edit.style.display='none';
    
}

function openEditModal(){
    let popup = document.getElementById('popup');
    popup.style.display='flex';
}

function chooseAvatar(item){   
    let choose = item.querySelector('avatar-edit');
    choose.style.display='flex';
}

function closeChooseAvatar(item){
    let choose = item.querySelector('.avatar-edit');
    choose.style.display='none';
}


function closeModal(){
    let popup = document.getElementById('popup');
    popup.style.display='none';
}

 function setAvatar(item) {
        let avatar_item = item.closest('.avatar-item'); 
        let avatar_image = avatar_item.querySelector('img'); 
        let image_character = document.getElementById('image-character');
        image_character.src = avatar_image.src; 

        let popup = document.getElementById('popup');
        popup.style.display = 'none'; 
}

    function toBattle(){
    let battle_my_name=document.getElementById('battle-my-name');
    let name_character = document.getElementById('character-name');
    let image_character = document.getElementById('image-character');
    document.getElementById('image-avatar').src = image_character.src;

    battle_my_name.innerText = name_character.value;

    fight_section.style.display='none';
    create_section.style.display='none';
    character_section.style.display='none';
    battle_section.style.display='block';
}