async function loadData() {
  try {
    const res = await fetch('https://api.example.com/number');
    const data = await res.json();
    document.getElementById('result').textContent = data.count;
  } catch (err) {
    console.error(err);
  }
}

loadData();