let currentPhoto = 0;

let imagesData = [
    {
    photo: 'images/photo-1.jpg',
    title: 'A black cat and the Moon',
    description: "My experiments with an AI image generator.Who doesn't love mysterious black cats and full Moons?"
  },

   {
    photo: 'images/photo-2.jpg',
    title: 'Artistic dark academia',
    description: 'Dark academia aesthetics combined with the artistic style created by AI.'
  },

  {
    photo: 'images/photo-3.jpg',
    title: 'Artistic white academia',
    description: 'Light academia aesthetics combined with the artistic style created by AI.'
  },
  
  {
    photo: 'images/photo-4.jpg',
    title: 'A nice café in autumn',
    description: "Autumn is definitely here, so it's time to emphasize its warm and positive side:cozy cafés and pumpkins."
  },

  {
    photo: 'images/photo-5.jpg',
    title: 'A cat in a cozy room',
    description: 'The dream study: books, coffee and a lovely cat.'
  },

  {
    photo: 'images/photo-6.jpg',
    title: 'Dark academia in a café',
    description: 'Going back to the dark academia aesthetics and the cozy café theme.'
  },

  {
    photo: 'images/photo-7.jpg',
    title: 'A magical park with a fountain',
    description: "AI's wonders with the artistic style and a magical fountain."
  },

  {
    photo: 'images/photo-8.jpg',
    title: 'A girl and a cat-dark academia',
    description: 'A girl and a cat in a café-dark academia style.'
  },

  {
    photo: 'images/photo-9.jpg',
    title: 'A girl and a cat-light academia',
    description: 'A girl and a cat in a library-light academia style.'
  }
];

function loadPhoto(photoNumber) {
$('#photo').attr('src', imagesData[photoNumber].photo);
$('#photo-title').text(imagesData[photoNumber].title);
$('#photo-description').text(imagesData[photoNumber].description);
$('.thumbnail').removeClass('selected');
$(`.thumbnail:eq(${photoNumber})`).addClass('selected');
}

loadPhoto(currentPhoto);

$('#right-button').click(() => {
    currentPhoto++;
    if (currentPhoto >= imagesData.length) {
      currentPhoto = 0; 
    }
    loadPhoto(currentPhoto);
  });

  $('#left-button').click(() => {
    currentPhoto--;
    if (currentPhoto < 0) {
      currentPhoto = imagesData.length - 1; 
    }
    loadPhoto(currentPhoto);
  });

  $('.thumbnail').click(function() {
    $('.thumbnail').removeClass('selected');
    $(this).addClass('selected');
    var clickedIndex = $('.thumbnail').index(this);

    // Load the corresponding photo
  loadPhoto(clickedIndex);
});

// Initialize with the first photo
loadPhoto(currentPhoto);