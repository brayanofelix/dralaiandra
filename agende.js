function sendWhatsApp() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !phone || !message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const whatsappNumber = '5567999209316';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `Olá, meu nome é ${name}. Meu telefone é ${phone}. Gostaria de ajuda com: ${message}`
    )}`;

    window.open(url, '_blank');
  }