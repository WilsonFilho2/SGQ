trs = document.getElementsByTagName('tr');

for (i = 0; i < trs.length; i++) {
    if (i % 2 === 0) {
        trs[i].style.backgroundColor = "#dddddd";
    };
};
