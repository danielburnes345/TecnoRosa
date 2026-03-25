async function loadData() {
  try {
    const res = await fetch('https://api.example.com/number');
    const data = await res.json();
    document.getElementById('result').textContent = data.value;
  } catch (err) {
    console.error(err);
  }
}

loadData();