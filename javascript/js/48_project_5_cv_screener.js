//Data is an array fo objects which contains information about the candidates
const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },
    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Banglore',
        language: 'Javascript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/52.jpg'
    },
    {
        name: 'Camila Cabello',
        age: 23,
        city: 'US',
        language: 'PHP',
        framework: 'Laravel',
        image: 'https://randomuser.me/api/portraits/women/51.jpg'
    },
    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },
    {
        name: 'Mohit Chawla',
        age: 26,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/37.jpg'
    },
    {
        name: 'Swati Chandola',
        age: 25,
        city: 'Delhi',
        language: 'Java',
        framework: 'NodeJS',
        image: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framwork',
        image: 'https://randomuser.me/api/portraits/men/59.jpg'
    }
]

// CV iterator
function cvIterator(profiles){
    let nextIndex = 0;
    return {
        next: function(){
            return nextIndex<profiles.length ?{value: profiles[nextIndex++],done:false}:{done:true}
        }
    }
}
const candidates = cvIterator(data);

nextCv();
//Button listener for next button
const next=document.getElementById('nextId');
next.addEventListener('click', nextCv);

function nextCv(){
    const currentCandidate = candidates.next().value;
    if(currentCandidate != undefined){
    let image = document.getElementById('img');
    let profile = document.getElementById('profile');
    image.innerHtml = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group border border-info">
    <li class="list-group-item bg-dark text-info border-info">Name: ${currentCandidate.name}</li>
    <li class="list-group-item bg-dark text-info border-info">${currentCandidate.age} years old</li>
    <li class="list-group-item bg-dark text-info border-info">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item bg-dark text-info border-info">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item bg-dark text-info border-info">Uses ${currentCandidate.framework}</li>
    </ul>`}
    else{
        alert('End of candidate applications');
        window.location.reload();
    }
}