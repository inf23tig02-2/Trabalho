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

function exibirLogo(xml) {
  const logoXml = xml.getElementsByTagName("logo")[0];
  const src = logoXml.getElementsByTagName("src")[0].textContent;
  const descricao = logoXml.getElementsByTagName("descricao")[0].textContent;

  const logo = document.getElementById("logo");

  logo.src = src;
  logo.alt = descricao;
}

carregarXML("../../xml/imagens.xml", function (xml) {
  exibirLogo(xml);
});
