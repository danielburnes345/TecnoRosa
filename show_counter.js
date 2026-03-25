async function loadData() {
  try {
    const res = await fetch('https://tecno-rosa.vercel.app/api/counter.js');
    const data = await res.json();
    document.getElementById('result').textContent = data.count;
  } catch (err) {
    console.error(err);
  }
}

loadData();