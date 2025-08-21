let fight_section=document.getElementById('fight-section');
let create_section=document.getElementById('create-section');
let character_section=document.getElementById('character-section');
let settings_section=document.getElementById('settings-section');
let btn_create=document.getElementById('btn-create');
let battle_section=document.getElementById('battle-section');

function toFight(){
    let name_character = document.getElementById('character-name');

    if(name_character.value){
    fight_section.style.display='block';
    create_section.style.display='none';
    character_section.style.display='none';
    battle_section.style.display='none'
    settings_section.style.display='none';
    } else alert('Write Character Name');
}

function toCharacter(){
    fight_section.style.display='none';
    character_section.style.display='block';
    battle_section.style.display='none'
    settings_section.style.display='none';

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

    function toSettings(){
        let settings = document.getElementById('settings-section');

        settings.style.display='block';
        create_section.style.display='none';
        character_section.style.display='none';
        fight_section.style.display='none';

        let name_character = document.getElementById('character-name');
        document.getElementById('name-for-avatar').innerHTML = name_character.value;
    }

    function editNameAvatar(){
        let input_name_avatar = document.querySelector('.input-name-avatar');
        let edit_btn = document.querySelector('.edit-name-btn');

        input_name_avatar.style.display='flex';
        edit_btn.style.display='none'
    }

    function saveNameAvatar() {
        let input_name_avatar = document.querySelector('.input-name-avatar');
        let input_name= document.getElementById('input-name');
        let edit_btn = document.querySelector('.edit-name-btn');
        let name_character = document.getElementById('character-name');
       
        document.getElementById('name-for-avatar').innerText = input_name.value;
         
        name_character.value = input_name.value;

        input_name_avatar.style.display='none';
        edit_btn.style.display='flex'
    }

    
        
 document.querySelector('.input-attack').addEventListener('click',
    function attack(){
        let my_attack=document.querySelectorAll('.my-attack:checked').length;
        let enemy_attack=document.querySelectorAll('.enemy-attack:checked').length;
        let btn_attack=document.querySelector('.btn-attack');

        if(my_attack != 1 || enemy_attack!=2){
            btn_attack.style.cursor='not-allowed';
            btn_attack.style.opacity='0.5';
        }
       
    })