import data from '../data.json' assert {type: 'json'};

(function () {
    const list = document.querySelector('.summary__list');

    data.forEach(item => {
        let li = document.createElement('LI'),
            icon = document.createElement('IMG'),
            name = document.createElement('P'),
            score = document.createElement('P'),
            percent = document.createElement('SPAN');

        li.className = `list__item list__item--${item.category.toLocaleLowerCase()}`;
        icon.className = `item__icon`;
        name.className = `item__name`;
        score.className = `item__score`;
        percent.className = `item__percent`;

        icon.setAttribute('src', item.icon);
        name.textContent = item.category;
        score.textContent = `${item.score} `;
        percent.textContent = `/ 100`;

        score.appendChild(percent);

        li.append(icon, name, score);

        list.appendChild(li);
    });

})();