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
  var a1 = "<a href='https://ryanhausen.github.io/galaxy-classification/'>\n";
  a1 += "Morphological Galaxy Classification Using Deep Learning\n";
  a1 += "</a>\n";

  var a2 = "<a href='https://ryanhausen.github.io/nn-ideas/'>\n";
  a2 += "Experimenting with Neural Nets\n";
  a2 += "</a>\n";

  return [a1, a2];
}
