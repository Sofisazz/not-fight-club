let fight_section=document.getElementById('fight-section');
let create_section=document.getElementById('create-section');
let character_section=document.getElementById('character-section')
let btn_create=document.getElementById('btn-create');

function toFight(){
    fight_section.style.display='block';
    create_section.style.display='none';
    character_section.style.display='none';
    }

function toCharacter(){
    fight_section.style.display='none';
    character_section.style.display='block';

    let name_character = document.getElementById('character-name');
    document.getElementById('avatar-name').innerText = name_character.value;
}