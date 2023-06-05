// Array de vídeos
const videos = [
    "https://www.youtube.com/embed/6NXnxTNIWkc?autoplay=1&cc_load_policy=1&controls=1&enablejsapi=1&rel=0",
    "https://www.youtube.com/embed/Lo2qQmj0_h4?autoplay=0&cc_load_policy=1&controls=1&enablejsapi=1&rel=0",
    "https://www.youtube.com/embed/JkK8g6FMEXE?autoplay=0&cc_load_policy=1&controls=1&enablejsapi=1&rel=0",
    "https://www.youtube.com/embed/TAqZb52sgpU?autoplay=0&cc_load_policy=1&controls=1&enablejsapi=1&rel=0"
  ];
  
  // Função para renderizar os vídeos
  function renderizarVideos() {
    const videosContainer = document.getElementById("videos-container");
    console.log renderizarVideos

    // Limpar conteúdo existente
    videosContainer.innerHTML = "";
  
    // Iterar sobre o array de vídeos e criar elementos <iframe>
    videos.forEach((video) => {
      const iframe = document.createElement("iframe");
      iframe.classList.add("video");
      iframe.src = video;
      iframe.title = "YouTube video player";
      iframe.frameBorder = "0";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
  
      videosContainer.appendChild(iframe);
    });
  }
   
  // Chamar a função de renderização dos vídeos
  renderizarVideos();