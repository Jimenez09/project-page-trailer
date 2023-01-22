const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternaModal() {
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternaModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternaModal();
    video.setAttribute("src", "");
});

//OBJETIVO 1 - Quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o vídeo do trailer:
//*PASSO 1: Dar um jeito de pegar o elemento que representa o botão na tela usando o js:
//*PASSO 2: Dar um jeito de identificar quando o usuário clicar no botão de veja o trailer:
//*PASSO 4: Abrir a modal na tela:
//*PASSO 3: Dar um jeito de pegar o elemento do modal no js:
//----------------------------------------------------------------
//OBJETIVO 2 - Quando o usuário clicar no X devemos fechar a modal:
//*PASSO 1: Dar um jeito de pegar o elemento de fechar o modal usando o js:
//*PASSO 2: Dar um jeito de identificar quando o usuário clicar no X:
//*PASSO 3: Fechar o modal: