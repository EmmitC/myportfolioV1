
  const cvLink = document.getElementById('cvDownload');

  cvLink.addEventListener('click', async (e) => {
    e.preventDefault();

    const filePath = cvLink.getAttribute('href');
    const fileName = cvLink.getAttribute('download');

    cvLink.classList.add('downloading');
    const originalText = cvLink.innerHTML;
    cvLink.innerHTML = 'Preparing… <span class="arrow">→</span>';

    try {
      const res = await fetch(filePath, { method: 'HEAD' });
      if (!res.ok) throw new Error('File not found');

      const a = document.createElement('a');
      a.href = filePath;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      cvLink.innerHTML = 'CV unavailable — try again later';
      console.error('CV download failed:', err);
    } finally {
      setTimeout(() => {
        cvLink.innerHTML = originalText;
        cvLink.classList.remove('downloading');
      }, 1500);
    }
  });
