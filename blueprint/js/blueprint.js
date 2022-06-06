$(document).ready(function () {
    // Generate Notes Tab
    $('<a/>', {
        'class': 'notes-tab',
        href: '#'
    }).appendTo('body');

    // Generate Notes Panel
    $('<div/>', {
        'class': 'notes Scrollable'
    }).appendTo('body');

    // Get Page Title
    var vTitle = 'Blueprint';
   $('.notes').html('<h1>' + vTitle + '</h1>');
   $('.notes').append('<h2>Layers</h2>');

    // Generate Notes Panel static Content
    var structure = [
        '<form><div class="toggle"><input type="checkbox" id="uxBox"><label for="uxBox"></label>User Experience</div>',
        '<div class="toggle"><input type="checkbox" id="cmBox"><label for="cmBox"></label>Content Management</div>',
        '<div class="toggle"><input type="checkbox" id="waBox"><label for="waBox"></label>Web Analytics</div>',
        '<div class="toggle"><input type="checkbox" id="uaBox"><label for="uaBox"></label>User Audit</div>',
        '<div class="toggle"><input type="checkbox" id="betaBox"><label for="betaBox"></label>Beta Version</div>',
        '<div class="toggle"><input type="checkbox" id="futureBox"><label for="futureBox"></label>Future Version</div>',
        '<div class="toggle"><input type="checkbox" id="configBox"><label for="configBox"></label>Configuration</div></form>',
        '<h2>Page Notes</h2>'
    ];
    $(structure.join('')).appendTo('.notes');

    notes('ua');
    notes('ux');
    notes('wa');
    notes('config');
    notes('cm');


    // Generate Note From Element
    function notes(layer) {
      var noteCount = 0;
      var tn_array = $('[note-' + layer + ']').map(function() {
        if (layer == 'ua') {
          if ($(this).attr('note-' + layer) != '') {
            noteCount++;
            return $(this).attr('note-' + layer);
          }
        }
        else {
          noteCount++;
          var note = $(this).attr('note-' + layer);
          if (note === '' && layer == 'cm') {
            return $(this).text();
            console.log($(this).text());
          }
          else {
            return $(this).attr('note-' + layer);
          }
        }
      });
      console.log(layer + ' = ' + noteCount);

      // Auto-numbering the notes
      if (layer !== 'cm') {
        for (var i = 0; i < noteCount; i++) {
          // if (tn_array[i] != ''){
            $('.notes').append('<div class="note-holder ' + layer + '">' + '<span class="note-count">' + (i+1) + '</span>' +'<span class="note-body">' + tn_array[i] + '</span>' + '</div');
          // }
        }
      }
      else {

      }
      $('.note-holder').addClass('hide');
      if (layer == 'config'){
        var canvas = document.createElement('canvas');
        var windowheight = Math.max(
          document.body.scrollHeight, document.documentElement.scrollHeight,
          document.body.offsetHeight, document.documentElement.offsetHeight,
          document.body.clientHeight, document.documentElement.clientHeight
        );
        canvas.id = 'configLayer';
        canvas.width  = window.innerWidth;
        canvas.height = windowheight;
        canvas.style.zIndex = 88;
        canvas.style.position = 'absolute';
        canvas.style.top = '0px';
        document.body.appendChild(canvas);
      }

      // Add in page elements
    if (layer !== 'cm') {
      var noteNum = 0;
      $('[note-' + layer + ']').each(function() {
        // if ($(this).attr('note-' + layer) !='') {
          noteNum++;
        //}
        if (layer == 'config'){
          var positionInfo = this.getBoundingClientRect();
          var height = this.offsetHeight + 0.50;
          var width = this.offsetWidth + 0.50;
          var x = positionInfo.left;
          var y = positionInfo.top;
          // console.log(x, y, width, height);

          var context = document.getElementById('configLayer').getContext('2d');
          // context.canvas.width = window.innerWidth + 'px';
          // context.canvas.height = height + 'px';
          //context.translate(0.5, 0.5);
          context.beginPath();
          context.rect(x * 0.9, y * 0.95, width * 1.1, height * 1.15);
          context.fillStyle = 'transparent';
          context.fill();
          context.lineWidth = 2;
          if ($(this).attr('note-' + layer).indexOf('S') > -1) {
            context.strokeStyle = '#0C572B';
          }
          else if ($(this).attr('note-' + layer).indexOf('F') > -1) {
            context.strokeStyle = '#7B0F7A';
          }
          else {
            context.strokeStyle = '#E20077';
          }
          context.stroke();

          $(this).prepend('<span class="notes-anchor ' + layer + '"><figure>' + $(this).attr('note-' + layer) +'</figure></span>');
        }
        /*else if (layer == 'cm') {
          // body content and table head classes to add point numbering
          var classes = ['.secondary-nav a', 'h3', '.body-content', 'button']
          for (var i = 0, len = classes.length; i < len; i++) {
            $(classes[i]).each(function() {
              console.log(classes[i]);
              $(this).prepend('<span class="notes-anchor ' + layer + '"><figure>' + [i+1] + '.' + (noteNum) +'</figure></span>');
            });
            noteNum++;
          }
        }*/
        else if (layer == 'ua'){
          $(this).addClass('colorbg');
          if ($(this).attr('note-' + layer) != '') {
            $(this).prepend('<span class="notes-anchor ' + layer + '"><figure data-tooltip="' + $(this).attr('note-' + layer) + '">' + (noteNum) + '</figure></span>');
          }
        }
        else { // ux, wa, cm
          var annotation = '<span class="notes-anchor ' + layer + '"><figure data-tooltip="';
          if (layer == 'cm' && $(this).attr('note-' + layer) == '') {
            annotation += $(this).text();
          }
          else {
            annotation += $(this).attr('note-' + layer);
          }
          annotation += '">' + (noteNum) + '</figure></span>';
          $(this).prepend(annotation);
          if (noteNum > 9) {
            $(this).find('.notes-anchor').addClass('high');
          }
          /*if (layer == 'cm') {
            var test = $(this).attr('note-cm');
            if (test.indexOf('SERVICE:') > -1) {
              //console.log(test);
              $(this).find('.notes-anchor').addClass('inverse');
            }
          }*/
          if (layer == 'ux') {
            var wide = $(this).attr('note-' + layer).length;
            if (wide > 200) {
              $(this).find('figure').addClass('wide');
            }
          }
        }
      });
    }
    else {
      var category = [];
      $('[class*=cm-]').map(function() {
        var number = $(this).attr('class');
        number = number.substr(number.length - 1)
        if (category.indexOf(number) > -1) {
          category.splice(number, 1);
        } else {
          category.push(number);
        }
      });
      console.log(category);
      for (var i = 0; i < category.length; i++) {
        var cm = 1;
        $('.cm-' + category[i]).each(function() {
          var annotation = '<span class="notes-anchor ' + layer + '"><figure data-tooltip="';
          if ($(this).attr('note-' + layer) == '') {
            annotation += $(this)/*.clone().children().remove().end()*/.text();
          }
          else {
            annotation += $(this).attr('note-' + layer);
          }
          annotation += '">' + category[i] + '.' + cm + '</figure></span>';
          $(this).prepend(annotation);

          var test = $(this).attr('note-cm');
          if (test.indexOf('SERVICE:') > -1) {
            //console.log(test);
            $(this).find('.notes-anchor').addClass('inverse');
          }

          cm++;
        });
      }
    }
      $('.notes-anchor').addClass('hide');
      $('#configLayer').addClass('hide');
    }

    $('#cmBox').on('click', function() {
      $('.notes-anchor.cm').toggleClass('hide');
      $('.note-holder.cm').toggleClass('hide');
    });
    $('#uxBox').on('click', function() {
      $('.ux').toggleClass('hide');
      if ($('.notes-anchor figure').attr('data-tooltip').length > 200) {
        $(this).addClass('wide');
      }
    });
    $('#uaBox').on('click', function() {
      $('.ua').toggleClass('hide');
      if ($('.colorbg').attr('style').indexOf('rgba(231, 67, 31,') > -1) {
        $('.colorbg').css('background', '#fff');
      } else {
        $('.colorbg').css('background', 'rgba(231, 67, 31, 0.3)');
      }
    });
    $('#waBox').on('click', function() {
      $('.wa').toggleClass('hide');
    });
    $('#configBox').on('click', function() {
      $('.config').toggleClass('hide');
      $('#configLayer').toggleClass('hide');
    });
    $('#betaBox').on('click', function() {
      $('.beta').toggleClass('betabg');
    });
    $('#futureBox').on('click', function() {
      $('.future').toggleClass('hide');
    });

    //hover highlight
    $('.note-anchor figure').hover(function() {
      $('.note-holder').toggleClass('highlight');
      var number = $(this).text();
      $('.note-count figure').each(function() {
        if (this.text() == number) {
          $(this).toggleClass('highlight');
        }
      });
    });

    // Function defined for right panelD
    // Start in closed position
    function OverlayControlright() {
      $('.notes-anchor, .notes-tab').click(function(e) {
        e.preventDefault();

        if(!$('.notes-tab').hasClass('open')) {
             $('.notes').animate({right:'0px'}, 250);
             $('.notes-tab').animate({right:'250px'}, 250);
             $('.notes-tab').addClass('open');
        } else {
             $('.notes').animate({right:'-300px'}, 250);
             $('.notes-tab').animate({right:'0px'}, 250);
             $('.notes-tab').removeClass('open');
            }
        });
    }

    // Function defined for bottom panel
    // Start in closed position
    function OverlayControldown() {
      $(".notes-anchor, .notes-tab").click(function(e) {
        e.preventDefault();
        if(!$('.notes-tab').hasClass('open')) {
             $(".notes").animate({bottom:'0px'}, 250);
             $(".notes-tab").animate({bottom:'310px'}, 250);
             $(".notes-tab").addClass('open');
        } else {
            $(".notes").animate({bottom:'-300px'}, 250);
             $(".notes-tab").animate({bottom:'10px'}, 250);
             $('.notes-tab').removeClass('open');
            }
        });
    }

    // Resetting CSS on resize so things don't get janky
    // Invoking controls on page resize
    $(window).on('resize', function () {
        $('.notes-tab').removeClass('open');
        $('.notes-anchor, .notes-tab').unbind('click');
      if ($(window).width() > 700)
      {
        $(".notes").css({right:'-300px'});
        $(".notes-tab").css({right:'10px'});
        $('.notes').removeClass('bottom');
        OverlayControlright();
      } else {
        $(".notes").css({bottom:'-300px'});
        $(".notes-tab").css({bottom:'10px'});
        $('.notes').addClass('bottom');
        OverlayControldown();
      }
    });

    // Invoking controls on load
    if ($(window).width() > 700) {
      OverlayControlright();
    } else {
      $('.notes').addClass('bottom');
      OverlayControldown();
    }

    // if no notes exist, show the message
    if ($('.note-body').size() === 0) {
        $('.notes').append('<p>' + 'There are no notes yet. I guess you can go home early today!' + '</p>');
    }

// Scrollable hack found at http://jsfiddle.net/TroyAlford/4wrxq/1/
    $('.Scrollable').on('DOMMouseScroll mousewheel', function(ev) {
        var $this = $(this),
            scrollTop = this.scrollTop,
            scrollHeight = this.scrollHeight,
            height = $this.height(),
            delta = ev.originalEvent.wheelDelta,
            up = delta > 0;

        var prevent = function() {
            ev.stopPropagation();
            ev.preventDefault();
            ev.returnValue = false;
            return false;
        };

        if (!up && -delta > scrollHeight - height - scrollTop) {
            // Scrolling down, but this will take us past the bottom.
            $this.scrollTop(scrollHeight);
            return prevent();
        } else if (up && delta > scrollTop) {
            // Scrolling up, but this will take us past the top.
            $this.scrollTop(0);
            return prevent();
        }
    });
});
