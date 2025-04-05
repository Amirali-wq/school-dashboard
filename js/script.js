function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
  
    if (!dropdown.classList.contains("open")) {
      const fullHeight = dropdown.scrollHeight + "px"; 
      dropdown.style.height = fullHeight; 
      dropdown.classList.add("open");
  
      setTimeout(() => {
        dropdown.style.height = fullHeight; 
      }, 300); 
    } else {

      dropdown.style.height = dropdown.scrollHeight + "px";
      dropdown.offsetHeight;
      dropdown.style.height = "0px"; 
      dropdown.classList.remove("open");
    }
  }

  function toggleDropdown2(id) {
    const dropdown = document.getElementById(id);
  
    if (!dropdown.classList.contains("open")) {
      const fullHeight = dropdown.scrollHeight + "px"; 
      dropdown.style.height = fullHeight; 
      dropdown.classList.add("open");
  
      setTimeout(() => {
        dropdown.style.height = fullHeight; 
      }, 300);
    } else {
      dropdown.style.height = dropdown.scrollHeight + "px"
      dropdown.offsetHeight;
      dropdown.style.height = "0px"; 
      dropdown.classList.remove("open");
    }
  }

  const bars = document.querySelector('.bars');
  const menuTitleItems = document.querySelectorAll('.menu-title-item'); 
  // const sidebar2Content = document.querySelector('.sidebar2-content-without-logo'); 
  const lgLogo = document.querySelector('.lg-logo');
  const sidebar2 = document.querySelector('.sidebar2');
  const arrow2Items = document.querySelectorAll('.contain-arrow2'); 
  
  bars.addEventListener('click', function () {
    sidebar2.classList.toggle("sidebar2-w22");
    lgLogo.classList.toggle("none");
    menuTitleItems.forEach(item => item.classList.toggle("none"));
    arrow2Items.forEach(item => item.classList.toggle("none"));
    // sidebar2Content.classList.toggle("pt");
  });
  

  // بستن سایدبار
  document.getElementById("close-btn").addEventListener("click", () => {
    document.getElementById("sidebar").classList.remove("open");
  });
  
  document.getElementById("open-btn")?.addEventListener("click", () => {
    document.getElementById("sidebar").classList.add("open");
  });

const lightIcon = document.getElementById('light-icon');
        const darkIcon = document.getElementById('dark-icon'); 
        const body = document.body;

        //  تغییر تم
        const toggleTheme = () => {
            const darkMode = body.classList.toggle('dark-mode');

            if (darkMode) {
                lightIcon.style.display = 'inline-block';
                darkIcon.style.display = 'none';         
                localStorage.setItem('theme', 'dark-mode');
            } else {
                lightIcon.style.display = 'none';     
                darkIcon.style.display = 'inline-block';
                localStorage.setItem('theme', 'light-mode');
            }
        };

        lightIcon.addEventListener('click', toggleTheme);
        darkIcon.addEventListener('click', toggleTheme);

        window.addEventListener('load', () => {
            const localStorageTheme = localStorage.getItem('theme');
            if (localStorageTheme === 'dark-mode') {
                body.classList.add('dark-mode');
                lightIcon.style.display = 'inline-block';
                darkIcon.style.display = 'none';
            } else {
                lightIcon.style.display = 'none';
                darkIcon.style.display = 'inline-block';
            }
        });

//دراپ داون هدر موبایل
const chooseOption = document.querySelector('.user-img');
const optionsContainer = document.querySelector('.userinfo');

chooseOption.addEventListener('click', function () {
    optionsContainer.classList.toggle('show');
});
chooseOption.addEventListener('mouseout', function () {
    optionsContainer.classList.remove('show');
});


//انیمیشن ارو
const arrow = document.querySelector('.arrow');
const rotateELem = () => arrow.classList.toggle('rotate');
arrow.addEventListener('click',rotateELem);

const userControl = document.querySelector('.user-control');
arrow.addEventListener('click', function () {
    userControl.classList.toggle('show');
});

const darkLightText = document.querySelector('.dark-light-text');

darkIcon.addEventListener('mouseover', function () {
    darkLightText.innerHTML = 'زمینه تیره';
    darkLightText.classList.toggle('show');
});
darkIcon.addEventListener('mouseout', function () {
    darkLightText.classList.remove('show');
});

lightIcon.addEventListener('mouseover', function () {
    darkLightText.innerHTML = 'زمینه روشن';
    darkLightText.classList.toggle('show');
});
lightIcon.addEventListener('mouseout', function () {
    darkLightText.classList.remove('show');
});

