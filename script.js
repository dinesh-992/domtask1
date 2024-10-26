/*Task 1: Create a Paragraph with Text
•Objective: Create a <p> element and add it to the document with the text “Welcome to JavaScript DOM manipulation”.
•Instructions:
1.Use createElement to create a <p> element.
2.Set the text using innerText.
3.Append the paragraph to the body of the document.
*/
p=document.createElement("p")
p.innerText="Welcome to javascript"
p.className='p'
document.body.append(p)

/*
Task 2: Create a Div with Two Headings
•Objective: Create a <div> that contains two headings, <h1> and <h2>, with different text.
•Instructions:
1.Use createElement to create a <div>.
2.Inside the div, create an <h1> with the text “Main Heading” and an <h2> with the text “Subheading”.
3.Append the headings to the div.
4.Append the div to the body.
*/

div=document.createElement("div")
div.className='div'
document.body.append(div)
h1=document.createElement('h1')
h1.className="h1"
h1.innerText="Main heading"
h2=document.createElement("h2")
h2.className="h2"
h2.innerText="Sub heading"

div.append(h1,h2)

/*
Task 3: Create an Unordered List with Three Items
•Objective: Create an unordered list (<ul>) with three list items (<li>), each containing different text.
•Instructions:
1.Use createElement to create a <ul>.
2.Create three list items and add them to the unordered list.
3.Append the list to the body.
*/
ul=document.createElement("ul")
ul.innerText="Hello"
document.body.append(ul)
li1=document.createElement("li")
li1.innerText="hello - 1"
li2=document.createElement("li")
li2.innerText="hello - 2"
li3=document.createElement("li")
li3.innerText="hello - 3"
ul.append(li1,li2,li3)


/*
Task 4: Create a Table with 2 Rows and 2 Columns
•Objective: Create a table with two rows and two columns, and fill each cell with different text.
•Instructions:
1.Use createElement to create a <table>.
2.Create two rows, each with two columns.
3.Fill the cells with text and append the table to the body.
*/
table=document.createElement("table")
table.className="table"
table.style='border:2px solid black'

document.body.append(table)
tr=document.createElement('tr')
table.append(tr)
th1=document.createElement("th")
th1.innerText="S.no"
th2=document.createElement("th")
th2.innerText="Name"
th3=document.createElement("th")
th3.innerText="Gender"
tr.append(th1,th2,th3)

tr1=document.createElement("tr")
table.append(tr1)
td1=document.createElement("td")
td1.innerText="1"
td2=document.createElement("td")
td2.innerText="Dinesh"
td3=document.createElement("td")
td3.innerText="Male"
tr1.append(td1,td2,td3)

tr2=document.createElement("tr")
table.append(tr2)
td1=document.createElement("td")
td1.innerText="2"
td2=document.createElement("td")
td2.innerText="Akhikesh"
td3=document.createElement("td")
td3.innerText="Male"
tr2.append(td1,td2,td3)

tr3=document.createElement("tr")
table.append(tr3)
td1=document.createElement("td")
td1.innerText="3"
td2=document.createElement("td")
td2.innerText="Gowtham"
td3=document.createElement("td")
td3.innerText="Male"
tr3.append(td1,td2,td3)

/*
Task 5: Create a Div with an Image and Caption
•Objective: Create a div containing an image and a caption below it.
•Instructions:
1.Use createElement to create a <div>, <img>, and a <p> for the caption.
2.Set the src of the image and text of the caption.
3.Append the image and caption to the div, then append the div to the body.
*/

div=document.createElement('div')
div.className="div2"
document.body.append(div)
image=document.createElement("img")
image.src='./dhoni.jpg'
image.style='padding-left:100px'
div.append(image)
p=document.createElement("p")
p.innerText='Dhoni pic'
div.append(p)
/*
Task 6: Create a Nested Ordered List
•Objective: Create an ordered list (<ol>) where the second item contains a nested ordered list with two items.
•Instructions:
1.Use createElement to create the main <ol> and list items.
2.Add a nested <ol> to the second list item.
3.Append the main and nested lists to the body.
*/
ol=document.createElement("ol")
document.body.append(ol)
li1=document.createElement("li")
li1.innerText='chennai super kings'
ol.append(li1)
li2=document.createElement("li")
li2.innerText="New south wales"
ol.append(li2)
ol2=document.createElement("ol")
li2.append(ol2)
li3=document.createElement("li")
li3.innerText='indian premier league'
li4=document.createElement('li')
li4.innerText='big bash league'
ol2.append(li3,li4)

/*
Task 7: Create a Section with a Heading and Paragraph
•Objective: Create a section that contains a heading and a paragraph with different text.
•Instructions:
1.Use createElement to create a <section>, <h2>, and <p>.
2.Set the text for the heading and paragraph.
3.Append them to the section, and then append the section to the body.
*/

section=document.createElement('section')
section.className='section'
document.body.append(section)
h2=document.createElement("h2")
h2.innerText='Ms Dhoni'
h2.className='don'
section.append(h2)
p=document.createElement("p")
p.innerText='Thala for a reason'
p.className='p'
section.append(p)
p1=document.createElement("p")
p1.className='p1'
p1.innerText='Mahendra Singh Dhoni  born 7 July 1981) is an Indian professional cricketer who plays as a right-handed batter and a wicket-keeper. Widely regarded as one of the most prolific wicket-keeper batsmen and captains, he represented the Indian cricket team and was the captain of the side in limited overs formats from 2007 to 2017 and in test cricket from 2008 to 2014. '
section.append(p1)

/*
Task 8: Create a Description List
•Objective: Create a description list (<dl>) with three terms and their corresponding descriptions.
•Instructions:
1.Use createElement to create a <dl>.
2.Create three pairs of <dt> (term) and <dd> (description) elements.
3.Append the terms and descriptions to the description list, and then append the list to the body.*/

dl=document.createElement('dl')
document.body.append(dl)
dt1=document.createElement('dt')
dt1.innerText='Chennai super kings'
dl.append(dt1)
dd1=document.createElement("dd")
dd1.innerText='Ex-Captain - MS.DHONI'
dt1.append(dd1)
dt1=document.createElement('dt')
dt1.innerText='Mumbai Indians'
dl.append(dt1)
dd1=document.createElement("dd")
dd1.innerText='Ex-Captain - ROHIT SHARMA'
dt1.append(dd1)
dt1=document.createElement('dt')
dt1.innerText='Royal Challengers Bengaluru'
dl.append(dt1)
dd1=document.createElement("dd")
dd1.innerText='Ex-Captain - VIRAT KOHLI'
dt1.append(dd1)

/*
Task 9: Create a Blockquote Inside a Div
•Objective: Create a div that contains a blockquote (<blockquote>) with some text.
•Instructions:
1.Use createElement to create a <div> and <blockquote>.
2.Set the text inside the blockquote.
3.Append the blockquote to the div, and append the div to the body.
*/

divv=document.createElement('div')
divv.className='divv'
document.body.append(divv)
block=document.createElement('blockquote')
divv.append(block)
p2=document.createElement('p')
p2.innerText=`తాత వస్తాడే అధరగొట్టి పొతాడే
బెదరగొట్టి పొతాడే…చెడగొట్టి పొతాడే

తాట తీసిపోతాడే…దుమ్ము ధూళిపి పోతాడే..
వణుకు పుట్టి చస్తారే..
అవ్వో తాల్ తాల్ తేల్ల జుట్టు తిక్కలోడప్పా..`
block.append(p2)
p3=document.createElement("p")
p3.innerText='--Bharateeyudu tata song lyrics'
block.append(p3)

/*
Task 10: Create a Div with Multiple Paragraphs
•Objective: Create a div containing three different paragraphs (<p>), each with different text.
•Instructions:
1.Use createElement to create a <div> and three <p> elements.
2.Set the text for each paragraph.
3.Append all paragraphs to the div, then append the div to the body.
*/
maindiv=document.createElement("div")
maindiv.className='Maindiv'
document.body.append(maindiv)
p1=document.createElement('p')
p1.className='p1'
p1.innerText=`The India men's national cricket team represents India in men's international cricket. It is governed by the Board of Control for Cricket in India (BCCI), and is a Full Member of the International Cricket Council (ICC) with Test, One Day International (ODI) and Twenty20 International (T20I) status. India are the current Asian Champions and Twenty20 World Champions.[12]

The team has played 582 Test matches, winning 180, losing 179, 222 draw and 1 tie. As of August 2024, India is ranked second in the ICC Test Championship on 120 rating points. India have played in each World Test Championship final, finishing runners-up in both (2021 and 2023). `
maindiv.append(p1)
p2=document.createElement("p")
p2.className='p1'
p2.innerText=`The Australia men's national cricket team represents Australia in men's international cricket. It is the joint oldest team in Test cricket history, playing in the first ever Test match in 1877;[9] the team also plays One-Day International (ODI) and Twenty20 International (T20I) cricket, participating in both the first ODI, against England in the 1970–71 season[10] and the first T20I, against New Zealand in the 2004–05 season,[11] winning both games. The team draws its players from teams playing in the Australian domestic competitions – the Sheffield Shield, the Australian domestic limited-overs cricket tournament and the Big Bash League. Australia are the current ICC World Test Championship and ICC Cricket World Cup champions. They are regarded as the most successful cricket team in the history of cricket. `
maindiv.append(p2)
p3=document.createElement("p")
p3.className='p1'
p3.innerText=`The New Zealand national cricket team represents New Zealand in men's international cricket. Nicknamed the Black Caps (Māori: Pōtae Pango),[13] they played their first Test in 1930 against England in Christchurch, becoming the fifth country to play Test cricket. From 1930 New Zealand had to wait until 1956, more than 26 years, for its first Test victory, against the West Indies at Eden Park in Auckland.[14] They played their first ODI in the 1972–73 season against Pakistan in Christchurch. New Zealand are the inaugural champions of WTC which they won in 2021 and they have also won ICC CT in 2000. They have played in the CWC final twice and the T20 WC final once. `
maindiv.append(p3)