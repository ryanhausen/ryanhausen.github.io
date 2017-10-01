function terminalHTML(title, items){
  var close_div = "</div>\n";

  var terminal = "<div class='terminal'>\n";
  terminal += "<div class='window'>\n";
  terminal += "<div class='head'>\n";
  terminal += "<a href='#' class='btn'>&#10005;</a>\n";
  terminal += "<a href='#' class='btn stnd'>&#9472;</a>\n";
  terminal += "<span>ryanhausen@" + title + ":~</span>";
  terminal += close_div;
  terminal += "<div class='term'>\n";
  title = "<span style='color:yellow'>"+ title + "</span>";
  terminal += "ryanhausen@" + title + ":~$ ls<br/>\n";
  terminal += "<ul>\n";

  for (i = 0; i < items.length; i++){
    terminal += "<li>\n";
    terminal += items[i];
    terminal += "</li>\n"
  }

  terminal += "</ul>\n";
  terminal += "<div class='cursor'>&#9610;</div>\n";
  terminal += close_div + close_div + close_div;

  return terminal;
}

function terminalResearch(){
  var a1 = "<a href='https://ryanhausen.github.io/galaxy-classification/' target='_blank'>\n";
  a1 += "Morphological Galaxy Classification Using Deep Learning\n";
  a1 += "</a>\n";

  var a2 = "<a href='https://ryanhausen.github.io/nn-ideas/' target='_blank'>\n";
  a2 += "Experimenting with Neural Nets\n";
  a2 += "</a>\n";

  return [a1, a2];
}

function terminalAboutMe(){
  var a1 = "<p>PhD student in Computer Science</p>\n";
  var a2 = "<p>Working on Neural Networks and Deep Learning</p>\n";
  var a3 = "<p>Click the icons to the left to learn about my teaching and research, and to contact me</p>\n";

  return [a1, a2, a3];
}

function terminalTeaching(){
  var a1 = "<a href='https://ryanhausen.github.io/cmps11-f17/' target='_blank'>TA CMPS11 Fall 2017</a>";

  return [a1];
}
