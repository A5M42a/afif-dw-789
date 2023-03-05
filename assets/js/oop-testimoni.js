class Testimonial {
  constructor(quote, image) {
    this._quote = quote;
    this._image = image;
  }

  get quote() {
    return this._quote;
  }

  get image() {
    return this._image;
  }

  get html() {
    return `<div class="list-testi">
            <img src="${this.image}"/>
            <p class="quote">"${this.quote}"</p>
            <p class="author">- ${this.author}</p>
        </div>`;
  }
}

class AuthorTestimonial extends Testimonial {
  constructor(author, quote, image) {
    super(quote, image);
    this._author = author;
  }

  get author() {
    return this._author;
  }
}

class CompanyTestimonial extends Testimonial {
  constructor(company, quote, image) {
    super(quote, image);
    this._company = company;
  }

  get author() {
    return this._company + " Company";
  }
}

const testimonial1 = new AuthorTestimonial(
  " Dian S.",
  "Produk ini adalah yang terbaik! Layanan pelanggan yang luar biasa, bahan berkualitas tinggi, dan mudah digunakan.",
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
);

const testimonial2 = new AuthorTestimonial(
  "Rama W.",
  "Sangat puas dengan pelayanan cepat dan efisien yang diberikan. Produknya mudah digunakan dan memberikan hasil yang memuaskan.",
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
);

const testimonial3 = new CompanyTestimonial(
  "Ali",
  "Saya merasa produk ini biasa saja. Layanan pelanggan yang diberikan cukup bagus, namun fiturnya tidak sesuai dengan yang saya harapkan.",
  "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
);

let testimonialData = [testimonial1, testimonial2, testimonial3];
let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
  testimonialHTML += testimonialData[i].html;
}

document.getElementById("testi-item").innerHTML = testimonialHTML;
