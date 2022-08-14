// Function for contact details validation
function validate(){
    const fullName = document.form_name.full_name;
    const phoneNum = document.form_name.tel;
    const mail = document.form_name.email;
    const email_error = document.getElementById("email_error");
    const num_error = document.getElementById("num_error");
    const name_error = document.getElementById("name_error");
   

  

    if (fullName.value.length <= 0){
        fullName.style.border = "2px solid red";
        name_error.style.display = "block";
        fullName.focus();
        return false;
    }

    if(phoneNum.value.length <= 0){
        phoneNum.style.border = "1px solid red";
        num_error.style.display = "block";
        phoneNum.focus();
        return false;
    }

    if(mail.value.length <= 9){
        mail.style.border = "1px solid red";
        email_error.style.display = "block";
        mail.focus();
        return false;
    }
}


const reviews = [
    {
      id: 1,
      name: "Ejiro Ajiyen",
      job: "Web Developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "When I wanted to get married, I was looking for highly professional designers to work with. Peaciva Innovations provided me with all the necessary designs & prints such as wedding IV, banners, jotters, etc. I was very pleased with the results and would recommend them to any company that may require their services.",
    },
    {
      id: 2,
      name: "Divine Imeji",
      job: "Clergyman",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "We were looking for a unique brand logo that would accurately explain our core values, mission and purpose for our Ministry. The team at Peaciva Innovations surpassed our expectations and delivered a Brand Guideline with high momentum that helped us kick start our branding process. ",
    },
    {
      id: 3,
      name: "Peter Jones",
      job: "Intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "Chuks Aworo",
      job: "CEO, CKS Automobiles",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "I've been working with the team at Peaciva Innovations across a number of brand projects which include our brand logo, flyer designs, banners and social media content designs. They consistently deliver high-quality work, quickly and efficiently. It's been a real pleasure to work with them. ",
    },
    {
      id: 5,
      name: "Laju Ajagbawa",
      job: "The boss",
      img:
        "img/ourServicesBg7.jpeg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  
  
  
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  








  const services = [
    {
      id: 1,
      service: "Printing",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora architecto sed a dolorem earum impedit animi sequi aliquid accusantium porro?",
      pic: "img/image2.png",
    },
    {
      id: 2,
      service: "UI/UX Design",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora architecto sed a dolorem earum impedit animi sequi aliquid accusantium porro?",
      pic: "img/image1.png",
    },
    {
      id: 3,
      service: "Graphic Design",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora architecto sed a dolorem earum impedit animi sequi aliquid accusantium porro?",
      pic: "img/image2.png",
    },
    {
      id: 4,
      service: "Website Development",
      description: "Our experience and expertise pans further than app development. Our designers and developers have crafted and reconstructed web pages to gobeyond what a modern-day web presence is expected to be.",
      pic: "img/image1.png",
    }
    
  ];
  

  
  const pic = document.querySelector("#service-img img");
  const service = document.getElementById("specific-service");
  const description = document.getElementById("specific-description");  
  const backwardBtn = document.querySelector(".backward-btn");
  const forwardBtn = document.querySelector(".forward-btn");
 
  // alert(pic.src);
  
  // set starting item
  let startingItem = 0;
  
  function showService(peaciva) {
    const obj  = services[peaciva];
    pic.src = obj.pic;
    service.textContent = obj.service;
    description.textContent = obj.description;
  }

  // show next service
  forwardBtn.addEventListener("click", function () {
    startingItem++;
    if (startingItem > services.length - 1) {
      startingItem = 0;
    }
    showService(startingItem);
  });
  // show prev service
  backwardBtn.addEventListener("click", function () {
    startingItem--;
    if (startingItem < 0) {
      startingItem = services.length - 1;
    }
    showService(startingItem);
  });
  





const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')

    function burgerClick(){
        nav.classList.toggle('nav-active');
    }
}

navSlide();

