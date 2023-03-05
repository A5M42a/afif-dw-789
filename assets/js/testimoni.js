const testimonialData = [
  {
    author: "Dian S.",
    quote:
      "Produk ini adalah yang terbaik! Layanan pelanggan yang luar biasa, bahan berkualitas tinggi, dan mudah digunakan.",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 5,
  },
  {
    author: "Rama W.",
    quote:
      "Sangat puas dengan pelayanan cepat dan efisien yang diberikan. Produknya mudah digunakan dan memberikan hasil yang memuaskan.",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4,
  },
  {
    author: "Ali K.",
    quote:
      "Saya merasa produk ini biasa saja. Layanan pelanggan yang diberikan cukup bagus, namun fiturnya tidak sesuai dengan yang saya harapkan.",
    image:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: 3,
  },
  {
    author: "Ira P.",
    quote:
      "Produk ini sangat lambat dan sering mengalami error. Saya merasa sangat kecewa dan merasa tidak mendapat nilai uang yang cukup.",
    image:
      "https://media.istockphoto.com/id/1400280368/photo/happy-businessman-working-on-his-laptop-at-home-handsome-businessman-reading-an-email-on-his.jpg?b=1&s=170667a&w=0&k=20&c=mc9FiePkCPzKWRyexNf2lMo9BkDej_OpNloSDMNsutM=",
    rating: 2,
  },
  {
    author: "Dani R.",
    quote:
      "Hasil akhirnya lebih baik dari yang saya harapkan. Produk ini sangat membantu dalam pekerjaan sehari-hari.",
    image:
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4,
  },
];

function allTestimonials() {
  let testimonialHTML = "";

  testimonialData.forEach((item) => {
    testimonialHTML += `<div class="list-testi">
                     <img src="${item.image}"/>
                     <p class="quote">"${item.quote}"</p>
                     <p class="author">- ${item.author}</p>
                     <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                 </div>`;
  });

  document.getElementById("testi-item").innerHTML = testimonialHTML;
}

allTestimonials();

function filterTestimonials(rating) {
  let testimonialHTML = "";

  const testimonialFiltered = testimonialData.filter((item) => {
    return item.rating === rating;
  });

  if (testimonialFiltered.length === 0) {
    testimonialHTML = `<h1> Data not found! </h1>`;
  } else {
    testimonialFiltered.forEach((item) => {
      testimonialHTML += `<div class="list-testi">
                <img src="${item.image}"/>
                <p class="quote">"${item.quote}"</p>
                <p class="author">- ${item.author}</p>
                <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
            </div>`;
    });
  }

  document.getElementById("testi-item").innerHTML = testimonialHTML;
}
