$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/elevator.jpg',
            link: 'https://github.com/leeyehoon/Elevator-Solution',
            title: '공공장소 엘리베이터 솔루션',
            technologies: ['C++', 'Python', 'OpenCV', 'Android'],
            description: "공공장소 엘리베이터의 인원초과 무게 인식 시스템으로 인한 불편함을 해소하기 위해 만든 프로젝트 입니다.",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/chat.jpg',
            link: 'https://github.com/leeyehoon/Chat-app',
            title: 'Chat-App',
            technologies: ['C#', '.Netframework'],
            description: ".Netfrmework에서 TCP 서버를 이용하여 만든 간단한 Windows Chatting Application입니다.",
            categories: ['featured', 'native']
        },
        {
            image: 'assets/images/text_editor.jpg',
            link: 'https://github.com/leeyehoon/Text_Edit',
            title: 'Text Editor',
            technologies: ['C','Linux'],
            description: "행으로 정렬된 데이터를 정렬된 열 데이터로 변환해주고, 데이터의 갯수를 출력해주는 프로그램입니다.",
            categories: ['featured', 'native']
        },
        {
            image: 'assets/images/movies.png',
            link: 'https://github.com/leeyehoon/Movies-Site',
            title: 'Movies Summary',
            technologies: ['Javascript', 'React'],
            description: "평점 9점 이상의 영화들을 모아 제목, 내용 등 정보들을 제공하는 React-App입니다.",
            categories: ['featured', 'native']
        },
        {
            image: 'assets/images/study.jpg',
            link: 'https://github.com/leeyehoon/Imbeded-Study',
            title: '임베디드 기사 공부자료',
            technologies: [],
            description: "임베디드 기사를 공부하기 위해 여러 개발자들의 블로그 내용을 공부하고 전공서적을 참고하며 만든 공부 자료입니다.",
            categories: ['featured', 'security']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}