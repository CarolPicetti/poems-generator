function displayPoem(response){
    new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}



function generatePoem(event){
event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions")
let apiKey = "141903t193o7f25eb4f8b827eac040ff";
let prompt = `User instructions are: Generate a poem about ${instructionsInput.value}`;
let context= "You are an excellent poet and love writing short poems, you need to generate a poem with maximum 8 lines in basic HTML, you don't need to show the word HTML, you need to follow the user instructions, remember to always put a tittle in your poem";
let apiUrl= `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(displayPoem);


}

let poemFormElement = document.querySelector("#poem-generator-form")
poemFormElement.addEventListener('submit', generatePoem)