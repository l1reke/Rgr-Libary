$(document).ready(function() {
    // Кнопка з випадковим повідомленням
    $('#infoBtn').click(function() {
      const messages = [
        'Наша бібліотека працює з 8:00 до 20:00.',
        'Маємо понад 50 000 книг у фонді.',
        'Щодня обслуговуємо понад 200 студентів.'
      ];
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      alert(randomMessage);
    });
  
    // Перемикач карток
    $('#toggleCards').click(function() {
      $('#infoCards').slideToggle();
    });
  
    // Модальне вікно з деталями
    $('.moreBtn').click(function() {
      const title = $(this).closest('.card').find('.card-title').text();
      const details = {
        'Читальні зали': 'У читальних залах бібліотеки діє безшумний режим, є Wi-Fi і розетки для ноутбуків.',
        'Електронні ресурси': 'Маємо підписку на Scopus, Web of Science, Springer та інші ресурси.',
        'Допомога бібліотекаря': 'Наші фахівці допоможуть оформити бібліографію та знайти наукову інформацію.'
      };
      const info = details[title] || 'Детальна інформація тимчасово недоступна.';
      const modalHtml = `
        <div class="modal fade" id="infoModal" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">${title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                <p>${info}</p>
              </div>
            </div>
          </div>
        </div>
      `;
      $('body').append(modalHtml);
      const modal = new bootstrap.Modal(document.getElementById('infoModal'));
      modal.show();
      $('#infoModal').on('hidden.bs.modal', function () {
        $(this).remove();
      });
    });
  
    // Обробка форми зворотного зв'язку
    $('#contactForm').submit(function(e) {
      e.preventDefault();
  
      const name = $('#name').val().trim();
      const email = $('#email').val().trim();
      const subject = $('#subject').val().trim();
      const message = $('#message').val().trim();
      const alertBox = $('#formAlert');
  
      if (!name || !email || !subject || !message) {
        alertBox.removeClass('d-none alert-success').addClass('alert alert-danger');
        alertBox.text('Будь ласка, заповніть усі поля.');
        return;
      }
  
      alertBox.removeClass('d-none alert-danger').addClass('alert alert-success');
      alertBox.text('Ваше повідомлення успішно надіслано!');
      $('#contactForm')[0].reset();
  
      setTimeout(() => {
        alertBox.addClass('d-none');
      }, 5000);
    });
  });
  