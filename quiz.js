const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

//Array
const questions = [
//#1 Garnet = Balenciaga, Aquamarine = McQueen, Emerald = Valentino, Amethyst = Westwood
{
id: 0,
text: "Pick a stone:",
answers: [
{
        text: "Garnet",
        image: "https://images.unsplash.com/photo-1676496220343-1585b0cdcc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Photo of beautiful earring with red gemstones on dark reflective surface as background.",
        credit: "Ian Talmacs"
},
{
        text: "Aquamarine",
image: "https://images.unsplash.com/photo-1512217358397-b68c2bc84682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
alt: "Photo of a person showing silver-colored diamond ring with an Aquamarine gemstone.",
credit: "Andy Holmes"
},
{
  text: "Emerald",
  image: "https://images.unsplash.com/photo-1583937443351-f2f669fbe2cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  alt: "Photo of a green Emerald diamond necklace.",
  credit: "Engin Akyurt"
},
{
text: "Amethyst",
image: "https://images.unsplash.com/photo-1580135952467-a4ff3ca4a752?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
alt: "Photo of a close up of an Amethyst: violet variety of quartz.",
credit: "James Lee"
}
]
},

//#2 Donostia/San Sebastian= Balenciaga, London = Westwood, Isle of Skye = McQueen, Rome = Valentino
{
id: 1,
text: "Pick a city or town:",
answers: [
{
text: "Donostia/San Sebastian",
image: "https://images.unsplash.com/photo-1553455010-bdb488ac12e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
alt: "Photo of aerial view of the beach in Donostia/San Sebastian, Basque Autonomous Community, Spain.",
credit: "Raúl Cacho Oses"
},
{
text: "London",
image: "https://images.unsplash.com/photo-1494922275507-58dc039ed337?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
alt: "Photo of Westminster Bridge and Elizabeth Tower(AKA Big Ben), London, United Kingdom.",
credit: "Hugo Sousa"
},
{
text: "Isle of Skye",
image: "https://images.unsplash.com/photo-1584743241753-a727f5d13ff4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
alt: "Photo of a sunrise at The Quiraing, Isle of Skye, Scotland.",
credit: "Nils Leonhardt"
},
{
text: "Rome",
image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
alt: "Photo of the Trevi Fountain in Rome, Italy.",
credit: "Cristina Gottardi"
}
]
},
//#3 satin= Balenciaga, Lace =Mcqueen, Woven Wool= Westwood, Tulle=valentino
{
id: 2,
text: "Pick a fabric :",
answers: [
{
text: "Lace",
image: "https://images.unsplash.com/photo-1507088991476-665ae61e1eec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
alt: "Photo of white lace.",
credit: "Morgan Rovang"
},
{
text: "Woven wool",
image: "https://images.unsplash.com/photo-1582794496975-00e44c6890ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
alt: "Photo of Tartan cloth for kilts.",
credit: "Henrik Hjortshøj"
},
{
text: "Satin",
image: "https://images.unsplash.com/photo-1612743847346-b8e7313694c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
alt: "Green Satin",
credit: "Julissa Santana"
},
{
text: "Tulle",
image: "https://images.unsplash.com/photo-1466036692599-070d032f4711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
alt: "Photo of a white ballon covered in black tulle.",
credit: "Hipster Mum"
}
]
}
]

//Garnet = Balenciaga, Aquamarine = McQueen, Emerald = Valentino, Amethyst = Westwood
//Donostia/San Sebastian= Balenciaga, London = Westwood, Isle of Skye = McQueen, Rome = Valentino
//satin= Balenciaga, Lace =Mcqueen, Woven Wool= Westwood, Tulle=valentino

const answers = [
{
combination: ["Garnet", "Donostia/San Sebastian", "Satin"],
text: "Cristobal Balenciaga",
image: "https://images.unsplash.com/photo-1666687848426-d0b8c0e9cf58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
alt: "Photo of Balenciaga’s store front at New Bond Street, Mayfair, London, UK"
//credit: “Samuel Regan-Asante”
},

{
combination: ["Aquamarine", "Isle of Skye", "Lace"],
text: "Alexander McQueen",
image: "https://images.unsplash.com/photo-1626766236592-5baaaafdda1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
alt: "Street photography of a white billboard with black letters spelling McQueen"
//credit: “the blowup”
},
{
combination: ["Emerald", "Rome", "Tulle"],
text: "Valentino Garavani",
image: "https://images.unsplash.com/photo-1671039421294-84aaa70e21c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
alt: "Photo of a Pug yawning"
//credit: “Simran Bhardwaj”
},
{
combination: ["Amethyst", "London", "Woven Wool"],
text: "Vivienne Westwood",
image: "https://images.unsplash.com/photo-1516615072064-7061c8d12301?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2573&q=80",
alt: "Photo of Vivienne Westwood’s store front at 8320 Melrose Ave, Los Angeles, United States"
//credit: “Jiroe (Matia Rengel)”
  }
]

//Need to have a default answer to compensate for lack of combination data

//Empty Array
const unansweredQuestions = []
const chosenAnswers = []

//function expression

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')
//h2 tag
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text
        titleBlock.append(titleHeading)
        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add('answer-options')

        unansweredQuestions.push(question.id)

//populate
question.answers.forEach(answer => {

//create element
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text))
            const answerImage = document.createElement('img')
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)

//h3 tag
            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text

            const answerInfo = document.createElement('p')
            const imageLink = document.createElement('a')
            imageLink.setAttribute('href', answer.image)
            imageLink.textContent = answer.credit
            const sourceLink = document.createElement('a')
            sourceLink.textContent = 'Unsplash'
            sourceLink.setAttribute('src', 'https://www.unsplash.com')
            answerInfo.append(imageLink, ' to ', sourceLink)

            answerBlock.append(answerImage, answerTitle, answerInfo)

            answersBlock.append(answerBlock)
        })

        questionDisplay.append(answersBlock)

    })
}

//call
populateQuestions()

const handleClick = (questionId, chosenAnswer) => {
    if (unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer)
    const itemToRemove = unansweredQuestions.indexOf(questionId)


//remove something from an array based on its answer
if (itemToRemove > -1) {
        unansweredQuestions.splice(itemToRemove, 1)
    }

//method outputs a message to the web console
//console.log('clicked')
//console.log(questionId, chosenAnswer)

console.log(chosenAnswers)
console.log(unansweredQuestions)
//scroll to top most unanswered question

 disableQuestionBlock(questionId, chosenAnswer)
    const lowestQuestionId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestQuestionId
  if (!unansweredQuestions.length) {
//scroll to answer div
        location.href = '#answer'
        showAnswer()
    }
}

const showAnswer = () => {
    let result
    answers.forEach(answer => {
        if (
            chosenAnswers.includes(answer.combination[0]) +
            chosenAnswers.includes(answer.combination[1]) +
            chosenAnswers.includes(answer.combination[2])
        ) {
            result = answer
            return
        } else if (!result) {
            //first answer object is default
            result = answers[0]
        }
    })

//unblock console.log(result);

const answerBlock = document.createElement('div')
    answerBlock.classList.add('result-block')
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = result.text
    const answerImage = document.createElement('img')
    answerImage.setAttribute('src', result.image)
    answerImage.setAttribute('alt', result.alt)

    answerBlock.append(answerTitle, answerImage)

    answerDisplay.append(answerBlock)

    const allAnswerBlocks = document.querySelectorAll('.answer-block')
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))

}

const disableQuestionBlock = (questionId, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionId + "-questions")

    Array.from(currentQuestionBlock.children).forEach(block => {
        if (block.children.item(1).innerText !== chosenAnswer) {
            block.style.opacity = "50%"
        }
    })
}
