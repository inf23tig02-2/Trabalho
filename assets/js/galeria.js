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

function exibirGaleria(xml) {
  const galeria = document.querySelector(".galeria");

  const imagens = xml.getElementsByTagName("imagem");

  for (let i = 0; i < imagens.length; i++) {
    const src = imagens[i].getElementsByTagName("src")[0].textContent;
    const descricao = imagens[i].getElementsByTagName("descricao")[0].textContent;

    const figure = document.createElement("figure");
    figure.classList.add("figure");

    const img = document.createElement("img");
    img.src = src;
    img.alt = descricao;

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = descricao;

    figure.appendChild(img);
    figure.appendChild(figcaption);

    galeria.appendChild(figure);
  }
}

carregarXML("../../xml/imagens.xml", exibirGaleria);
