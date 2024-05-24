// document.getElementById('selectAllCheckbox').addEventListener('change', function() {
//     var checkboxes = document.getElementsByClassName('input__who');
//     for(var i=0; i<checkboxes.length; i++) {
//         checkboxes[i].checked = this.checked;
//     }
// });

// document.getElementById('selectAllCheckboxTopic').addEventListener('change', function() {
//     var checkboxes = document.getElementsByClassName('input__topic');
//     for(var i=0; i<checkboxes.length; i++) {
//         checkboxes[i].checked = this.checked;
//     }
// });



document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  let who, topic; 
  let checkboxes_who = document.querySelectorAll('.input__who'); 
  let checkboxes_topic = document.querySelectorAll('.input__topic'); 
  let check_text = document.querySelectorAll(".five_block__textCheckBox");

  checkboxes_who.forEach((checkbox, index) => {
    checkbox.addEventListener('change', function() {
      checkboxes_who.forEach((input, i) => {
        if(input !== this) {
          input.checked = false;
        }
      });

      who = index;
    });
  });

  checkboxes_who.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      if(this.checked) {
        who = this.closest('.five_block__checkBox_label').querySelector('.five_block__textCheckBox').innerText;
      }
    });
  });

  checkboxes_topic.forEach((checkbox, index) => {
    checkbox.addEventListener('change', function() {
      checkboxes_topic.forEach((input, i) => {
        if(input !== this) {
          input.checked = false;
        }
      });

      topic = index;
    });
  });

  checkboxes_topic.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      if(this.checked) {
        topic = this.closest('.five_block__checkBox_label').querySelector('.five_block__textCheckBox').innerText;
      }
    });
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); 
    const formData = new FormData(form);
    const email = formData.get('email');
    const name = formData.get('name');
    const more = formData.get("more");

    try {
      if ((topic !== undefined && who !== undefined) && (topic !== 0 || who !== 0) )   {
        await fetch('https://cybershtab.ru/api/sendFormData', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, name, topic,who, more })
        })
      } else {
        check_text.forEach(element => {
          element.style.color = "rgb(152, 24, 24)";
        });
        
      }
      

      if (response.ok) {
        
  
      } else {
          console.log('Failed to add data. Please try again later.');
      }
      
    } catch (error) {
        console.error('Error:', error);
    }
  });
});






document.addEventListener("DOMContentLoaded", function() {
  const checkboxes = document.querySelectorAll('.input__topic');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      checkboxes.forEach(input => {
        if(input !== this) {
          input.checked = false;
        }
      });
    });
  });
});



const swiper = new Swiper(".swiper", {
    // Optional parameters
    speed: 500,
    allowTouchMove: false,
  });
  
  const gotoSlide = (index) => {
    swiper.slideTo(index);
  };
  
  const restart = () => {
    const inputs = document.querySelectorAll("input");
    const buttons = document.querySelectorAll("button[type=button]");
  
    buttons.forEach((button) => {
      button.disabled = true;
    });
  
    inputs.forEach((input) => {
      input.value = "";
    });
  
    gotoSlide(0);
  };
  
const checkValid = (event) => {
    event.target.nextElementSibling.disabled = !event.target.value.length;
};