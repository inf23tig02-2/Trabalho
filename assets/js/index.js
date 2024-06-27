function carregarXML(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      callback(xhr.responseXML);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

carregarXML("../../xml/imagens.xml", function (xml) {
  const imagens = xml.getElementsByTagName("imagem");

  const preCompeticaoImg = document.getElementById("pre-competicao-img");
  const competicaoImg = document.getElementById("competicao-img");
  const posCompeticaoImg = document.getElementById("pos-competicao-img");

  preCompeticaoImg.src = imagens[0].getElementsByTagName("src")[0].textContent;
  preCompeticaoImg.alt = imagens[0].getElementsByTagName("descricao")[0].textContent;

  competicaoImg.src = imagens[1].getElementsByTagName("src")[0].textContent;
  competicaoImg.alt = imagens[1].getElementsByTagName("descricao")[0].textContent;

  posCompeticaoImg.src = imagens[2].getElementsByTagName("src")[0].textContent;
  posCompeticaoImg.alt = imagens[2].getElementsByTagName("descricao")[0].textContent;
});
