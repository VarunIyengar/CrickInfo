import React, { useState } from 'react'
import {Link} from "react-router-dom"

export const Header = (props) => {
  const [player_name, setplayer_name] = useState("");
  
  const submit=(e)=>{
    e.preventDefault();
    var searchlink = document.getElementById('searchlink');
    props.search(player_name,searchlink);
    setplayer_name("");
  }
    return (
        <div>
            
            <nav className = "bg-blue text-light">
                <div className = "container-fluid">
                    
                    <ul className = " nav-list list-unstyled">
                        <li className = "nav-item">
                    <Link className = " navbar-brand my-auto text-light">CrickInfo</Link>
                    </li>
                        <li className = "nav-item">
                            <Link className = "nav-link text-white " aria-current="page" to = "/">  Home </Link>
                        </li>
                        <li className = "nav-item">
                            <Link className = "nav-link text-white " to = "/about">  about Us </Link>
                        </li>
                        <li className = "nav-item">
                            <Link className = "nav-link text-light" to = "/AddPlayer"> Add Player </Link>
                        </li>
                        <form className="flex-left py-3">
                          <li className = "nav-item">
                          <Link id = "searchlink" to = "/Search"></Link>
        </li>
                            
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value = {player_name} onChange = {(e)=>setplayer_name(e.target.value)}/>
       
        <button className="btn btn-outline-success text-white"  type="submit"  onClick={submit} >Search</button>
        
      </form>
                    </ul>
                    
                </div>
            </nav>
            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link> class="navbar-brand" to="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="nav-link active me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link> class="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link> class="nav-link" to="#">Link</Link>
        </li>
        <li class="nav-item dropdown">
          <Link> class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link> class="dropdown-item" to="#">action</Link></li>
            <li><Link> class="dropdown-item" to="#">another action</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link> class="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link> class="nav-link disabled">Disabled</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> 
    Virat Kohli (born 5 November 1988) is an Indian cricketer and the captain of India national cricket team in Tests. He plays for Delhi in domestic cricket and Royal Challengers Bangalore in the Indian Premier League as a right-handed batsman. Kohli is often considered as one of the best cricket players in the world and widely regarded as one of the greatest cricket players of all time. Kohli made his Test debut in 2011. He reached the number one spot in the ICC rankings for ODI batsmen for the first time in 2013.He has won Man of the Tournament twice at the ICC World Twenty20 (in 2014 and 2016). He also holds the world record of being the fastest to 23,000 international runs. */}

{/* Rohit Gurunath Sharma (born 30 April 1987) is an Indian international cricketer who captains the India national cricket team in ODIs and T20Is. He vice-captains the Indian cricket team in Test cricket. He also plays for Mumbai in domestic cricket and captains Mumbai Indians in the Indian Premier League as a right-handed batsman and an occasional right-arm off break bowler. Outside cricket, Sharma is an active supporter of animal welfare campaigns. He is the official Rhino Ambassador for WWF-India and is a member of People for the Ethical Treatment of Animals (PETA). He has worked with PETA in its campaign to raise awareness of the plight of homeless cats and dogs in India. */}


{/* Sachin Ramesh Tendulkar (born 24 April 1973) is a former international cricketer of India who served as captain of the Indian national team. He is regarded as one of the greatest batsmen in the history of cricket.He is the highest run scorer of all time in international cricket, and the only player to have scored one hundred international centuries, the first batsman to score a double century in a One Day International (ODI), the holder of the record for the most runs in both Test and ODI cricket, and the only player to complete more than 30,000 runs in international cricket.In 2013, he was the only Indian cricketer included in an all-time Test World XI named to mark the 150th anniversary of Wisden Cricketers' Almanack. He is affectionately known as "Little Master" or "Master Blaster". */}
{/* Rahul Sharad Dravid ( born 11 January 1973) is a former Indian cricketer and captain of the Indian national team, currently serving as its head coach. Prior to his appointment to the senior men's national team, Dravid was the Head of Cricket at the National Cricket Academy (NCA), and the head coach of the India Under-19 and India A teams. Under his tutelage, the under-19 team finished runners up at the 2016 U-19 Cricket World Cup and won the 2018 U-19 Cricket World Cup. Known for his sound batting technique, Dravid scored 24,177 runs in international cricket and is widely regarded as one of the greatest batsmen in the history of cricket.He is colloquially known as Mr. Dependable and often referred to as The Wall. */}
{/* Ricky Ponting had all the ingredients of a typical Australian - tough as nails, aggressive, vocal and above all, mentally powerful to tackle pressure situations. The best quality about Ponting was his burning desire to win matches and at times, the desperation did bring up infamous incidents but what shone through his career was the sheer desire to be victorious. Three World Cup titles including two consecutive ones as captain to go with a couple of Champions Trophy titles and the no.1 Test ranking shows that he had seen it all in the international arena. Adding to all this was of course his free-wheeling strokeplay as a batsman, amassing runs at will and destroying opposition bowlers. The only title that eluded him was the World T20 but one could argue that the format came around the time that Ponting was in his final years.A young and raw Ricky Ponting burst into the international arena in the year 1995 as he debuted in both the formats. He had garnered a big reputation in the domestic circuit for having the ability to produce the big runs and most people were in awe of his skill set. However, disciplinary issues were equally prevalent with Ricky back then and it did hound him in the initial years of his international career as well. But, he managed to pick himself up and from the 1998-99 season, started to mature steadily into a top flight batsman. Having started out as a middle order batsman, he also started to take ownership of the pivotal number three slot which he would make iconic in the years to follow */}

{/* Arguably New Zealand's finest batsman since the legendary Martin Crowe, Kane Williamson had been a wonder kid since his teenage days. His exceptional talent included the rare Non-Asian skill to play quality spin apart from being adept against fast bowling. It would be fair to say the Williamson family boasted of sports freak all around. While his father had played cricket at certain age groups, his mother was a fine basketball player and his sisters excelled in volleyball. It was therefore not a surprise when Kane took a liking to sports and it happened to be cricket. Since his Under-19 days, it was expected that Williamson would one day become the backbone of New Zealand's batting apart from being their captain. His leaderships skills were in abundance, just like his batting. Along expected lines, the year 2010 saw Williamson donning the Kiwi colors, making his international debut in Sri Lanka for the tri-series that also featured India. His white-ball cricket started in tragedy with ducks in his first two innings but his class couldn't be hidden for long as he stroked a ton against Bangladesh in Dhaka later that year. The Test call up came and it was for a challenging trip to India but Williamson made a massive statement but racking up a century on debut. The following years saw Williamson scoring runs albeit not at the highly consistent levels that one expected from him. That changed in 2014 though during ODI home series against India when he also broke a heap of records. With fifty plus scores in all five games, he became only the second batsman in ODI history (after Yasir Hameed) to achieve this feat. He also became the fourth New Zealand player to hit five or more consecutive fifty plus scores in ODIs. His five fifty plus scores are also the most by a NZ batsman in a bilateral series. */}

{/* The best Test batsman at present, Steven Smith's career redemption is a story for the ages. Having made his name initially as a potential leg-spinner who could bat a bit, there was immense criticism, even among those in Australia over the quality of his selection during his early days in international cricket. However, they were made to eat humble pie as the enigmatic man from New South Wales turned things around in sensational fashion to feature among the best batsmen in the world. */}

{/* Joe Root, born on 30th December 1990, hails from a rich cricketing background. His grandfather captained Rotherham CC in the Yorkshire League for several seasons whilst his younger brother, Billy, is a regular with Glamorgan. In addition to being awarded a Daily Telegraph scholarship at the 2005 Bunbury festival, Root also attracted cricket scholarships at Workshop College, the school he attended, and Yorkshire Cricket academy. The gifted batsman celebrated his Yorkshire second Team debut in July 2007 with a fifty. */}

{/* Gautam Gambhir (born 14 October 1981) is an Indian politician and former cricketer, who has played all formats of the game. He is a current member of the Lok Sabha since 2019. As a cricketer, he was a left-handed opening batsman who played domestic cricket for Delhi, and captained Kolkata Knight Riders and Delhi Daredevils in the Indian Premier League (IPL). He made his One Day International (ODI) debut against Bangladesh in 2003, and played his first Test the following year against Australia. He captained the Indian team in six ODIs from late 2010 to late 2011 with India winning all six matches. He played an integral part in India's wins in the finals of both the 2007 World Twenty20 (75 runs from 54 balls) and the 2011 Cricket World Cup (97 from 122). Under Gambhir's captaincy, Kolkata Knight Riders won their first IPL title in 2012 and went on to win the title again in 2014. Gambhir was the only Indian and one of four international cricketers to have scored hundreds in five consecutive Test matches. He is the only Indian batsman to have scored more than 300 runs in four consecutive Test series. As of April 2018, he is the sixth highest run-scorer for India in Twenty20 Internationals. He was conferred the Arjuna Award, India's second highest sporting award, in the year 2008 by the President of India. In 2009, he was the number one ranked batsman in ICC Test rankings. The same year, he was the recipient of the ICC Test Player of the Year award. In 2019, he received the Padma Shri from the Government of India, the fourth highest civilian award in India. */}

{/* As a starry-eyed youngster from Najafgarh, where his family ran a flour mill, Sehwag grew up, like many others from his generation, wanting to be Sachin Tendulkar. Indeed, when he scored his first one-day hundred, filling up for his injured idol against New Zealand in Sri Lanka, he could have been mistaken for him: there was the same back-foot punch on the off side, the minimalistic straight drive and the wristy whip to the leg. And on his Test debut, on a fiery pitch in Bloemfontein, he matched the master stroke for stroke as they both blazed away to hundreds. But soon he emerged his own man, and not long after Tendulkar was playing a supporting, and somewhat calming, hand as Sehwag romped away to a triple-hundred, the first by an Indian, in Multan, bringing it up with a six. Two Tests ago, he had been dismissed trying the same stroke five short of what would have been his first Test double-hundred. His uncomplicated approach - batting is all about scoring as many runs as quickly as possible - belies a sharp and street-smart cricket mind. He has a keen grasp of his own, and his opponents', strengths and weaknesses and exploits them in a forensic manner. What appears risky to many, is merely an opportunity for him, and his lack of footwork, which does get him in trouble against the moving ball, is mostly an advantage, for it creates space for his brilliant handwork. Few batsmen have hit the ball harder square on the off side, and fewer still have hit them as frequently. And the sight of a spinner brings the savage out in him: and for many spectacular assaults against the world's leading spinners, there have numerous outrageous dismissals against the not-so-reputed ones. */}

{/* Arguably among India's finest T20 batsmen, Suresh Raina stormed into the international scene as a teenage prodigy during the Greg Chappell regime. Typical left-hander's elegance, power game and a fine temperament were the hallmark of Raina the batsman and he exhibited it beautifully during his ODI debut in 2005. After a stupendous start though, his form dipped over the next year and that was followed by a serious injury which meant that the career had hit a roadblock towards the latter part of 2007. The talent was obvious but Raina needed to translate that on the field as well. That's when the IPL Caravan debuted in 2008. Raina was picked by the Chennai franchise for a fairly decent price and he put on a stellar show during the first season of the IPL - the result of which was a comeback to the national side soon after. Thereafter, Raina cemented his spot as a capable finisher for the side, often chipping in with priceless cameos apart from getting the sizable knocks whenever the opportunities came by. With India having a heavy top and middle order, Raina's role mostly was to provide the final flourish to the innings. The numbers don't exactly reveal how valuable he was during the 2008-2011 phase which was easily among the finest stages of Team India's ODI history, capped with World Cup glory as well. */}

{/* It was a kind of headline that catches Indian eyes. First there was a mention of the word Tendulkar. ‘Teenage prodigy knocks over Tendulkar for a duck’. There was a whisper of a 19-year-old, who had worked out Sachin Tendulkar in the domestic circuit and bowled him out for his first ever duck in domestic first-class cricket. Bhuvneshwar Kumar, born in Meerut, the manufacturing home of the SG ball, shot into the limelight when he debuted on Christmas Day in 2012, making the white Kookaburra zip all around the Pakistani bats at the Chinnaswamy Stadium in Bengaluru. A demonstration of nagging swing bowling in the shortest format of the game in batting-friendly conditions was a fine way to make the world sit up and take notice of this precocious talent. Having made the usually unresponsive white Kookaburra talk in a high-pressure game against Pakistan, and with a dearth of quality fast-bowling in the country, Bhuvneshwar was given the nod by the selectors for the Chennai Test against Australia in 2013. Bhuvneshwar was selected in the ODI squad for the Champions Trophy in 2013. He was later selected for the tri-nation tournament where he claimed career best figures of 4-8 against Sri Lanka. He was awarded the Man of the Series, having finished the series with the maximum number of wickets. */}

        </div>
   
        
    )
}
