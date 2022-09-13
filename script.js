const hamburger = document.querySelector('.hamburger');
const mobileDropdown = document.querySelector('.mobile__dropdown');
const cancelDropdown = document.querySelector('.cancel');
const musiciansContainer = document.querySelector('.musicians__container');

const musicians = [
  {
    name: 'Dolly Parton',
    description: 'American singer-songwriter, actress, philanthropist, and businesswoman',
    musicianImage: 'assets/images/dolly',
    fact: 'After achieving success as a songwriter for others, Parton made her album debut in 1967, which led to success during the 1970s and continued into the 1980s.',
  },
  {
    name: 'Chris Stapleton',
    description: 'American singer-songwriter, guitarist, and record producer',
    musicianImage: 'assets/images/Chris_Stapleton.jpg',
    fact: 'Stapleton moved to Nashville, Tennessee, to pursue an engineering degree from Vanderbilt University but dropped out to pursue his career in music. Subsequently, Stapleton signed a contract with Sea Gayle Music to write and publish his music.',
  },
  {
    name: 'Luke Combs',
    description: 'American country music singer and songwriter',
    musicianImage: 'assets/images/luke_combs.webp',
    fact: 'Born and raised in North Carolina, Combs began performing as a child, most notably performing at Carnegie Hall, moved to Nashville, Tennessee, where he released his debut extended play, The Way She Rides, in 2014.',
  },
  {
    name: 'Shania Twain',
    description: 'Canadian singer and songwriter',
    musicianImage: 'assets/images/shania_twain.webp',
    fact: 'She has sold over 100 million records, making her the best-selling female artist in country music history and one of the best-selling music artists of all time.  Billboard named her as the leader of the 90s country-pop crossover stars.',
  },
  {
    name: 'Kane Brown',
    description: 'American singer',
    musicianImage: 'assets/images/Kane_Brown.jpg',
    fact: ' Brown first came to the attention of the public through social media. After Brown signed with RCA Nashville in early 2016, released in March 2016.Brown became the first artist to have simultaneous number ones on all five main Billboard country charts.',
  },
  {
    name: 'Eric Chruch',
    description: 'American country music singer-songwriter',
    musicianImage: 'assets/images/eric_chruch.jpg',
    fact: 'He has released nine studio albums through Capitol Nashville since 2005. His debut album, 2006\'s Sinners Like Me, produced three singles on the Billboard country charts including the top 20 hits "How \'Bout You", "Two Pink Lines", and "Guys Like Me".',
  },
];

hamburger.addEventListener('click', () => {
  mobileDropdown.classList.toggle('visibility');
  hamburger.classList.toggle('no__display');
});

cancelDropdown.addEventListener('click', () => {
  mobileDropdown.classList.toggle('visibility');
  hamburger.classList.toggle('no__display');
});

musicians.forEach((musicianData) => {
  const musiciansItem = document.createElement('div');
  musiciansItem.className = 'musicians__item';
  musiciansItem.innerHTML = `
  <img
    src="${musicianData.musicianImage}"
    alt="speakers display picture"
  />
  <div class="musicians__item__desc">
    <h3>${musicianData.name}</h3>
    <p>
      <i>${musicianData.description}</i>
    </p>
    <hr />
    <p>
      ${musicianData.fact}
    </p>
  </div>`;
  musiciansContainer.appendChild(musiciansItem);
});