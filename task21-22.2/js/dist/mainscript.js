"use strict";

$(function () {
  'use strict';

  var testObj = {
    question1: { question: "Наиболее распространеннй формат передачи данных:",
      answer1: "JSON",
      answer2: "TXT",
      answer3: "SQL" },

    question2: { question: "Какое время анимации по-умолчанию в функции animate()?",
      answer1: "1000мс",
      answer2: "400мс",
      answer3: "500мс" },

    question3: { question: "Что такое замыкание (closure)?",
      answer1: "переменные окружения функции",
      answer2: "переменные внутри функции плюс переменные окружения",
      answer3: "глобальные переменные window" },

    answers: { question1: "answer1", question2: "answer2", question3: "answer2" }
  };

  localStorage.setItem('Questions', JSON.stringify(testObj)); // save/parse to local storage
  var test = localStorage.getItem('Questions');
  var html = $('#my_tmpl').html();
  var data = JSON.parse(test);

  var content = tmpl(html, data);
  $('div.content_wrapper').append(content);

  console.log("" + test);

  $('input#button-result').click(function () {

    var allInputs = $('input[type=radio]:checked:not(script input[type=radio])');
    var count = 0;
    var result = 0;
    var countQ = $('.list-questions li:not(script li)').length;
    console.log(countQ);
    var countA = allInputs.length;

    if (countA == countQ && countA != 0) {
      for (var i = 0, j = 1; i < allInputs.length; j++, i++) {
        if (allInputs[i].getAttribute('value') == data.answers["question" + j]) ++count;
      }

      result = count * 100 / countQ;

      var modalHtml = $('#my_tmpl_modal').html();
      var strResult = { text: "Вы дали правльных ответов: <br/>" + result.toFixed(0) + " %  " };
      var content_modal = tmpl(modalHtml, strResult);
      $('div.content_wrapper').append(content_modal);

      console.log("" + data);

      allInputs = null;
      countA = 0;
      strResult = null;
      result = 0;
      $('input[type=radio]:checked:not(script input[type=radio])').each(function () {
        $(this).removeAttr("checked");
      });
    } else {

      var modalHtml2 = $('#my_tmpl_modal').html();
      var strResult2 = { text: "Вы не ответили на все вопросы!" };
      var content_modal2 = tmpl(modalHtml2, strResult2);
      $('div.content_wrapper').append(content_modal2);
    }
  });

  $('body').click(function () {
    //modal remove
    $('div.modal-backdrop.fade.in').remove();
    $('div.modal.fade.bs-example-modal-sm.in').remove();
    $('div.modal').remove;
  });
});
