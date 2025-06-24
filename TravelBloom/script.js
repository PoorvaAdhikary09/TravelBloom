function bookNow() {
  alert("Booking functionality coming soon!");
}

function search() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const rec = document.getElementById("recommendations");
  rec.innerHTML = "";

  if (query.includes("beach")) {
    rec.innerHTML = `
      <h2>Beach Recommendations</h2>
      <img src="b1.jpg" alt="Maldives" style="width:200px;height:150px;">
      <img src="b2.jpg" alt="Hawaii" style="width:200px;height:150px;">
    `;
  } else if (query.includes("temple")) {
    rec.innerHTML = `
      <h2>Temple Recommendations</h2>
      <img src="t1.jpg" alt="Japan" style="width:200px;height:150px;">
      <img src="t2.jpg" alt="India" style="width:200px;height:150px;">
     
    `;
  } else if (query.includes("country")) {
    rec.innerHTML = `
      <h2>Country-Based Recommendations</h2>
       <img src="c1.jpg" alt="Japan" style="width:200px;height:150px;">
      <img src="c2.jpg" alt="India" style="width:200px;height:150px;">
    `;
  } else {
    rec.innerHTML = `<p>No recommendations found.</p>`;
  }
}
