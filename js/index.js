
//Title and description card service
let titleService = document.querySelector('#title-service')
let descriptionService = document.querySelector('#description-service')

//Services
let serviceSite = document.querySelector('#service-site')
let serviceInstitucional = document.querySelector('#service-institucional')
let serviceEcomemmerce = document.querySelector('#service-ecommerce')
let serviceLandingPage = document.querySelector('#service-landing-page')

let elements = [serviceSite, serviceInstitucional, serviceEcomemmerce, serviceLandingPage]

function teste(element, description) {
    element.addEventListener("click", () => {
        titleService.textContent = element.textContent
        // description.textContent = ''
        // description.textContent = 'Descrição teste'

        switch (titleService.textContent) {
            case "Sites":
                description.textContent = "Desenvolvemos Sites Responsivos muito bons!"
                break;
            case "Institucional":
                description.textContent = "Sites institucionais!"
                break;
            case "E-commerce":
                description.textContent = "Venda mais com seu e-commerce!"
                break;
            case "Landing-page":
                description.textContent = "Aumente sua captação com uma Landing-page!"
                break;
        }

    })
}

elements.forEach(item => teste(item, descriptionService))





