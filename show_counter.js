fetch('https://tecno-rosa.vercel.app/api/counter.js')
  .then(response => response.json())
  .then(data => {
    document.getElementById('result').textContent = data.value;
  })
  .catch(err => {
    console.error(err);
  });