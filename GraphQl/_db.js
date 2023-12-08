let games = [
    { id:'1' , title:'Tears of Kingdom' , platform :['Swith']},
    { id:'2' , title:'Pokemon Scarlet' , platform :['PSS' , 'Xbox' , 'Pc']},
    { id:'3' , title:'Mario kart' , platform :['Swith']},
]

let author = [
    { id :'1' , name :'Mario' , verifed:true},
    { id :'2' , name :'peach', verifed:false},
]

let reviews = [
    {id:'1' , rating: 9 , content : ' Nice fsdfdsds' , author_id:'1' , game_id:'2'},
    {id:'2' , rating: 10 , content : ' wow fsdfdsds' , author_id:'2' , game_id:'1'}
]

export default { games , author , reviews}