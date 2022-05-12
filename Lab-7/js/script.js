const container = document.getElementById('container');
const loadBtn = document.getElementById('load');

const createLayout = ({
  picture,
  postCode,
  country,
  city,
  email,
}) => {
  /* Image */
  const imageNode = new Image(300);
  imageNode.src = picture;

  /* City */
  const cityNode = document.createElement('p');
  const cityText = document.createTextNode(`City: ${city}`);
  cityNode.appendChild(cityText);

  /* Country */
  const countryNode = document.createElement('p');
  const countryText = document.createTextNode(`Country: ${country}`);
  countryNode.appendChild(countryText);

  /* Post code */
  const postCodeNode = document.createElement('p');
  const postCodeText = document.createTextNode(`Postcode: ${postCode}`);
  postCodeNode.appendChild(postCodeText);

  /* Email */
  const emailNode = document.createElement('p');
  const emailText = document.createTextNode(`Email: ${email}`);
  emailNode.appendChild(emailText);

  container.appendChild(imageNode);
  container.appendChild(cityNode);
  container.appendChild(postCodeNode);
  container.appendChild(countryNode);
  container.appendChild(emailNode);

}


const initLayout = async () => {
  const request = await fetch('https://randomuser.me/api', {
    headers: {
      'Accept': 'application/json'
    }
  });

  const response = await request.json();

  const { picture, location, email } = response.results[0];

  createLayout({
    picture: picture.large,
    postCode: location.postcode,
    country: location.country,
    email,
    city: location.city,
  })

}


const handleClick = () => {
  initLayout();
}

loadBtn.addEventListener('click', handleClick);
