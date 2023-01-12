// 2) створити массив обєктів і на сонові нього вивести на сторінку лінки в яких знаходяться зображення і alt для зображення, стилізувати задовільно, кількість обєктів в массиві більше 3
//     let images = [
//         {
//             imgPath:'img/image.png',
//             alt:'png image'
//             href:'https://img.com/60903073638.jpg'
//         }
//         ...
//     ]

window.onload = () => {
    let images = [
        {
            alt: 'David de Gea',
            href: 'https://assets.manutd.com/AssetPicker/images/0/0/16/247/1111858/Player_Profile_Thumbnail_Mens_2223_Kit_DDG1658217243086_large.jpg'
        },
        {
            alt: 'Lisandro Martinez',
            href: 'https://assets.manutd.com/AssetPicker/images/0/0/17/3/1114943/LM_Player_Profile_Thumbnail1658929466190.jpg'
        },
        {
            alt: 'Raphael Varane',
            href: 'https://assets.manutd.com/AssetPicker/images/0/0/16/247/1111870/Player_Profile_Thumbnail_Mens_2223_Kit_Varane1658219562690_large.jpg'
        },
        {
            alt: 'Diogo Dalot',
            href: 'https://assets.manutd.com/AssetPicker/images/0/0/16/247/1111857/Player_Profile_Thumbnail_Mens_2223_Kit_Dalot1658217740039_thumb.jpg'
        },
        {
            alt: 'Luke Shaw',
            href: 'https://assets.manutd.com/AssetPicker/images/0/0/16/247/1111868/Player_Profile_Thumbnail_Mens_2223_Kit_Shaw1658219272093_small.jpg'
        },
        {
            alt: 'Christian Eriksen',
            href: 'https://assets.manutd.com/AssetPicker/images/0/0/17/3/1114946/CE_Player_Profile_Thumbnail1658929113165.jpg'
        },
        {
            alt: 'Casemiro',
            href: 'https://assets.manutd.com/AssetPicker/images/0/0/17/89/1137010/C_Player_Profile_Thumbnail_copy1661414106219_large.jpg'
        },
        {
            alt: 'Marcus Rashford',
            href: 'https://assets.manutd.com/AssetPicker/images/0/0/16/247/1111866/Player_Profile_Thumbnail_Mens_2223_Kit_Rashford1658219368805_thumb.jpg'
        },
        {
            alt: 'Bruno Fernandes',
            href: 'https://assets.manutd.com/AssetPicker/images/0/0/16/247/1111856/Player_Profile_Thumbnail_Mens_2223_Kit_bruno1658216905336.jpg'
        },
        {
            alt: 'Antony',
            href: 'https://assets.manutd.com/AssetPicker/images/0/0/17/101/1139991/Antony_thumbnail_grid1662127295056.jpg'
        },
        {
            alt: 'Anthony Martial',
            href: 'https://assets.manutd.com/AssetPicker/images/0/0/17/227/1172436/Martial_PP_Thumbnail1670239308056.jpg'
        }
    ]

    const list = document.querySelector("ul");

    images.forEach((image) => {
        const link = document.createElement("a");
        link.innerText = image.alt;
        link.setAttribute("href", image.href);
        link.setAttribute("target", "_blank");
        list.appendChild(document.createElement("li"));
        list.lastChild.appendChild(link);
    })
}