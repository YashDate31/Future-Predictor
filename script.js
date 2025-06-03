function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatDate(date) {
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options);
}

const jobs = [
  "Software Engineer", "Data Scientist", "AI Specialist", "Machine Learning Engineer", "Cloud Engineer",
  "Cybersecurity Analyst", "Blockchain Developer", "DevOps Engineer", "Full Stack Developer", "Game Developer",
  "Mobile App Developer", "Robotics Engineer", "IoT Specialist", "Big Data Analyst", "Quantum Computing Researcher",
  "AR/VR Developer", "Digital Twin Engineer", "Autonomous Vehicle Engineer", "Bioinformatics Specialist",
  "AI Ethics Consultant", "Natural Language Processing Engineer", "Computer Vision Engineer",
  "Embedded Systems Developer", "Edge Computing Specialist", "AI Product Manager", "Data Engineer",
  "AI Research Scientist", "Algorithm Developer", "Cloud Solutions Architect", "IT Systems Architect",
  "AI Trainer", "AI Operations Specialist", "AI Model Validator", "AI Deployment Engineer"
];

const femaleSpouses = [
  "Ananya","Divya","Isha","Kavya","Meera","Neha","Pooja","Ritika","Sara","Simran","Anika","Diya","Saanvi",
  "Aanya","Myra","Tara","Nisha","Suhana","Anushka","Ira","Aditi","Nikita","Priya","Shreya","Tanvi","Rhea",
  "Kiara","Shruti","Maya","Pari","Nandini","Aarohi","Srishti","Trisha","Amrita","Bhavya","Charu","Damini",
  "Esha","Falguni","Gauri","Harini","Ishita","Jhanvi","Kanika","Laxmi","Madhuri","Nalini","Ojasvi","Palak",
  "Rashmi","Saisha","Tanisha","Usha","Vaishnavi","Yamini","Zara","Archana","Bhavana","Chitra","Deepa","Ekta",
  "Farah","Gayatri","Hema","Indira","Jaya","Kiran","Lata","Mina","Neelam","Pallavi","Rekha","Sonal","Urvashi",
  "Vidya","Yashoda","Zeenat","Alka","Bela","Chandni","Diksha","Esha","Firoza","Geeta","Himani","Ira","Jaya",
  "Kajal","Leela","Maya","Nalini","Omi","Parvati","Rani","Sita","Tulsi","Uma","Vandana","Yogita","Zara",
  "Anjali","Bharti","Chandni","Damini","Eshani","Farzana","Gauri","Himani","Isha","Jahnavi","Kiran","Lavanya",
  "Manisha","Nisha","Poonam","Ritika","Sanya","Tina","Usha","Varsha","Yamini","Zoya","Aastha","Bhavna","Charu",
  "Divya","Esha","Falguni","Gita","Harini","Indu","Jyoti","Kavita","Lalita","Manju","Neha","Pooja","Ritu","Shivani",
  "Tara","Urmila","Vidya","Yashika","Zeenat","Anita","Bela","Chandni","Diksha","Esha","Firoza","Geeta","Himani",
  "Ira","Jaya","Kajal","Leela","Maya","Nalini","Omi","Parvati","Rani","Sita","Tulsi","Uma","Vandana","Yogita","Zara",
  "Alisha","Bhawna","Chhavi","Deepali","Eshita","Fariha","Gauri","Hemani","Isha","Jhanvi","Kiran","Lavanya","Minal",
  "Nikita","Pallavi","Rashmi","Sanya","Tina","Urmi","Varsha","Yami","Zara","Aarti","Bhavini","Charul","Dipti"
];

const maleSpouses = [
  "Raj","Amit","Siddharth","Rahul","Karan","Vikram","Arjun","Rohan","Aditya","Vishal","Manish","Pranav",
  "Deepak","Harish","Nikhil","Omkar","Pankaj","Rakesh","Tarun","Varun","Yash","Suresh","Nitin","Sameer",
  "Uday","Vikas","Yuvraj","Akash","Bhavesh","Chirag","Dinesh","Eshan","Farhan","Gaurav","Himesh","Ishaan",
  "Jatin","Kishore","Lokesh","Mahesh","Naveen","Om","Parth","Qasim","Rishi","Sanjay","Tushar","Umesh","Vikrant",
  "Waman","Yogesh","Zaid","Ankit","Bharat","Chetan","Dilip","Faisal","Girish","Hiren","Ishwar","Jignesh",
  "Kamal","Lalit","Manoj","Ojas","Piyush","Ravindra","Sachin","Tejas","Ujjwal","Vimal","Yashwant","Zafar",
  "Arvind","Bhupesh","Chandan","Deepak","Eklavya","Firoz","Gautam","Hemant","Inder","Jayesh","Ketan","Laxman",
  "Madan","Nilesh","Omprakash","Prakash","Rajesh","Suraj","Tapan","Vishnu","Yuvraj","Zeeshan","Anil","Balu",
  "Chirag","Dhanush","Eeshan","Faraz","Gopal","Himanshu","Iqbal","Jitesh","Keshav","Lalit","Manish","Nikhil",
  "Omkar","Praveen","Ramesh","Sanjay","Tejas","Umesh","Vikram","Yashwant","Zubin","Anuj","Bharat","Chetan",
  "Dilip","Eshan","Faisal","Girish","Hiren","Ishwar","Jignesh","Kamal","Lalit","Manoj","Nitin","Ojas","Piyush",
  "Ravindra","Sachin","Tejas","Ujjwal","Vimal","Yashwant","Zafar","Arvind","Bhupesh","Chandan","Deepak","Eklavya"
];

const children = [
  "Aarav","Anaya","Vihaan","Ishaan","Kavya","Rohan","Aanya","Advait","Diya","Neel","Saanvi","Kabir","Myra","Reyansh",
  "Anika","Shaurya","Sara","Dev","Anvi","Parth","Meera","Rudra","Aditi","Aryan","Pihu","Vivaan","Sia","Arjun",
  "Kaira","Samarth","Ira","Dhruv","Tara","Yash","Nisha","Aditya","Suhana","Krishna","Naina","Veer","Mira",
  "Lakshya","Anushka","Sai","Raghav","Pooja","Siddharth","Tanvi","Om","Aarohi","Kunal","Isha","Manav","Anjali",
  "Rishi","Sakshi","Neil","Shruti","Karan","Prachi","Arnav","Nivedita","Samar","Ritika","Yuvraj","Neha","Shaurya",
  "Simran","Divya","Rohan","Anaya","Pranav","Bhavna","Harsh","Deepa","Riya","Karan","Sonia","Nikhil","Shruti",
  "Kavita","Milan","Sahana","Yash","Rita","Vikas","Kiran","Manisha","Vishal","Poonam","Tarun","Neeta","Amita",
  "Raju","Sneha","Ajay","Geeta","Sunil","Naina","Pallavi","Vivek","Rina","Harish","Mina","Ramesh","Alka","Rupa",
  "Kamal","Ritu","Pankaj","Anita","Sanjay","Neha","Jaya","Prakash","Sonal","Rahul","Maya","Rajesh","Rekha","Arun",
  "Lata","Rohit","Savita","Manoj","Anjali","Suresh","Tina","Dinesh","Priya","Vijay","Kusum","Ajit","Seema",
  "Rakesh","Kiran","Harsha","Nidhi","Ashok","Meena","Sumit","Rachna","Deepak","Kalpana","Sunita","Nitin",
  "Neelam","Rajan","Megha","Ganesh","Nisha","Ravi","Manju","Vimal","Anshu","Ramesh","Sushma","Pradeep","Nisha"
];

const deathReasons = [
  "mysterious disappearance",
  "haunted by shadows",
  "cursed by time",
  "tragic accident",
  "unknown virus outbreak",
  "sudden heart failure",
  "fatal car crash",
  "unexplained poisoning",
  "fallen from a great height",
  "drowned in a dark lake",
  "struck by lightning",
  "devoured by wild beasts",
  "lost in a parallel dimension",
  "victim of an ancient curse",
  "never aging but trapped forever",
  "burned in a house fire",
  "death by supernatural possession",
  "fatal allergic reaction",
  "disappeared in a haunted forest",
  "murdered by an unseen force",
  "infected by unknown parasite",
  "strangled by invisible entity",
  "frozen in time",
  "victim of a deadly ritual",
  "fell into a bottomless pit",
  "succumbed to relentless nightmares",
  "silenced by the shadows",
  "erased from existence",
  "lost in an endless void",
  "death by cursed artifact"
];


function generateFuturePrediction(name, dob, gender) {
  const birthDate = new Date(dob);
  const isSingle = Math.random() < 0.2;
  const deathAge = randomInt(50, 90);
  const deathDate = new Date(birthDate);
  deathDate.setFullYear(deathDate.getFullYear() + deathAge);
  const formattedDeathDate = formatDate(deathDate);
  const deathReason = randomChoice(deathReasons);

  if (isSingle) {
    const job = randomChoice(jobs);
    return `
      <div style="background:#111; color:#e74c3c; padding:20px; border-radius:15px; font-family:'Share Tech Mono', monospace; line-height:1.5;">
        <h2 style="color:#ff4c4c; text-shadow: 0 0 10px #ff0000;">👁️ YOUR HORROR FUTURE 👁️</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Status:</strong> Forever alone, wandering the shadows.</p>
        <p><strong>Future Job:</strong> ${job}</p>
        <p><strong>Death Date:</strong> ${formattedDeathDate}</p>
        <p><strong>Cause of Death:</strong> ${deathReason}</p>
      </div>
    `;
  }

  const spouse = gender === "male" ? randomChoice(femaleSpouses) : randomChoice(maleSpouses);
  const numChildren = randomInt(1, 5);
  const childrenNames = [];
  for (let i = 0; i < numChildren; i++) {
    childrenNames.push(randomChoice(children));
  }
  const job = randomChoice(jobs);

  return `
    <div style="background:#111; color:#e74c3c; padding:20px; border-radius:15px; font-family:'Share Tech Mono', monospace; line-height:1.5;">
      <h2 style="color:#ff4c4c; text-shadow: 0 0 10px #ff0000;">👁️ YOUR HORROR FUTURE 👁️</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Spouse:</strong> ${spouse}</p>
      <p><strong>Number of Children:</strong> ${numChildren}</p>
      <p><strong>Children Names:</strong> ${childrenNames.join(", ")}</p>
      <p><strong>Future Job:</strong> ${job}</p>
      <p><strong>Death Date:</strong> ${formattedDeathDate}</p>
      <p><strong>Cause of Death:</strong> ${deathReason}</p>
    </div>
  `;
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value;
  const genderEl = document.querySelector('input[name="gender"]:checked');
  if (!name || !dob || !genderEl) {
    alert("Please fill in all required fields!");
    return;
  }
  const gender = genderEl.value;
  const predictionLines = generateFuturePredictionLines(name, dob, gender);
  const outputBox = document.getElementById("output");
  outputBox.innerText = predictionLines.join('\n');
});

function generateFuturePredictionLines(name, dob, gender) {
  const birthDate = new Date(dob);
  const isSingle = Math.random() < 0.2;
  const deathAge = randomInt(50, 90);
  const deathDate = new Date(birthDate);
  deathDate.setFullYear(deathDate.getFullYear() + deathAge);
  const formattedDeathDate = formatDate(deathDate);
  const deathReason = randomChoice(deathReasons);

  const predictionLines = [];
  predictionLines.push(`👁️ YOUR HORROR FUTURE 👁️`);
  predictionLines.push(`Name: ${name}`);

  if (isSingle) {
    const job = randomChoice(jobs);
    predictionLines.push(`Status: Forever alone, wandering the shadows.`);
    predictionLines.push(`Future Job: ${job}`);
    predictionLines.push(`Death Date: ${formattedDeathDate}`);
    predictionLines.push(`Cause of Death: ${deathReason}`);
    return predictionLines;
  }

  const spouse = gender === "male" ? randomChoice(femaleSpouses) : randomChoice(maleSpouses);
  const numChildren = randomInt(1,3);
  const childrenNames = [];
  for (let i = 0; i < numChildren; i++) {
    childrenNames.push(randomChoice(children));
  }
  const job = randomChoice(jobs);

  predictionLines.push(`Spouse: ${spouse}`);
  predictionLines.push(`Number of Children: ${numChildren}`);
  predictionLines.push(`Children Names: ${childrenNames.join(", ")}`);
  predictionLines.push(`Future Job: ${job}`);
  predictionLines.push(`Death Date: ${formattedDeathDate}`);
  predictionLines.push(`Cause of Death: ${deathReason}`);

  return predictionLines;
}
